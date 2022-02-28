
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';



export const hasPermissions = async (os,permissionType:string) => {
    try {
        const result = await checkAndRequestPermission(permissionType,os )
        if (result === RESULTS.GRANTED || result === RESULTS.LIMITED) {
            return true
        } else {
            console.log(result)
            return false
        }
    } catch (error) {
        console.error(error)
    }
}

export const checkAndRequestPermission = async (permissionType: string, os: string) => {
    try {


        let permission: any
        console.log(os)
        switch (os) {
            case ('android'):
                switch (permissionType) {
                    case ('Camera'):
                        permission = PERMISSIONS.ANDROID.CAMERA
                        break
                    case ('Gallery'):
                        permission = PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
                        break
                    default:
                        throw Error('Wrong permissionType value in permissionHelper')
                }
                break
            case ('ios'):
                switch (permissionType) {
                    case ('Camera'):
                        permission = PERMISSIONS.IOS.CAMERA
                        break
                    case ('Gallery'):
                        permission = PERMISSIONS.IOS.PHOTO_LIBRARY
                        break
                    default:
                        throw Error('Wrong permissionType value in permissionHelper')
                }
                break
            default:
                throw Error('Wrong os Value in permissionHelper')
        }


        const checkResult = await check(permission)
        switch (checkResult) {

            case RESULTS.GRANTED:
            case RESULTS.LIMITED:
                console.log('The permission is granted (or limited');
                return checkResult
            default:
                return requestPermission(permission)
        }
    } catch (error) {

    }
}

const requestPermission = async (permission) => {
    try {
        const requestResult = await request(permission)
        return requestResult
    } catch (error) {
        console.error(error)
    }
}

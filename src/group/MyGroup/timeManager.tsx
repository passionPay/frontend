export const getFormattedTime = (time:number)=>{
    const {hour,min,sec} = getParsedTime(time)
    const formattedTime = `${hour}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
    return formattedTime;
}
export const getParsedTime = (time:number)=>{
    const hour = Math.floor(time / 1000 / 60 / 60)
    const min = Math.floor(time / 1000 / 60 % 60)
    const sec = Math.floor(time / 1000 % 60)
    return {hour,min,sec}
}

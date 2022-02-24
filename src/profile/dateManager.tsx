import moment from 'moment'




type  dateObject = {
    year : number,
    month: number,
    date: number
} | {
    year : number,
    month:number,
}


const isLeapYear = (year:number)  => {
    return (!(year%400) || ((year%100) && !(year%4)))
  }


const  getWeekCountFromDate = (param : dateObject) : number=>{
    
    param.month-=1 //moment use 0 based index for month
    const Date =  moment(param)
    const FirstDate = Date.startOf('month')
    const startDay = FirstDate.day() === 0 ? 7 : FirstDate.day()

    if (startDay>=5) return 4 //always has 4 week if the month starts after Thursday

    const monthBlockCount = (startDay-1+Date.daysInMonth()) //from Monday on first week to last day of the month
    let weekCount = Math.floor(monthBlockCount/7) // full row count from Monday on first week
    if (monthBlockCount>=32) weekCount +=1

    return weekCount
    
     
}

const getFirstDateFromWeekValue = (param : dateObject , weekValue:number) : dateObject=>{
    param.month-=1 //moment use 0 based index for month
    const Date =  moment(param)
    const FirstDate = Date.startOf('month')
    const startDay = FirstDate.day() === 0 ? 7 : FirstDate.day()

    let firstDateOfFirstWeek:number
    if (startDay>=5) firstDateOfFirstWeek=9-startDay
    else firstDateOfFirstWeek=2-startDay // -n means n day from last day of last month

    const resultDate = firstDateOfFirstWeek + (weekValue-1)*7

    
    
    let result : dateObject
    if (resultDate<=0) {
        const resultMoment = FirstDate.subtract(startDay-1,'days')
        result = {
            date:resultMoment.date(),
            month:resultMoment.month()+1,
            year:resultMoment.year()
        }
    }else{
        param.month+=1
        result = {date:resultDate,...param}
    }

    return result

}

const getTodayWeekValue=() =>{
    // const todayMoment = moment('2020-11-01')
    const todayMoment = moment()
    const todayDate = todayMoment.date()
    const FirstDateMoment = todayMoment.clone().startOf('month')
    const startDay = FirstDateMoment.day() === 0 ? 7 : FirstDateMoment.day()
    const LastDateMoment = todayMoment.clone().endOf('month')
    const lastDay = LastDateMoment.day() === 0 ? 7 : LastDateMoment.day()

    let firstDateOfFirstWeek:number
    if (startDay>=5) firstDateOfFirstWeek=9-startDay
    else firstDateOfFirstWeek=2-startDay // -n means n day from last day of last month


    const dateOffset = todayDate-firstDateOfFirstWeek
    const weekValue = Math.floor(dateOffset/7)+1

    let result = {
        weekValue:weekValue,
        year:todayMoment.year(),
        month:todayMoment.month()+1,
    }

    if (lastDay<=3 && ((LastDateMoment.date()-todayDate)<lastDay)) {
        result.month+=1
        result.weekValue=1
    }else if (startDay>=5 && (todayDate-1)<=(7-startDay)){
        result.month-=1
        if (result.month<=0){
            result.year-=1
            result.month=12
        }
        result.weekValue = getWeekCountFromDate({
            year:result.year,
            month:result.month
        })
    }
    console.log(result)

    return result

}

export {
    isLeapYear,
    getWeekCountFromDate,
    getFirstDateFromWeekValue,
    getTodayWeekValue
}

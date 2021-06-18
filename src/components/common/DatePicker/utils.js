export const getAvailableDays = (year, month) => {
    let date = new Date(year, month, 1)
    const days = new Array(42)
    let count = 1
    let weekdayNum = date.getDay()
    while (date.getMonth() === month){
        days[weekdayNum] = count
        // const weekday = weekdays[date.getDay()]
        date.setDate(date.getDate() + 1)
        count += 1
        weekdayNum += 1
    }
    return days
}
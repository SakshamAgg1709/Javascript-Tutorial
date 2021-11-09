console.log("Welcome to Tut20")

let today = new Date//current Date
console.log(today)
console.log(typeof today)

let otherDate = new Date('9-17-2005 08:54:08');// month-date-year
otherDate = new Date('June 13 1976');
otherDate = new Date('09/17/2005');
console.log(otherDate)

let a;
a = otherDate.getDate()
a = otherDate.getDay()// Starting From Sunday - Sunday-0, Monday-1, Tuesday-2, Wednesday-3, Thursday-4, Friday-5, Saturday-6
a =otherDate.getMinutes()// 0 - as no specified time is there
a =otherDate.getSeconds()// 0 - as no specified time is there
a =otherDate.getHours()// 0 - as no specified time is there
a =otherDate.getMilliseconds()// 0 - as no specified time is there
a =otherDate.getTime()// Seconds from 1 January 1970 till now
console.log(a)

otherDate.setDate(22)
otherDate.setMonth(2)
otherDate.setHours(1)
otherDate.setMinutes(2)
otherDate.setSeconds(3)
otherDate.setFullYear(2022)
console.log(otherDate)
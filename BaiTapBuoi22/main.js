// Lesson 1: Academic Performance Classification
function getStudentLevel(score){
    if(typeof score != 'number' || score <0 ||score >10){
        return "Invalid score"
    }
    if(score>=9){
        return "Excellent"
    }else if(score>=8){
        return "Very Good"
    }
    else if(score>=6.5){
        return "Good"
    }else if(score>=5){
        return "Average"
    }else{
        return "Weak"
    }
}
console.log(getStudentLevel(7));

//Lesson 2: Days in a Month Calculator
function getDaysInMonth(month){
    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31
        case 4:
        case 6:
        case 9:
        case 11:
            return 30
        case 2:
            return 28
        default:
            return "Invalid month"
    }
}
console.log(getDaysInMonth(5));

//Lesson 3: Even/Odd Check
function isEvenNumber(n){
    if(typeof n != 'number'){
        return "Invalid number"
    }
    return n%2==0 ? "Even" : "Odd"
}
console.log(isEvenNumber(35));

//Lesson 4: Movie Ticket Price Calculation
const baseTicketPrice=100
const discount=0.5
function getTicketPrice(age){
    if(typeof age != 'number' || age <0){
        return "Invalid age"
    }
    return age<13? `${baseTicketPrice*discount}k`:`${baseTicketPrice}k`
}
console.log(getTicketPrice(10));

//Lesson 5: Temperature Conversion
function toFahrenheit(celsius){
    const fahrenheit=(celsius*1.8)+32
    return fahrenheit
}
console.log(toFahrenheit(75));

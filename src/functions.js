function hello(name){
    return(`hello ${name}`);
}

function fahrenheitToCelsius(fahrenheit){
    const celsius = (fahrenheit -32) * 5/9
    return celsius;
}

function day_of_the_week (day_num){
    
    if (day_num === 1) return "Sunday";
    if (day_num === 2) return "Monday";
    if (day_num === 3) return "Tuesday";
    if (day_num === 4) return "Wednesday";
    if (day_num === 5) return "Thursday";
    if (day_num === 6) return "Friday";
    if (day_num === 7) return "Saturday";
    return "Error";
}
    
function pay_raise (status, years, salary){
    
    if (status === 'F') {
        if (years >= 10) {
            raisePercentage = 0.05; 
        } else if (years < 4) {
            raisePercentage = 0.015; 
        } else {
            raisePercentage = 0.02; 
        }
    } else if (status === 'P') {
        if (years > 10) {
            raisePercentage = 0.03; 
        } else if (years < 4) {
            raisePercentage = 0.01; 
        } else {
            raisePercentage = 0.02; 
        }
    } else {
        return salary; 
}
}

function fahrenheitToCelsius(fahrenheit){
    const celsius = (fahrenheit -32) * 5/9
    return celsius;
}
export {hello, fahrenheitToCelsius,day_of_the_week,pay_raise,}
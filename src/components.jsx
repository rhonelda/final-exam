import {fahrenheitToCelsius,day_of_the_week,pay_raise, hello} from './functions.js';

function Question1(){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}

function Question2(){
    return <section>
2. Write a function that converts from fahrenheit to celsius        
<h2>results</h2>
<p>fahrenheitToCelsius(32) == "{fahrenheitToCelsius(32)}"</p>
<p>fahrenheitToCelsius(212) == "{fahrenheitToCelsius(212)}"</p>
<p>fahrenheitToCelsius(70) == "{fahrenheitToCelsius(70)}"</p>
    </section>;
}

function Question3(){
    return <section>
3. Write a function called day_of_the_week that takes an integer as an argument and returns the name of the corresponding day of the week
<h2> results</h2>
<p>day_of_the_week(1) =="{day_of_the_week(1)}"</p>
<p>day_of_the_week(6) =="{day_of_the_week(2)}"</p>
<p>day_of_the_week(4) =="{day_of_the_week(3)}"</p>
</section>;

}

function Question4(){
    return <section>
4.Write a Function to Calculate Employee Pay Raise
 <h2>results </h2>
 <p>pay_raise('F', 2, 25000)  = "{pay_raise('F', 2, 25000)}"</p>
 <p>pay_raise('P', 12, 20000) = "{pay_raise('P', 12, 20000)}"</p>
 <p>pay_raise('F', 10, 30000) = "{pay_raise('F', 10, 30000)}"</p>
 </section>;
 
}
   
   
   
    </section>
}
export {Question1, Question2, Question3, Question4,}
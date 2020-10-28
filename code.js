// 1- BOOKS AND DVDs FEES

function calculateFee()
{
    // Late fee for book per day
    var lateFeeBook = 0.25;

    // Number of book
    var numberOfBook = prompt(" How many books did you borrow ?");

    // Convert to number
    numberOfBook = parseInt(numberOfBook);

    // Number of days late for book
    var numberDayLateBook = prompt("How many days were your books late?");

    // convert to number
    numberDayLateBook = parseInt(numberDayLateBook);

    // Fees pay for book
    var feePayForBook = numberOfBook * numberDayLateBook * lateFeeBook;


    // Late fee for DVD per day
    var lateFeeDVD = 0.50;

    // Number of DVD
    var numberOfDVD = prompt(" How many DVDs did you borrow ?");

    // Convert to number
    numberOfDVD = parseInt(numberOfDVD);

    // Number of days late for DVD
    var numberDayLateDVD = prompt("How many days were your DVDs late?");

    // convert to number
    numberDayLateDVD = parseInt(numberDayLateDVD);


    // Fees pay for DVDs
    var feePayForDVD = numberOfDVD * numberDayLateDVD * lateFeeDVD;

    // Total fee
    var totalFee = feePayForBook + feePayForDVD;

    // Display charge of late fee
    alert("Your total fee is $" + totalFee.toFixed(2))
}


// 2- PIZZA COST PER COWORKERS

function calculatePizzaCost()
{
    // Cost of basic pizza
    var costBasicPizza = 15;

    // Cost of topping
    var costOfTopping = 1.25;

    // Number of coworker
    var numberCoworker = prompt("How many coworker joint you to make the order?")

    // Convert to number
    numberCoworker = parseInt(numberCoworker);

    // Number of pizzas purchased
    var numberPizza = prompt("How many pizza did you buy?");

    // convert to number
    numberPizza = parseInt(numberPizza);

    // Number of topping chose
    var numberOfTopping = prompt(" How many topping have you chosen?");

    // Convert to number
    numberPizza = parseInt(numberPizza);

    // Total cost of the pizza order
    var totalCostPizzaOrder = (numberPizza * costBasicPizza) + (numberOfTopping * costOfTopping);

    // Cost of pizza per coworker
    var costPerCoworker = totalCostPizzaOrder / (numberCoworker +1);

    // Display the cost per coworker
    alert("Each person will pay $" + costPerCoworker.toFixed(2) )

}

let randomCountryElement = document.querySelector('#random-country')
let userAnswerElement = document.querySelector("#user-answer")
let submitButton = document.querySelector("#submit-answer")
let resultTextElement = document.querySelector('#result')


// TODO when the page loads, select an element at random from the countriesAndCodes array
// This array is defined in the countries.js file. Your browser treats all 
// JavaScript files as one big file, organized in the order of the script tags
// so countriesAndCodes is available to this file 
/*
Data from 
https://github.com/lukes/ISO-3166-Countries-with-Regional-Codes
*/
// TODO display the country's name in the randomCountryElement 
//randomCountryElement.innerHTML = randomcounty.name;
//  * read the text from the userAnswerElement 
//  * Use fetch() to make a call to the World Bank API with the country code (from countriesAndCodes)
//  * Extract the capital city from the World Bank API response
//  * Compare it to the user's answer. 
//      You can decide how correct you require the user to be. A basic solution requires 
//      the user's answer to be exactly the same as the World Bank answer. If you want 
//      to be more flexible, include and use a string similarity library such as https://github.com/hiddentao/fast-levenshtein 
//  * Display an appropriate result in the resultTextElement. 
//      For example "Correct! The capital of Germany is Berlin" or "Wrong - the capital of Germany is not G, it is Berlin"
// TODO add a click event handler to the submitButton.  When the user clicks the button,


let counter = 0;
countriesAndCodes.forEach(function(element){counter++})
let random = Math.floor(Math.random() * (counter + 1))
let country = countriesAndCodes[random].name;
let code = countriesAndCodes[random]["alpha-2"];
randomCountryElement.innerHTML = country;

function worldbank(){
    let url = `http://api.worldbank.org/v2/country/${code}?format=json`
    fetch(url)
    .then(res => res.json())
    .then(worldbankdata =>{
        let capital = worldbankdata[1][0].capitalCity
        let answer = userAnswerElement.value
        console.log(typeof(capital))
        console.log(typeof(answer))
        if(answer == ""){
            alert("Input is Empty")
            
        }else if(answer === capital){
            resultTextElement.innerHTML = "CORRECT"
            resultTextElement.style.color = "green"

        }else{
            resultTextElement.innerHTML = `WRONG the capital of ${country} isnt ${answer} it is ${capital}`
            resultTextElement.style.color = "red"
        }

})
}
submitButton.addEventListener('click',function(){
    worldbank()
})







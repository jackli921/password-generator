let combination = {
    character: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],

    symbol: ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"],
    number:  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
}


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", ];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const charactersAndSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const charactersAndNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const allInput = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];

let randomcharacter1 = ""
let randomcharacter2 = ""
let randompassword1 = []
let randompassword2 = []
let passwordOne = document.getElementById("password-display-1")
let passwordTwo = document.getElementById("password-display-2")

let msgTop = document.getElementById("feedback-msg-top");
let msgBottom = document.getElementById("feedback-msg-bottom");

function generatePassword() {
    randompassword1 =""        
    randompassword2 =""   

    var choiceSymbols = document.getElementById("symbols").checked;
    var choiceNumbers = document.getElementById("numbers").checked;
    if (choiceSymbols === true && choiceNumbers === false) {
        var passwordRange = document.getElementById("num").value; 

        for (let i = 0; i <= passwordRange; i++) {
            let randomIndex1 = Math.floor(Math.random() * charactersAndSymbols.length)
            randomcharacter1 = charactersAndSymbols[randomIndex1] 
            randompassword1 += randomcharacter1

            let randomIndex2 = Math.floor(Math.random() * charactersAndSymbols.length)
            randomcharacter2 = charactersAndSymbols[randomIndex2]
            randompassword2 += randomcharacter2

            passwordOne.textContent = randompassword1
            passwordTwo.textContent = randompassword2
        }           
    }

    else if  (choiceNumbers === true && choiceSymbols === false) {
        var passwordRange = document.getElementById("num").value; 

        for (let i = 0; i <= passwordRange; i++) {
            let randomIndex1 = Math.floor(Math.random() * charactersAndNumbers.length)
            randomcharacter1 = charactersAndNumbers[randomIndex1] 
            randompassword1 += randomcharacter1

            let randomIndex2 = Math.floor(Math.random() * charactersAndNumbers.length)
            randomcharacter2 = charactersAndNumbers [randomIndex2]
            randompassword2 += randomcharacter2

            passwordOne.textContent = randompassword1
            passwordTwo.textContent = randompassword2
        }        
     
    }

    else if (choiceNumbers === true && choiceSymbols === true )    {

        var passwordRange = document.getElementById("num").value; 
        
        for (let i = 0; i <= passwordRange; i++) {
            let randomIndex1 = Math.floor(Math.random() * allInput.length)
            randomcharacter1 = allInput[randomIndex1] 
            randompassword1 += randomcharacter1

            let randomIndex2 = Math.floor(Math.random() * allInput.length)
            randomcharacter2 = allInput[randomIndex2]
            randompassword2 += randomcharacter2
            passwordOne.textContent = randompassword1
            passwordTwo.textContent = randompassword2
        
        }        
     
    }


    else {
        var passwordRange = document.getElementById("num").value; 

        for (let i = 0; i < passwordRange; i++) {
            let randomIndex1 = Math.floor(Math.random() * characters.length)
            randomcharacter1 = characters[randomIndex1]
            randompassword1 += randomcharacter1

            let randomIndex2 = Math.floor(Math.random() * characters.length)
            randomcharacter2 = characters[randomIndex2]
            randompassword2 += randomcharacter2

            passwordOne.textContent = randompassword1
            passwordTwo.textContent = randompassword2
            }        
     
        }

    msgTop.textContent = " "
    msgBottom.textContent = " "
    }
    
function copyPassword1() {
    navigator.clipboard.writeText(randompassword1)
    msgTop.textContent = "password copied to clipboard!";
    msgBottom.textContent = " ";
    
};

function copyPassword2() {
    navigator.clipboard.writeText(randompassword2)
    msgBottom.textContent = "password copied to clipboard!";
    msgTop.textContent = "";

}
 


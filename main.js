// Exercise 1
function filterEvenNum() {
    let numbersInput = document.getElementById("numbersInput").value.trim();
    let ArrayEven = numbersInput.split(/[,\s]+/); //split by commas or space or both using regular expression
    const numbers = ArrayEven.map(Number).filter(function (value) {
        return !isNaN(value); //keep valid number
    });
    if (numbers.length !== ArrayEven.length) {
        document.getElementById("errorMessage").classList.remove("d-none");
    } else {
        document.getElementById("errorMessage").classList.add("d-none");
    }

    const evenNum = numbers.filter(function (number) {
        return number % 2 === 0;
    });

    document.getElementById("resultEven").textContent = evenNum.join(", ");
}

// Exercise 2
function FindLargeNum() {
    let numbersInput = document.getElementById("numbersInputLarge").value.trim();
    let ArrayLarge = numbersInput.split(/[,\s]+/); //split by commas or space or both using regular expression
    const numbers = ArrayLarge.map(Number).filter(function (value) {
        return !isNaN(value); //keep valid number
    });
    if (numbers.length !== ArrayLarge.length) {
        document.getElementById("errorMessage").classList.remove("d-none");
    } else {
        document.getElementById("errorMessage").classList.add("d-none");
    }

    if(numbers.length>0){
        const largestNum = Math.max(...numbers);
        document.getElementById("resultLarge").textContent = largestNum;
    }

    document.getElementById("resultLarge").textContent = largestNum.join(", ");
}

// Exercise 3
function ReverseString(){
    let stringInput=document.getElementById("stringInput").value.trim();
    let ArrayString =stringInput.split("");
    let ReverseText=ArrayString.reverse();
    document.getElementById("resultReverse").textContent = ReverseText.join("");

}

// Exercise 4
function RemoveDuplicateNum(){
    let DuplicateInput = document.getElementById("DuplicateInput").value.trim();
    let ArrayDuplicate = DuplicateInput.split(/[,\s]+/).filter(Boolean); //filter empty strings
    const numbers = ArrayDuplicate.map(Number).filter(function (value) {
        return !isNaN(value); //keep valid number
    });
    let RemoveDuplicate=Array.from(new Set(numbers));
    if (numbers.length !== ArrayDuplicate.length) {
        document.getElementById("errorMessage").classList.remove("d-none");
    } else {
        document.getElementById("errorMessage").classList.add("d-none");
    }
    document.getElementById("resultDuplicate").textContent = RemoveDuplicate.join(", ");

    
}


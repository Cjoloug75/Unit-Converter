/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

Hello, my name is Connor
*/

let inputEl = document.getElementById("input-el")
let lcon = document.getElementById("l-con")
let mcon = document.getElementById("m-con")
let vcon = document.getElementById("v-con")
let convertButton = document.getElementById("convert-btn")

convertButton.addEventListener("click", function(){

    if(inputEl){
        const value =Number(inputEl.value)
        lengthConversion(value)
        volumeConversion(value)
        massConversion(value)
    }
})

function lengthConversion(input){
    const mtf = (input * 3.281).toFixed(3)
    const ftm = (input/3.281).toFixed(3)
    const s1 = `${input} meters = ${mtf} feet | ${input} feet = ${ftm} meters`
    lcon.innerHTML = s1
}

function volumeConversion(input){
    const ltg = (input * 0.264).toFixed(3)
    const gtl = (input/0.264).toFixed(3)
    const s2 = `${input} liters = ${ltg} gallons | ${input} gallons = ${gtl} liters`
    vcon.innerHTML = s2
}

function massConversion(input){
    const ktp = (input * 2.204).toFixed(3)
    const ptk = (input/2.204).toFixed(3)
    const s3 = `${input} kilos = ${ktp} pounds | ${input} pounds = ${ptk} kilos`
    mcon.innerHTML = s3
}
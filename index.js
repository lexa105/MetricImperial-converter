const convertBtn = document.getElementById("convert-btn")
const inputEl = document.querySelector(".number-input")

const length = document.getElementById("length-conversion")
const volume = document.getElementById("volume-conversion")
const mass = document.getElementById("mass-conversion")






inputEl.addEventListener("change", function() {
    console.log(inputEl.value)
})



convertBtn.addEventListener("click", function() {
    let convertValue = inputEl.innerHTML
    conversion(convertValue)
    console.log(convertValue);
})

function isNumberKey(evt) {
    var charCode = evt.which ? evt.which : evt.keyCode;
    // Only allow numbers (48-57 are keycodes for 0-9)
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }


function conversion(value) {
    let metresToFeets = value * 3.2808
    let feetsToMetres = value / 3.2808

    
    length.innerText = `${value} meters = ${metresToFeets.toFixed(2)}  feet | ${value} feet = ${feetsToMetres.toFixed(2)} meters`

    let literToGallons = value * 0.2642
    let gallonsToLiter = value * 3.7854

    volume.innerText = `${value} meters = ${literToGallons.toFixed(2)}  gallons | ${value} feet = ${gallonsToLiter.toFixed(2)} liters`


    let kgtopounds = value * 2.2046
    let poundstokg = value * 0.4536
    
    mass.innerText = `${value} kilos = ${kgtopounds.toFixed(2)} pounds | ${value} pounds = ${poundstokg.toFixed(2)} kilos`
}



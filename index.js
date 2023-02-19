/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/



let input = document.getElementById("input-fld")
let convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function() {
   
    let inputVal = input.value
    console.log(typeof inputVal)
    parseInt(inputVal)
    let val = parseInt(inputVal)
    
    document.getElementById("len-result").innerHTML = `${val} meters = ${(val*3.281).toFixed(3)} feet | ${val} feet = ${(val/3.281).toFixed(3)} meters`

    document.getElementById("vol-result").innerHTML = `${val} liters = ${(val*0.264).toFixed(3)} gallons | ${val} gallons = ${(val/0.264).toFixed(3)} liters` 

    document.getElementById("mass-result").innerHTML = `${val} kilograms = ${(val*2.204).toFixed(3)} pounds | ${val} kilograms = ${(val/2.204).toFixed(3)} pounds`
})


input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      convertBtn.click();
    }
  });

function lightDark() {
   let element = document.body;
   element.classList.toggle("dark-mode");
}
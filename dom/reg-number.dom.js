const regNumberEntered = document.querySelector(".regNumberEntered");
const regNumber = document.querySelector(".regNumber");
const addRegNumberBtn = document.querySelector(".addRegNumber");
const message = document.querySelector(".message");
const filteredRadio = document.querySelector(".filteredTown");
const clearRegNumber = document.querySelector(".filterRegNumber");

var stored = localStorage['savedReg'] ? JSON.parse(localStorage['savedReg']) : [];
var regNumFactory = RegNumber(stored);

//Add total for local storage
addRegNumberBtn.addEventListener("click", function() {
    regNumber.innerHTML = "";
    var regNumberValue = regNumberEntered.value.toUpperCase();
    var checker = regNumFactory.RegNumbers(regNumberValue);
    var currentReg = regNumFactory.getAllRegNum();
    localStorage['savedReg'] = JSON.stringify(currentReg);
    showList(regNumber);
    setTimeout(function() {
        message.innerHTML = "";
        message.innerHTML = "Please enter a valid registration number like CA 123654";
    }, 2000);
});

//Filter Total based on whats being clicked
filteredRadio.addEventListener("click", function() {
    regNumber.innerHTML = "";
    var radioBtn = document.querySelector("input[name='town']:checked");
    var inp = radioBtn.value
    var checkedTown = regNumFactory.selectedRadio(inp);
    for (var i = 0; i < checkedTown.length; i++) {
        const currentTown = checkedTown[i];
        const radioElement = document.createElement("div");
        radioElement.innerHTML = currentTown;
        regNumber.appendChild(radioElement);
    }
})

//Gets all valid reg being entered
function showList() {
    regNumber.innerHTML = ""
    var currentReg = regNumFactory.getAllRegNum();
    for (var i = 0; i < currentReg.length; i++) {
        const currentItem = currentReg[i];
        const theElement = document.createElement("div");
        theElement.innerHTML = currentItem;
        regNumber.appendChild(theElement);
    }
}

//clears local storage
clearRegNumber.addEventListener("click", function() {
    localStorage.clear();
    regNumber.innerHTML = "";
    window.location.reload();
});
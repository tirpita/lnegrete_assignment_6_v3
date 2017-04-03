

/* INFO VAR  */
var yourName = document.getElementById("yourname");
var address = document.getElementById("address");
var city = document.getElementById("city");
var state = document.getElementById("state");
var zipCode = document.getElementById("zipcode");
var phoneNumber = document.getElementById("phonenumber");
var emailAddress = document.getElementById("email");
/* PRICE VAR */
var startPrice = 0;
var infoTotal = 0;
var pizzaTotal = 0;
var cheeseTotal = 0;
var sauceTotal = 0;
var toppingsTotal = 0;
var toppingsPrice = 0;
document.getElementById('pizzaTotal').innerHTML = "Total: $" + pizzaTotal;
/*  CACLUATE TOTALS  */
var pizzaStartPrice = new Array();
pizzaStartPrice["small-tossed"] = 9.99;
pizzaStartPrice["medium-tossed"] = 12.99;
pizzaStartPrice["large-tossed"] = 14.99;
pizzaStartPrice["medium-thin"] = 11.99;
pizzaStartPrice["large-thin"] = 13.99;
pizzaStartPrice["ny-large"] = 16.99;
pizzaStartPrice["ny-xlarge"] = 19.99;
pizzaStartPrice["glutenfree"] = 10.99;
var cheesePrice = new Array();
cheesePrice["light"] = 0;
cheesePrice["normal"] = 0;
cheesePrice["extra"] = 2.99;
cheesePrice["double"] = 3.99;
var saucePrice = new Array();
saucePrice["regular"] = 0;
saucePrice["hearty"] = 0.99;
saucePrice["bbq"] = 1.99;

/* CONTACT/DELIVERY ADDRESS */
function checkInfo() {
if (yourName.value.length > 0) {
var rega = /^[a-zA-Z ]{2,30}$/;   
if (rega.test(yourName.value)) {
if (address.value.length > 0) {
if (city.value.length > 0) {
var regz = /^[A-z]{2}$/g;
if (regz.test(state.value)) {
var regb = /^\d{5}$$/g;
if (regb.test(zipCode.value)) {
var regc = /^\d{3}-?\d{3}-?\d{4}$/g;
if (regc.test(phoneNumber.value)) {
var regd = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (regd.test(email.value)) {
    window.alert("Thank you. Your delivery information has been recieved.");
    document.getElementById("submitinfo").disabled = false;
} else {window.alert("Please enter a valid email address.");
}
} else {window.alert("Please enter a valid phone number.");
}
} else { window.alert("Please enter a valid zip code.");
}
} else {window.alert("Please enter a two letter postal code for the state.");
}
} else {window.alert("Please enter a city.");
}
} else {window.alert("Please enter your delivery address.");
}
} else {window.alert("Please enter a valid first name.");
}
} else {window.alert("Please enter a contact name.");
}
}
function addressType() {
    var getAddress = document.getElementById("addresstype").value;
if (getAddress === "other") {
        document.getElementById("inputaddress").style.display = "block";
} else {
        document.getElementById("inputaddress").style.display = "none";
}
}
addresstype.addEventListener("change", addressType, false);
submitinfo.addEventListener("click", checkInfo, false);

/* CRUST  */
function displayPizzaType() {
if (document.getElementById("tossed").checked) {
document.getElementById("pizza1").style.display = "block";
document.getElementById("pizza2").style.display = "none";
document.getElementById("pizza3").style.display = "none";
document.getElementById("pizza4").style.display = "none";
startPrice = pizzaStartPrice["small-tossed"];
    return startPrice;
} else if (document.getElementById("thin").checked) {
document.getElementById("pizza2").style.display = "block";
document.getElementById("pizza1").style.display = "none";
document.getElementById("pizza3").style.display = "none";
document.getElementById("pizza4").style.display = "none";
startPrice = pizzaStartPrice["medium-thin"];
    return startPrice;
} else if (document.getElementById("newyork").checked) {
document.getElementById("pizza3").style.display = "block";
document.getElementById("pizza1").style.display = "none";
document.getElementById("pizza2").style.display = "none";
document.getElementById("pizza4").style.display = "none";
startPrice = pizzaStartPrice["ny-large"];
    return startPrice;
} else if (document.getElementById("glutenfree").checked) {
document.getElementById("pizza4").style.display = "block";
document.getElementById("pizza1").style.display = "none";
document.getElementById("pizza2").style.display = "none";
document.getElementById("pizza3").style.display = "none";
startPrice = pizzaStartPrice["glutenfree"];
    return startPrice;
}
}
function getStartPriceOne() {
    startPrice = 0;
    var myForm = document.forms["pizzaform"];
    var selectedPizza = myForm.elements["handtossed"];
    startPrice = pizzaStartPrice[selectedPizza.value];
    return startPrice;
}
function getStartPriceTwo() {
    startPrice = 0;
    var myForm = document.forms["pizzaform"];
    var selectedPizza = myForm.elements["thintossed"];
    startPrice = pizzaStartPrice[selectedPizza.value];
    return startPrice;
}

function getStartPriceThree() {
    startPrice = 0;
    var myForm = document.forms["pizzaform"];
    var selectedPizza = myForm.elements["newyorktossed"];
    startPrice = pizzaStartPrice[selectedPizza.value];
    return startPrice;
}
function getStartPriceFour() {
    startPrice = 0;
    var myForm = document.forms["pizzaform"];
    var selectedPizza = myForm.elements["glutenfreetossed"];
    startPrice = pizzaStartPrice[selectedPizza.value];
    return startPrice;
}
function getCheeseTotal() {
    pizzaTotal = startPrice - sauceTotal - sauceTotal;
    cheeseTotal = 0;
    var myForm = document.forms["pizzaform"];
    var selectedCheese = myForm.elements["cheesetype"];
    cheeseTotal = cheesePrice[selectedCheese.value];
    return cheeseTotal;
}
function getSauceTotal() {
    pizzaTotal = startPrice - sauceTotal - sauceTotal;
    sauceTotal = 0;
    var myForm = document.forms["pizzaform"];
    var selectedSauce = myForm.elements["saucetype"];
    sauceTotal = saucePrice[selectedSauce.value];
    return sauceTotal;
}
function getToppingsTotal() {
    var top = 0;
    var i = 0;
    var extra = 0.99;
    toppingsTotal = 0;
    while (top = document.getElementsByName("toppings")[i++]){
        if (top.checked) {
            toppingsTotal = toppingsTotal + extra;
}
}
    return toppingsTotal;
}

function submit() {
if (pizzaTotal < 9.99) {
    alert("Please select your crust and options before proceeding.");
} else {
    alert("Thank you for your order.\nYour total is: $" + pizzaTotal + "\nPlease enter your payment information.");
document.getElementById("submitorder").disabled = false;
}
}

function getTotal() {
    pizzaTotal = startPrice + cheeseTotal + sauceTotal + toppingsTotal;
    pizzaTotal = pizzaTotal.toFixed(2);
    document.getElementById('pizzaTotal').innerHTML = "Total: $" + pizzaTotal;
}

/* BILLING ADDRESS */
function getBillingInfo() {
if (document.getElementById("billingchk").checked) {
document.getElementById("billingname").value = yourName.value;
document.getElementById("billingaddress").value = address.value;
document.getElementById("billingaptnumber").value = aptnumber.value;
document.getElementById("billingcity").value = city.value;
document.getElementById("billingstate").value = state.value;
document.getElementById("billingzipcode").value = zipCode.value;
document.getElementById("billingphone").value = phoneNumber.value;
document.getElementById("billingemail").value = emailAddress.value;
} else {
document.getElementById("billingname").value = null;
document.getElementById("billingaddress").value = null;
document.getElementById("billingaptnumber").value = null;
document.getElementById("billingcity").value = null;
document.getElementById("billingstate").value = null;
document.getElementById("billingzipcode").value = null;
document.getElementById("billingphone").value = null;
document.getElementById("billingemail").value = null;
}
}
function checkBillingInfo() {
if (billingname.value.length > 0) {
var rega = /^[a-zA-Z ]{2,30}$/;
if (rega.test(billingname.value)) {
if (billingaddress.value.length > 0) {
if (billingcity.value.length > 0) {
var regz = /^[A-z]{2}$/g;
if (regz.test(billingstate.value)) {
var regb = /^\d{5}$$/g;
if (regb.test(billingzipcode.value)) {
var regc = /^\d{3}-?\d{3}-?\d{4}$/g;
if (regc.test(billingphone.value)) {
var regd = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (regd.test(billingemail.value)) {
   window.alert("Thank you. Your billing information has been recieved.");
   document.getElementById("submitbillinginfo").disabled = false;
   
} else {window.alert("Please enter a valid email address.");
}
} else {window.alert("Please enter a valid phone number.");
}
} else {window.alert("Please enter a valid zip code.");
}
} else {window.alert("Please enter the two letter postal code for the State.");
}
} else {window.alert("Please enter the city.");
}
} else {window.alert("Please enter your billing address.");
}
} else {window.alert("Please enter a first and last name");
}
} else {window.alert("Please enter the full name as it appears on the card.");
}
}
/* CREDIT CARD */
//luhn - needs work
/*
var submitpayment = document.getElementById("submitpayment");
function cardval(value) {
if (/[^0-9-\s]+/.test(value)){
    return false; 
}
   var nCheck = 0, nDigit = 0, bEven = false;
   value = value.replace(/\D/g, "");
   for (var n = value.length - 1; n >= 0; n--) {
   var cDigit = value.charAt(n),
      nDigit = parseInt(cDigit, 10);
if (bEven) {
if ((nDigit *= 2) > 9){ nDigit -= 9;
}
nCheck += nDigit;
bEven = !bEven;
}
return (nCheck % 10) === 0;
}
}
*/

crust.addEventListener("click", displayPizzaType, false);
crust.addEventListener("click", getTotal, false);
handtossed.addEventListener("change", getStartPriceOne, false);
handtossed.addEventListener("change", getTotal, false);
thintossed.addEventListener("change", getStartPriceTwo, false);
thintossed.addEventListener("change", getTotal, false);
newyorktossed.addEventListener("change", getStartPriceThree, false);
newyorktossed.addEventListener("change", getTotal, false);
glutenfreetossed.addEventListener("change", getStartPriceFour, false);
glutenfreetossed.addEventListener("change", getTotal, false);
cheesetype.addEventListener("change", getCheeseTotal, false);
cheesetype.addEventListener("change", getTotal, false);
saucetype.addEventListener("change", getSauceTotal, false);
saucetype.addEventListener("change", getTotal, false);
checktoppings.addEventListener("change", getToppingsTotal, false);
checktoppings.addEventListener("change", getTotal, false);
submitorder.addEventListener("click", submit, false);
billingchk.addEventListener("click", getBillingInfo, false);
submitbillinginfo.addEventListener("click", checkBillingInfo, false);

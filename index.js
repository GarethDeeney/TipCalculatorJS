// jshint esversion: 6

//alert("Hello!");

calculateTip();
  //resetForm();

function calculateTip() {

  var calculate = document.querySelector(".calculate");
  var reset = document.querySelector(".reset");

  reset.addEventListener("click", function() {
    var billAmount = document.querySelector(".billInput");
    var group = document.querySelector(".group");
    var select = document.querySelector(".radial");
    var tip = select.value;
    billAmount.placeholder = "How much was the bill?";
    group.placeholder = "How many people in your party?";
    select.placeholder = "How Much Would you like to Tip?";
    console.log("clicked");

  });

  calculate.addEventListener("click", function() {
    var billAmount = document.querySelector(".billInput").value;
    var group = document.querySelector(".group").value;
    var select = document.querySelector(".radial");
    var tip = select.value;

    //console.log(billAmount, group, tip);

    var tipAmount;

    if (tip == 30) {
      tipAmount = billAmount * 0.3;
    } else if (tip == 20) {
      tipAmount = billAmount * 0.2;
    } else if (tip == 15) {
      tipAmount = billAmount * 0.15;
    } else {
      tipAmount = billAmount * 0.1;
    }

    //console.log(tipAmount);

    var tipEach = tipAmount / group;
    tipEach = tipEach.toFixed(2);

    var tipFinal = document.querySelector(".tipFinal");

    if (tipEach > 0) {
      tipFinal.innerHTML = "Your tip amount is £" + tipEach + " each.";
    } else {
      tipFinal.innerHTML = "Please enter all values";
    }
  });
}

// function resetForm() {
//   var reset = document.querySelector(".reset");
//
//   reset.addEventListener("click", function() {
//     var billAmount = document.querySelector(".billInput");
//     var group = document.querySelector(".group");
//     var select = document.querySelector(".radial");
//     var tip = select.value;
//     billAmount.placeholder = "How much was the bill?";
//     group.placeholder = "How many people in your party?";
//     select.placeholder = "How Much Would you like to Tip?";
//     console.log("clicked");
//   });
// }

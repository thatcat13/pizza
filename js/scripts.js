//business logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
  this.price;//placeholder
  this.sizeCalc();
}

function Toppings(meat, veggie) {
  this.meat = meat;
  this.veggie = veggie;
}

function sum(price, toppings) {
    return price + toppings;
};

Pizza.prototype.sizeCalc = function() {
  if (this.size === "Small") {
    this.price === 8;
  } else if (this.size === "Medium") {
    this.price === 11;
  } else if (this.size === "Large") {
    this.price === 14;
  }
};

Pizza.prototype.grandTotal = function() {
  return this.price;
}

Pizza.prototype.outputMessage = function() {
  return "Your total is: " + Pizza.grandTotal;
}

//frontend logic:
$(document).ready(function(){
  $("form#yourPizza").submit(function(event) {
    event.preventDefault();

    var size = $("select#size").val();

    var inputtedMeat = $("input:checkbox[name=meat]:checked").map(function() {
      return parseInt($(this).val());
    }).get();
    var inputtedVeggie = $("input:checkbox[name=veggie]:checked").map(function() {
      return parseInt($(this).val());
    }).get();
    var newToppings = new Toppings(inputtedMeat, inputtedVeggie);

    var newPizza = new Pizza(size, toppings);
    newPizza.toppings.push(newToppings);
    console.log(newPizza);



    // newToppings.push = new Toppings(inputtedVeggie)
    //   console.log(newToppings);
    // var newPizza = new Pizza(size, toppings);



  // });
    // var inputtedVeggie = $("input:checkbox[name=veggie]:checked").map(function() {
    //   return parseInt($(this).val());
    // }


    // var newToppings = new Toppings(inputtedStreet, inputtedCity, inputtedState);
    // newContact.addresses.push(newAddress);





    // var yourToppings = $("input:checkbox[name=toppings]:checked").map(function() {
    //   return parseInt($(this).val());
    // }).get();
    //
    // var newPizza = new Pizza(size);
    // console.log(newPizza);

    // newPizza.toppings.push(yourToppings.reduce(sum, 0));
    // console.log(newPizza);

  }); //event toppings

  // console.log(newPizza.grandTotal());
  //
  //   $("#total-cost").text("Your total cost is: " + newPizza());


}); //ready

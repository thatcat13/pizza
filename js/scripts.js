//business logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
  this.price;//placeholder
  this.sizeCalc();
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
  return this.price + this.toppings;
}

Pizza.prototype.outputMessage = function() {
  return "Your total is: " + this.price;
}

//frontend logic:
$(document).ready(function(){
  $("form#yourPizza").submit(function(event) {
    event.preventDefault();

    var size = $("select#size").val();

    var yourToppings = $("input:checkbox[name=toppings]:checked").map(function() {
      return parseInt($(this).val());
    }).get();

    var newPizza = new Pizza(size, yourToppings);
    console.log(newPizza);

    // newPizza.toppings.push(yourToppings.reduce(sum, 0));
    // console.log(newPizza);

  }); //event toppings

  // console.log(newPizza.grandTotal());
  //
  //   $("#total-cost").text("Your total cost is: " + newPizza());


}); //ready

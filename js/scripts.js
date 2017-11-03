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

Pizza.prototype.sizeCalc = function(size) {
  if (this.size === "Small") {
    this.price === 8;
  } else if (this.size === "Medium") {
    this.price === 11;
  } else if (this.size === "Large") {
    this.price === 14;
  }
};

pizza = new Pizza();

//frontend logic:
$(document).ready(function(){
  $("form#yourPizza").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("select#size").val();
    var newPizza = new Pizza(inputtedSize);
    console.log(newPizza);

    var yourToppings = $("input:checkbox[name=toppings]:checked").map(function() {
      return parseInt($(this).val());
    }).get();
      // yourToppings.reduce(sum, 0);

    newPizza.toppings.push(yourToppings.reduce(sum, 0));
    console.log(newPizza);

  }); //event toppings
  //
  //   $("#total-cost").text("Your total cost is: " + newPizza());


}); //ready

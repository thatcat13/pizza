//business logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
  this.price = 8;
}

function sum(a, b) {
    return a + b;
};

Pizza.prototype.sizeTotal = function() {
  if (this.size === "Medium") {
    return this.price + 3;
  } else if (this.size === "Large") {
    return this.price + 6;
  }
  return this.price;
};

// Pizza.prototype.toppingsTotal = function() {
//   return this.toppings[0];
// };

Pizza.prototype.finalCost = function() {
  return ((this.toppings[0]) + );
};


var examplePizza = {
  size:"Small",
  toppings: 1,
  price: 9
};


//frontend logic:
$(document).ready(function(){
  $("form#yourPizza").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("select#size").val();
    var inputtedToppings = $("input:checkbox[name=topping]:checked").map(function() {
      return parseInt($(this).val());
    }).get();

    yourPizza = new Pizza(inputtedSize, inputtedToppings);
    yourPizza.toppings.push(inputtedToppings.reduce(sum, 0));

    $("#total-cost").text("$" + yourPizza.finalCost());

  }); //event yourPizza
}); //ready

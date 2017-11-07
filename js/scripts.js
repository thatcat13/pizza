//business logic
function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = [];
  this.price = 8;
}

function sum(a, b) {
    return a + b;
};

Pizza.prototype.sizeTotal = function() {
  if (this.size === "Medium") {
    return this.size + 3;
  } else if (this.size === "Large") {
    return this.size + 6;
  }
} return this.size;

Pizza.prototype.toppingsTotal = function() {
  return this.allToppings;
}


//frontend logic:
$(document).ready(function(){
  $("form#yourPizza").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("select#size").val();
    var inputtedToppings = $("input:checkbox[name=topping]:checked").map(function() {
      return parseInt($(this).val());
    }).get();

    newPizza.toppings.push(newToppings);
    var newToppings = new Toppings(inputtedToppings);
    var newPizza = new Pizza(inputtedSize, (inputtedToppings.reduce(sum, 0)), price);

    console.log(newPizza);
    $("#total-cost").text("$" + (newToppings.toppingsTotal() + newPizza.sizeTotal()));

  }); //event yourPizza
}); //ready

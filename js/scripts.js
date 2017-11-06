//business logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
}

function Toppings(allToppings) {
  this.allToppings = allToppings;
}

function sum(a, b) {
    return a + b;
};

Pizza.prototype.sizeTotal = function() {
  return this.size;
}

Toppings.prototype.toppingsTotal = function() {
  return this.allToppings;
}


//frontend logic:
$(document).ready(function(){
  $("form#yourPizza").submit(function(event) {
    event.preventDefault();

    var size = parseInt($("select#size").val());

    var inputtedToppings = $("input:checkbox[name=topping]:checked").map(function() {
      return parseInt($(this).val());
    }).get();



    var newToppings = new Toppings(inputtedToppings.reduce(sum, 0));
    var newPizza = new Pizza(size, toppings);
    newPizza.toppings.push(newToppings);
    console.log(newPizza);
    $("#total-cost").text("$" + (newToppings.toppingsTotal() + newPizza.sizeTotal()));

  }); //event yourPizza
}); //ready

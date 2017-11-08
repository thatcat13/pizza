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

Pizza.prototype.toppingsTotal = function() {
  return this.toppings;
};


//frontend logic:
$(document).ready(function(){
  $("form#yourPizza").submit(function(event) {
    event.preventDefault();
    var yourPizza;

    var inputtedSize = $("select#size").val();
    var inputtedToppings = $("input:checkbox[name=topping]:checked").map(function() {
      return parseInt($(this).val());
    }).get();

    yourPizza = new Pizza(inputtedSize, inputtedToppings);
    var sizedPizza = yourPizza.sizeTotal();
    console.log(sizedPizza);
    yourPizza.toppings.push(inputtedToppings.reduce(sum, 0));
    console.log(yourPizza);



    $("#total-cost").text("$" + sizedPizza + yourPizza.toppingsTotal());

  }); //event yourPizza
}); //ready

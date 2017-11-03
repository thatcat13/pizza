//business logic
function Pizza(toppings, size) {
  this.size = size;
  this.toppings = toppings;
  this.price = 8;
  this.sizeCalc();
}

Pizza.prototype.sizeCalc = function() {
  if (this.size === "Small") {
    this.price = 8;
  } else if (this.size === "Medium") {
    this.price += 3;
  } else if (this.size === "Large") {
    this.price += 6;
  }

  return Pizza.price;
};

function sum(total, number) {
    return total + number;
}

//frontend logic:
$(document).ready(function(){
//   $("form#pizzaSize").submit(function(event) {
//     event.preventDefault();
//
//     // var size = $("select#sizes").val();
//
//     // var newPizza = new Pizza(Pizza.sizeCalc());
//   }); //event size

  $("form#toppings").submit(function(event) {
    event.preventDefault();
      // var toppings = [0];
    var yourToppings = $("input:checkbox[name=toppings]:checked").map(function() {
      return parseInt($(this).val());
    }).get();
      // yourToppings.reduce(sum, 0);

      var pizzaWithTop = new Pizza(yourToppings.reduce(sum, 0));
      console.log(pizzaWithTop);


      // toppings.reduce(sum, 0);
      // console.log(toppings);
  }); //event toppings

    // $("#total-cost").text("Your total cost is: " + newPizza());


}); //ready

//business logic
function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = [0];
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
};

function sum(total, number) {
    return total + number;
}

//frontend logic:
$(document).ready(function(){
  $("#pizzaTotal").submit(function(event) {
    event.preventDefault();

    var size = $("select#sizes").val();

    var newPizza = Pizza.sizeCalc(size);

    $("input:checkbox[name=toppings]:checked").each(function() {
      var yourToppings = parseInt($(this).val());
      newPizza.toppings.push(yourToppings.reduce(sum, 0));
    });//checkbox toppings array

    $("#total-cost").text("Your total cost is: " + newPizza());
  }); //event

}); //ready

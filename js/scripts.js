//business logic


// });

function Pizza(size, toppings) {
  this.price = 8;
  this.size = size;
  this.toppings = [0];
  this.sizeCalc();
}

Pizza.prototype.sizeCalc = function(size) {
  if (this.size === "Small") {
    this.price === this.price;
  } else if (this.size === "Medium") {
    this.price += 3;
  } else if (this.size === "Large") {
    this.price += 6;
  }
}


finalPrice = this.toppings + this.price;


function sum(total, number) {
    return total + number;
};


//frontend logic:
$(document).ready(function(){
  var yourTotal;
  $("#pizzaTotal").submit(function(event) {
    event.preventDefault();

    var size = $("select#sizes").val();

    $("input:checkbox[name=toppings]:checked").each(function() {
      var yourToppings = parseInt($(this).val());

      toppings.push(yourToppings.reduce(sum, 0));
    });

    console.log(yourToppings);

    yourTotal = new Pizza(size, yourToppings, price);
  }); //event

}); //ready

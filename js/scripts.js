//business logic


// });

function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = [];
  this.price = 8;
  this.priceCalc()
}

Pizza.prototype.priceCalc = function() {
  if (this.size === "Small") {
    this.price = this.price;
  } else if (this.size === "Medium") {
    this.price += 3;
  } else if (this.size === "Large") {
    this.price += 6;
  }
};


//frontend logic:

$(document).ready(function(){
  $("form#sizeSelect").submit(function(event) {
    event.preventDefault();

    var size = $("select#sizes").val();

  }); //event size
    alert("this works");

  $("input:checkbox[name=toppings]:checked").each(function() {
    var yourToppings = $(this).val();

  }); //event toppings
}); //ready

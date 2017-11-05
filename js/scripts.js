//business logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
  this.price;//placeholder
  // this.sizeCalc();
}

function Toppings(toppings) {
  this.toppings = toppings;
}

function sum(a, b) {
    return a + b;
};

// Pizza.prototype.sizeCalc = function() {
//   if (this.size === "Small") {
//     this.price === 8;
//   } else if (this.size === "Medium") {
//     this.price === 11;
//   } else if (this.size === "Large") {
//     this.price === 14;
//   }
// };

// Pizza.prototype.total = function(toppings) {
//   var price = 0;
//   var total = 0;
//
//   for (var i = 0; i < this.toppings.length; i++) {
//     this.price += toppings[i].this.toppings;
//   }
//
//   total = this.price;
//
//   return total;
//
// };

Pizza.prototype.grandTotal = function() {
  return this.size + this.toppings;
}

// Pizza.prototype.outputMessage = function() {
//   return "Your total is: " + Pizza.grandTotal;
// }

//frontend logic:
$(document).ready(function(){
  $("form#yourPizza").submit(function(event) {
    event.preventDefault();

    var size = parseInt($("select#size").val());

    var inputtedToppings = $("input:checkbox[name=topping]:checked").map(function() {
      return parseInt($(this).val());
    }).get();

    var newToppings = new Toppings(inputtedToppings.reduce(sum, 0));
    // console.log(inputtedToppings.reduce(sum, 0));
    var newPizza = new Pizza(size, toppings);
    newPizza.toppings.push(newToppings);
    console.log(newPizza);


        //
        // $("span#rollTotal").text(currentRoll.reduce(add, 0))


    // newToppings.push = new Toppings(inputtedVeggie)
    //   console.log(newToppings);
    // var newPizza = new Pizza(size, toppings);



  // });
    // var inputtedVeggie = $("input:checkbox[name=veggie]:checked").map(function() {
    //   return parseInt($(this).val());
    // }


    // var newToppings = new Toppings(inputtedStreet, inputtedCity, inputtedState);
    // newContact.addresses.push(newAddress);





    // var yourToppings = $("input:checkbox[name=toppings]:checked").map(function() {
    //   return parseInt($(this).val());
    // }).get();
    //
    // var newPizza = new Pizza(size);
    // console.log(newPizza);

    // newPizza.toppings.push(yourToppings.reduce(sum, 0));
    // console.log(newPizza);

  }); //event toppings

  // console.log(newPizza.grandTotal());
  //
  //   $("#total-cost").text("Your total cost is: " + newPizza());


}); //ready

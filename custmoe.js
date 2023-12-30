
// Task 01
function number(rote){
    return(rote*rote);
    
}
let RoteNumber = number(5);
console.log(RoteNumber);

// Task 02
function calculateSum(array) {
    let total = 0;
  
    for (const value of array) {
      total += value;
    }
  
    return total;
  }
  
   const result1 = calculateSum([1, 2, 3, 4, 5,6]);
   console.log(result1);




  // Task 03

  function longFriend(arr){
    var long = arr[0];
     for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
            if( long.length < element.length){
                long = element
                }
                     }
                    return long
                        }
  
        var  friend = ["Alice", "Bob", "Charlie", "David", "Eve"]
        var longword = longFriend(friend);
        console.log(longword);
    
  



  // Task 04
  function checkLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}
let leapYear=checkLeapYear(2024);
console.log(leapYear);


// Task 05
let myproduct = [
    {name: 'Shirt', price: 500, quantity: 2},
    {name: 'Pant', price: 700, quantity: 2},
    {name: 'watch', price: 200, quantity: 1},
    {name: 'glass', price: 100, quantity: 1}
    ];

    function myCart(myproduct){
      let totalPrice = 0;
      for (let index = 0; index < myproduct.length; index++){
        const product = myproduct[index];
        totalPrice = totalPrice + (product.price*product.quantity);
        
      }
      return totalPrice;
    }
    let myCartPrice = myCart(myproduct);
    console.log(myCartPrice);
  
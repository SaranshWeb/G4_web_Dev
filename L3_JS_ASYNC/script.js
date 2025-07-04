// let cart = ["shoes", "shirt", "wallets"]

// function orderDetail(cart){
//     //1. Total no of products
//     //2. Total Amount of Products nos*1000

//     const totalProducts = cart.length;
//     const totalAmount = totalProducts * 1000;

//     // console.log(totalProducts)
//     return {
//         totalProducts,
//         totalAmount,
//         cart
//     }
// }

// function orderSummary(details){
//     //total price and total product
//     //then generate orderId


// }

// function paymentGateway(){

// }

// function successfulOrder(){
//     // it will all the details about the payment product name and everthing
// }

// orderDetail(cart)





// ////////////////////////////////////////////////////////////////////////////////////////
















// const words = word.filter((word) => word.length > 6);
// console.log(result);



// map function


// var arr = [2,4,67,8,9,3];
// var arr1 = [2,4,67,8,9,3];

// const doubleValues = arr.map((x) => x*2);
// console.log(doubleValues);






// Array.prototype.mapReplica = function() {
//     let output = []
//     for(var i=0; i<this.length; i++){
//         output.push(logic(this[i]));
//     }
//     return output;
// }
























// let arr = [2, 3, 4, 5, 8]

// Array.prototype.calculate = function (logic) {
//     let result = []
//     for (let i = 0; i < this.length; i++) {
//         result.push(logic(this[i]))
//     }
//     return result
// }

// Array.prototype.myFilter = function (logic) {
//     let result = []
//     for (let i = 0; i < this.length; i++) {
//         if (logic(this[i])) {
//             result.push(this[i])
//         }
//     }
//     return result
// }

// function triple(x) {
//     return x * x * x
// }

// function isEven(x) {
//     return x % 2 === 0
// }

// let tripledArray = arr.calculate(triple)
// console.log(tripledArray) // [8, 27, 64, 125, 512]

// let filteredArray = arr.myFilter(isEven)
// console.log(filteredArray) // [2, 4, 8]














// ////////////////////////////////////////////////////////



// REDUCE



const array1 = [1,2,3,4];

const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumlator, currectValue) => accumlator + currectValue, initialValue,
);

console.log(sumWithInitial);






const sumOfAll = array1.reduce(function (acc, curr) {
    acc = acc+curr
    return acc;
},0);

console.log(sumOfAll);j
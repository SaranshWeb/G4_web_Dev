// console.log("Script Start");

// // setTimeout(()=>{
// //     console.log("Going to restaurant");
// // },4000);

// // setTimeout(()=>{
// //     console.log("Menu CHeck");
// // },3000);

// // console.log("SCRIPT END");

// function walkInRestaurant(cb){
//     console.log("walk inside")

//     setTimeout(()=>{
//         menuCheck();
//     }, 3000);

// }

// function menuCheck(){
//     console.log("Checking menu");
//     setTimeout(()=>{
//         foodOrder();
//     }, 6000);
// }

// function foodOrder(cb){
//     console.log("order food")

//     setTimeout(()=>{
//         menuCheck();
//     }, 3000);

// }

// function havingLunch(cb){
//     console.log("having lunch");
// }

// function payBill(cb){
//     console.log("paying bill");
//     setTimeout(cb, 3000);
// }

// function walkAwayFromRes(){
//     console.log("BYEEEEEE")
// }
// ////////////////////////////////

// walkInRestaurant(()=>{
//     menuCheck(()=> {
//         foodOrder(()=>{
//             havingLunch(()=>{
//                 payBill(()=>{
//                     walkAwayFromRes();
//                 })
//             })
//         })
//     })
// })












//////////////////////////////////////////








// let arr = [2,3,4,6,8,5]
// let arr1 = new Array()

// function doubleArrVal(arr){
//     for(i = 0; i<arr.length; i++){
//         arr1[i] = arr[i]*2;
//     }
//     return arr1;
// }

// console.log(doubleArrVal(arr));

// const ans = arr.doubleArrVal(()=>{

// })
// console.log(ans)




let arr = [2,3,4,6,8,5]

Array.prototype.doublevar = function (data) {
    let output = []
    for(var i = 0 ;i<this.length;i++){
        output.push(this[i]*2);
    }
    return output
    
}

// const output = arr.doublevar(()=>{

// });
// console.log(output);

const output(arr.doublevar)







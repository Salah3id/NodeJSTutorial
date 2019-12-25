var newModule = require('./newModule');

//module and require
console.log(newModule.extFun(['salah','eid','nemo']));
console.log(newModule.adder(newModule.pi , 15));


// for(i=1;i<=10;i++) {
//     setTimeout(function(){
//         console.log(i++ - 10)
//     }, i*1000);
// }

// var time = 0;

// var timer = setInterval(() => {
//     time += 2;
//     console.log(time + ' Sec Pass')
//     if(time >= 10) {
//         clearInterval(timer);
//     }
// }, 2000);

// console.log(__dirname);
// console.log(__filename);


// // normal function 
// function sayHi() {
//     console.log('Hi by normal');
// } 


// //function Expression
// var sayBye = function() {
//     console.log('Bye by var');
// }

// var sayNice = () => {
//     console.log('Nice By short fun var');
// }


// // Call function 

// function call(fun) {
//     fun();
// }

// call(sayNice);
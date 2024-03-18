// let mySampleJson = `{
//     "myNestedSingleOBJ_Json":{
//         "name" : "John", 
//         "age" : 25,
//         "city" : "New York",
//         "state":"NY",
//         "isPolluted": true,
//         "isSmoker": false,
//         "mySecondNestedObj":{
//             "name" : "John", 
//             "age" : 25,
//             "city" : "New York",
//             "state":"NY",
//             "isPolluted": true,
//             "isSmoker": false,
//             "myArray":["hello","world","how","are","you"]
//         }
//     },
//     "myNestedSingleOBJ_Json":{
//         "name" : "John", 
//         "age" : 25,
//         "city" : "New York",
//         "state":"NY",
//         "isPolluted": true,
//         "isSmoker": false,
//         "mySecondNestedObj":{
//             "name" : "John", 
//             "age" : 25,
//             "city" : "New York",
//             "state":"NY",
//             "isPolluted": true,
//             "isSmoker": false,
//             "myArray":["hello","world","how","are","you"]
//         }
//     }
//     }
// `


// let MyArray = [ mySampleJson]


// *map()

// let array = [1,2,3,4,5,6,7,8,9,10];


// let res = array.map((value , index , array)=>{
//     return 2 * value
// })

// console.log("NEW_ARRAY",res);
// console.log("OLD_ARRAY",array);




// *filter()    

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const res = numbers.filter(function(value , index , array){
//     return value > 6
// })

// console.log(res);


// *reduce();




const numbers = [1, 2, 3, 4, 5];
let res = numbers.reduce(
    function(prev ,curr, index , array){
        return prev + curr; 
    }
    
)
console.log(res);

// 'prev'=3
// "curr"=3

// 'prev'=6
// "curr"=4


// 'prev'=10
// "curr"=5


// 3
// 6
// 10

// 15



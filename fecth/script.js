// const { Await } = require("react-router-dom")

// //Promise Task
// let p1 = fetch('https://jsonplaceholder.typicode.com/posts')
// let p2 = fetch('https://jsonplaceholder.typicode.com/comments')
// let p3 = fetch('https://jsonplaceholder.typicode.com/albums')
// let p4 = fetch('https://jsonplaceholder.typicode.com/photos')
// let p5 = fetch('https://jsonplaceholder.typicode.com/todos')
// let p6 = fetch('https://jsonplaceholder.typicode.com/users')

// Promise.all([p1, p2, p3, p4, p5, p6])
//     .then((value) => {
//         Promise.all(value.map(data => data.json()))
//             .then((response) => console.log(response))
//     }).catch((err) => console.log(err))


// aync Syntax

//    async function myFunction()
// {
//     return "Hello";
//   }


// Aysn Functions using API Call to get the data.

// const myfunct = async () => {

//     try {
//         let p1 = fetch('https://jsonplaceholder.typicode.com/posts')
//         let p2 = fetch('https://jsonplaceholder.typicode.com/comments')
//         let p3 = fetch('https://jsonplaceholder.typicode.com/albums')
//         let p4 = fetch('https://jsonplaceholder.typicode.com/photos')
//         let p5 = fetch('https://jsonplaceholder.typicode.com/todos')
//         let p6 = fetch('https://jsonplaceholder.typicode.com/users')

//         let respons1 = await p1;
//         let resp1 = await respons1.json();
//         console.log(resp1)
//         let respons2 = await p2;
//         let resp2 = await respons2.json();
//         console.log(resp2)
//         let respons3 = await p3;
//         let resp3 = await respons3.json();
//         console.log(resp3)
//         let respons4 = await p4;
//         let resp4 = await respons4.json();
//         console.log(resp4)
//         let respons5 = await p5;
//         let resp5 = await respons5.json();
//         console.log(resp5)


//         let PP = ["https://jsonplaceholder.typicode.com/posts",
//                 "https://jsonplaceholder.typicode.com/comments",
//                  "https://jsonplaceholder.typicode.com/albums",
//                 "https://jsonplaceholder.typicode.com/photos",
//                 "https://jsonplaceholder.typicode.com/todos",
//                 "https://jsonplaceholder.typicode.com/users"];

//         const commonfunc = async (URL) => {
//             try {
//                 let URLFETCH = await fetch(URL);
//                 let Data = await URLFETCH.json();
//                 console.log(Data)
//                 return Data;

//             } catch (error) {
//                 console.log(error)

//             }


//         }

//         PP.forEach(async (value) => {
//             let ress = await commonfunc(value)
//             console.log(ress)
//         });


//     } catch (error) {
//         console.log(error)
//     }


// }

let PP = ["https://jsonplaceholder.typicode.com/posts",
           "https://jsonplaceholder.typicode.com/comments",
           "https://jsonplaceholder.typicode.com/albums",
            "https://jsonplaceholder.typicode.com/photos",
            "https://jsonplaceholder.typicode.com/todos",
            "https://jsonplaceholder.typicode.com/users"];

        const commonfunc = async (URL) => 
        
        {
            try 
            {
                let URLFETCH = await fetch(URL);
                let Data = await URLFETCH.json();
                console.log(Data)
                return Data;

            } catch (error) {
                console.log(error)

            }


        }

        PP.forEach(async (value) => 
        {
            let i =0
            let ress = await commonfunc(value)
            console.log(ress)
            console.log(ress[i].body) // Get Array Value in Java Scripts
            return ress;
        });

   // Await Syntax
//    let value = await promise;


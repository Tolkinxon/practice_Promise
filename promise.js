"use strict"

// const result = false

// const promisePractise = new Promise((resolve, reject) => {

// if (result) {
//     const response = 200
//     resolve(response)
// }
// else{
//     const respons = 404
//     reject(respons)
// }
// })


// promisePractise.then((data) => {console.log(data);}).catch((information) => {console.log(information);})





const res = new Promise((resolve) => {
    console.log('request data');

    const car = {
        color: 'red',
        height: 1.3
    }

    resolve(car)
})

res.then((data) => {console.log(data)})


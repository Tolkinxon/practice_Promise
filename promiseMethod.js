'use strict'

// const request = (time) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(), time)
//   })
// }

// request(1000).then(() => {console.log('Request 1000 ms');})
// request(2000).then(() => {console.log('Request 2000 ms');})
// request(3000).then(() => {console.log('Request 3000 ms');})

// Promise.all([ request(1000),  request(2000),  request(3000)]).then(() => {console.log('all');})
// Promise.race([ request(1000),  request(2000),  request(3000)]).then(() => {console.log('all');})



const req1 = new Promise((resolve) => {setTimeout(() => resolve(), 1000)})
const req2 = new Promise((resolve) => {setTimeout(() => resolve(), 2000)})
const req3 = new Promise((resolve) => {setTimeout(() => resolve(), 3000)})

req1.then(() => {console.log('first')})
req2.then(() => {console.log('second')})
req3.then(() => {console.log('third')})


Promise.all([req1, req2, req3]).then(() => {console.log('All method')})
Promise.race([req1, req2, req3]).then(() => {console.log('race method')})







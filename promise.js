"use strict"

const result = false

const promisePractise = new Promise((resolve, reject) => {

if (result) {
    const response = 200
    resolve(response)
}
else{
    const respons = 404
    reject(respons)
}
})


promisePractise.then((data) => {console.log(data);}).catch((information) => {console.log(information);})




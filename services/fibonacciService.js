const express = require('express')
const app = express()
const options = {'root': '/Users/nir/Desktop/goroadie'}
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false })); 


const getFibonacci =  async (req, res) => {
    try {
        const fibonacci = (n) => {
            let arr = [0, 1]
            for(let i = 2; i < n+1; i++) {
                arr.push(arr[i-1] + arr[i-2])
            }
            return arr[n];
        }
        const number = req.body.num;
        const result = await fibonacci(number.toString())
        res.send('Fibonacci result is: ' + result)
        } catch(err){
            console.log(err)
        }
}

module.exports = {getFibonacci}
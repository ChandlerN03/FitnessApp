const {createPool} = require('mysql')

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "kavunkal",
    database: "FitnessApp",
    connectionLimit: 10
})

pool.query('Select * from FitnessApp.Member',(err, result, fields)=>{
    if (err){
        return console.log(err);
    }
    return console.log(result)
})

pool.query('Select * from FitnessApp.Member',(err, result, fields)=>{
    if (err){
        return console.log(err);
    }
    return console.log(result)
})

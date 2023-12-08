const {createPool} = require('mysql')


const pool = createPool({
    host: "localhost",
    user: "root",
    password: "kavunkal",
    database: "FitnessApp",
    connectionLimit: 10
  });
  
  let queryResult; // Declare a variable to store the result
  
  // Use the pool to get a connection and execute the query
  pool.query('SELECT username FROM FitnessApp.Member', (err, result, fields) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }

    queryResult = result;

  // Check if there are records
  if (queryResult.length > 0) {
    console.log('Query Result:');
    
    // Iterate over the results using a for loop
    for (let i = 0; i < queryResult.length; i++) {
      const record = queryResult[i];
      if (queryResult[i].equals(Trollmaster)){
        console.log("SUCESS");
      }
      // Add more logic here based on each record if needed
    }
  } else {
    console.log('No records found.');
  }
  });
  


const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO registration (firstName, lastName, email, password)
      VALUES (?, ?, ?, ?)`,
      [
        data.firstName,
        data.lastName,
        data.email,
        data.password
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUsers: callBack => {
    pool.query(
      `select id,firstName,lastName,email,password from registration`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from registration where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateUser: (data, callBack) => {
    console.log(data);
    const query = `UPDATE registration SET firstName=?, lastName=?, email=?, password=? WHERE id = ?`;
    const values = [
      data.firstName,
      data.lastName,
      data.email,
      data.password,
      data.id
    ];
  
    console.log(query); // Log the SQL query
    console.log(values); // Log the query values
  
    pool.query(query, values, (error, results, fields) => {
      if (error) {
        console.log(error);
        return callBack(error);
      }
      return callBack(null, results);
    });
  }
  
  
};

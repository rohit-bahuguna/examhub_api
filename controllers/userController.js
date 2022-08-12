const db = require("../db");



//http://localhost:4000/user/${PATH NAME}

const getAllUser = async (req, res) => {
  try {
    const response = await db
      .promise()
      .query(
        "SELECT username , name_of_user , email , mobile_number  ,user_type , userid  FROM users"
      );
    // console.log(response[0])
    res.status(200).json(response[0]);
  } catch (error) {
    console.log(error);
    res.status(400).json({ massage: error.massage });
  }
};

const getAuser = async (req, res) => {
  try {
    const response = await db
      .promise()
      .query(`SELECT  *  FROM users WHERE username = '${user}'`);

    res.status(200).json(response[0]);
  } catch (error) {
    console.log(error);
    res.status(400).json({ massage: error.massage });
  }
};

const getUserById = ("/finduser/", async (req, res) => {
  try {
      const userId = req.query.id;
      const response = await db
          .promise()
          .query(`SELECT * FROM users WHERE userid = '${userId}'`);
      res.status(200).json(response[0]);
  } catch (err) {
      res.status(400).json(err);
  }
});







const RemoveAuser = async (req, res) => {
  const user = req.body.username;

  try {
    const response = await db
      .promise()
      .query(`DELETE  FROM users WHERE username = '${user}'`);
    //console.log(response[0])
    res.status(200).json(response[0]);
  } catch (error) {
    console.log(error);
    res.status(400).json({ massage: error.massage });
  }
};

const addAuser = async (req, res) => {
  try {
    const response = await db.promise().query(`
      
      INSERT INTO users (
      
          username ,
          name_of_user  ,
          email ,
        user_password ,
          user_status ,
          mobile_number ,
          user_type 
      )
      VALUES (
      '${req.body.username}',
      ' ${req.body.name_of_user}',
      '${req.body.email}',
      '${req.body.password}',
      false,
      '${req.body.mobile_number}',
      '${req.body.user_type}'
      )
      
      
      `);
    // console.log(response[0])
    res.status(200).json(response[0]);
  } catch (error) {
    console.log(error);
    res.status(400).json({ massage: error.massage });
  }
};

const updateAuser = async (req, res) => {
  try {
    const response = await db.promise().query(`
      
      UPDATE users SET 
      username = '${req.body.username}' ,
      name_of_user = '${req.body.name_of_user}',
      email = '${req.body.email}',
      mobile_number ='${req.body.mobile_number}',
      user_type = '${req.body.user_type}'
      WHERE  
      userid =  '${req.body.userid}'
      
     
      `);
    //  console.log(response[0])
    res.status(200).json(response[0]);
  } catch (error) {
    console.log(error);
    res.status(400).json({ massage: error.massage });
  }
};



const logIn = ('/login', async (req, res) => {
  try {
    const response = await db.promise().query(`SELECT * FROM users WHERE username = '${req.body.username}' `);

    if (response[0].length > 0) {

      if (response[0][0].password == req.body.password) {

        res.status(202).json({ message: 'Successfully logged in' });
      }

      else {
        res.status(401).json({ message: 'Incorrect Password' });
      }
    }

    else {
      res.status(422).json({ message: 'User Not Found' });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
})



const updatePassword = ('/updateuserpassword', async (req, res) => {
  try {
    console.log(req.body);
    const response = await db.promise().query(`UPDATE users SET user_password = '${req.body.password}' WHERE username = '${req.body.username}'`);
    console.log(response);
    res.status(200).json(response[0]);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
})


const searchUserDataWithId = ("/searchuser/:userId", async (req, res) => {
  try {
      const userId = req.params.userId;
      const response = await db
          .promise()
          .query(`SELECT name, email, username FROM users WHERE userid = '${userId}'`);
      res.status(200).json(response[0]);
  } catch (err) {
      res.status(400).json(err);
  }
});



module.exports = {
  RemoveAuser, getAuser, getAllUser, updateAuser, addAuser, logIn,
  updatePassword , searchUserDataWithId , getUserById
};
//0103041939
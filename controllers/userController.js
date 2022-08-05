const db = require("../db");

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
  const user = req.body.username;

  //  console.log(user)
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

const RemoveAuser = async (req, res) => {
  const user = req.body.username;

  //  console.log(user)
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


  //  console.log(user)
  try {
    const response = await db
      .promise()
      .query(`
      
      INSERT INTO users (
        userid ,
          username ,
          name_of_user  ,
          email ,
        user_password ,
          user_status ,
          mobile_number ,
          user_type 
      )
      VALUES (
      '${req.body.userid}',
      '${req.body.username}',
      ' ${req.body.name_of_user}',
      '${req.body.email}',
      '${req.body.password}',
      false,
      '${req.body.mobile_number}',
      '${req.body.user_type}'
      )
      
      
      `);
    console.log(response[0])
    res.status(200).json(response[0]);
  } catch (error) {
    console.log(error);
    res.status(400).json({ massage: error.massage });
  }
};

const updateAuser = async (req, res) => {
  

  
  try {
    const response = await db
      .promise()
      .query(`
      
      UPDATE users SET 
      username = '${req.body.username}' ,
      name_of_user = '${req.body.name_of_user}',
      email = '${req.body.email}',
      mobile_number ='${req.body.mobile_number}',
      user_type = '${req.body.user_type}'
      WHERE  
      userid =  '${req.body.userid}'
      
     
      `);
    console.log(response[0])
    res.status(200).json(response[0]);
  } catch (error) {
    console.log(error);
    res.status(400).json({ massage: error.massage });
  }
};

module.exports = { RemoveAuser, getAuser, getAllUser, updateAuser, addAuser };

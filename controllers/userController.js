const User = require('../models/user');
const Encrypt = require('../utils/hash');
const UserDAO = require ('../DAO/userDAO')

/**Business Logic to hash the password and pass the user Object to DAO */
const Register = (userData) =>{
   return new Promise((resolve,reject)=>{
        if(userData.firstName && userData.lastName && userData.password){
            userData.password = Encrypt(userData.password);
            UserDAO.Register(userData).then(user=>
                resolve(user)
            ).catch(err=>{
                reject(err);
            });
        }else{
            const err=new Error('Invalid Params!!')
            reject(err) 
        }
   })
}

module.exports={Register};
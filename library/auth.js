const bcrypt = require ("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtd = require("jwt-decode");
require("dotenv").config();
const secret = process.env.secret;
const hashing = async(value)=>{
    try {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(value,salt);
        return hash;
    } catch (error) {
       return error 
    }
}

const hashCompare = async(password,hashvalue)=>{
    try {
        return await bcrypt.compare(password,hashvalue)
    } catch (error) {
        return error
    }
}
const createjwt = async({email})=>{
    return await jwt.sign({
        email
    },
    secret,
    {
        expiresIn:'5m'
    }
    )
}

const auth = async(token)=>{
    const decode = jwtd(token); 
    if(Math.round(new Date()/1000)<=decode.exp)
    {
        return decode.email
    }
    else{
        return false
    }
}

module.exports = {hashing,hashCompare,createjwt,auth}
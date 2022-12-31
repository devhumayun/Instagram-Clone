import User from "../models/User.js"

 const activationCode = async () => {
    // access code for activation
    let activation_code = randomCode(100000, 999999)
    // check token is exists
    const check_code = await User.findOne({ access_token : activation_code })
    if(!check_code){
       activation_code = randomCode(100000, 999999)
    }

    return check_code 
}
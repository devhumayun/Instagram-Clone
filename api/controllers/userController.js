import User from "../models/User.js"
import createError from "../utility/createError.js"
import { createToken } from "../utility/createToken.js"
import { randomCode } from "../utility/math.js"
import { sendActivationLink } from "../utility/sendEmail.js"
import { sendOTP } from "../utility/sendSMS.js"
import { isEmail, isMobile } from "../utility/validation.js"


/**
 * @route /api/user
 * @desc get all user
 * @method get
 * @access public
*/
export const register = async ( req, res, next ) => {

    // res.cookie('fbstk', "token", { expires: new Date(Date.now() + 86400000) }).status(200).json({
    //     message : "User Registration Successfull",
    //     user : {}
    // })


   try {
       
       // get body data
       const {  name, username, auth, password } = req.body

       // validation
       if( !name || !auth || !password || !username ){
           return next(createError(404, "All fields are requried"))
       }

       // initial mobile and email value
       let email_data = null
       let mobile_data = null
       if(isEmail(auth)){
           email_data = auth

           // check email user
           const email_check = await User.findOne({ email : auth })
           if(email_check){
               next(createError(400,"Email already exists"))
           }
       } else if (isMobile(auth)){
           mobile_data = auth

             // check mobile user
             const mobile_check = await User.findOne({ mobile : auth })
             if(mobile_check){
                 next(createError(400,"Mobile Number already exists"))
             }
       }else {
           next(createError(400, "Invalid email or mobile number"))
       }
       
       // activition code
       let activation_code = randomCode(100000, 999999)

       // check activation code
       const check_code = await User.findOne({ access_token : activation_code })
       if(!check_code){
           activation_code = randomCode(100000, 999999)
       }

       // create user
       const user = await User.create({
           name, 
           username, 
           email : email_data,
           mobile : mobile_data, 
           password,
           access_token : activation_code
       })
       
       if(email_data){
            // create activation expeir token link
            const activation_token = createToken({ id : user._id }, '30d')
            // send email
            sendActivationLink(user.email, {
                name : user.name,
                link : `${process.env.APP_URL+":"+process.env.SERVER_PORT }/api/v1/user/account-activate/${activation_token}`,
                code : activation_code
            })
            console.log(user.email);

            res.cookie('test', "test").status(200).json({
                message : "User Registration successfull",
                user : user,
                test : "test"
                
            })
            return
        }



    if(mobile_data){
        sendOTP(user.mobile,
            `Hi, ${user.name} Your account verifaction code is ${activation_code} `
         )
        
        res.status(200).cookie('otp', user.mobile, { expires: new Date(Date.now() + 1000 * 60 *15)}).json({
            message : "User Registration successfull",
            user : user
        })
    }
 
   } catch (error) {
       next(error)
   }
};

/**
 * Update birthday
 */
export const updateBirthday = async (req, res, next) => {
   try {
      
   } catch (error) {
      next(error)
   }
}




export const accountActivation = () => {

}



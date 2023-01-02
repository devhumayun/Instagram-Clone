import axios from "axios";
import { createToast } from "../../utility/toast";
import { REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionType";

/**
 * register
 */
export const register = (data,e,setInput,navigate) => async (dispatch) => {
    try {

        dispatch({
            type : REGISTER_REQUEST
        })
        
        await axios.post("/api/user/register",data)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload : res.data.message
            })
            console.log(res);
            navigate('/birthday')
            setInput({
                name : '',
                username : '',
                emailORmobile : '',
                password : ''
            })
            createToast(res.data.message)
        })
        .then(error => {
            dispatch({
                type : REGISTER_FAILED
            })
        });

    } catch (error) {
        console.log(error);
    }
}
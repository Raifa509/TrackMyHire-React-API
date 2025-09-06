import commonAPI from "./commonAPI"
import BASEURL from "./baseURL"

//addApplicationAPI-to add the applications
export const addApplicationAPI=async (application)=>{
    return commonAPI('POST',`${BASEURL}/all-applications`,application)
}

//getApplicationListAPI- to list the applications


//deleteApplicationAPI


//editApplication
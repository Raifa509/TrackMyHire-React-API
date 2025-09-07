import commonAPI from "./commonAPI"
import BASEURL from "./baseURL"

//addApplicationAPI-to add the applications
export const addApplicationAPI=async (application)=>{
    return commonAPI('POST',`${BASEURL}/all-applications`,application)
}

//getApplicationListAPI- to list the applications
export const getApplicationListAPI=async()=>{
    return commonAPI('GET',`${BASEURL}/all-applications`,{})
}

//deleteApplicationAPI
export const deleteApplicationAPI=async(id)=>{
    return commonAPI('DELETE',`${BASEURL}/all-applications/${id}`,{})
}

// update application
export const updateApplicationAPI = async (id, updatedData) => {
  return await commonAPI("PUT", `${BASEURL}/all-applications/${id}`, updatedData);
};

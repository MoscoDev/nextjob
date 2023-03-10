import axios from "axios";

// create function get jobs with axios
export const getJobs = async (queries) => {
  try {
    // get jobs from api
    const response = await axios.get("/jobs/?" + queries);

    // return jobs
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// create function login with axios
export const login = async (data) => {
  
    // login to api
    const response = await axios.post("/auth/login", data);
    console.log(response.data);
    //session management with jwt
    localStorage.setItem("token", response.data.token);

    // return token
    return response.data;
  
};

export const saveJob = async (id) => {
  // login to api
  const response = await axios.post("/savedjobs/"+id);  
 
  return response.data;
};

export const getSavedJobs = async (id)=>{
   const response = await axios.get("/savedjobs");
   return response.data;
}


export const deleteSavedJob = async (id) => {
  const response = await axios.delete("/savedjobs/"+id);
  return response.data;
};


export const getUserProfile = async (id) => {
  const response = await axios.get("users/"+id);
  return response.data;
};
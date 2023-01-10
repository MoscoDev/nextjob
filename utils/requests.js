import axios from "axios";

// create function get jobs with axios
export const getJobs = async (queries) => {
try {
  // get jobs from api
  const response = await axios.get("/jobs/?"+queries);

  // return jobs
  return response.data;
} catch (error) {
  console.log(error)
}
  
}


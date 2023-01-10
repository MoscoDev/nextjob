import React from "react";
import { useParams } from "react-router-dom";

function Job() {
    let {id,money} = useParams()
    console.log();
  return <div>Job</div>;
}

export default Job;

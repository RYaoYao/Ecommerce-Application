import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { server } from "../Server";
import axios from "axios";
const ActivationPage = () => {
  const { activationToken } = useParams();
  const [ error, setError ] = useState(false);

  useEffect(() => {
    if (activationToken) {
      const activationEmail = async () => {
        await axios.post(`${server}/user/activation`, {
            activationToken,
          }).then((res)=>{
            console.log(res);
          }).catch((err)=>{
            console.log(err)
            setError(true);
          })
      };
      activationEmail();
    }
  }, [activationToken]);
  
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your Token is Expired</p>
      ) : (
        <p>Your account has been created succesfully</p>
      )}
    </div>
  );
};

export default ActivationPage;

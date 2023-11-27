import axios from "axios";
import { Result } from "postcss";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function UserInfo() {
  const Customer = useLoaderData();
  console.log(Customer);
  //   const [Customer, setCustomer] = useState([{}]);
  //   useEffect(() => {
  //     loadCustomer();
  //   }, []);

  //   const loadCustomer = async () => {
  //     const allCustomer = await axios.get(
  //       "http://localhost:8080/customer/allCustomer"
  //     );
  //     setCustomer(allCustomer.data);
  //     console.log(allCustomer.data);
  //   };
  return (
    <>
      <div>
        <h2>my total customer is {Customer}</h2>
      </div>
    </>
  );
}

export default UserInfo;

export const userInfoLoader = async () => {
  const result = await axios.get(
    "http://localhost:8080/customer/totalCustomer"
  );
  return result.data;
};

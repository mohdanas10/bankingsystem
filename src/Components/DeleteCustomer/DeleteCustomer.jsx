import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function DeleteCustomer() {
  const navigate = useNavigate();
  const param = useParams();
  const [customer, setCustomer] = useState({});
  const [amount, setAmount] = useState(0);
  const [owner, setOwner] = useState("");
  const [error, setError] = useState("");
  console.log(owner);
  useEffect(() => {
    customerLoad();
  }, []);
  const customerLoad = async () => {
    const result = await axios.get(
      `http://localhost:8080/customer/customerById/${param.id}`
    );
    setCustomer(result.data);
    const rs = await axios.get(
      `http://localhost:8080/customer/totalAmount/${param.id}`
    );
    setAmount(rs.data);
  };

  const buttonHandler = async (e) => {
    e.preventDefault();
    if (owner != "Anas@580") {
      setError("plz enter the valid Owner Id !!");
    } else {
      await axios.delete(
        `http://localhost:8080/customer/deleteCustomer/${param.id}`
      );
      await axios.delete(
        `http://localhost:8080/customer/deleteTransactions/${param.id}`
      );
      navigate("/customertables");
    }
  };

  return (
    <div>
      &lt;&gt;
      <div className="h-screen bg-gray-800">
        <div className="pt-10 md:pt-20">
          <div className="p-4 md:p-8">
            <h1 className="text-white  text-center pb-8 font-bold text-4xl md:text-5xl lg:text-6xl">
              Delete Customer
            </h1>
            <form className="flex flex-col items-center">
              <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
                <div className="flex flex-col md:flex-row">
                  <input
                    id="name"
                    type="text"
                    className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Name"
                    value={"Name -> " + customer.name}
                  />
                  <input
                    id="email"
                    type="text"
                    className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Email"
                    value={"Age -> " + customer.age}
                  />
                  <input
                    id="email"
                    type="sex"
                    className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="text"
                    value={"Sex -> " + customer.sex}
                  />
                </div>
                <input
                  id="email"
                  type="text"
                  className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Email"
                  value={"Email -> " + customer.email}
                />
                <input
                  id="email"
                  type="text"
                  className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Email"
                  value={"Aadhar -> " + customer.aadhar}
                />
                <input
                  id="email"
                  type="text"
                  className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Email"
                  value={"Total Amount -> " + amount}
                />
                <p className="text-red-600">{error}</p>
                <input
                  id=""
                  type="password"
                  className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter Owner id "
                  onChange={(e) => {
                    setError("");
                    setOwner(e.target.value);
                  }}
                />
              </div>
              <button
                onClick={buttonHandler}
                className="border-2 text-md mt-5 rounded-md py-2 px-4 bg-red-400 hover:bg-blue-700 text-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Delete Customer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteCustomer;

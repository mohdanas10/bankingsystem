import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AccountManager() {
  const navigate = useNavigate();
  const param = useParams();
  const [customer, setCustomer] = useState({});
  const [creditAmount, setCreditAmount] = useState(0);
  const [creditOwner, setCreditOwner] = useState("");
  const [creditOwnerError, setCreditOwnerError] = useState("");

  const [debitAmount, setDebitAmount] = useState(0);
  const [debitOwner, setDebitOwner] = useState("");
  const [debitAmountError, setDebitAmountError] = useState("");
  const [error, setError] = useState("");
  const [amount, setAmount] = useState(0);

  const creditHandler = async () => {
    if (creditOwner != "Anas@580") {
      setCreditOwnerError("plz enter the valid Owner Id !! ");
    } else {
      const Data = {
        tranId: customer.id,
        creditAmount: creditAmount,
        debitAmount: debitAmount,
        totalAmount: 0,
      };
      const result = await axios.post(
        "http://localhost:8080/customer/addTransactions",
        Data
      );

      const rs = await axios.get(
        `http://localhost:8080/customer/totalAmount/${param.id}`
      );
      setAmount(rs.data);
      setCreditOwner("");
    }
  };

  const debitHandler = async () => {
    if (debitOwner != "Anas@580") {
      setDebitAmountError("plz enter the valid Owner Id !! ");
    } else {
      const Data = {
        tranId: customer.id,
        creditAmount: creditAmount,
        debitAmount: debitAmount,
        totalAmount: 0,
      };
      const rs = await axios.put(
        `http://localhost:8080/customer/debitTransactions/${param.id}`,
        Data
      );
      setError(rs.data);
      console.log(rs.data);

      const result = await axios.get(
        `http://localhost:8080/customer/totalAmount/${param.id}`
      );
      setAmount(result.data);
      setDebitOwner("");
    }
  };

  const loadCustomer = async () => {
    const result = await axios.get(
      `http://localhost:8080/customer/customerById/${param.id}`
    );
    const rs = await axios.get(
      `http://localhost:8080/customer/totalAmount/${param.id}`
    );
    setAmount(rs.data);

    setCustomer(result.data);
  };

  useEffect(() => {
    loadCustomer();
  }, []);

  return (
    <div className="bg-black">
      &lt;&gt;
      <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6 ">
        <div className="text-center mb-10 ">
          <h2 className="text-4xl tracking-tight font-bold text-primary-800 text-white">
            Manage Accounts
          </h2>
        </div>
        <div className="flex flex-col md:flex-row ">
          {/* can help image */}
          <div className="mr-0 md:mr-8 mb-6 md:mb-0">
            <img
              className="w-1/2 md:w-full mx-auto"
              src="https://placeholder.pics/svg/400"
              alt="can_help_banner"
            />
          </div>
          {/* end can help image */}
          <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2 ">
            <div className="bg-black text-white rounded-lg w-full sm:w-1/2 mb-4 px-2 hover:bg-slate-600 hover:text-white">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6">
                  Credit Amount
                </h3>
                <label className="mt-0" htmlFor="">
                  {" "}
                  Credit Amount
                </label>
                <input
                  onChange={(e) => {
                    setCreditAmount(e.target.value);
                  }}
                  className="text-black m-2 p-2 rounded-lg"
                  type="number"
                />
                <label htmlFor="" className="">
                  {" "}
                  Owner Id
                </label>
                <input
                  className="text-black m-2 ml-2 p-2 rounded-lg"
                  type="password"
                  value={creditOwner}
                  onChange={(e) => {
                    setCreditOwner(e.target.value);
                    setCreditOwnerError("");
                  }}
                />
                <p className="text-red-500">{creditOwnerError}</p>
                <button
                  onClick={creditHandler}
                  className="bg-blue-400 m-3 p-4 rounded-lg"
                >
                  Credit
                </button>
              </div>
            </div>
            <div className="bg-black text-white w-full sm:w-1/2 mb-4 px-2 hover:bg-red-950 hover:text-white">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6">
                  Debit Amount
                </h3>
                <label htmlFor="" className="">
                  {" "}
                  Debit Amount
                </label>
                <input
                  onChange={(e) => {
                    setDebitAmount(e.target.value);
                  }}
                  className="text-black m-2 ml-2 p-2 rounded-lg"
                  type="number"
                />
                <label htmlFor="" className="">
                  {" "}
                  Owner Id
                </label>
                <input
                  value={debitOwner}
                  onChange={(e) => {
                    setDebitOwner(e.target.value);
                    setDebitAmountError("");
                  }}
                  className="text-black m-2 ml-2 p-2 rounded-lg"
                  type="password"
                />
                <p className="text-red-500">{debitAmountError + error}</p>
                <button
                  onClick={debitHandler}
                  className="bg-orange-400 m-3 p-4 rounded-lg"
                >
                  Debit
                </button>
              </div>
            </div>
            <div className="bg-black text-white w-full sm:w-1/2 mb-4 px-2 hover:bg-purple-600 hover:text-white">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6">
                  Customer details
                </h3>
                <p className="font-bold">Name : {customer.name} </p>
                <p className="font-bold">Aadhar : {customer.aadhar} </p>
                <p className="font-bold">Age : {customer.age}</p>
                <p className="font-bold">Sex : {customer.sex}</p>
                <p className="font-bold">Id : {customer.id}</p>
                <p className="font-bold">Email : {customer.email}</p>
              </div>
            </div>
            <div className="bg-black text-white w-full sm:w-1/2 mb-4 px-2 hover:bg-red-950 hover:text-white">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6 text-center">
                  Total Amount
                </h3>
                <h1 className="text-5xl text-center">{amount}</h1>
                <div className="text-center mt-2 p-5 m-9 ">
                  <button
                    onClick={() => {
                      navigate(`/transactionstables/${param.id}`);
                    }}
                    className="bg-blue-400 text-black font-bold hover:bg-slate-400 text-center p-4 rounded-3xl"
                  >
                    Transactions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountManager;

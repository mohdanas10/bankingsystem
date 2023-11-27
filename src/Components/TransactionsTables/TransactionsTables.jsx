import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TransactionsTables() {
  const [transactions, setTransactions] = useState([]);
  const [debitAmount, setDebitAmount] = useState("0");
  const [credit, setCredit] = useState("");
  const [customer, setCustomer] = useState({});
  const param = useParams();
  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    const result = await axios.get(
      `http://localhost:8080/customer/allTransactions/${param.id}`
    );
    const res = await axios.get(
      `http://localhost:8080/customer/customerById/${param.id}`
    );
    setCustomer(res.data);
    console.log(res.data);
    setTransactions(result.data);
    console.log(result.data);
  };
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-black">
        <input
          className="bg-black text-white"
          value={"Name -> " + customer.name}
          type="text"
        />
        <input
          className="bg-black text-white"
          value={"Customer Id -> " + customer.id}
          type="text"
        />
        <input
          className="bg-black text-white"
          value={"Age -> " + customer.age}
          type="text"
        />

        <table id="example" className="table-auto w-full text-white">
          <thead>
            <tr>
              <th className="px-4 py-2">Transactions Id</th>
              <th className="px-4 py-2">Credit Amount</th>
              <th className="px-4 py-2">Debit Amount</th>
              <th className="px-4 py-2">Total Amount</th>
              <th className="px-4 py-2">Transactions Type</th>
              <th className="px-4 py-2">Transaction Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((item) => {
              if (item.debitAmount == 0) {
                return (
                  <tr>
                    <td className="border px-4 py-2">{item.id}</td>
                    <td className="border px-4 py-2 text-green-400">
                      {item.creditAmount}
                    </td>
                    <td className="border px-4 py-2 text-red-500">{" -- "}</td>
                    <td className="border px-4 py-2 text-purple-400">
                      {item.totalAmount}
                    </td>
                    <td className="border px-4 py-2">Banking</td>
                    <td className="border px-4 py-2 text-green-400">success</td>
                  </tr>
                );
              }
              return (
                <tr>
                  <td className="border px-4 py-2">{item.id}</td>
                  <td className="border px-4 py-2 text-green-400">{"--"}</td>
                  <td className="border px-4 py-2 text-red-500">
                    {item.debitAmount}
                  </td>
                  <td className="border px-4 py-2 text-purple-400">
                    {item.totalAmount}
                  </td>
                  <td className="border px-4 py-2">Banking</td>
                  <td className="border px-4 py-2 text-green-400">success</td>
                </tr>
              );
            })}
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      <link
        rel="stylesheet"
        href="https://cdn.datatables.net/1.10.25/css/jquery.dataTables.min.css"
      />
    </div>
  );
}

export default TransactionsTables;

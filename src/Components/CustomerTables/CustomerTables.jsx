import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CustomerTables() {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    loadCustomer();
  }, []);

  const loadCustomer = async () => {
    const allCustomer = await axios.get(
      "http://localhost:8080/customer/allCustomer"
    );
    setCustomer(allCustomer.data);
  };
  console.log(customer);
  return (
    <>
      <table class="min-w-full divide-y divide-gray-200 bg-black text-white mt-0 ">
        <thead>
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Age
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Sex
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody class=" divide-y divide-gray-200 ">
          {customer.map((item) => {
            return (
              <tr className="hover:bg-gray-900">
                <td class="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td class="px-6 py-4 whitespace-nowrap">{item.email}</td>
                <td class="px-6 py-4 whitespace-nowrap">{item.age}</td>
                <td class="px-6 py-4 whitespace-nowrap">{item.sex}</td>

                <td class="px-6 py-4 whitespace-nowrap">
                  <button class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                    <Link to={`/editcustomer/${item.id}`}>Edit</Link>
                  </button>
                  <button class="ml-2 px-4 py-2 font-medium text-white bg-green-900 rounded-md hover:bg-green-800 focus:outline-none focus:shadow-outline-red active:bg-green-900 transition duration-150 ease-in-out">
                    <Link to={`/accountmanager/${item.id}`}>Balance</Link>
                  </button>
                  <button class="ml-2 px-4 py-2 font-medium text-white bg-purple-900 rounded-md hover:bg-purple-900 focus:outline-none focus:shadow-outline-red active:bg-purple-900 transition duration-150 ease-in-out">
                    <Link to={`/transactionstables/${item.id}`}>
                      Transactions
                    </Link>
                  </button>
                  <button class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                    <Link to={`/deletecustomer/${item.id}`}>Delete</Link>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default CustomerTables;

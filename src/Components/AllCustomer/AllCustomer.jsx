import React from "react";

function AllCustomer() {
  return (
    <div className="bg-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-red-100">
        <h2 className="text-2xl font-bold mb-4">Example Datatable</h2>
        <table id="example" className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Position</th>
              <th className="px-4 py-2">Office</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Start date</th>
              <th className="px-4 py-2">Salary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Tiger Nixon</td>
              <td className="border px-4 py-2">System Architect</td>
              <td className="border px-4 py-2">Edinburgh</td>
              <td className="border px-4 py-2">61</td>
              <td className="border px-4 py-2">2011/04/25</td>
              <td className="border px-4 py-2">$320,800</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Garrett Winters</td>
              <td className="border px-4 py-2">Accountant</td>
              <td className="border px-4 py-2">Tokyo</td>
              <td className="border px-4 py-2">63</td>
              <td className="border px-4 py-2">2011/07/25</td>
              <td className="border px-4 py-2">$170,750</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Ashton Cox</td>
              <td className="border px-4 py-2">Junior Technical Author</td>
              <td className="border px-4 py-2">San Francisco</td>
              <td className="border px-4 py-2">66</td>
              <td className="border px-4 py-2">2009/01/12</td>
              <td className="border px-4 py-2">$86,000</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Cedric Kelly</td>
              <td className="border px-4 py-2">Senior Javascript Developer</td>
              <td className="border px-4 py-2">Edinburgh</td>
              <td className="border px-4 py-2">22</td>
              <td className="border px-4 py-2">2012/03/29</td>
              <td className="border px-4 py-2">$433,060</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Airi Satou</td>
              <td className="border px-4 py-2">Accountant</td>
              <td className="border px-4 py-2">Tokyo</td>
              <td className="border px-4 py-2">33</td>
              <td className="border px-4 py-2">2008/11/28</td>
              <td className="border px-4 py-2">$162,700</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Brielle Williamson</td>
              <td className="border px-4 py-2">Integration Specialist</td>
              <td className="border px-4 py-2">New York</td>
              <td className="border px-4 py-2">61</td>
              <td className="border px-4 py-2">2012/12/02</td>
              <td className="border px-4 py-2">$372,000</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Herrod Chandler</td>
              <td className="border px-4 py-2">Sales Assistant</td>
              <td className="border px-4 py-2">San Francisco</td>
              <td className="border px-4 py-2">59</td>
              <td className="border px-4 py-2">2012/08/06</td>
              <td className="border px-4 py-2">$137,500</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Herrod Chandler</td>
              <td className="border px-4 py-2">Sales Assistant</td>
              <td className="border px-4 py-2">San Francisco</td>
              <td className="border px-4 py-2">59</td>
              <td className="border px-4 py-2">2012/08/06</td>
              <td className="border px-4 py-2">$137,500</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Ashton Cox</td>
              <td className="border px-4 py-2">Junior Technical Author</td>
              <td className="border px-4 py-2">San Francisco</td>
              <td className="border px-4 py-2">66</td>
              <td className="border px-4 py-2">2009/01/12</td>
              <td className="border px-4 py-2">$86,000</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Cedric Kelly</td>
              <td className="border px-4 py-2">Senior Javascript Developer</td>
              <td className="border px-4 py-2">Edinburgh</td>
              <td className="border px-4 py-2">22</td>
              <td className="border px-4 py-2">2012/03/29</td>
              <td className="border px-4 py-2">$433,060</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Airi Satou</td>
              <td className="border px-4 py-2">Accountant</td>
              <td className="border px-4 py-2">Tokyo</td>
              <td className="border px-4 py-2">33</td>
              <td className="border px-4 py-2">2008/11/28</td>
              <td className="border px-4 py-2">$162,700</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Brielle Williamson</td>
              <td className="border px-4 py-2">Integration Specialist</td>
              <td className="border px-4 py-2">New York</td>
              <td className="border px-4 py-2">61</td>
              <td className="border px-4 py-2">2012/12/02</td>
              <td className="border px-4 py-2">$372,000</td>
            </tr>
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

export default AllCustomer;

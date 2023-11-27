import React from "react";

function About() {
  return (
    <>
      <div class="sm:flex items-center max-w-screen-xl">
        <div class="sm:w-1/2 p-10">
          <div class="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" />
          </div>
        </div>
        <div class="sm:w-1/2 p-5">
          <div class="text">
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">
              About <span class="text-indigo-600">Our Banking System</span>
            </h2>
            <p class="text-gray-700">
              Banks are the financial institutions having the primary purpose of
              lending money to individuals/solopreneurs/businesses, receiving
              deposits, disburse payments, safeguarding money, and investing in
              stocks/bonds. They offer various services to assist individuals in
              managing their finance, such as savings/current/Demat account,
              debit & credit cards, loans, certificate of deposit, wealth
              management services, safe deposit boxes, and investment-related
              services. Banks are a crucial element holding utmost importance in
              the modern economy. They are the crucial financial institution
              every economy needs to survive. Here is the list of financial
              regulators in India on which the Indian economy is dependent
              immensely:
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import axios from "axios";

function AdminHome() {
  const navigate = useNavigate();
  const [totalCustomer, setTotalCustomer] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const clickHandler = () => {
    navigate("/createaccount");
  };
  const [searchInput, setSearchInput] = useState();
  const [error, setError] = useState("");

  const searchHandler = async () => {
    console.log(searchInput);
    const id = Number(searchInput);

    const rs = await axios.get(
      `http://localhost:8080/customer/searchCustomer/${id}`
    );
    if (rs.data == "customer not found") {
      setError(rs.data);
      console.log(rs.data);
    } else {
      navigate(`/accountmanager/${id}`);
    }
  };

  useEffect(() => {
    loadCustomer();
  }, []);

  const loadCustomer = async () => {
    const res = await axios.get("http://localhost:8080/customer/totalCustomer");
    setTotalCustomer(res.data);
    const result = await axios.get(
      "http://localhost:8080/customer/totalCustomer"
    );
  };
  return (
    <>
      <div>
        {/* source https://gist.github.com/dsursulino/369a0998c0fc8c25e19962bce729674f */}
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
          rel="stylesheet"
        />
        <div className="bg-orange-100 min-h-screen">
          <div className="fixed bg-white text-blue-800 px-10 py-1 z-10 w-full">
            <div className="flex items-center justify-between py-2 text-5x1">
              <div className="font-bold text-blue-900 text-xl">
                Admin<span className="text-orange-600">Panel</span>
              </div>
              <div className="flex items-center text-gray-500">
                <span
                  className="material-icons-outlined p-2"
                  style={{ fontSize: 30 }}
                >
                  search
                </span>
                <span
                  className="material-icons-outlined p-2"
                  style={{ fontSize: 30 }}
                >
                  notifications
                </span>
                <div
                  className="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 ml-2"
                  style={{
                    backgroundImage:
                      "url(https://i.pinimg.com/564x/de/0f/3d/de0f3d06d2c6dbf29a888cf78e4c0323.jpg)",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row pt-24 px-10 pb-4">
            <div className="w-2/12 mr-6">
              <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
                <a
                  href
                  className="inline-block text-gray-600 hover:text-black my-4 w-full"
                >
                  <span className="material-icons-outlined float-left pr-2 font-bold">
                    dashboard
                  </span>
                  <Link
                    to="/customertables"
                    className="font-bold hover:bg-purple-200 cursor-pointer"
                  >
                    All Customer
                  </Link>
                  <span className="material-icons-outlined float-right">
                    keyboard_arrow_right
                  </span>
                </a>
                <a
                  href
                  className="inline-block text-gray-600 hover:text-black my-4 w-full"
                >
                  <span className="material-icons-outlined float-left pr-2">
                    tune
                  </span>
                  <span className="font-bold hover:bg-purple-200 cursor-pointer">
                    <Link
                      to={"/userinfo"}
                      className="font-bold hover:bg-purple-200 cursor-pointer"
                    >
                      UserInfo
                    </Link>
                  </span>

                  <span className="material-icons-outlined float-right">
                    keyboard_arrow_right
                  </span>
                </a>
                <a
                  href
                  className="inline-block text-gray-600 hover:text-black my-4 w-full"
                >
                  <span className="material-icons-outlined float-left pr-2">
                    file_copy
                  </span>
                  Another menu item
                  <span className="material-icons-outlined float-right">
                    keyboard_arrow_right
                  </span>
                </a>
              </div>
              <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
                <a
                  href
                  className="inline-block text-gray-600 hover:text-black my-4 w-full"
                >
                  <span className="material-icons-outlined float-left pr-2">
                    face
                  </span>
                  Profile
                  <span className="material-icons-outlined float-right">
                    keyboard_arrow_right
                  </span>
                </a>
                <a
                  href
                  className="inline-block text-gray-600 hover:text-black my-4 w-full"
                >
                  <span className="material-icons-outlined float-left pr-2">
                    settings
                  </span>
                  Settings
                  <span className="material-icons-outlined float-right">
                    keyboard_arrow_right
                  </span>
                </a>
                <a
                  href
                  className="inline-block text-gray-600 hover:text-black my-4 w-full"
                >
                  <span className="material-icons-outlined float-left pr-2">
                    power_settings_new
                  </span>
                  Log out
                  <span className="material-icons-outlined float-right">
                    keyboard_arrow_right
                  </span>
                </a>
              </div>
            </div>
            <div className="w-10/12">
              <div className="flex flex-row">
                <div
                  className="bg-no-repeat bg-red-200 border border-red-300 rounded-xl w-7/12 mr-2 p-6"
                  style={{
                    backgroundImage:
                      "url(https://previews.dropbox.com/p/thumb/AAvyFru8elv-S19NMGkQcztLLpDd6Y6VVVMqKhwISfNEpqV59iR5sJaPD4VTrz8ExV7WU9ryYPIUW8Gk2JmEm03OLBE2zAeQ3i7sjFx80O-7skVlsmlm0qRT0n7z9t07jU_E9KafA9l4rz68MsaZPazbDKBdcvEEEQPPc3TmZDsIhes1U-Z0YsH0uc2RSqEb0b83A1GNRo86e-8TbEoNqyX0gxBG-14Tawn0sZWLo5Iv96X-x10kVauME-Mc9HGS5G4h_26P2oHhiZ3SEgj6jW0KlEnsh2H_yTego0grbhdcN1Yjd_rLpyHUt5XhXHJwoqyJ_ylwvZD9-dRLgi_fM_7j/p.png?fv_content=true&size_mode=5)",
                    backgroundPosition: "90% center",
                  }}
                >
                  <p className="text-5xl text-indigo-900">
                    Welcome to Banking Managent System <br />
                    <strong>Trustable Users and better infastructures</strong>
                  </p>
                  <span className="bg-red-300 text-xl text-white inline-block rounded-full mt-12 px-8 py-2">
                    <strong>{moment().format("LT")}</strong>
                  </span>
                </div>
                <div
                  className="bg-no-repeat bg-orange-200 border border-orange-300 rounded-xl w-5/12 ml-2 p-6"
                  style={{
                    backgroundImage:
                      "url(https://previews.dropbox.com/p/thumb/AAuwpqWfUgs9aC5lRoM_f-yi7OPV4txbpW1makBEj5l21sDbEGYsrC9sb6bwUFXTSsekeka5xb7_IHCdyM4p9XCUaoUjpaTSlKK99S_k4L5PIspjqKkiWoaUYiAeQIdnaUvZJlgAGVUEJoy-1PA9i6Jj0GHQTrF_h9MVEnCyPQ-kg4_p7kZ8Yk0TMTL7XDx4jGJFkz75geOdOklKT3GqY9U9JtxxvRRyo1Un8hOObbWQBS1eYE-MowAI5rNqHCE_e-44yXKY6AKJocLPXz_U4xp87K4mVGehFKC6dgk_i5Ur7gspuD7gRBDvd0sanJ9Ybr_6s2hZhrpad-2WFwWqSNkh/p.png?fv_content=true&size_mode=5)",
                    backgroundPosition: "100% 40%",
                  }}
                >
                  <p className="text-5xl text-indigo-900">
                    Total Customers <br />
                    <strong>{totalCustomer}</strong>
                  </p>
                  <a
                    href
                    className="bg-orange-300 text-xl text-white underline hover:no-underline inline-block rounded-full mt-12 px-8 py-2"
                  >
                    <strong>See messages</strong>
                  </a>
                </div>
              </div>
              <div className="flex flex-row h-64 mt-6 ">
                <div
                  onClick={clickHandler}
                  className="text-white hover:bg-pink-950 rounded-xl shadow-lg px-6 py-4 w-4/12 hover: bg-pink-700 cursor-pointer"
                >
                  <div class="grid gap-4 justify-items-center text-center md:flex-1 ">
                    <div class=" rounded-full border-8 border-amber-400 p-4 hover: bg-slate-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-14 h-14"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        ></path>
                      </svg>
                    </div>
                    <h3 class="text-3xl font-bold ">Open Account </h3>
                    <p>this process are secure and private all of users</p>
                  </div>
                </div>
                <div className="bg-green-200 text-black  hover:bg-green-400 rounded-xl shadow-lg mx-6 px-6 py-4 w-4/12 cursor-pointer">
                  <div class="grid gap-4 justify-items-center text-center md:flex-1">
                    {/* <div class=" rounded-full border-8 border-amber-400 p-4 hover: bg-slate-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-14 h-14"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        ></path>
                      </svg>
                    </div> */}
                    <h3 class="text-3xl font-bold ">Search Customer </h3>
                    <p>this process are secure and private all of users</p>
                    <div>
                      <input
                        onChange={(e) => {
                          setSearchInput(e.target.value);
                          setError("");
                        }}
                        type="number"
                        name="q"
                        id="query"
                        placeholder="Enter Customer Id "
                        className="text-black font-bold w-full p-3 rounded-md border-2 border-r-white rounded-r-none border-gray-300 placeholder-gray-500 dark:placeholder-gray-300 dark:bg-gray-500dark:text-gray-300 dark:border-none "
                      />
                      <p className="text-red-700 font-bold">{error}</p>
                      <button
                        onClick={searchHandler}
                        className="mt-2 rounded-lg p-4 inline-flex items-center gap-2 bg-violet-700 text-white text-lg font-semibold py-3 px-6 rounded-r-md"
                      >
                        <span>search</span>
                        <span className="hidden md:block">
                          <svg
                            className="text-gray-200 h-5 w-5 p-0 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 56.966 56.966"
                            style={{
                              enableBackground: "new 0 0 56.966 56.966",
                            }}
                            xmlSpace="preserve"
                            width="512px"
                            height="512px"
                          >
                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => {
                    navigate("/customertables");
                  }}
                  className="text-white bg-red-800 hover:bg-red-950 rounded-xl shadow-lg px-6 py-4 w-4/12 cursor-pointer"
                >
                  <div class="grid gap-4 justify-items-center text-center md:flex-1 ">
                    <div class=" rounded-full border-8 border-amber-400 p-4 hover: bg-slate-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-14 h-14"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        ></path>
                      </svg>
                    </div>
                    <h3 class="text-3xl font-bold">All Customer </h3>
                    <p>this process are secure and private all of users</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminHome;

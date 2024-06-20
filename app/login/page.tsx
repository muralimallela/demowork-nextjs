"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

function Login() {
  const router = useRouter();
  const initialFormdata = {
    email: "",
    password: "",
  };
  const [formData, setFormdata] = useState(initialFormdata);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormdata({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      formData.email === "mmallela9@gmail.com" &&
      formData.password === "Murali@123"
    ) {
        router.push("/dashboard");
    } else {
      toast.error("😔 Invalid email or password!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      setFormdata(initialFormdata);
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 ">
        <h1 className="text-4xl lg:text-5xl text-center font-bold text-primary sm:text-3xl">
          ChallanEase
        </h1>
        <Image
          src="/8170283-removebg-preview (1).png"
          alt="Image"
          className="w-full h-auto -mt-10 lg:mt-6"
          width={500}
          height={500}
        />
      </div>
      <div className="w-full md:w-1/2 p-0 ">
        <section className="relative z-10 overflow-hidden md:pb-20">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 lg:px-28">
                <div className="mx-auto max-w-[500px] rounded bg-white px-1 py-5 shadow-three dark:bg-background">
                  <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                    Welcome back, <br /> Login
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-bold text-dark dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your Email"
                        className="border-stroke w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                    <div className="mb-8">
                      <label
                        htmlFor="password"
                        className="mb-3 block text-sm font-bold text-dark dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder="Enter your Password"
                        className="border-stroke w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                    <div className="mb-8 flex flex-wrap justify-between sm:flex-row sm:items-center">
                      <div className="mb-4 sm:mb-0">
                        <label
                          htmlFor="checkboxLabel"
                          className="flex cursor-pointer select-none items-center text-sm font-medium text-body-color"
                        >
                          <div className="relative">
                            <input
                              type="checkbox"
                              id="checkboxLabel"
                              className="sr-only"
                            />
                            <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
                              <span className="opacity-0">
                                <svg
                                  width="11"
                                  height="8"
                                  viewBox="0 0 11 8"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                    fill="#3056D3"
                                    stroke="#3056D3"
                                    strokeWidth="0.4"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                          Keep me signed in
                        </label>
                      </div>
                      <div>
                        <a
                          href="#0"
                          className="text-sm font-medium text-primary hover:underline"
                        >
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                    <div className="mb-6">
                      <button className="flex w-full items-center justify-center rounded-xl bg-primary px-9 py-3 text-lg font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                        Login
                      </button>
                    </div>
                  </form>
                  <div className="flex items-center mt-8 mb-8">
                    <div className="border-t border-body-color w-full"></div>
                    <div className="mx-4 text-sm text-body-color">OR</div>
                    <div className="border-t border-body-color w-full"></div>
                  </div>

                  {/* Google button  */}
                  <button className="border-stroke mb-6 flex w-full items-center justify-center rounded-3xl border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none">
                    <span className="mr-3">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M20 10.2217C20.0122 9.53427 19.9397 8.84788 19.7844 8.17737H10.2042V11.8884H15.8277C15.7211 12.5391 15.4814 13.1619 15.1229 13.7195C14.7644 14.277 14.2946 14.7578 13.7416 15.1328L13.722 15.2571L16.7512 17.5568L16.961 17.5774C18.8883 15.833 19.9997 13.2662 19.9997 10.2217"
                            fill="#4285F4"
                          />
                          <path
                            d="M10.2042 20.0001C12.9592 20.0001 15.2721 19.1111 16.9616 17.5778L13.7416 15.1332C12.88 15.7224 11.7235 16.1334 10.2042 16.1334C8.91385 16.126 7.65863 15.7207 6.61663 14.9748C5.57464 14.2287 4.79879 13.1802 4.39915 11.9778L4.27957 11.9879L1.12973 14.3767L1.08856 14.4888C1.93689 16.1458 3.23879 17.5388 4.84869 18.512C6.45859 19.4853 8.31301 20.0006 10.2046 20.0001"
                            fill="#34A853"
                          />
                          <path
                            d="M4.39911 11.9778C4.17592 11.3412 4.06075 10.6731 4.05819 9.99996C4.0623 9.328 4.17322 8.66076 4.38696 8.02227L4.38127 7.8897L1.19282 5.46242L1.08852 5.51103C0.372885 6.90345 0.00012207 8.44081 0.00012207 9.99988C0.00012207 11.5589 0.372885 13.0963 1.08852 14.4887L4.39911 11.9778Z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M10.2042 3.86674C11.6663 3.84449 13.0804 4.37814 14.1498 5.35569L17.0296 2.60006C15.1826 0.901956 12.7366 -0.029776 10.2042 -3.68247e-05C8.3126 -0.000501633 6.45819 0.514708 4.8483 1.48802C3.2384 2.46128 1.93649 3.85419 1.08813 5.51103L4.38775 8.02227C4.79132 6.82007 5.56974 5.77233 6.61327 5.02677C7.6568 4.2812 8.91279 3.87543 10.2042 3.86674Z"
                            fill="#EB4335"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    Continue with Google
                  </button>
                  {/* Google button  */}

                  <p className="p-4 mt-6 text-base font-medium text-body-color">
                    Don’t you have an account?{" "}
                    <a href="/signup" className="text-primary hover:underline">
                      Register
                    </a>
                  </p>
                  <p className="text-left p-4  text-base font-medium text-body-color">
                    Are you an officer?{" "}
                    <a href="/signup" className="text-primary hover:underline">
                      Register
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <ToastContainer />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;

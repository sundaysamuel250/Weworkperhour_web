import React, { useState } from "react";
import { Link } from "react-router-dom";
import Images from "../constant/Images";

const AccountVerification: React.FC = () => {
  const [code, setCode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("verify-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "contact@weworkperhour.com", // Example email or retrieved from the form
          verificationCode: code, // Code from user input
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Handle success (e.g., show success message)
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        console.error(errorData.message); // Handle error (e.g., show error message)
      }
    } catch (error) {
      console.error("Error verifying account:", error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md xl:max-w-[1300px] lg:max-w-[900px] mx-auto gap-8 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 p-8">
          {submitted ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Account Verified</h2>
              <p>Your account has been successfully verified!</p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-center mb-6">
                Verify Your Account
              </h2>
              <p className="text-center mb-6 text-gray-700">
                Please enter the verification code sent to your email.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="code"
                  >
                    Verification Code
                  </label>
                  <input
                    id="code"
                    type="text"
                    className="w-full px-4 py-2 border-[1px] rounded-[2px] text-gray-700 focus:outline-none focus:border-[#2aa100]"
                    placeholder="Enter verification code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
               className="w-full bg-[#ee009d] text-white font-bold py-2 px-4 rounded hover:bg-[#2aa100] transition-transform ease-in-out duration-300 hover:scale-110"
                >
                  Verify Account
                </button>
              </form>
              <p className="text-center mt-4 text-gray-600">
                Didn't receive a code?{" "}
                <Link to="/" className="text-[#2aa100] hover:underline">
                  Resend
                </Link>
              </p>
            </>
          )}
        </div>
        <div className="w-full lg:w-1/2">
          <img src={Images.LoginImage} alt="login" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default AccountVerification;

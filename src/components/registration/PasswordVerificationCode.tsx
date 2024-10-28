import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { httpPostWithoutToken } from "../../utils/http_utils"; // Ensure this function is defined and works correctly
import { useToast } from "@chakra-ui/react";
import Images from "../constant/Images";

const PasswordVerificationCode: React.FC<{ length: number }> = ({ length }) => {
  const [code, setCode] = useState<string[]>(Array(length).fill(""));
  const [error, setError] = useState<string | null>(null);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const location = useLocation();
  const email = location.state?.email; // Ensure email is correctly passed from the previous route
  const navigate = useNavigate();
  const toast = useToast();

  const handleChange = (value: string, index: number) => {
    const newCode = [...code];
    newCode[index] = value.slice(0, 1); // Limit input to 1 character
    setCode(newCode);

    // Move to next input if current input is filled
    if (value && index < length - 1) {
      document.getElementById(`code-${index + 1}`)?.focus();
    }

    // Move back to previous input if current input is empty
    if (!value && index > 0) {
      document.getElementById(`code-${index - 1}`)?.focus();
    }
  };

  const handleSubmit = async () => {
    const codeString = code.join("");
    if (codeString.length === length && email) {
      setIsSubmitting(true);
      setError(null); // Reset error on new submission
      try {
        const response = await httpPostWithoutToken("verify-token", { email, token: codeString });
        setIsSubmitting(false);

        if (response.status === "success") {
          setIsVerified(true);
          toast({
            status: "success",
            title: "Code Verified",
            description: "Verification successful! You can now reset your password.",
            isClosable: true,
            duration: 4000,
          });
        } else {
          setError(response.message || "Verification failed. Please try again.");
        }
      } catch (error) {
        setIsSubmitting(false);
        console.error("Error in verification submit:", error); // Log error for debugging
        setError("An error occurred. Please try again.");
      }
    } else {
      setError("Please enter the full code.");
    }
  };

  const handlePasswordReset = async () => {
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (email) {
      setIsSubmitting(true);
      setError(null); // Reset error on new submission
      try {
        const response = await httpPostWithoutToken("reset-password", {
          email,
          password: newPassword,
        });
        setIsSubmitting(false);

        if (response.status === "success") {
          toast({
            status: "success",
            title: "Password Reset Successful",
            description: "You can now log in with your new password.",
            isClosable: true,
            duration: 4000,
          });
          navigate("/login");
        } else {
          setError(response.message || "Password reset failed. Please try again.");
        }
      } catch (error) {
        setIsSubmitting(false);
        console.error("Error in password reset:", error); // Log error for debugging
        setError("An error occurred. Please try again.");
      }
    } else {
      setError("Email is missing.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md xl:max-w-[1300px] lg:max-w-[900px] mx-auto flex flex-col lg:flex-row items-center">
        {!isVerified ? (
          <div className="w-full lg:w-1/2 p-20">
            <h1 className="text-2xl font-semibold mb-6">Enter Verification Code</h1>
            <p className="mb-4">
              A verification code has been sent to: <strong>{email}</strong>
            </p>
            <div className="flex gap-4 mb-4">
              {code.map((value, index) => (
                <input
                  key={index}
                  id={`code-${index}`}
                  type="text"
                  maxLength={1}
                  className="w-12 h-12 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-xl"
                  value={value}
                  onChange={(e) => handleChange(e.target.value, index)}
                />
              ))}
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              className={`bg-[#ee009d] text-white px-6 py-2 rounded font-medium hover:bg-[#2aa100] transition-transform ease-in-out duration-300 hover:scale-110 ${isSubmitting ? "opacity-50" : ""}`}
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        ) : (
          <div className="w-full lg:w-1/2 p-20">
            <h1 className="text-2xl font-semibold mb-6">Reset Your Password</h1>
            <div className="flex flex-col gap-4 mb-4">
              <input
                type="password"
                placeholder="New Password"
                className="w-full p-2 border-b-[1.5px] focus:outline-none focus:ring-1 focus:ring-[#2aa100]"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full p-2 border-b-[1.5px] focus:outline-none focus:ring-1 focus:ring-[#2aa100]"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {error && <p className="text-red-500 mb-4">{error}</p>}
            </div>
            <button
              className={`bg-[#ee009d] text-white px-6 py-2 rounded font-medium hover:bg-[#2aa100] transition-transform ease-in-out duration-300 hover:scale-110 ${isSubmitting ? "opacity-50" : ""}`}
              onClick={handlePasswordReset}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Resetting..." : "Reset Password"}
            </button>
          </div>
        )}
        <div className="w-full lg:w-1/2">
          <img src={Images.LoginImage} alt="login" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default PasswordVerificationCode;

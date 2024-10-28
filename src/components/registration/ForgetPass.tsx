import React, { useContext, useReducer, useState } from 'react';
import Images from '../constant/Images';
import { FaGoogle, FaApple } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { httpPostWithoutToken } from '../../utils/http_utils';
import { useToast } from '@chakra-ui/react';
import ls from 'localstorage-slim';
import { AppContext } from '../../global/state';

// Define the State interface for the Forgot Password form
interface State {
  email: string;
  error: string | null;
}

// Define the Action types
type Action =
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'SET_ERROR'; payload: string | null };

// Initial state
const initialState: State = {
  email: '',
  error: null,
};

// Reducer function
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

const ForgotPasswordForm: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const { updateUser }: any = useContext(AppContext);

  // Handle form submission for forgot password
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await httpPostWithoutToken('forgot-password', { email: state.email });
      setIsSubmitting(false);

      if (response.status === 'success') {
        toast({
          status: 'success',
          title: 'Check your email',
          description: "We've sent you instructions on how to reset your password. Please check your inbox.",
          isClosable: true,
        });
        navigate('/login'); // Redirect user to login after success
      } else {
        dispatch({ type: 'SET_ERROR', payload: response.message });
      }
    } catch (error) {
      setIsSubmitting(false);
      dispatch({ type: 'SET_ERROR', payload: 'An error occurred. Please try again.' });
    }
  };

  const handleGoogleLogin = () => {
    // Add logic for Google login
  };

  const handleAppleLogin = () => {
    // Add logic for Apple ID login
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md xl:max-w-[1300px] lg:max-w-[900px] mx-auto p-8 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2">
          <div>
            <h2 className="text-2xl font-sans font-bold text-center mb-6">
              Welcome to <Link to="/"><span className="text-[#ee009d]">WeWorkPerHour</span></Link>
            </h2>
          </div>
          <h1 className="text-xl font-semibold text-center mb-6">Reset Your Password</h1>
          {state.error && <p className="text-red-500 text-center mb-4">{state.error}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-6 py-2 mt-2 border-b-[1px] focus:outline-none focus:ring-[1px] focus:ring-[#2aa100]"
                value={state.email}
                onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 text-white bg-[#ee009d] rounded-[2px] hover:bg-[#2AA100] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                disabled={isSubmitting}
              >
                Reset Password
              </button>
            </div>
          </form>
          <div className="mt-6 flex justify-center space-x-8">
            <button
              onClick={handleGoogleLogin}
              className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700"
            >
              <FaGoogle />
            </button>
            <button
              onClick={handleAppleLogin}
              className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800"
            >
              <FaApple />
            </button>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Remember your password? <Link to="/login" className="text-blue-600 hover:underline">Sign in</Link>
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
          <img src={Images.LoginImage} alt="forgot password" className="w-full rounded-[10px]" />
        </div>
      </div>
    </section>
  );
};

export default ForgotPasswordForm;

import React, { useState } from 'react';
import { usePaystackPayment } from 'react-paystack';
import { paystackConfig } from "../../../../utils/PaystackConfig";
import { httpPostWithToken } from '../../../../utils/http_utils';
import { iProfileCompany } from '../../../../models/profle';
import { useToast } from '@chakra-ui/react';
import { PaystackHookExample } from './paystack';

interface AddFundsModalProps {
  onClose: () => void;
  paymentDone: () => void;
  profile : iProfileCompany
}

const AddFundsModal: React.FC<AddFundsModalProps> = ({ onClose, profile, paymentDone }) => {
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  
  const [ref, setReference] = useState("");
  const [config, setconfig] = useState<any>({
    ...paystackConfig,
    amount: amount * 100,  // Convert to kobo
    email: profile.email,
    reference: "",
  })
  
  const toast = useToast();

  const handlePayment =async () => {
    if(loading) return;
    if(amount < 100) {
      return toast({
        status : "error",
        title : "Amount must be NGN100 and above",
        isClosable : true,
        duration : 5000
      })
    }
    setLoading(true)
    let response = await httpPostWithToken("employer/fund-wallet", {
      amount : amount
    })
    console.log(response)
    if(response.status == "success") {
      setReference(response.data.reference);
      setconfig({
        ...paystackConfig,
        amount: amount * 100,  // Convert to kobo
        email: profile.email,
        reference: response.data.reference,
      })
      setTimeout(() => {
        setShowPayment(true)
      }, 1000);
    }else {

      toast({
        status : "error",
        title : response.error || response.message,
        isClosable : true,
        duration : 5000
      })
    }
    setLoading(false)
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        {
          showPayment 
          ?
          <>
          <button type='button' 
          className="bg-[#2AA100] text-[16px] font-sans font-medium tracking-[0.5px] text-white py-3 px-4 rounded hover:bg-blue-600 w-full mb-2"
          >
          <PaystackHookExample amount={amount} close={()=>setShowPayment(false)} config={config} success={()=> {
            paymentDone()
          }} />
          </button>
          <button onClick={onClose} className=" text-red-700 font-bold py-2 px-4 rounded hover:bg-gray-600 w-full">
          Cancel
        </button>
          </>
          :
          <>
        <h2 className="text-xl font-semibold mb-4">Add Funds</h2>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          placeholder="Enter amount"
          className="w-full border rounded-lg p-2 mb-4"
        />
        <button
          onClick={handlePayment}
          className="bg-[#2AA100] text-[14px] font-sans font-medium tracking-[0.5px] text-white py-2 px-4 rounded hover:bg-blue-600 w-full mb-2"
        >
          {loading ? "Please wait..." : "Add Funds"}
        </button>
        <button onClick={onClose} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 w-full">
          Cancel
        </button>
        </>
      }
      </div>
    </div>
  );
};

export default AddFundsModal;

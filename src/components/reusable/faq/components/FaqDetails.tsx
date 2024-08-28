import React from 'react';

const FaqDetails: React.FC = () => {
  const faqs = [
    {
      question: 'Can I use WWPH on my phone?',
      answer: 'We have an app where you can easily send proposals and invoices, and accomplish your time and tasks, and, best of all, it’s free to download.',
    },
    {
      question: 'How can I improve my freelancing career?',
      answer: 'We have an on-demand video platform, this course will allow you to level up your skills and grow professionally. By successfully passing the course\'s final quiz, you can be assured that you have added something great to your skill set.',
    },
    {
      question: 'How can I trust sellers on WWPH?',
      answer: 'Research before bringing a freelancer on board, you can do so by reading their feedback or asking intelligent questions regarding your project to be sure they will deliver. The good news is that you can release the money to the freelancer only when you are happy with the project. This means your money is safe in our escrow account.',
    },
    {
      question: 'Are there any safety measures I need to take with sellers?',
      answer: 'The money you pay a freelancer is deposited into our escrow account and will only be released when you approve it. This reduces the risk of paying a freelancer if you are not satisfied with the job.',
    },
    {
      question: 'What if I am not satisfied with the seller?',
      answer: 'You can ask him or her to review the job by making corrections or you can contact WWPH for a refund.',
    },
    {
      question: 'Are the courses free?',
      answer: 'We have a free course available to watch at any time on the site, and we have a free course that goes beyond the basics on how to kickstart your career and be successful as an entrepreneur.',
    },
    {
      question: 'What are the fees?',
      answer: 'A commission of 30% is charged on every successful sale made by the seller or freelancer and the buyer or employer also pays a 3% admin fee on every project.',
    },
    {
      question: 'Can I pay a freelancer directly?',
      answer: 'Do not pay into any account apart from the Weworkperhour account. That is the only escrow account for the company, any payment made outside this account is at your risk and we won\'t be responsible for any issue that might occur on such a transaction.',
    },
    {
      question: 'Can I transfer money into the Weworkperhour account so they can help me transfer it into another account?',
      answer: 'We won’t help you transfer money to a third-party account and any suspicion of money laundering will be reported to the right authority.',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8 md:p-12 lg:p-20">
      <div className="max-w-8xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10 lg:p-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-700 mb-2">{faq.question}</h2>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqDetails;

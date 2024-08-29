import React from 'react';

interface TestimonialProps {
  name: string;
  image: string;
  testimonial: string;
  role: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, image, testimonial, role }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
      <img
        src={image}
        alt={`${name}'s picture`}
        className="w-16 h-16 rounded-full mx-auto mb-4"
      />
       <div className="text-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
      <p className="text-gray-700 text-justify mb-4">{testimonial}</p>
     
    </div>
  );
};

export default Testimonial;

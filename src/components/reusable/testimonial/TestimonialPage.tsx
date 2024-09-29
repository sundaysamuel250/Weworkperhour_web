import React from 'react';
import Testimonial from './Testimonial';
import Images from '../../constant/Images';
import FooterSection from '../FooterSection';


const TestimonialsPage: React.FC = () => {
  const testimonials = [
    {
      name: 'Cora Shortlet and Lounge',
      image: Images.ProfileLogoFive,
      testimonial: "Working with WeWorkPerHour has been a game-changer for our Lounge and Shortlets. Their virtual assistant services have streamlined our reservations, managed customer inquiries efficiently, and allowed our staff to focus more on delivering exceptional dining experiences. It is like having an extra set of hands that’s always available and incredibly reliable. Highly recommend!;",
      role: 'Software Engineer',
    },
    {
      name: 'RedLens Centre',
      image: Images.ProfileLogoNine,
      testimonial: "Since hiring WeWorkPerHour virtual assistant services, our co-working hub has seen a huge boost in efficiency. They manage bookings, handle inquiries, and support our members with anything they need. It's like having an extra team member who's always on top of things. Their help has made our workspace run smoother than ever, and we couldn't; to be happier!",
      role: 'Product Manager',
    },
    {
        name: "Bluway Pharmacy",
        image: Images.ProfileLogoForteen,
       testimonial: "Partnering with WeWorkPerHour for virtual assistant services has been a tremendous asset to our pharmacy. They handle customer inquiries, manage inventory updates, and assist with scheduling appointments seamlessly. This has allowed our team to focus more on patient care  and less on administrative tasks. Their support has made a noticeable difference in our daily  operations, and we couldn’t be more pleased!",
        role: 'Product Manager',
      },
      {
        name: 'Collaborate Africa',
        image: Images.ProfileLogoSix,
        testimonial: "Bringing WeWorkPerHour on board for our investor’s club has been a remarkable decision. Their virtual assistant services handle member communications, organize events, and keep track  of important schedules flawlessly. It’s like having a dedicated assistant who understands our  needs perfectly. Their professionalism and efficiency have significantly enhanced our operations,  making everything run smoothly. Highly recommend their services!;",
        role: 'Product Manager',
      },
    // Add more testimonials as needed
  ];

  return (
    <div>
      <div className="bg-gray-100 py-12 mt-[4rem]">
      <h2 className="text-3xl font-bold text-center text-green-700 sm:text-3xl md:text-4xl font-sans mb-8">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            image={testimonial.image}
            testimonial={testimonial.testimonial}
            role={testimonial.role}
          />
        ))}
      </div>
    </div>
    <FooterSection />
    </div>
  );
};

export default TestimonialsPage;

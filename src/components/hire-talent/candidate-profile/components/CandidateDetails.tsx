import { UilAngleRight } from "@iconscout/react-unicons";
import React from "react";
import { RiNumber1 } from "react-icons/ri";

const CandidateDetails: React.FC = () => {
  return (
    <div className="mt-[4rem] text-gray-800">
      <section className="mb-8 p-5 rounded-lg border border-gray-300">
        <h2 className="text-2xl font-semibold font-sans text-[#2aa100] border-b-2 tracking-[0.4px] border-[#2aa100] pb-2 mb-4">
          Overview
        </h2>
        <p className="mb-4">
          Hello, my name is Ariana Gande Connor, and I’m a Financial Supervisor
          from Rotterdam, Netherlands. In pharetra orci dignissim, blandit mi
          semper, ultricies diam. Suspendisse malesuada suscipit nunc non
          volutpat. Sed porta nulla id orci laoreet tempor non consequat enim.
          Sed vitae aliquam velit. Aliquam Integer vehicula rhoncus molestie.
          Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus.
          Suspendisse condimentum lorem ut elementum aliquam.
        </p>
        <p>
          Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat,
          blandit at pretium et, accumsan ac est. Integer vehicula rhoncus
          molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor
          luctus. Suspendisse condimentum lorem ut elementum aliquam. Mauris
          nec.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#2AA100] tracking-[0.4px] font-sans pb-2 mb-4">
          Intro
        </h2>
        <div className="video-container">
          <video className="w-full h-auto rounded-lg" controls>
            <source src="path-to-your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="mb-8 p-5 rounded-lg border border-gray-300">
        <h2 className="text-xl font-semibold border-b-2 border-blue-600 pb-2 mb-4">
          Education
        </h2>
        <div className="mb-6">
          <h3 className="text-lg flex item font-bold">University of Boston</h3>
          <p>Bachelor Degree of Design</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
            ipsum tellus. Interdum primis
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-bold">Design Collage</h3>
          <p>UI/UX Design Course</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
            ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in
            faucibus.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b-2 border-blue-600 pb-2 mb-4">
          Skills
        </h2>
        <ul className="flex flex-wrap gap-2">
          <li className="bg-gray-200 px-3 py-1 rounded-md">Figma</li>
          <li className="bg-gray-200 px-3 py-1 rounded-md">HTML5</li>
          <li className="bg-gray-200 px-3 py-1 rounded-md">Illustrator</li>
          <li className="bg-gray-200 px-3 py-1 rounded-md">Adobe Photoshop</li>
          <li className="bg-gray-200 px-3 py-1 rounded-md">WordPress</li>
          <li className="bg-gray-200 px-3 py-1 rounded-md">jQuery</li>
          <li className="bg-gray-200 px-3 py-1 rounded-md">Web Design</li>
          <li className="bg-gray-200 px-3 py-1 rounded-md">Adobe XD</li>
          <li className="bg-gray-200 px-3 py-1 rounded-md">CSS</li>
          <p className="bg-[#ee009d] text-[#fff] text-[12px] px-2 py-1 rounded-full">
            4+
          </p>
        </ul>
      </section>

      <section className="mb-8 p-5 rounded-lg border border-gray-300">
        <h2 className="text-xl font-semibold border-b-2 border-[#2AA100] pb-2 mb-4">
          Work Experience
        </h2>
        <div className="mb-6">
          <h3 className="text-lg font-bold">Product Designer (Google)</h3>
          <p className="text-sm text-gray-600">02/03/18 - 13/05/20</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
            ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in
            faucibus.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-bold">UI/UX Engineer (Adobe)</h3>
          <p className="text-sm text-gray-600">02/07/20 - 13/09/22</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
            ipsum tellus. Interdum primis
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b-2 border-blue-600 pb-2 mb-4">
          Portfolio
        </h2>
        {/* Add portfolio items here */}
      </section>
    </div>
  );
};

export default CandidateDetails;

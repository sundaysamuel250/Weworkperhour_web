import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import JobSearch from '../../../pages/home/components/JobSearch';
import Images from '../../constant/Images';
import { Link } from 'react-router-dom';

interface Candidate {
  image: string;
  name: string;
  title: string;
  skills: string[];
  salary: string;
  location: string;
  experience: string;
}

const candidates: Candidate[] = [
  {
    image: Images.ProfileLogoThirteen,
    name: 'Julia Ark',
    title: 'Graphic Designer',
    skills: ['Digital', 'Design', 'UI'],
    salary: '$30k-$50k/yr',
    location: 'California, US',
    experience: "2+"
  },
  {
    image: Images.ProfileLogoOne,
    name: 'Lucille Whitley',
    title: 'Javascript Developer',
    skills: ['Java', 'Developer', 'code'],
    salary: '$3k-$4k/mo',
    location: 'London, UK',
    experience: "3+"
  },
  {
    image: Images.ProfileLogoTwo,
    name: 'John Doe',
    title: 'UI/UX Designer',
    skills: ['Design', 'Product', 'UI'],
    salary: '$300k-$400k/wk',
    location: 'Dubai, UAE',
    experience: "4+"
  },
  {
    image: Images.ProfileLogoThree,
    name: 'Julia Ark',
    title: 'Graphic Designer',
    skills: ['Digital', 'Design', 'UI'],
    salary: '$30k-$50k/yr',
    location: 'California, US',
    experience: "5+"
  },
  {
    image: Images.ProfileLogoFour,
    name: 'Lucille Whitley',
    title: 'Javascript Developer',
    skills: ['Java', 'Developer', 'code'],
    salary: '$3k-$4k/mo',
    location: 'London, UK',
    experience: "7+"
  },
  {
    image: Images.ProfileLogoFive,
    name: 'John Doe',
    title: 'UI/UX Designer',
    skills: ['Design', 'Product', 'UI'],
    salary: '$300k-$400k/wk',
    location: 'Dubai, UAE',
    experience: "5+"
  },
  {
    image: Images.ProfileLogoSeven,
    name: 'Anna Smith',
    title: 'Project Manager',
    skills: ['Management', 'Agile', 'Scrum'],
    salary: '$60k-$80k/yr',
    location: 'New York, US',
    experience: "4+"
  },
  {
    image: Images.ProfileLogoSix,
    name: 'James Brown',
    title: 'Data Scientist',
    skills: ['Python', 'Machine Learning', 'Statistics'],
    salary: '$80k-$100k/yr',
    location: 'Berlin, Germany',
    experience: "9+"
  },
  {
    image: Images.ProfileLogoEight,
    name: 'Emily Davis',
    title: 'Marketing Specialist',
    skills: ['SEO', 'Content', 'Strategy'],
    salary: '$40k-$60k/yr',
    location: 'Toronto, Canada',
    experience: "10+"
  },
  {
    image: Images.ProfileLogoNine,
    name: 'Michael Lee',
    title: 'Full Stack Developer',
    skills: ['JavaScript', 'React', 'Node.js'],
    salary: '$70k-$90k/yr',
    location: 'Sydney, Australia',
    experience: "7+"
  },
  {
    image: Images.ProfileLogoTen,
    name: 'Sophia Martinez',
    title: 'UX Researcher',
    skills: ['User Research', 'Interviews', 'Analysis'],
    salary: '$50k-$70k/yr',
    location: 'Barcelona, Spain',
    experience: "5+"
  },
  {
    image: Images.ProfileLogoEleven,
    name: 'Liam Johnson',
    title: 'Backend Developer',
    skills: ['Node.js', 'Express', 'MongoDB'],
    salary: '$90k-$110k/yr',
    location: 'San Francisco, US',
    experience: "3+"
  },
  {
    image: Images.ProfileLogoTwelve,
    name: 'Olivia Wilson',
    title: 'Product Manager',
    skills: ['Product Management', 'Strategy', 'Leadership'],
    salary: '$100k-$120k/yr',
    location: 'Austin, US',
    experience: "5+"
  },
  {
    image: Images.ProfileLogoThirteen,
    name: 'Julia Ark',
    title: 'Graphic Designer',
    skills: ['Digital', 'Design', 'UI'],
    salary: '$30k-$50k/yr',
    location: 'California, US',
    experience: "2+"
  },
  {
    image: Images.ProfileLogoForteen,
    name: 'Lucille Whitley',
    title: 'Javascript Developer',
    skills: ['Java', 'Developer', 'code'],
    salary: '$3k-$4k/mo',
    location: 'London, UK',
    experience: "6+"
  },
  {
    image: Images.ProfileLogoFive,
    name: 'John Doe',
    title: 'UI/UX Designer',
    skills: ['Design', 'Product', 'UI'],
    salary: '$300k-$400k/wk',
    location: 'Dubai, UAE',
  experience: "7+"
  },
  {
    image: Images.ProfileLogoTwo,
    name: 'Anna Smith',
    title: 'Project Manager',
    skills: ['Management', 'Agile', 'Scrum'],
    salary: '$60k-$80k/yr',
    location: 'New York, US',
    experience: "8+"
  },
  {
    image: Images.ProfileLogoFour,
    name: 'James Brown',
    title: 'Data Scientist',
    skills: ['Python', 'Machine Learning', 'Statistics'],
    salary: '$80k-$100k/yr',
    location: 'Berlin, Germany',
    experience: "5+"
  },
  {
    image: Images.ProfileLogoSeven,
    name: 'Emily Davis',
    title: 'Marketing Specialist',
    skills: ['SEO', 'Content', 'Strategy'],
    salary: '$40k-$60k/yr',
    location: 'Toronto, Canada',
    experience: "3+"
  },
  {
    image: Images.ProfileLogoOne,
    name: 'Michael Lee',
    title: 'Full Stack Developer',
    skills: ['JavaScript', 'React', 'Node.js'],
    salary: '$70k-$90k/yr',
    location: 'Sydney, Australia',
    experience: "3+"
  },
  {
    image: Images.ProfileLogoFour,
    name: 'Sophia Martinez',
    title: 'UX Researcher',
    skills: ['User Research', 'Interviews', 'Analysis'],
    salary: '$50k-$70k/yr',
    location: 'Barcelona, Spain',
    experience: "6+"
  },
  {
    image: Images.ProfileLogoForteen,
    name: 'Liam Johnson',
    title: 'Backend Developer',
    skills: ['Node.js', 'Express', 'MongoDB'],
    salary: '$90k-$110k/yr',
    location: 'San Francisco, US',
    experience: "4+"
  },
  {
    image: Images.ProfileLogoNine,
    name: 'Olivia Wilson',
    title: 'Product Manager',
    skills: ['Product Management', 'Strategy', 'Leadership'],
    salary: '$100k-$120k/yr',
    location: 'Austin, US',
    experience: "3+"
  },
  {
    image: Images.ProfileLogoTen,
    name: 'Henry Clark',
    title: 'Systems Analyst',
    skills: ['System Analysis', 'IT', 'Security'],
    salary: '$80k-$100k/yr',
    location: 'Seattle, US',
    experience: "5+"
  },
  {
    image: Images.ProfileLogoSix,
    name: 'Mia Moore',
    title: 'HR Manager',
    skills: ['Recruitment', 'Training', 'Employee Relations'],
    salary: '$60k-$80k/yr',
    location: 'Chicago, US',
    experience: "12+"
  },
  {
    image: Images.ProfileLogoSix,
    name: 'Noah Thomas',
    title: 'Blockchain Developer',
    skills: ['Blockchain', 'Solidity', 'Ethereum'],
    salary: '$110k-$130k/yr',
    location: 'Zurich, Switzerland',
    experience: "6+"
  },
  {
    image: Images.ProfileLogoTen,
    name: 'Ava Walker',
    title: 'Data Analyst',
    skills: ['Data Analysis', 'Excel', 'SQL'],
    salary: '$50k-$70k/yr',
    location: 'Paris, France',
    experience: "5+"
  },
  {
    image: Images.ProfileLogoTwo,
    name: 'William Martinez',
    title: 'AI Engineer',
    skills: ['Artificial Intelligence', 'Python', 'TensorFlow'],
    salary: '$120k-$140k/yr',
    location: 'San Francisco, US',
    experience: "3+"
  },
  {
    image: Images.ProfileLogoThree,
    name: 'Isabella Garcia',
    title: 'Content Writer',
    skills: ['Writing', 'Editing', 'SEO'],
    salary: '$40k-$60k/yr',
    location: 'Madrid, Spain',
    experience: "7+"
  },
  {
    image: Images.ProfileLogoEleven,
    name: 'Ethan Young',
    title: 'Mobile Developer',
    skills: ['iOS', 'Android', 'React Native'],
    salary: '$80k-$100k/yr',
    location: 'Tokyo, Japan',
    experience: "7+"
  },
  {
    image: Images.ProfileLogoTwelve,
    name: 'Amelia King',
    title: 'Cloud Engineer',
    skills: ['AWS', 'Azure', 'Google Cloud'],
    salary: '$90k-$110k/yr',
    location: 'Boston, US',
    experience: "5+"
  },
  {
    image: Images.ProfileLogoNine,
    name: 'Mason Wright',
    title: 'Cybersecurity Expert',
    skills: ['Security', 'Penetration Testing', 'Network Security'],
    salary: '$100k-$120k/yr',
    location: 'Amsterdam, Netherlands',
    experience: "8+"
  },
  {
    image: Images.ProfileLogoForteen, 
    name: 'Charlotte Lopez',
    title: 'Graphic Designer',
    skills: ['Photoshop', 'Illustrator', 'InDesign'],
    salary: '$30k-$50k/yr',
    location: 'Buenos Aires, Argentina',
    experience: "2+"
  },
];

const ITEMS_PER_PAGE = 9;

const CandidatesHireTalent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(candidates.length / ITEMS_PER_PAGE);

  // Get candidates for the current page
  const currentCandidates = candidates.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="container mx-auto px-4 py-[4rem]">
      <div className="bg-[#f5f5f5] py-[2rem]">
      <h1 className="text-[#2aa100] text-[24px] sm:text-[38px] text-center font-poppins font-semibold mb-4 md:mb-0">Candidates</h1>
      <p className="text-center text-lg text-gray-600 mb-6">
        Find your desired talents & make your work done
      </p>

        {/* <input
          type="text"
          placeholder="What are you looking for?"
          className="border border-gray-300 rounded-l px-4 py-2 flex-1"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r">
          <BiSearch size={24} />
        </button> */}
        <JobSearch />
      </div>

      <div className="bg-white p-4 rounded shadow mb-8 flex flex-wrap">
        <h2 className="text-xl font-semibold w-full mb-4">Filter By</h2>
        <div className="flex flex-wrap gap-4 mb-4 w-full">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-gray-700">Name or Keyword</label>
            <input
              type="text"
              className="border border-gray-300 rounded w-full px-4 py-2"
              placeholder="Name or keyword"
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-gray-700">Skill</label>
            <input
              type="text"
              className="border border-gray-300 rounded w-full px-4 py-2"
              placeholder="Skill"
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              className="border border-gray-300 rounded w-full px-4 py-2"
              placeholder="Location"
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-gray-700">Expert Level</label>
            <select className="border border-gray-300 rounded w-full px-4 py-2">
              <option>All</option>
              <option>Fresher</option>
              <option>Intermediate</option>
              <option>No-Experience</option>
              <option>Internship</option>
              <option>Expert</option>
            </select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-gray-700">Qualification</label>
            <select className="border border-gray-300 rounded w-full px-4 py-2">
              <option>Master’s Degree</option>
              <option>Bachelor Degree</option>
              <option>None</option>
            </select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-gray-700">Candidate Type</label>
            <select className="border border-gray-300 rounded w-full px-4 py-2">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-gray-700">Salary Range</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                className="border border-gray-300 rounded w-full px-4 py-2"
                placeholder="0"
              />
              <span>-</span>
              <input
                type="number"
                className="border border-gray-300 rounded w-full px-4 py-2"
                placeholder="50000"
              />
              <select className="border border-gray-300 rounded w-full px-4 py-2">
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
              </select>
            </div>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-gray-700">English Fluency</label>
            <select className="border border-gray-300 rounded w-full px-4 py-2">
              <option>Fluent</option>
              <option>Intermediate</option>
              <option>Basic</option>
            </select>
          </div>
        </div>
        <button className="bg-[#EE009D] text-white px-4 py-2 rounded-[5px]">Apply Filter</button>
      </div>

      <p className="text-xl font-semibold mb-4">All {candidates.length} candidates found</p>

      <div className="flex flex-wrap -mx-4">
        {currentCandidates.map((candidate, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white p-4 rounded shadow">
              <div className='flex items-center justify-center'>
              <img src={candidate.image} alt={candidate.name} className="w-[100px] h-[100px] object-cover rounded-full mb-4" />
              </div>
              <div className='text-center mb-8'>
              <h3 className="text-lg font-semibold">{candidate.name}</h3>
              <p className="text-gray-600">{candidate.title}</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
                {candidate.skills.map((skill, idx) => (
                  <span key={idx} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">{skill}</span>
                ))}
                <p className="bg-[#ee009d] text-[#fff] text-[12px] px-2 py-1 rounded-full">{candidate.experience}</p>
              </div>
           <section className='flex items-center justify-around mb-4'>
           <div>
             <p className="text-[#2AA100] text-[15px] font-sans font-medium tracking-[0.5px]"><strong>Salary:</strong></p>
             <p className='text-[#646A73] text-[14px] font-normal'> {candidate.salary}</p>
             </div>
              <div>
              <p className=" text-[#2AA100] text-[15px] font-sans font-medium tracking-[0.5px]"><strong>Location:</strong></p>
              <p className='text-[#646A73] text-[14px] font-normal'>{candidate.location}</p>
              </div>
           </section>
              <div className="flex justify-around">
               <Link to="/candidate-profile">
               <button className="bg-[#EE009D] text-[14px] font-sans font-semibold text-white px-4 py-2 rounded-[5px]">View Profile</button>
               </Link>
               <Link to="/candidate-profile">
               <button className="border-[1.5px] border-[#2AA100] text-[14px] font-sans font-semibold text-[#6A] px-4 py-2 rounded">Message</button>
               </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button 
          className="px-4 py-2 border border-gray-300 rounded-l"
          onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button 
            key={index} 
            className={`px-4 py-2 border ${currentPage === index + 1 ? 'bg-[#EE009D] text-white' : 'border-gray-300'}`} 
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button 
          className="px-4 py-2 border border-gray-300 rounded-r"
          onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CandidatesHireTalent;

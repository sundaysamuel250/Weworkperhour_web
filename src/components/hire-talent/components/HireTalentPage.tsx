import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import JobSearch from "../../../pages/home/components/JobSearch";
import Images from "../../constant/Images";
import { httpGetWithoutToken } from "../../../utils/http_utils";
import { Link } from "react-router-dom";

interface SocialMedia {
  id: number;
  label: string;
  value: string | null;
}

interface Resume {
  user_id: number;
  job_title: string | null;
  resume_files: string[];
  educations: string[];
  skills: string | null;
  resume: string | null;
  resume_title: string | null;
  portfolio: string[];
  expected_salary: string | null;
  experience: string | null;
}

interface Candidate {
  id: number;
  name: string;
  email: string;
  status: string;
  role: string;
  address: string | null;
  phone_no: string | null;
  avatar: string | null;
  company: string | null;
  bio: string | null;
  country: string | null;
  city: string | null;
  wallet: string;
  state: string | null;
  zip_code: string | null;
  Resume: Resume | null;
  social_medias: SocialMedia[];
}

const ITEMS_PER_PAGE = 9;

const CandidatesHireTalent: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await httpGetWithoutToken("candidates");
        if (response?.data) {
          setCandidates(response.data); // Adjust this based on your API response
        }
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchCandidates();
  }, []);

  const totalPages = Math.ceil(candidates.length / ITEMS_PER_PAGE);

  const filteredCandidates = candidates.filter((candidate) => {
    const candidateName = candidate.name ? candidate.name.toLowerCase() : "";
    const candidateLocation = candidate.city
      ? candidate.city.toLowerCase()
      : "";
    return (
      candidateName.includes(searchTerm.toLowerCase()) &&
      candidateLocation.includes(locationFilter.toLowerCase())
    );
  });

  const currentCandidates = filteredCandidates.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocationFilter(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto px-4 py-[4rem]">
      <div className="bg-[#f5f5f5] py-[2rem] text-center">
        <h1 className="text-[#2aa100] text-[24px] sm:text-[38px] font-semibold mb-4">
          Hire a Talent
        </h1>
        <p className="text-gray-600 mb-6">
          Find your desired talents & make your work done
        </p>
        <JobSearch />
      </div>

      <div className="bg-white p-4 rounded shadow mb-8 flex flex-wrap">
        <h2 className="text-xl font-semibold w-full mb-4">Filter By</h2>
        <div className="flex flex-wrap gap-4 mb-4 w-full">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-gray-700">Name or Keyword</label>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              className="border border-gray-300 rounded w-full px-4 py-2"
              placeholder="Name or keyword"
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              value={locationFilter}
              onChange={handleLocationChange}
              className="border border-gray-300 rounded w-full px-4 py-2"
              placeholder="Location"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap -mx-4">
        {currentCandidates.map((candidate) => (
          <div key={candidate.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white p-4 rounded shadow">
              <div className="flex items-center justify-center">
                <img
                  src={candidate.avatar || Images.defaultAvatar}
                  alt={candidate.name}
                  className="rounded-full w-24 h-24 mb-4"
                />
              </div>
              <div className="text-center mb-8">
                <h3 className="text-lg font-semibold">{candidate.name}</h3>
                <p className="text-gray-600">
                  {candidate.Resume?.job_title || "Job title not available"}
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
                {candidate.Resume?.skills ? (
                  candidate.Resume.skills.split(",").map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-500 text-sm">
                    No skills available
                  </span>
                )}
                <p className="bg-[#ee009d] text-[#fff] text-[12px] px-2 py-1 rounded-full">
                  {candidate.Resume?.experience || "No experience available"}
                </p>
              </div>
              <section className="flex items-center justify-around mb-4">
                <div>
                  <p className="text-[#2AA100] text-[15px] font-sans font-medium tracking-[0.5px]">
                    <strong>Salary:</strong>
                  </p>
                  <p className="text-[#646A73] text-[14px] font-normal">
                    {candidate.Resume?.expected_salary || "N/A"}
                  </p>
                </div>
                <div>
                  <p className="text-[#2AA100] text-[15px] font-sans font-medium tracking-[0.5px]">
                    <strong>Location:</strong>
                  </p>
                  <p className="text-gray-500">
                    {candidate.city
                      ? `${candidate.city}, ${candidate.state}`
                      : "Location not provided"}
                  </p>
                </div>
              </section>
              <div className="flex justify-around">
                <Link to="/candidate-profile">
                  <button className="bg-[#EE009D] text-[14px] font-sans font-semibold text-white px-4 py-2 rounded-[5px]">
                    View Profile
                  </button>
                </Link>
                <Link to="/candidate-profile">
                  <button className="border-[1.5px] border-[#2AA100] text-[14px] font-sans font-semibold text-[#6A] px-4 py-2 rounded">
                    Message
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          className="px-4 py-2 border border-gray-300 rounded-l"
          onClick={() =>
            setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
          }
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 border ${
              currentPage === index + 1
                ? "bg-[#EE009D] text-white"
                : "border-gray-300"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-4 py-2 border border-gray-300 rounded-r"
          onClick={() =>
            setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CandidatesHireTalent;

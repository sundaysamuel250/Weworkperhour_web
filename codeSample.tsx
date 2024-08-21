import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const jobCategories = [
  "Design",
  "UI",
  "Digital",
  "Graphics",
  "Developer",
  "Product",
  "Microsoft",
  "Brand",
  "Photoshop",
  "Business",
  "IT & Technology",
  "Marketing",
  "Article",
  "Engineer",
  "HTML5",
  "Figma",
  "Automobile",
  "Account",
];

const jobTypes = [
  "Full-Time",
  "Part-Time",
  "Freelance",
];

const states = [
  "California",
  "New York",
  "Texas",
];

const PostNewJob: React.FC = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [typeOpen, setTypeOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const handleAddSkill = (skill: string) => {
    if (!skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const toggleCategory = () => {
    setCategoryOpen(!categoryOpen);
  };

  const toggleType = () => {
    setTypeOpen(!typeOpen);
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setCategoryOpen(false);
  };

  const handleSelectType = (type: string) => {
    setSelectedType(type);
    setTypeOpen(false);
  };

  const handleSelectState = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(event.target.value);
  };

  return (
    <section className="p-8 mt-[4rem]">
      <h2 className="text-green-700 text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold">
        Post a New Job
      </h2>

      <div className="bg-white p-[4rem] rounded-[20px] shadow-md mb-6 mt-[2rem]">
        <h3 className="text-[24px] font-semibold text-[#EE009D] mb-4">
          Job Details
        </h3>
        <form>
          <div className="mb-4">
            <label className="block text-[#000000] text-[16px] font-medium">Job Title*</label>
            <input
              type="text"
              placeholder="Ex: Product Designer"
              className="mt-1 w-full px-4 py-4 border rounded-md"
            />
          </div>
          <div className="mb-4">
          <label className="block font-medium text-[16px]  text-[#000000] text-lg mb-2">Job Description*</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write about the job in details..."
            rows={7}
            autoComplete="off"
            className="w-full text-black border rounded-lg border-gray-300 bg-white p-4 shadow-sm focus:ring-0 focus:outline-none"
          ></textarea>
        </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full sm:w-1/2 px-2 mb-4">
              <label className="block font-semibold text-green-600 text-lg mb-2">
                Job Category*
              </label>
              <div className="relative">
                <button
                  type="button"
                  className="w-full border rounded-lg border-gray-300 bg-white p-4 shadow-sm focus:ring-0 focus:outline-none flex justify-between items-center"
                  onClick={toggleCategory}
                >
                  <span>{selectedCategory || 'Select Category'}</span>
                  {categoryOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {categoryOpen && (
                  <ul className="absolute z-10 w-full bg-white border rounded-lg shadow-lg mt-1 max-h-40 overflow-y-auto">
                    {jobCategories.map((category) => (
                      <li
                        key={category}
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleSelectCategory(category)}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="w-full sm:w-1/2 px-2 mb-4">
              <label className="block font-semibold text-green-600 text-lg mb-2">
                Job Type*
              </label>
              <div className="relative">
                <button
                  type="button"
                  className="w-full border rounded-lg border-gray-300 bg-white p-4 shadow-sm focus:ring-0 focus:outline-none flex justify-between items-center"
                  onClick={toggleType}
                >
                  <span>{selectedType || 'Select Job Type'}</span>
                  {typeOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {typeOpen && (
                  <ul className="absolute z-10 w-full bg-white border rounded-lg shadow-lg mt-1 max-h-40 overflow-y-auto">
                    {jobTypes.map((type) => (
                      <li
                        key={type}
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleSelectType(type)}
                      >
                        {type}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="w-full sm:w-1/2 px-2 mb-4">
              <label className="block font-semibold text-green-600 text-lg mb-2">
                Zip Code*
              </label>
              <input
                type="text"
                placeholder="1708"
                className="w-full border rounded-lg border-gray-300 bg-white p-2 shadow-sm focus:ring-0 focus:outline-none"
              />
            </div>
            <div className="w-full sm:w-1/2 px-2 mb-4">
              <label className="block font-semibold text-green-600 text-lg mb-2">
                State*
              </label>
              <select
                className="w-full border rounded-lg border-gray-300 bg-white p-2 shadow-sm focus:ring-0 focus:outline-none"
                value={selectedState}
                onChange={handleSelectState}
              >
                <option value="" disabled>
                  Select State
                </option>
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
          </div>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Skills & Experience</h3>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Skills*</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-200 px-4 py-2 rounded-full text-gray-700 flex items-center"
                >
                  {skill}
                  <button
                    onClick={() => handleRemoveSkill(skill)}
                    className="ml-2 text-red-500"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
            <input
              type="text"
              placeholder="Add Skills"
              className="mt-2 w-full px-4 py-2 border rounded-md"
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.currentTarget.value.trim()) {
                  handleAddSkill(e.currentTarget.value.trim());
                  e.currentTarget.value = "";
                  e.preventDefault();
                }
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Experience*</label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-2 border rounded-md"
            />
          </div>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">File Attachment</h3>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">File Attachment*</label>
            <input
              type="file"
              className="mt-1 w-full px-4 py-2 border rounded-md"
            />
            <p className="mt-2 text-gray-600 text-sm">
              Upload file .pdf, .doc, .docx
            </p>
          </div>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Address & Location</h3>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Address*</label>
            <input
              type="text"
              placeholder="Cowrasta, Chandana, Gazipur Sadar"
              className="mt-1 w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Country*</label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">City*</label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">State*</label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Map Location*</label>
            <input
              type="text"
              placeholder="XC23+6XC, Moiran, N105"
              className="mt-1 w-full px-4 py-2 border rounded-md"
            />
          </div>
        </form>
      </div>

      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">
          Cancel
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-md">
          Next
        </button>
      </div>
    </section>
  );
};

export default PostNewJob;

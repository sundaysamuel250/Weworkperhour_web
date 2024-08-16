import { UilAngleDown, UilAngleUp, UilTimes } from "@iconscout/react-unicons";
import React, { ChangeEvent, useState } from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const jobCategories = [
  "Design",
  "IT & Development",
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
  "Hourly-Contract",
  "Fixed-Price"
];

const jobSalary = [
  "Monthly",
  "Weekly",
  "Hourly"
];

const PostNewJob: React.FC = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [typeOpen, setTypeOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [selectedSalary, setSelectedSalary] = useState('');
  const [salaryOpen, setSalaryOpen] = useState(false);
  const [budget, setBudget] = useState('');
  const [cvFiles, setCvFiles] = useState<File[]>([]);

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

  const toggleSalary = () => {
    setSalaryOpen(!salaryOpen);
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setCategoryOpen(false);
  };

  const handleSelectType = (type: string) => {
    setSelectedType(type);
    setTypeOpen(false);
  };

  const handleSelectSalary = (salary: string) => {
    setSelectedSalary(salary);
    setSalaryOpen(false);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, setFileState: React.Dispatch<React.SetStateAction<File[]>>) => {
    const files = e.target.files;
    if (files) {
      setFileState(Array.from(files));
    }
  };

  const handleSingleFileChange = (e: ChangeEvent<HTMLInputElement>, setFileState: React.Dispatch<React.SetStateAction<File | null>>) => {
    const file = e.target.files?.[0] || null;
    setFileState(file);
  };

  const removeFile = (index: number, setFileState: React.Dispatch<React.SetStateAction<File[]>>) => {
    setFileState((prevFiles) => prevFiles.filter((_, i) => i !== index));
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
            <label className="block font-medium text-[16px] text-[#000000] text-lg mb-2">Job Description*</label>
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
              <label className="block text-[#000000] text-[16px] mb-2 font-medium">
                Job Category*
              </label>
              <div className="relative">
                <button
                  type="button"
                  className="w-full border rounded-lg border-gray-300 bg-white p-4 shadow-sm focus:ring-0 focus:outline-none flex justify-between items-center"
                  onClick={toggleCategory}
                >
                  <span className="text-gray-500">{selectedCategory || 'Select Category'}</span>
                  {categoryOpen ? < UilAngleUp /> : <UilAngleDown />}
                </button>
                {categoryOpen && (
                  <ul className="absolute z-10 w-full text-gray-500 bg-white border rounded-lg shadow-lg mt-1 max-h-40 overflow-y-auto">
                    {jobCategories.map((category) => (
                      <li
                        key={category}
                        className="px-4 py-2 hover:bg-gray-100 hover:text-[#2aa100] cursor-pointer"
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
              <label className="block text-[#000000] text-[16px] mb-2 font-medium">
                Job Type*
              </label>
              <div className="relative">
                <button
                  type="button"
                  className="w-full border rounded-lg border-gray-300 bg-white p-4 shadow-sm focus:ring-0 focus:outline-none flex justify-between items-center"
                  onClick={toggleType}
                >
                  <span className="text-gray-500">{selectedType || 'Select Job Type'}</span>
                  {typeOpen ? < UilAngleUp /> : <UilAngleDown />}
                </button>
                {typeOpen && (
                  <ul className="absolute z-10 w-full bg-white text-gray-500 border rounded-lg shadow-lg mt-1 max-h-40 overflow-y-auto">
                    {jobTypes.map((type) => (
                      <li
                        key={type}
                        className="px-4 py-2 hover:bg-gray-100 hover:text-[#2aa100] cursor-pointer"
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
              <label className="block text-[#000000] text-[16px] mb-2 font-medium">
                Salary*
              </label>
              <div className="relative">
                <button
                  type="button"
                  className="w-full border rounded-lg border-gray-300 bg-white p-4 shadow-sm focus:ring-0 focus:outline-none flex justify-between items-center"
                  onClick={toggleSalary}
                >
                  <span className="text-gray-500">{selectedSalary || 'Monthly'}</span>
                  {salaryOpen ? < UilAngleUp /> : <UilAngleDown />}
                </button>
                {salaryOpen && (
                  <ul className="absolute z-10 w-full bg-white text-gray-500 border rounded-lg shadow-lg mt-1 max-h-40 overflow-y-auto">
                    {jobSalary.map((salary) => (
                      <li
                        key={salary}
                        className="px-4 py-2 hover:bg-gray-100 hover:text-[#2aa100] cursor-pointer"
                        onClick={() => handleSelectSalary(salary)}
                      >
                        {salary}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="w-full sm:w-1/2 px-2 mb-4">
              <label className="block text-[#000000] text-[16px] mb-2 font-medium">
                Budgeted Amount*
              </label>
              <input
                type="text"
                placeholder="Enter budgeted amount"
                className="mt-1 w-full px-4 py-4 border rounded-md"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>

      <div className="bg-white p-[4rem] rounded-lg shadow-md mb-6">
        <h3 className="text-[24px] font-semibold text-[#EE009D] mb-4">Skills & Experience</h3>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Skills*</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-200 px-4 py-1 rounded-full text-gray-700 flex items-center"
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
              className="mt-2 w-full px-4 py-4 border rounded-md"
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
              className="mt-1 w-full px-4 py-4 border rounded-md"
            />
          </div>
        </form>
      </div>

      

      <div className="bg-white p-[4rem] rounded-lg shadow-md mb-6">
      <div className="py-[2rem]">
        <h2 className="text-xl font-semibold mb-4 text-[#EE009d] text-[16px] tracking-[0.3px] font-sans">File Attachment*</h2>
        <div className='flex items-center  gap-[1rem]'>
        <label className="cursor-pointer bg-green-100 text-green-600 font-medium py-2 px-4 rounded-[8px]">
            Upload File
            <input
              type="file"
              accept=".pdf, .doc, .docx"
              onChange={(e) => handleFileChange(e, setCvFiles)} 
              className="hidden"
            />
          </label>
          <p>Upload file .pdf, .doc, .docx</p>
        </div>
        {cvFiles.map((file, index) => (
          <div key={index} className="flex items-center justify-between bg-green-100 p-4 mt-[2rem] rounded-[10px]">
            <span>{file.name}</span>
            <UilTimes onClick={() => removeFile(index, setCvFiles)} className="cursor-pointer text-red-500" />
          </div>
        ))}
      </div>
        <h3 className="text-xl font-semibold mb-4 text-[#EE009d] text-[16px] tracking-[0.3px] font-sans">Address & Location</h3>
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

import React, { useState, ChangeEvent, useRef } from 'react';
import { UilPause, UilPlay, UilTimes } from '@iconscout/react-unicons';

const ProfileForm: React.FC = () => {
  const [cvFiles, setCvFiles] = useState<File[]>([]);
  const [overview, setOverview] = useState("");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setVideoFile(event.target.files[0]);
      setIsPlaying(false);
    }
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const removeVideo = () => {
    setVideoFile(null);
    setIsPlaying(false);
  };

  const [education, setEducation] = useState([
    {
      title: 'Product Designer (Google)',
      academy: 'Google Arts College & University',
      year: '',
      description: 'Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam et pulvinar tortor luctus.'
    },
  ]);
  const [skills, setSkills] = useState(['Figma', 'HTML5', 'Illustrator', 'Adobe Photoshop', 'WordPress', 'jQuery', 'Web Design', 'Adobe XD', 'CSS']);
  const [workExperience, setWorkExperience] = useState(['Experience 1']);
  const [portfolioImages, setPortfolioImages] = useState(['image', 'image', 'image', 'image']);

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

  const removeSingleFile = (setFileState: React.Dispatch<React.SetStateAction<File | null>>) => {
    setFileState(null);
  };

  const addEducation = () => {
    setEducation([...education, { title: '', academy: '', year: '', description: '' }]);
  };

  const addSkill = () => {
    setSkills([...skills, '']);
  };

  const addWorkExperience = () => {
    setWorkExperience([...workExperience, '']);
  };

  const addPortfolioImage = () => {
    setPortfolioImages([...portfolioImages, 'image']);
  };

  return (
    <section className="px-4 py-16 max-w-[1100px] mx-auto">
      <div className="bg-white rounded-2xl p-8">
        <h2 className="text-xl font-semibold mb-4 text-[#ee009d] text-[20px] tracking-[0.3px] font-sans">Resume Attachment</h2>
        <div className="py-[1rem]">
        <h2 className="text-xl font-semibold mb-4 text-[#2aa100] text-[16px] tracking-[0.3px] font-sans">CV Attachment*</h2>
        <div className='flex items-center  gap-[1rem]'>
        <label className="cursor-pointer bg-green-100 text-green-600 font-medium py-2 px-4 rounded-[8px]">
            Upload CV
            <input
              type="file"
              accept=".pdf, .doc, .docx"
              onChange={(e) => handleFileChange(e, setCvFiles)} 
              className="hidden "
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
      </div>
      <section className='bg-white rounded-2xl p-8 mt-[2rem]'>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-[20px] text-[#ee009d] tracking-[0.3px] font-sans">Intro & Overview</h2>
        <div className="mb-4">
          <label className="block font-semibold text-green-600 text-lg mb-2">Overview*</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write something interesting about you..."
            rows={10}
            autoComplete="off"
            className="w-full text-black border rounded-lg border-gray-300 bg-white p-4 shadow-sm focus:ring-0 focus:outline-none"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium">Add Intro Video</label>
          <input 
            type="file" 
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
            accept="video/*" 
            onChange={handleVideoChange} 
          />
          {videoFile && (
            <div className="mt-4 flex flex-col items-start">
              <video ref={videoRef} className="w-[400px] h-[400px] mb-2">
                <source src={URL.createObjectURL(videoFile)} type={videoFile.type} />
                Your browser does not support the video tag.
              </video>
              <div className="flex items-center space-x-2">
                <button onClick={handlePlayPause} className="text-blue-600">
                  {isPlaying ? <UilPause size="24" /> : <UilPlay size="24" />}
                </button>
                <button onClick={removeVideo} className="text-red-600">
                  <UilTimes size="24" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      </section>
    </section>
  );
};

export default ProfileForm;

import React, { useState, ChangeEvent, useRef } from 'react';
import { UilPlay, UilPlusCircle, UilTimes, UilTimesCircle } from '@iconscout/react-unicons';
import Modal from 'react-modal';


const ProfileForm: React.FC = () => {
  const [cvFiles, setCvFiles] = useState<File[]>([]);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setVideoFile(file);
  };
  const [portfolioImages, setPortfolioImages] = useState<string[]>([]); // State for portfolio images

  // Ref for file input
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Function to handle file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Assuming you want to store the image URL or do further processing
      const imageUrl = URL.createObjectURL(file);
      setPortfolioImages([...portfolioImages, imageUrl]);
    }
  };

  // Function to remove a portfolio image
  const removePortfolioImage = (index: number) => {
    const newImages = [...portfolioImages];
    newImages.splice(index, 1);
    setPortfolioImages(newImages);
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

  const openModal = () => {
    setModalIsOpen(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }, 100);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const [education, setEducation] = useState([
    {
      title: '',
      academy: '',
      year: '',
      description: ''
    },
  ]);
  const [skills, setSkills] = useState(['Figma', 'HTML5', 'Illustrator', 'Adobe Photoshop', 'WordPress', 'jQuery', 'Web Design', 'Adobe XD', 'CSS']);

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
  const addEducation = () => {
    setEducation([...education, { title: '', academy: '', year: '', description: '' }]);
  };
  const removeEducation = (index: number) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  const addSkill = () => {
    setSkills([...skills, '']);
  };

  return (
    <section className="px-2 py-[8rem] max-w-[1100px] mx-auto">
       <h2 className=' text-[#2aa100] text-[38px] font-sans font-bold mb-8'>My Resume</h2>

       {/* Profile upload section start here  */}

      <div className="bg-white rounded-2xl py-8 px-8">
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

      {/* profile upload section ends here  */}

        {/* introduction video section start here  */}

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
            className="w-full text-black mb-[2rem] border rounded-lg border-gray-300 bg-white p-4 shadow-sm focus:ring-0 focus:outline-none"
          ></textarea>
        </div>

        <div className='mt-[8rem]'>
        <div className='flex flex-col md:flex-row items-center gap-8 p-4'>
      <label className='relative text-center flex items-center justify-center p-[4rem] md:p-[8rem] w-full  md:w-[500px] h-[180px] md:h-[350px] rounded-[20px] cursor-pointer border-[1px] border-[#2aa100]'>
        + Add Intro Video
        <input 
          type="file" 
          className="hidden" 
          accept="video/*" 
          onChange={handleVideoChange} 
        />
      </label>
      {videoFile && (
        <div className="relative w-full md:w-[500px] h-[200px] md:h-[350px] flex flex-col items-start rounded-[20px] cursor-pointer">
          <div 
            className="relative w-full h-full rounded-[20px] cursor-pointer"
            onClick={openModal}
          >
            <video ref={videoRef} className="w-full h-full rounded-[20px] object-cover">
              <source src={URL.createObjectURL(videoFile)} type={videoFile.type} />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex items-center justify-center">
              {!isPlaying && <UilPlay size="64" className="text-[#2aa100]" />}
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <button onClick={removeVideo} className="text-[#ee009d]">
              <UilTimes size="24" />
            </button>
          </div>
        </div>
      )}
    </div>
      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '80%'
          }
        }}
      >
        <button onClick={closeModal} className="btn btn-secondary">Close</button>
        <div className="video-container" style={{ marginTop: '10px' }}>
          {videoFile && (
            <video 
              ref={videoRef}
              controls
              style={{ width: '100%', height: '100%' }}
            >
              <source src={URL.createObjectURL(videoFile)} type={videoFile.type} />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </Modal>
    </div>
      </div>
      </section>

      {/* introduction video section ends here  */}

      {/* Eductional section start here */}

      <section className='bg-white rounded-2xl p-8 mt-[2rem]'>
      <h2 className="text-2xl font-semibold text-[20px] text-[#ee009d] tracking-[0.3px] font-sans mb-4">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <label className="block font-semibold font-fairs text-[#2aa100] text-lg mb-2">Degree*</label>
            <input
              type="text"
              value={edu.title}
              onChange={(e) => {
                const newEducation = [...education];
                newEducation[index].title = e.target.value;
                setEducation(newEducation);
              }}
              placeholder="Product Designer (Google)"
              className="w-full border rounded-lg border-gray-300 bg-white p-2 shadow-sm focus:ring-0 focus:outline-none mb-2"
            />
            <label className="block font-semibold font-fairs text-[#2aa100] text-lg mb-2">School*</label>
            <input
              type="text"
              value={edu.academy}
              onChange={(e) => {
                const newEducation = [...education];
                newEducation[index].academy = e.target.value;
                setEducation(newEducation);
              }}
              placeholder="Google Arts College & University"
              className="w-full border rounded-lg border-gray-300 bg-white p-2 shadow-sm focus:ring-0 focus:outline-none mb-2"
            />
            <label className="block font-semibold font-fairs text-[#2aa100] text-lg mb-2">Graduation Year*</label>
            <input
              type="text"
              value={edu.year}
              onChange={(e) => {
                const newEducation = [...education];
                newEducation[index].year = e.target.value;
                setEducation(newEducation);
              }}
              placeholder="Year"
              className="w-full border rounded-lg border-gray-300 bg-white p-2 shadow-sm focus:ring-0 focus:outline-none mb-2"
            />
            <UilTimes onClick={() => removeEducation(index)} className="cursor-pointer text-red-500 mt-2" />
          </div>
        ))}
        <button className="text-pink-600 text-lg mb-4" onClick={addEducation}>Add more</button>
      </section>
       {/* Eductional section ends here  */}

      {/* Skill section start here  */}
      <section className='bg-white rounded-2xl p-8 mt-[2rem]'>
  <h2 className="text-2xl font-semibold text-[20px] text-[#ee009d] tracking-[0.3px] font-sans mb-4">Skills & Experience</h2>
  <div className="mb-4">
    <label className="block font-semibold text-lg mb-2">Skills*</label>
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 bg-[#f5f5f5] p-8 rounded-[10px]">
      {skills.map((skill, index) => (
        <div key={index} className="relative flex items-center">
          <input 
            type="text" 
            value={skill} 
            onChange={(e) => {
              const newSkills = [...skills];
              newSkills[index] = e.target.value;
              setSkills(newSkills);
            }} 
            placeholder="Skill" 
            className="w-full border-none rounded-[20px] text-[#2aa100] font-light font-merri text-[12px] bg-white p-2 shadow-sm focus:ring-0 focus:outline-none pr-10" 
          />
          <button 
            className="absolute right-3 text-red-600" 
            onClick={() => {
              const newSkills = skills.filter((_, i) => i !== index);
              setSkills(newSkills);
            }}
          >
            <UilTimes size={20} color='#2aa100' />
          </button>
        </div>
      ))}
       <button className="text-pink-600  text-lg" onClick={addSkill}>< UilPlusCircle  size={25} color='#2aa100'/></button>
    </div>
   
  </div>
</section>
{/* Skill section ends here  */}

{/* Porfolio section start here  */}
<section className='bg-white rounded-2xl p-8 mt-[2rem]'>
      <h2 className="text-2xl font-semibold text-[20px] text-[#2aa100] tracking-[0.3px] font-sans mb-4">Portfolio</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {portfolioImages.map((img, index) => (
          <div key={index} className="relative">
            <div className="bg-gray-200 h-full rounded-[10px] flex items-center justify-center">
              <img src={img} alt={`Portfolio ${index + 1}`} className="w-full rounded-[10px] h-full object-cover" />
            </div>
            <button
              className="absolute top-2 right-2 text-red-600"
              onClick={() => removePortfolioImage(index)}
            >
             <UilTimesCircle  size={35} color='#2aa100'/>
            </button>
          </div>
        ))}
      </div>
      {/* Hidden file input for uploading images */}
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileUpload}
      />
      {/* Button to trigger file input */}
      <button className="text-pink-600 text-lg mb-4" onClick={() => fileInputRef.current?.click()}>Upload Image</button>
    </section>

    </section>
  );
};

export default ProfileForm;

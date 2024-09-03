import React, { useState } from 'react';
import VideoSection from './VideoSection';

const VideoTrainingPage: React.FC = () => {
  const [videoSections, setVideoSections] = useState([
    { title: 'Training Video 1: Introduction', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { title: 'Training Video 2: Advanced Techniques', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
    { title: 'Training Video 3: Best Practices', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  ]);

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const newVideoUrl = URL.createObjectURL(file);
      const newSection = { title: `Uploaded Video: ${file.name}`, videoUrl: newVideoUrl };
      setVideoSections([...videoSections, newSection]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 mt-[4rem]">
      <h1 className="text-3xl font-bold mb-8 text-center">Training Videos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {videoSections.map((section, index) => (
          <div key={index} className="w-full">
            <VideoSection
              title={section.title}
              videoUrl={section.videoUrl}
            />
          </div>
        ))}
      </div>

      {/* <div className="flex flex-col items-center justify-center w-full max-w-md mt-8">
        <h2 className="text-2xl font-semibold mb-4">Upload a New Video</h2>
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoUpload}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div> */}
    </div>
  );
};

export default VideoTrainingPage;

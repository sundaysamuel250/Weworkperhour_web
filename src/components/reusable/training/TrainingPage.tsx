import React from 'react';
import VideoSection from './VideoSection';

const VideoTrainingPage: React.FC = () => {
  const videoSections = [
    { title: 'Training Video 1: Introduction', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { title: 'Training Video 2: Advanced Techniques', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
    { title: 'Training Video 3: Best Practices', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    // Add more video sections as needed
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Training Videos</h1>
      {videoSections.map((section, index) => (
        <VideoSection
          key={index}
          title={section.title}
          videoUrl={section.videoUrl}
        />
      ))}
    </div>
  );
};

export default VideoTrainingPage;

import React, { useState, useRef } from 'react';
import Quiz from './Quiz';

interface VideoSectionProps {
  videoUrl: string;
  title: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videoUrl, title }) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    setShowQuiz(true);
  };

  return (
    <div className="w-full max-w-4xl mb-12">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <video
        ref={videoRef}
        controls
        onEnded={handleVideoEnd}
        className="w-full rounded-lg shadow-lg mb-4"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {showQuiz && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center mt-[8rem] z-50">
          <div className="relative bg-white rounded-lg shadow-lg p-8 w-full max-w-8xl max-h-full overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={() => setShowQuiz(false)}
            >
              &times;
            </button>
            <Quiz />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSection;

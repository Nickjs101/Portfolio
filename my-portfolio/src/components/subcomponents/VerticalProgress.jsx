// VerticalProgressBar.js
import React, { useEffect, useState } from 'react';

const sections = ['section1', 'section2', 'section3', 'section4'];

const VerticalProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const firstSection = document.getElementById(sections[0]);
    const lastSection = document.getElementById(sections[sections.length - 1]);

    if (!firstSection || !lastSection) return;

    const scrollPosition = window.scrollY;
    const firstSectionTop = firstSection.offsetTop;
    const lastSectionBottom = lastSection.offsetTop + lastSection.offsetHeight;

    if (scrollPosition < firstSectionTop) {
      setProgress(0);
    } else if (scrollPosition > lastSectionBottom) {
      setProgress(100);
    } else {
      const totalScrollableDistance = lastSectionBottom - firstSectionTop;
      const scrolledDistance = scrollPosition - firstSectionTop;
      const scrollProgress = (scrolledDistance / totalScrollableDistance) * 100;
      setProgress(scrollProgress);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative mx-auto h-full flex flex-col items-center">
      <div className="relative w-1 h-full bg-gray-300">
        <div
          className=" w-1 bg-green-500"
          style={{ height: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default VerticalProgressBar;

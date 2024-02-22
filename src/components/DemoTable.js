import React, { useEffect, useRef, useState } from "react";
import video from "../assets/teaching_video.mp4";
import { FaPlay, FaPause } from "react-icons/fa";
import { TbRewindBackward5, TbRewindForward5 } from "react-icons/tb";
import { FaVolumeHigh,FaVolumeLow,FaVolumeXmark } from "react-icons/fa6";


const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFastForwarding, setIsFastForwarding] = useState(true);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const togglePlay = () => {
    console.log("hit")
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }

    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  useEffect(() => {
    const video = videoRef.current;
    const intervalId = setInterval(() => {
      setCurrentTime(video.currentTime);
      setDuration(video.duration);
    }, 1);

    video.addEventListener("ended", () => {
      setIsPlaying(false);
    });
    return () => {
      clearInterval(intervalId);
      video.removeEventListener("ended", () => {
        setIsPlaying(false);
      });
    };
  }, []);
  

  useEffect(()=>{
   videoRef.current.focus()
  },[])

  

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleProgressBarClick = (e) => {
    const video = videoRef.current;
    const progressBarContainer = e.currentTarget;
    const rect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const progressBarWidth = rect.width;
    const newTime = (offsetX / progressBarWidth) * video.duration;

    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const progressBarStyles = {
    width: `${(currentTime / duration) * 100}% `,
  };

  const handleForward = () => {
    const video = videoRef.current;
    video.currentTime += 5;
    setCurrentTime(video.currentTime);
  };
  const handleRewind = () => {
    const video = videoRef.current;
    video.currentTime -= 5;
    setCurrentTime(video.currentTime);
  };

  const handleKeyDown =(e)=>{
    if(e.code==="Space"){
      togglePlay()
    }
  }

  return (
    <div className="video-player relative" >
      <div className={`video-container relative   `}>
        <video
         onKeyDown={handleKeyDown}
         tabIndex={0}
          ref={videoRef}
          src={video}
          onClick={togglePlay}
          onMouseDown={() => {
            
              const video = videoRef.current;
              video.playbackRate = 2;

           
           
          }}
          onMouseUp={() => {
            const video = videoRef.current;
            video.playbackRate = 1;
            
          }}
         
          
        ></video>
        <div></div>
        <div className=" video-controls absolute w-full bottom-0 left-0 p-4   ">
          <div
            className="progress-bar-container z-50 w-full cursor-pointer bg-gray-300 h-1 relative mt-2"
            onClick={handleProgressBarClick}
          >
            <div
              className="progress-bar bg-red-800 h-full"
              style={progressBarStyles}
            ></div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <button
              onClick={togglePlay}
              className="play-pause-btn cursor-pointer  pt-1"
            >
              {isPlaying ? <FaPause color="white" /> : <FaPlay color="white" />}
            </button>
            <button className="pt-1" onClick={handleRewind}>
              <TbRewindBackward5 color="white" size={26}></TbRewindBackward5>
            </button>
            <button className="pt-1" onClick={handleForward}>
              <TbRewindForward5 color="white" size={26}></TbRewindForward5>
            </button>
            <button className="pt-1">
              <FaVolumeHigh color="white" size={26}></FaVolumeHigh>
            </button>

            <div className=" text-white mt-1">
              {" "}
              {formatTime(currentTime)} / {formatTime(duration)}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

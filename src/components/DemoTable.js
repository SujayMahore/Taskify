import React, { useEffect, useRef, useState } from "react";
import video from "../Assets/SampleVideo_1280x720_30mb.mp4";
import { FaPlay, FaPause } from "react-icons/fa";
import { TbRewindBackward5, TbRewindForward5 } from "react-icons/tb";
import { FaVolumeHigh, FaVolumeLow, FaVolumeXmark } from "react-icons/fa6";
import { RiFullscreenFill, RiFullscreenExitLine } from "react-icons/ri";
import {
  MdFullscreen,
  MdFullscreenExit,
  MdPictureInPicture,
  MdPictureInPictureAlt,
} from "react-icons/md";
import { document } from "postcss";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const divRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1); // State for volume, initially set to max
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [playbackSpeed,setPlaybackSpeed] = useState(1);

  const togglePlay = () => {
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

  useEffect(() => {
    videoRef.current.focus();
  }, []);

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

  const handleKeyDown = (e) => {
    if (e.code === "Space") {
      togglePlay();
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
  };

  const handleFullScreen = () => {
    const videoContainer = videoRef.current;

    if (videoContainer.requestFullscreen) {
      videoContainer.requestFullscreen();
    } else if (videoContainer.msRequestFullscreen) {
      videoContainer.msRequestFullscreen();
    } else if (videoContainer.mozRequestFullScreen) {
      videoContainer.mozRequestFullScreen();
    } else if (videoContainer.webkitRequestFullscreen) {
      videoContainer.webkitRequestFullscreen();
    }
    setFullscreen(!fullscreen);

  };
  const togglePictureInPicture = () => {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    } else {
      videoRef.current.requestPictureInPicture();
    }
  };
  function enterFS() {
    const videoContainer = videoRef.current;

    if (videoContainer.requestFullscreen) {
      videoContainer.requestFullscreen();
    } else if (videoContainer.msRequestFullscreen) {
      videoContainer.msRequestFullscreen();
    } else if (videoContainer.mozRequestFullScreen) {
      videoContainer.mozRequestFullScreen();
    } else if (videoContainer.webkitRequestFullscreen) {
      videoContainer.webkitRequestFullscreen();
    }
  }
  
  function exitFS() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }

  const togglePlaybackSpeed = () => {
    let newSpeed = playbackSpeed + 0.25;
    if (newSpeed > 2.0) {
      newSpeed = 0.25; // If it's already at 2.0x, toggle to -2.0x
    }
    setPlaybackSpeed(newSpeed);
    videoRef.current.playbackRate = newSpeed;
  };
  

  return (
    <div ref={divRef}  className="video-player relative  w-full h-screen">
      
      <div   className={`video-container relative w-full h-4/5 `}>
        <video
          // controlsList="nodownload"
          className="w-full h-full object-cover"
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
        <div className="video-controls z-50 absolute w-full bottom-0 left-0 p-4">
          <div
            className="progress-bar-container z-50 w-full cursor-pointer bg-gray-300 h-1 relative mt-2"
            onClick={handleProgressBarClick}
          >
            <div
              className="progress-bar bg-red-800 h-full"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            ></div>
          </div>
          <div className="flex flex-row items-center justify-between mx-4 ">
            <div className="flex flex-row items-center gap-3">
              <button
                onClick={togglePlay}
                className="play-pause-btn cursor-pointer pt-1"
              >
                {isPlaying ? (
                  <FaPause color="white" />
                ) : (
                  <FaPlay color="white" />
                )}
              </button>
              <button className="pt-1" onClick={handleRewind}>
                <TbRewindBackward5 color="white" size={26}></TbRewindBackward5>
              </button>
              <button className="pt-1" onClick={handleForward}>
                <TbRewindForward5 color="white" size={26}></TbRewindForward5>
              </button>
              <div className="volume-container pt-1 flex items-center group">
                <button className="">
                  {volume >= 0.5 && (
                    <FaVolumeHigh color="white" size={26}></FaVolumeHigh>
                  )}
                  {volume < 0.5 && volume > 0 && (
                    <FaVolumeLow color="white" size={26}></FaVolumeLow>
                  )}
                  {volume === 0 && (
                    <FaVolumeXmark color="white" size={26}></FaVolumeXmark>
                  )}
                </button>
                <input
                  type="range"
                  className="h-1 w-0 scale-x-0 origin-left group-hover:w-full group-hover:scale-x-100 transition-all duration-300"
                  min="0"
                  max="1"
                  step="any"
                  value={volume}
                  onChange={handleVolumeChange}
                ></input>
              </div>
              <div className="text-white mt-1 transition-all duration-300">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>

            <div className="items-2 items-center flex gap-3">
            <button 
                className="playbackspeed text-white text-lg w-[50px]"
                onClick={togglePlaybackSpeed}
              >
                {playbackSpeed.toFixed(2)}x
              </button>
              <button onClick={togglePictureInPicture}> 
                <MdPictureInPicture
                  color="white"
                  size={24}
                ></MdPictureInPicture>
              </button>
              <button onClick={handleFullScreen}>
                {fullscreen ? (
                  <MdFullscreenExit color="white" size={26}></MdFullscreenExit>
                ) : (
                  <MdFullscreen color="white" size={26}></MdFullscreen>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

/* Hide default video controls */
video::-webkit-media-controls {
    display: none !important;
  }
  video::-webkit-media-controls-panel {
    display: none !important;
  }


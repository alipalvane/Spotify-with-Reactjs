import React, { memo, useState } from "react";
import { FaPause, FaPlay, FaRegStar, FaStar } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/img/logo.svg";

const Header = ({
  setCurrentSong,
  songs,
  setSongs,
  audioHandler,
  setAudioHandler,
  currentSong,
  songCurrentTime,
  songFullTime,
  audioRef,
}) => {
  const getCleanTime = (time) => {
    return `${Math.floor(time / 60)} : ${("0" + Math.floor(time % 60)).slice(
      -2
    )} `;
  };

  const getNext = () => {
    const index = songs.findIndex((item) => item.id === currentSong[0].id);
    setCurrentSong([songs[index + 1]]);
    if (songs.indexOf(currentSong[0]) === songs.length - 1) {
      setCurrentSong([songs[0]]);
    }
  };

  const getBack = () => {
    const index = songs.findIndex((item) => item.id === currentSong[0].id);
    setCurrentSong([songs[index - 1]]);
    if (songs.indexOf(currentSong[0]) <= 0) {
      setCurrentSong([songs[songs.length - 1]]);
    }
  };

  const addTiFavList = () => {
    const filteredSongs = songs.map((item) => {
      if (item.id === currentSong[0].id) {
        return {
          ...item,
          active: !item.active,
        };
      } else {
        return {
          ...item,
          active: false,
        };
      }
    });

    setSongs(filteredSongs);
    setCurrentSong([
      {
        ...currentSong[0],
        active: !currentSong[0].active,
      },
    ]);

    if (!currentSong[0].active) {
      toast.success("Music added!", { closeOnClick: false });
    } else {
      toast.warning("Music remove!");
    }
  };

  console.log("Header.jsx");
  return (
    <header>
      <ToastContainer
        closeButton={false}
        toastStyle={{ backgroundColor: "#222326", color: "#fff" }}
      />
      <div className="container h-100">
        <div className="d-flex h-100 align-items-center">
          <div
            className="music-cover"
            style={{ backgroundImage: `url(${currentSong[0].cover})` }}
            onClick={() => setAudioHandler(!audioHandler)}
          >
            <div className="cover-filter"></div>
            {audioHandler ? (
              <FaPause size="5rem" color="#00DA5A" />
            ) : (
              <FaPlay size="5rem" color="#00DA5A" />
            )}
          </div>

          <div className="music-desc flex-grow-1">
            <div className="d-flex justify-content-between w-75">
              <div className="music-title">
                <h1>{currentSong[0].name}</h1>
                <h2>{currentSong[0].artist}</h2>
              </div>
              <button className="btn" onClick={addTiFavList}>
                {currentSong[0].active ? (
                  <FaStar size="1.5rem" color="#00da5a" />
                ) : (
                  <FaRegStar size="1.5rem" color="#00da5a" />
                )}
              </button>
            </div>

            <div className="music-range w-100">
              <div className="d-flex justify-content-between w-75">
                <span className="current-time">
                  {getCleanTime(songCurrentTime)}
                </span>
                <span className="full-time">
                  {songFullTime ? getCleanTime(songFullTime) : "0 : 00"}
                </span>
              </div>
              <div className="range-slider">
                <span className="progress" style={{ width: `${(songCurrentTime / songFullTime) * 100}%` }}></span>
                <input
                  type="range"
                  min={0}
                  max={songFullTime || 0}
                  value={songCurrentTime}
                  className="rangePlayer"
                  onChange={(e) =>
                    (audioRef.current.currentTime = e.target.value)
                  }
                />
              </div>
            </div>

            <div className="music-nav">
              <button className="btn" onClick={getBack}>
                <svg
                  fill="#fff"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z" />
                </svg>
              </button>

              <button
                className="btn"
                onClick={() => setAudioHandler(!audioHandler)}
              >
                {audioHandler ? (
                  <FaPause color="#fff" />
                ) : (
                  <FaPlay color="#fff" />
                )}
              </button>

              <button className="btn" onClick={getNext}>
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="logo">
            <img src={logo} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);

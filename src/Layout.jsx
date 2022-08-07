import React, { Children, useEffect, useRef, useState } from "react";
import { useContext } from "react";
import "./assets/styles/index.scss";
import Header from "./components/Header";
import Main from "./components/main/Main";
import SideBar from "./components/SideBar";
import { myContext } from "./context";

const Layout = ({ children }) => {
  const {
    audioHandler,
    setSongCurrentTime,
    setSongFullTime,
    currentSong,
    songs,
    setCurrentSong,
    setAudioHandler,
    songCurrentTime,
    songFullTime,
    setSongs,
  } = useContext(myContext);

  const audioRef = useRef();

  useEffect(() => {
    const playPromis = audioRef.current.play();
    if (playPromis !== undefined) {
      playPromis
        .then(() => {
          if (audioHandler) audioRef.current.play();
          else audioRef.current.pause();
        })
        .catch((err) => {
          console.log(err);
        });
    }

    setInterval(() => {
      setSongCurrentTime(audioRef.current.currentTime);
      setSongFullTime(audioRef.current.duration);
    }, 1000);
  }, [audioHandler, currentSong]);

  const getNext = () => {
    const index = songs.findIndex((item) => item.id === currentSong[0].id);
    setCurrentSong([songs[index + 1]]);
    if (songs.indexOf(currentSong[0]) === songs.length - 1) {
      setCurrentSong([songs[0]]);
    }
  };

  return (
    <div>
      <Header
        audioHandler={audioHandler}
        setAudioHandler={setAudioHandler}
        currentSong={currentSong}
        songCurrentTime={songCurrentTime}
        songFullTime={songFullTime}
        audioRef={audioRef}
        setCurrentSong={setCurrentSong}
        songs={songs}
        setSongs={setSongs}
      />
      <audio
        ref={audioRef}
        src={currentSong[0].audio}
        onEnded={getNext}
      ></audio>
      <main className="container-fluid">
        <div className="row h-100">
          <div className="col-md-3 pl-0">
            <SideBar />
          </div>
          <div className="col-md-9 playlist">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default Layout;

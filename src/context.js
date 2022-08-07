import React, { createContext, useState } from "react";
import musicList from "./Util";

export const myContext = createContext({
  songs: [],
  setSongs: [],
  audioHandler: [],
  setAudioHandler: [],
  currentSong: [],
  setCurrentSong: [],
  songCurrentTime: [],
  setSongCurrentTime: [],
  songFullTime: [],
  setSongFullTime: [],
  favStar: [],
  setFavstar: [],
});

const Contexts = ({ children }) => {
  const [songs, setSongs] = useState(musicList());

  const [audioHandler, setAudioHandler] = useState(false);

  const [currentSong, setCurrentSong] = useState([
    {
      id: 0,
      name: "Iran",
      artist: "Amirhossein Paknahad",
      cover:
        "https://nex1music.ir/upload/2021-10-22/amirhossein-paknahad-iran-2021-10-22-13-56-00.jpg",
      audio:
        "https://dl.nex1music.ir/1400/07/30/Amirhossein%20Paknahad%20-%20Iran.mp3",
      active: true,
    },
  ]);

  const [songCurrentTime, setSongCurrentTime] = useState(0);

  const [songFullTime, setSongFullTime] = useState();

  const [favStar, setFavstar] = useState(false);

  return (
    <myContext.Provider
      value={{
        songs,
        setSongs,
        audioHandler,
        setAudioHandler,
        currentSong,
        setCurrentSong,
        songCurrentTime,
        setSongCurrentTime,
        songFullTime,
        setSongFullTime,
        favStar,
        setFavstar,
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export default Contexts;

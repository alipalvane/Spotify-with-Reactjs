import { useContext } from "react";
import { myContext } from "../../context";
import MusicItems from "./MusicItems";


const Main = () => {
  const {songs, currentSong, setCurrentSong, audioHandler} = useContext(myContext)
  return (
    <main>
      {songs.map((item) => (
        <MusicItems
        key={item.id}
        name={item.name}
        artist={item.artist}
        cover={item.cover}
        songs={songs}
        id={item.id}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioHandler={audioHandler}/>
      ))}
    </main>
  );
};

export default Main;

import React from 'react';
const MusicItems = ({songs, cover, name, artist, id, currentSong, setCurrentSong, audioHandler}) => {

  const checkActiveSong = ()=> {
    const activeSong = songs.filter( item => item.id === id );
    setCurrentSong(activeSong);
    console.log(activeSong);
  }

    return ( 
        <div onClick={checkActiveSong} className="music-item d-flex align-items-center">
            <div className={`music-cover ${(currentSong[0].id === id && audioHandler) ? 'active' : ''}`} 
            style={{backgroundImage:`url(${cover})`}}></div>
            <div className="music-desc">
                <h2>{artist}</h2>
                <h6>{name}</h6>
            </div>
            <div className="music-options d-flex align-items-center">
                <span>2:45</span>
                <svg
                width="25px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#00DA5A"
                  d="M10 1.3l2.388 6.722H18.8l-5.232 3.948 1.871 6.928L10 14.744l-5.438 4.154 1.87-6.928-5.233-3.948h6.412L10 1.3z"
                />
              </svg>
            </div>
        </div>
     );
}
 
export default MusicItems;
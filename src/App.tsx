import React, { useEffect, useState } from 'react';
import OpeningSection from './OpeningSection';
import BrideGroom from './Bride';
import DateAndLocation from './DateAndLocation';
import AudioPlayer from './AudioPlayer/index';
import sound from './assets/love-someone-cover-joseph.mp3';
import { Button } from '@material-ui/core';
import OpeningModal from './OpeningModal/index';

const audio = new Audio(sound)
audio.loop = true;
audio.autoplay = true

function App() {
  const [isPlay, setIsPlay] = useState(true)
  const [open, setOpen] = React.useState(true);
  audio.muted = true
      
  useEffect(() => {
    if(isPlay) {
      audio.play() 
      audio.muted = false
    } else {
      audio.pause()
    }
  }, [isPlay])
  
  const handleClose = () => {
    setOpen(false)

    setTimeout(() => {
      audio.play() 
      audio.muted = false 
    }, 200)
  };
  
  return (
    <div>
      <OpeningModal handleClose={handleClose} open={open}/>
      <OpeningSection />
      <BrideGroom/>
      <DateAndLocation/>
      <AudioPlayer setIsPlay={setIsPlay} isPlay={!isPlay}/>
    </div>
  );
}

export default App;

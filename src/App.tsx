import React, { useEffect, useState } from 'react';
import OpeningSection from './OpeningSection';
import BrideGroom from './Bride';
import DateAndLocation from './DateAndLocation';
import AudioPlayer from './AudioPlayer/index';
import sound from './assets/love-someone-cover-joseph.mp3';
import OpeningModal from './OpeningModal/index';
import Message from './Message';
import ImageList from './ImageList';

import jas1 from './assets/jas-1.jpeg';
import jas2 from './assets/jas-2.jpg';
import jas3 from './assets/jas-3.jpg';

import blue1 from './assets/blue-1.jpg';
import blue2 from './assets/blue-2.jpg';
import blue3 from './assets/blue-3.jpg';

import black1 from './assets/black-1.jpg';
import black2 from './assets/black-2.jpg';
import black3 from './assets/black-3.jpg';


const audio = new Audio(sound)
audio.loop = true;
audio.autoplay = true

const jasImages = [
  {
    img: jas3,
    tittle: '1',
    author: ''
  },
  {
    img: jas1,
    tittle: '2',
    author: ''
  },
  {
    img: jas2,
    tittle: '3',
    author: ''
  }
]

const blueImages = [
  {
    img: blue3,
    tittle: '1',
    author: ''
  },
  {
    img: blue2,
    tittle: '2',
    author: ''
  },
  {
    img: blue1,
    tittle: '3',
    author: ''
  }
]

const blackImages = [
  {
    img: black1,
    tittle: '1',
    author: ''
  },
  {
    img: black2,
    tittle: '2',
    author: ''
  },
  {
    img: black3,
    tittle: '3',
    author: ''
  }
]

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
      <ImageList images={blueImages}/>
      <ImageList images={jasImages}/>
      <ImageList images={blackImages}/>
      <Message/>
      <DateAndLocation/>
      <AudioPlayer setIsPlay={setIsPlay} isPlay={!isPlay}/>
    </div>
  );
}

export default App;

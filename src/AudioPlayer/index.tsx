import React  from "react";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

import './styles.scss'
import { Button } from "@material-ui/core";


const AudioPlayer = ({ isPlay, setIsPlay }: any) => {
    return (
        <div className="my-audio">
            <Button onClick={() => setIsPlay(isPlay)}>
                <div className="circle">
                    {
                        isPlay ? 
                            <PlayArrowIcon className="play-pause-icon"/>
                            :
                            <PauseIcon className="play-pause-icon"/>  
                            
                    }
                </div>
            </Button>
        </div>
    )
}

export default AudioPlayer;
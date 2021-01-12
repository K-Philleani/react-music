import React, { memo, useEffect, useRef, useState } from 'react';
import { PlayerWrapper, Control, PlayInfo, Operator } from './styled'
import { Slider } from 'antd'
import { getSongDetail } from '../store/actionCreator'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils'


const PlayerBar = memo(() => {

  const [currentTime, setCurrentTime] = useState(0)
  // const [progress, setProgress] = useState(0);

  const dispatch = useDispatch()
  const audioRef = useRef()
  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(['player', 'currentSong'])
  }), shallowEqual)

  useEffect(() => {
    dispatch(getSongDetail)
  }, [dispatch])

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
  }, [currentSong])

  const picUrl = currentSong.al && currentSong.al.picUrl
  const singerName = currentSong.ar && currentSong.ar[0].name
  const duration = currentSong.dt || 0
  const formatDuration = formatDate(duration, 'mm:ss')
  const showCurrentTime = formatDate(currentTime, "mm:ss");
  const progress = currentTime / duration * 100

  const playMusic = () => {
    audioRef.current.play()
  }

  const timeUpdate = (e) => {
    const currentTime = e.target.currentTime;
    setCurrentTime(currentTime * 1000);
    console.log(currentTime)
  }

  return (
    <PlayerWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_player prev"></button>
          <button className="sprite_player play" onClick={() => playMusic()}></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
           <a href="">
            <img src={getSizeImage(picUrl, 35)} alt=""/>
           </a>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="#/" className="singer-name">{singerName}</a>
            </div>
            <div className="progress">
              <Slider defaultValue={30} value={progress} />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{formatDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio 
        ref={audioRef}
        onTimeUpdate={timeUpdate}
      ></audio>
    </PlayerWrapper>
  );
});

export default PlayerBar;
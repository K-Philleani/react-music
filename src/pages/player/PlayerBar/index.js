import React, { memo, useEffect } from 'react';
import { PlayerWrapper, Control, PlayInfo, Operator } from './styled'
import { Slider } from 'antd'
import { getSongDetail } from '../store/actionCreator'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getSizeImage, formatDate } from '@/utils/format-utils'


const PlayerBar = memo(() => {
  const dispatch = useDispatch()
  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(['player', 'currentSong'])
  }), shallowEqual)

  useEffect(() => {
    dispatch(getSongDetail)
  }, [dispatch])

  const picUrl = currentSong.al && currentSong.al.picUrl
  const singerName = currentSong.ar && currentSong.ar[0].name
  const duration = currentSong.dt || 0
  const formatDuration = formatDate(duration, 'mm:ss')
  return (
    <PlayerWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_player prev"></button>
          <button className="sprite_player play"></button>
          <button className="sprite_player next"></button>
          那你可能
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
              <Slider defaultValue={30}  />
              <div className="time">
                <span className="now-time">02:30</span>
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
    </PlayerWrapper>
  );
});

export default PlayerBar;
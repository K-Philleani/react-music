import React, { memo } from 'react';
import { SongsCoverWrapper } from './style'
import { getCount, getSizeImage } from "@/utils/format-utils";

const SongsCover = memo((props) => {
  const { info } = props
  return (
    <SongsCoverWrapper>
       <div className="cover-top">
         <img src={info.picUrl} alt=""/>
         <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
       </div>
       <div className="cover-bottom">
         {info.name}
       </div>
       <div className="cover-source">
          by {info.copywriter || info.creator.nickname}
       </div>
    </SongsCoverWrapper>
  );
});

export default SongsCover;
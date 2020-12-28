import React, { memo, useEffect, useRef, useCallback, useState } from 'react';
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'
import { getBannerList } from '../../store/actionCreators'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'antd'


const TopBanner = () => {
  const dispatch = useDispatch()
  const recommendState = useSelector(state => ({
    bannerList: state.getIn (['recommend', 'bannerList'])
  }), shallowEqual)
  const bannerRef = useRef();
  const [currentIndex, setCurrentIndex ] = useState(0) 
  useEffect(() => {
    dispatch(getBannerList)
  }, [dispatch])

  const beforeChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])
  const bgImage = recommendState.bannerList[currentIndex] ? (recommendState.bannerList[currentIndex].imageUrl + "?imageView&blur=40x20") : ''

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={beforeChange}>
            {
              recommendState.bannerList.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
            <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
            <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
};

export default memo(TopBanner);
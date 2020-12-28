import React, { memo, useEffect } from 'react';
import { HotRecommendWrapper } from './style'
import ThemeHeader from '@/components/theme-header'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getHotRecommendList } from '../../store/actionCreators'

const HotRecommend = memo(() => {

  const dispatch = useDispatch()
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommendList"])
  }), shallowEqual)

  useEffect(() => {
    dispatch(getHotRecommendList(8))
  }, [dispatch])
  console.log(hotRecommends)

  return (
    <HotRecommendWrapper>
      <ThemeHeader title="热门推荐" keywords={["华语", "流行", "摇滚", "电子"]} />
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return (
              <div key={index}>{item.name}</div>
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  );
});

export default HotRecommend;
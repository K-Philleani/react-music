import React, { memo } from 'react';
import TopBanner from './components/TopBanner'
import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style'
import HotRecommend from './components/HotRecommend'
import NewAlbum from './components/NewAlbum'
import Ranking from './components/Ranking'


const Recommend = props => {
  
  // const dispatch = useDispatch()
  // const recommendstate = useSelector(state => ({
  //   bannerList: state.getIn(["recommend", "bannerList"])
  // }), shallowEqual)

  // useEffect(() => {
  //   dispatch(getBannerList)
  // }, [dispatch])
  
  return (
    <RecommendWrapper>
      <TopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <Ranking />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}



export default memo(Recommend);

// const Recommend = memo((props) => {
  
//   useEffect(() => {
//    props.dispatch(getBannerList)
//   }, [getBannerList])

//   return (
//     <div>
//       {
//        props.bannerList.map((item, index) => (
//          <li key={index}>{item.targetId}</li>
//        ))
//       }
//     </div>
//   );
// });

// const mapStateToProps = state => ({
//   bannerList: state.recommend.bannerList
// })

// const mapDispatchToProps = dispatch => {
//   return {
//     dispatch
//   }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
import React, { memo } from 'react';
import TopBanner from './components/TopBanner'
import { RecommendWrapper } from './style'


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
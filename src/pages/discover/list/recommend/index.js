import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getBannerList } from './store/actionCreators'


const Recommend = props => {
  
  const dispatch = useDispatch()
  const recommendstate = useSelector(state => ({
    bannerList: state.getIn(["recommend", "bannerList"])
  }), shallowEqual)

  useEffect(() => {
    dispatch(getBannerList)
  }, [dispatch])
  
  return (
    <div>
      {
       recommendstate.bannerList.length
      }
    </div>
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
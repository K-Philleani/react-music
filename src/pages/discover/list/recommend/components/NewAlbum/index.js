import React, { memo, useEffect } from 'react';
import ThemeHeader from '@/components/theme-header'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getNewAlbumsList } from '../../store/actionCreators'

const NewAlbum = memo(() => {
  const dispatch = useDispatch()
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(['recommend', 'newAlbums'])
  }), shallowEqual)
  useEffect(() => {
   dispatch(getNewAlbumsList(10))
  }, [dispatch])

  return (
    <div>
      <ThemeHeader title="新碟上架" />
      {
        newAlbums.map((item, index) => {
          return (
            <div key={index}>{item.name}</div>
          )
        })
      }
    </div>
  );
});


export default NewAlbum;
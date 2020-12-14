import { Redirect } from "react-router-dom"
import React from 'react'

import Discover from "@/pages/discover"
import Recommend from "@/pages/discover/list/recommend"
import Songs from "@/pages/discover/list/songs"
import Ranking from "@/pages/discover/list/ranking"
import Djradio from '@/pages/discover/list/djradio'
import Artist from '@/pages/discover/list/artist'
import Album from '@/pages/discover/list/album'

import Friend from "@/pages/friend"
import Mine from "@/pages/mine"



const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover"></Redirect>
    ) 
  },
  {
    path: "/discover",
    component: Discover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend"></Redirect>
        )
      },
      {
        path: '/discover/recommend',
        component: Recommend
      },
      {
        path: '/discover/songs',
        component: Songs
      },
      {
        path: '/discover/ranking',
        component: Ranking
      },
      {
        path: '/discover/djradio',
        component: Djradio
      },
      {
        path: '/discover/artist',
        component: Artist
      },
      {
        path: '/discover/album',
        component: Album
      }
    ]
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: "/friend",
    component: Friend
  }
]




export default routes
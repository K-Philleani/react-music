import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config'
import routes from "./router"
import MusicAppHeader from "@/components/app-header"
import MusicAppFooter from "@/components/app-footer"
import { HashRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import store from '@/store'
import PlayerBar from './pages/player/PlayerBar'

const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <MusicAppHeader />
        {renderRoutes(routes)}
        <MusicAppFooter />
        <PlayerBar />
      </HashRouter>
    </Provider>
  );
});

export default App;

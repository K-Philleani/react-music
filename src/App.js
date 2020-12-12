import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config'
import routes from "./router"
import MusicAppHeader from "@/components/app-header"
import MusicAppFooter from "@/components/app-footer"
import { HashRouter } from "react-router-dom"

const App = memo(() => {
  return (
    <HashRouter>
      <MusicAppHeader />
      {renderRoutes(routes)}
      <MusicAppFooter />
    </HashRouter>
  );
});

export default App;

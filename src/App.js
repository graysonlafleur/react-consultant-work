import Branding from "./Components/Branding";
import Following from "./Components/Following";
import NewContent from "./Components/NewContent";
import SearchBar from "./Components/SearchBar";
import background from "./trufflebackground.png";
import React from 'react'

const screen = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

function App() {
  return (
    <div style={screen}>
      <Branding/>
      <SearchBar/>
      <Following/>
      <NewContent/>
    </div>
  );
}

export default App;
import FavouriteSites from "./components/FavouriteSites"
import Profile from "./components/Profile"
import Gallery from "./components/Gallery"
import "./App.css"
import "./styles/FavouriteSites.css"
import "./styles/Profile.css"
import "./styles/Gallery.css"

function App() {
  return (
    <div className="App">
      <div className="FavouriteSites">
        <FavouriteSites/>
      </div>
      <div className="Profile">
        <Profile/>
      </div>
      <div className="FavouriteSites">
        <Gallery/>
      </div>
      
      
    </div>
    
  );
}

export default App;

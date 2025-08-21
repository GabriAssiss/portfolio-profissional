import "../styles/index.css";
import { Outlet } from "react-router-dom";
import VideoPlayer from "../utils/VideoPlayer";
import MusicPlayer from "../utils/MusicPlayer";
import data from '../data/data.json'; 

function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <MusicPlayer />
      <VideoPlayer />
      <Outlet />
     
    </div>
  );
}


export default App;

import { useEffect, useRef, useState } from "react";

function MusicPlayer() {
  const playlist = [
    "/musics/dunt-tape.mp3",
    "/musics/space-jazz.mp3",
    "/musics/vhs.mp3"
  ];

  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef(null);

  const handleEnded = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
  };


  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [currentTrack]);

  return (
    <div className="h-0">
      <audio
        ref={audioRef}
        onEnded={handleEnded}
        autoPlay
        controls
      >
        <source src={playlist[currentTrack]} type="audio/mp3" />
      </audio>
    </div>
  );
}

export default MusicPlayer;

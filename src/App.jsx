import React, { useState, useRef } from "react";

const TRACKS = [
    "https://soundcloud.com/gebroedersscooter/totale-escalatie",
    "https://soundcloud.com/gebroedersscooter/totale-escalatie-2",
    "https://soundcloud.com/gebroedersscooter/totale-escalatie-3d?in=icypalm/sets/vrijmibo-chaoslijst",
    "https://soundcloud.com/gebroedersscooter/totale-escalatie-4-ever?in=icypalm/sets/vrijmibo-chaoslijst",
    "https://soundcloud.com/gebroedersscooter/totale-escalatie-high-5?in=icypalm/sets/vrijmibo-chaoslijst",
    "https://soundcloud.com/gebroedersscooter/totale-escalatie-6-on-the-beach?in=icypalm/sets/vrijmibo-chaoslijst",
    "https://soundcloud.com/gebroedersscooter/gebroeders-scooter-totale-escalatie-7up?in=icypalm/sets/vrijmibo-chaoslijst",
    "https://soundcloud.com/gebroedersscooter/totale-escalatie-8baan?in=icypalm/sets/vrijmibo-chaoslijst",
    "https://soundcloud.com/gebroedersscooter/gebroeders-scooter-totale-escalatie-9darisch?in=icypalm/sets/vrijmibo-chaoslijst",
    "https://soundcloud.com/gebroedersscooter/totale-escalatien?in=icypalm/sets/vrijmibo-chaoslijst",
    "https://soundcloud.com/gebroedersscooter/gebroeders-scooter-totale-escalatie-spuit-11?in=icypalm/sets/vrijmibo-chaoslijst",
    "https://soundcloud.com/gebroedersscooter/gebroeders-scooter-totale-isolatie?in=icypalm/sets/vrijmibo-chaoslijst",
    "https://soundcloud.com/gebroedersscooter/totale-escalatie-centurion?in=icypalm/sets/vrijmibo-chaoslijst",
    "https://soundcloud.com/gebroedersscooter/gebroeders-scooter-totale-escalatie-centurion-20?in=icypalm/sets/vrijmibo-chaoslijst",
    "https://soundcloud.com/gebroedersscooter/gebroeders-scooter-totale-ek-latie?in=icypalm/sets/vrijmibo-chaoslijst",
    "https://soundcloud.com/gebroedersscooter/gebroeders-scooter-totale-ek-latie-2024?in=icypalm/sets/vrijmibo-chaoslijst"
];

function App() {
  const [roll, setRoll] = useState(null);
  const [track, setTrack] = useState(null);
  const [track_count, setTrackCount] = useState(TRACKS.length);
  const [hornCount, setHornCount] = useState(0);
  const hornRef = useRef(null);
  const hornTimeoutRef = useRef(null); // Add this line

  const handleRoll = () => {
    const n = Math.floor(Math.random() * track_count); // 0-12
    setRoll(n + 1);
    setTrack(TRACKS[n]);
  };

  const playHorn = () => {
    if (hornRef.current) {
      hornRef.current.currentTime = 0;
      hornRef.current.play();
    }
    setHornCount((prev) => prev + 1);

    // Reset timer if already running
    if (hornTimeoutRef.current) {
      clearTimeout(hornTimeoutRef.current);
    }
    hornTimeoutRef.current = setTimeout(() => {
      setHornCount(0);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-blue-100 to-yellow-200 p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">🎲 VrijMiBo Chaos Dice 🎲</h1>
      <audio ref={hornRef} src="/airhorn-6466.mp3" preload="auto" />
      <button
        className="bg-blue-600 text-white px-8 py-4 rounded-2xl text-2xl shadow-lg hover:bg-blue-700 transition mb-8"
        onClick={handleRoll}
      >
        Roll { track_count }-sided Dice
      </button>
      {roll && (
        <div className="mb-6 text-xl">
          <p>
            <b>You rolled: {roll}</b>
          </p>
        </div>
      )}
      {track && (
        <>
        <div className="w-full max-w-xl">
          <iframe
            title="SoundCloud Player"
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(track)}&color=%230066cc&auto_play=true&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true`}
          />
        </div>

        <button
          className="bg-yellow-400 text-black px-16 py-8 rounded-full text-5xl font-extrabold shadow-2xl hover:bg-yellow-500 transition mb-8 mt-12"
          style={{ minWidth: "300px" }}
          onClick={playHorn}
        >
          {hornCount === 0 ? "🎉 Extra party party " : "📯".repeat(hornCount)}
        </button>
        </>
      )}
      <footer className="mt-12 text-sm text-gray-500">
        Made for <a className="underline" href="https://soundcloud.com/icypalm/sets/vrijmibo-chaoslijst" target="_blank" rel="noopener noreferrer">VrijMiBo Chaoslijst</a>
      </footer>
    </div>
  );
}

export default App;

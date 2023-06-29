"use client";
import { useEffect, useState } from "react";
import useSound from "use-sound";
export const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [link, setLink] = useState(
    "https://aac.saavncdn.com/274/aee250c500588f117ae5343688e12b42_48.mp4"
  );
  const [play, { pause, duration, sound }] = useSound(link);
  const playingButton = () => {
    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      play(); // this will play the audio
      setIsPlaying(true);
    }
  };
  const [currTime, setCurrTime] = useState({
    min: 0,
    sec: 0,
  }); // current position of the audio in minutes and seconds
  const time = {
    min: 0,
    sec: 0,
  };
  const [seconds, setSeconds] = useState();
  useEffect(() => {
    if (duration === null) return;
    const sec = duration / 1000;
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec % 60);
    time.min = min;
    time.sec = secRemain;
  }, [duration]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])); // setting the seconds state with the current state
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);
  useEffect(() => {
    if (duration === null) return;
    const sec = duration / 1000;
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec % 60);
    const time = {
      min: min,
      sec: secRemain,
    };
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])); // setting the seconds state with the current state
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="w-16 h-16 rounded-full bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-violet-600" />
          <div onClick={playingButton} className="flex flex-col">
            <p className="text-sm font-medium">Dhun</p>
            <p className="text-xs text-muted-foreground">Dhun</p>
            <p className="text-xs text-muted-foreground">{duration}</p>
          </div>
          <div>
            <div className="time">
              <p>
                {currTime.min}:{currTime.sec}
              </p>
              <p>
                {time.min}:{time.sec}
              </p>
            </div>
            <input
              type="range"
              min="0"
              max={duration! / 1000}
              value={seconds}
              className="timeline"
              onChange={(e) => {
                sound.seek([e.target.value]);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

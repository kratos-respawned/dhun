"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import useSound from "use-sound";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { Skeleton } from "./ui/skeleton";
import { Slider } from "./ui/slider";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
export const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [barPostion,setBarPosition]=useState(0);
  const [link] = useState(
    "https://aac.saavncdn.com/479/cd8bd5b1fcd633cfd51855c327682352_48.mp4"
  );
  const [play, { pause, duration, sound }] = useSound(link, {
    onload: () => {
      setIsLoading(false);
    },
    volume: volume,
  });
  const actualVolume = useRef(volume * 100);
  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };
  const toggleMute = () => {
    if (volume === 0) {
      setVolume(actualVolume.current / 100);
    } else {
      setVolume(0);
    }
  };
  useEffect(()=>{
    const timer= setInterval(()=>{
      const position:number=sound.seek();
      setBarPosition(position)
    },1000)
    return ()=>clearInterval(timer)
  },[sound])

  return (
    <Card className="fixed bottom-0 pb-0 z-50  bg-muted dark:bg-slate-900 h-[70px] left-0 right-0  ">
      <div className="relative w-full h-full grid grid-cols-3 justify-between ">
        {/* left side */}
        <div className="flex gap-x-4 max-w-xs items-center">
          {isLoading ? (
            <Skeleton className=" h-[70px] w-[70px] " />
          ) : (
            <Image
              src={"https://c.saavncdn.com/274/Rockstar-2011-150x150.jpg"}
              width={70}
              height={70}
              className="w-[70px] h-[70px]"
              alt="song"
            />
          )}

          <div className=" hidden md:block md:py-4 ">
            {isLoading ? (
              <>
                <Skeleton className="h-4 w-[150px] mb-2 " />
                <Skeleton className="h-4 w-[100px] " />
              </>
            ) : (
              <>
                <p className="text-sm font-cal tracking-wide">TITLE</p>
                <p className="text-xs">Arijit Singh</p>
              </>
            )}
          </div>
        </div>
        {/* middle controls */}
        <div className="flex flex-1  items-center justify-center gap-x-2 md:gap-x-4 ">
          <Button
            className="active:scale-90 select-none transition-transform"
            variant="secondary"
            size="icon"
          >
            <Icons.prev className="h-4 w-4" />
          </Button>
          <Button
            disabled={isLoading}
            onClick={playingButton}
            className="active:scale-90 select-none relative transition-transform"
            variant="default"
            size="icon"
          >
            {isLoading ? (
              <Icons.loader
                className={cn("h-4 w-4 animate-spin absolute transition-all ")}
              />
            ) : (
              <>
                <Icons.play
                  className={cn(
                    "h-4 w-4 transition-all",
                    isPlaying && " scale-0 -rotate-90"
                  )}
                />

                <Icons.pause
                  className={cn(
                    "h-4 w-4 absolute transition-all ",
                    !isPlaying && " rotate-90 scale-0 "
                  )}
                />
              </>
            )}
          </Button>
          <Button
            className="active:scale-90  transition-transform"
            variant="secondary"
            size="icon"
          >
            <Icons.next className="h-4 w-4" />
          </Button>
        </div>
        {/* right side */}
        <div className="flex justify-end items-center md:gap-x-2 pr-4">
          <Button
            className="active:scale-90 transition-transform"
            variant="ghost"
            size="icon"
          >
            <Icons.like className="h-4 w-4" />
          </Button>
          <Button
            className=" hidden sm:flex active:scale-90 transition-transform"
            variant="ghost"
            size="icon"
          >
            <Icons.save className="h-4 w-4" />
          </Button>
          <div className="hidden md:flex items-center gap-x-2">
            <Button
              disabled={isLoading}
              onClick={toggleMute}
              className="active:scale-90 relative transition-transform"
              variant="ghost"
              size="icon"
            >
              {
                <Icons.mute
                  className={cn(
                    "h-5 transition-transform w-5",
                    volume !== 0 && "scale-0"
                  )}
                />
              }
              {
                <Icons.lowVolume
                  className={cn(
                    "h-5 absolute transition-transform w-5",
                    volume * 100 >= 50 || (volume * 100 === 0 && "scale-0")
                  )}
                />
              }
              {
                <Icons.highVolume
                  className={cn(
                    "h-5 absolute transition-transform w-5",
                    volume * 100 < 50 || volume * 1000 === 0 ? "scale-0" : null
                  )}
                />
              }
            </Button>
            <Slider
              orientation="horizontal"
              disabled={isLoading}
              defaultValue={[volume * 100]}
              max={100}
              step={1}
              onValueChange={(value) => {
                setVolume(value[0] / 100);
                actualVolume.current = value[0];
              }}
              className={cn("w-[100px] h-1 ")}
            />
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                disabled={isLoading}
                className=" md:hidden active:scale-90 relative transition-transform"
                variant="ghost"
                size="icon"
              >
                {
                  <Icons.mute
                    className={cn(
                      "h-5 transition-transform w-5",
                      volume !== 0 && "scale-0"
                    )}
                  />
                }
                {
                  <Icons.lowVolume
                    className={cn(
                      "h-5 absolute transition-transform w-5",
                      volume * 100 >= 50 || (volume * 100 === 0 && "scale-0")
                    )}
                  />
                }
                {
                  <Icons.highVolume
                    className={cn(
                      "h-5 absolute transition-transform w-5",
                      volume * 100 < 50 || volume * 1000 === 0
                        ? "scale-0"
                        : null
                    )}
                  />
                }
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-max px-3 border">
              <Slider
                orientation="vertical"
                disabled={isLoading}
                defaultValue={[volume * 100]}
                max={100}
                step={1}
                onValueChange={(value) => {
                  setVolume(value[0] / 100);
                  actualVolume.current = value[0];
                }}
                className={cn("h-[100px] w-1 ")}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* player bar */}
        <Slider
          orientation="horizontal"
          value={[barPostion]}
          defaultValue={[0]}
          step={1}
          max={(duration || 0) / 1000}
          onValueChange={(e) => {
            sound.seek(e[0]);
          }}
          className="w-full h-1.5 rounded-none absolute top-0 -translate-y-1/2 player"
        />
      </div>
    </Card>
  );
};

"use client";
import { useEffect, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
export default function YouTubeVideo({ id }: { id: string }) {
  const [width, setWidth] = useState(350);

  useEffect(() => {
    if (!window) {
      return;
    }

    if (window.innerWidth >= 600) {
      // Width of surrounding paragraphs minus padding.
      setWidth(500 - 32);
    } else if (window.innerWidth >= 450) {
      setWidth(405);
    }
  }, []);

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: width * (9 / 16),
    width: width,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return <YouTube videoId={id} opts={opts} onReady={onPlayerReady} />;
}

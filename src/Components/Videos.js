import React from "react";
import useVideoList from "../hooks/useVideoList";
import Style from "../Styles/videos.module.css";
import Video from "./Video";
import { Link } from "react-router-dom";

export default function Videos() {
  const { loding, videos, error } = useVideoList();
  return (
    <div className={Style.videos}>
      {/* {videos.length > 0 &&
        videos.map((video) => (
          <Link to="" key={video.youtubeID}>
            <Video title={video.title} id={video.youtubeID} noq={video.noq} />
          </Link>
        ))}
      {!loding && videos.length === 0 && <div className="">No data found</div>}
      {error && <div className="">There was an error</div>}
      {loding && <div className="">loding......</div>} */}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";

export default function useVideoList() {
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState(true);
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      // database related works

      const db = getDatabase();

      // console.log(ref(db));

      const videoRef = ref(db, "/videos");

      const videoQuery = query(videoRef, orderByKey());
      try {
        setError(false);
        setLoding(true);
        // request firebase database
        const snapshort = await get(videoQuery);
        setLoding(false);
        if (snapshort.exists()) {
          setVideo((prevVideo) => {
            return [...prevVideo, ...Object.values(snapshort.val())];
          });
        } else {
          // setHasMore(false);
        }
      } catch (err) {
        console.log(err);
        setLoding(false);
        setError(true);
      }
    }

    fetchVideos();
  }, []);
  return { loding, videos, error };
}

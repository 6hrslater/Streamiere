import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { AiOutlineClose } from 'react-icons/ai';
import { img_300, unavailable } from "../config/config";
import { Badge } from "@material-ui/core";
import ContentModal from "./ContentModal/ContentModal"

const SavedShows = (
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
) => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();


  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const movieRef = doc(db, 'users', `${user?.email}`)
  const deleteShow = async (passedID) => {
      try {
        const result = movies.filter((item) => item.id !== passedID)
        await updateDoc(movieRef, {
            savedShows: result
        })
      } catch (error) {
          console.log(error)
      }
  }

  return (
    <>
      <ContentModal media_type={media_type} id={id}>
            <Badge
                badgeContent={vote_average}
                color={vote_average > 6 ? "primary" : "secondary"}
            />
            <img
                className="poster"
                src={poster ? `${img_300}${poster}` : unavailable}
                alt={title}
            />
            <b className="title">{title}</b>
            <span className="subTitle">
                {media_type === "tv" ? "TV Series" : "Movie"}
                <span className="subTitle">{date}</span>
            </span>
            <p onClick={()=> deleteShow(id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose /></p>
              
        </ContentModal>
                 
              
    </>
  );
};

export default SavedShows;
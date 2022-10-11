import React, { useState } from "react";
import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../../config/config";
import "./singleContent.css";
import ContentModal from "../ContentModal/ContentModal";
import {UserAuth} from "../../context/AuthContext";
import {db} from "../../firebase";
import {arrayUnion, doc, updateDoc}  from "firebase/firestore";
import { FaHeart, FaRegHeart } from "react-icons/fa";


const SingleContent = ({ 
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
    
}) => {  
    const [like, setLike] = useState(false);
    const [saved, setSaved] = useState(false);
    const { user } = UserAuth();
  
    const movieID = doc(db, 'users', `${user?.email}`);
  
    const saveShow = async () => {
      if (user?.email) {
        setLike(!like);
        setSaved(true);
        await updateDoc(movieID, {
          savedShows: arrayUnion({
            id: id,
            title: title,
            poster: poster,
          }),
        });
      } else {
        alert('Please log in to save a movie');
      }
    };

    console.log(saveShow)
    
    return (
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
            <p onClick={saveShow}>
          {like ? (
            <FaHeart className='absolute top-4 left-4 text-gray-300' />
          ) : (
            <FaRegHeart className='absolute top-4 left-4 text-gray-300' />
          )}
        </p>
        </ContentModal>
    );
};

export default SingleContent;
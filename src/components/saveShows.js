import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { AiOutlineClose } from 'react-icons/ai';
import { img_300, unavailable } from "../config/config";
import { Badge, Button } from "@material-ui/core";
import ContentModal from "./ContentModal/ContentModal"
import "./ContentModal/ContentModal.css"
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid"
import { whileStatement } from '@babel/types';
import SingleContent from './singleContent/singleContent';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "90%",
    height: "80%",
    backgroundColor: "#36393e",
    border: "1px solid #282c34",
    borderRadius: 10,
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
  
}));

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
  const classes = useStyles();
  

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
      console.log(doc.data()?.savedShows)
    });
  }, [user?.email]);

  const movieRef = doc(db, 'users', `${user?.email}`)
  const deleteShow = async (passedID) => {
      try {
        const result = movies.filter((item) => item.id !== passedID)
        console.log(passedID)
        console.log(result)
        await updateDoc(movieRef, {
            savedShows: result
        })
        setMovies(result);
      } catch (error) {
          console.log(error)
      }
  }

  return (
    <>
    <Grid container spacing={4}>
    {movies.map((item) => (
      <Grid item xs={2.5}>
        
      {<ContentModal className={classes.modal} media_type={media_type} id={item.id}>
            <Badge
                badgeContent={vote_average}
                color={vote_average > 6 ? "primary" : "secondary"}
            />
            <img
                className="poster"
                src={item.poster ? `${img_300}${item.poster}` : unavailable}
                alt={title}
            />
            <b className="title">{item.title}</b>
            <span className="subTitle">
                {media_type === "tv" ? "TV Series" : "Movie"}
                <span className="subTitle">{date}</span>
            </span>
            
              
        </ContentModal> }
        <Button variant='contained' onClick={()=> deleteShow(item.id)} className='cross button'><AiOutlineClose /></Button>
         </Grid>
      

        ))}
           </Grid>      
              
    </>
  );
};

export default SavedShows;
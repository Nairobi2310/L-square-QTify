import React, {useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./api/api";
import { StyledEngineProvider } from "@mui/material";

function App() {

  const [data, setData] = useState({});

  const generateData = (key, source) =>{
    source().then((data) => {
      setData((prevData) => {
        return {...prevData, [key]: data};
      })
    });
  }

  useEffect (() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
  },[]);

  const { topAlbums = [], newAlbums = [], songs = [] } = data;

  
  return (
   <>
   <StyledEngineProvider injectFirst>
        <NavBar searchData={[...topAlbums, ...newAlbums,]} />
        <Outlet context={{data: {topAlbums, newAlbums, songs}}}/>
      </StyledEngineProvider>
   </>
  );
}

export default App;

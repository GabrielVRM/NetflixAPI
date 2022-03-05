import React, { useEffect, useState } from "react";
import {
  makeStyles,
  Typography,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@material-ui/core";
import Tmdb from "./Components/Tmdb";
 import  Header  from './Components/Header';
import MovieRow from "./Components/MovieRow";
import Featured from "./Components/Featured";

export default function App() {
  const theme = createTheme({
    root: {
      background: "#111",
    },
    palette: {
      primary: {
        main: "#ffffff",
      },
      spacing: 8,
    },
  });

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      
      //pegando o featured
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
setFeaturedData(chosenInfo);
console.log(chosenInfo);
   };

    loadAll();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header/>
      {featuredData && <Featured item={featuredData} />}
      {movieList.map((item, key) => (
        <MovieRow key={key} title={item.title} items={item.items} />
      ))}
    </ThemeProvider>
  );
}

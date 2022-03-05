import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Button, Grid, Typography } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  root: {
    background: "#111",
    width: "100%",
    justifyContent: "center",
    height: "700px",

  },
  root1: {
    width: "100%",
    justifyContent: "center",
    height: "700px",
  },

  image: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  },
  color: {
    width: "inherit",
    height: "inherit",
    background: "linear-gradient(to top, #111 10%, transparent 90%)",
  },
  colorLeft: {
    width: "inherit",
    height: "inherit",
    background: "linear-gradient(to right, #111 , transparent)",
  },
  TypographyNameOrigins: {
    marginTop: "-420px",
    margin: "15px",
  },
  TypographyOverviwe: {
    width: "50%",
    margin: "18px",
    fontSize: "20px",
  },

  info: {
    display: "flex",
  },
  inf: {
    marginLeft: "35px",
  },
  buttonOne: {
    marginLeft: "20px",
  },
  pontos: {
    marginLeft: "35px",
    color: "#46d369",
  },
  genero:{
margin:'10px',
marginLeft: "20px",

  }
}));

export default function Featured({ item }) {
  const classes = useStyle();
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }
  return (
    <Box className={classes.root}>
        
      <Grid container lg={12} className={classes.root}>
        <Grid
          item
          lg={12}
          className={classes.root1}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
            backgroundSize: "cover",
            width: "100%",
            backgroundPosition: "center",
          }}
        >
          <div className={classes.color}>
            <div className={classes.colorLeft}></div>

            <Typography
              variant="h1"
              color="primary"
              className={classes.TypographyNameOrigins}
            >
              {item.original_name}
            </Typography>
            <Grid item className={classes.info}>
              <Typography
                variant="h6"
                color="primary"
                className={classes.pontos}
              >
                {item.vote_average} Pontos
              </Typography>
              <Typography variant="h6" color="primary" className={classes.inf}>
                {item.number_of_seasons} Temporada
                {item.number_of_seasons !== 1 ? "s" : " "}
              </Typography>
              <Typography variant="h6" color="primary" className={classes.inf}>
                {firstDate.getFullYear()}
              </Typography>
            </Grid>
            <Typography
              variant="h5"
              color="primary"
              className={classes.TypographyOverviwe}
            >
              {item.overview}
            </Typography>
            <Box>
              <Button
                variant="contained"
                size="large"
                color="primary"
                className={classes.buttonOne}
              >
                 Assistir
              </Button>

              <Button
                variant="contained"
                size="large"
                className={classes.buttonOne}
              >
                + Minha Lista
              </Button>
            </Box>

            <Typography variant="h6" color="primary" className={classes.genero}>
              <strong>Generos:</strong> {genres.join(", ")}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

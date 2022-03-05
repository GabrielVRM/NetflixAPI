import React from "react";
import { makeStyles, Typography, Grid, Box } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    background: "#111",
    fontFamily: "roboto, sans serif",
    marginTop:''
  },
  cont: {
    paddingLeft: "30px",
  },
  title: {
    margin: "20px 0px 0px 30px",
  },
  image: {
    display: "inline-block",
    width: "150px",
    cursor: 'pointer'
  },
  list: {
    width: 99999999999999,
  },
  listImage: {
    width: "100%",
    transform: 'scale(0.9)',
    transition:'all ease 0.3s' ,
    '&:hover': {
      transform: 'scale(1)'
    }
  },
}));

export default function MovieRow({ title, items }) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Box component="div" sx={{ overflow: "hidden" }} className={classes.cont}>
          <Grid item lg={12}>
            <Typography color="primary" variant="h4" className={classes.title}>
              {title}
            </Typography>
          </Grid>
          <Grid item className={classes.list} spacing={10}>
            {items.results.length > 0 &&
              items.results.map((item, key) => (
                <Box key={key} className={classes.image} spacing={8}>
                  <img
                    className={classes.listImage}
                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  />
                </Box>
              ))}
          </Grid>
      </Box>
    </div>
  );
}

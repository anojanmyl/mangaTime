import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const SingleAnime = (props) => {
  console.log(props.info);
  const title = props.info.title;
  const imageUrl = props.info.image_url;
  const rating = props.info.rating;
  const airing = String(props.info.airing);
  const score = props.info.score;

  return (
    <Grid
      container
      spacing={10}
      direction="row"
      justify="center"
      alignContent="center"
      alignItems="center"
      className="singleanime__container"
    >
      <Grid item>
        <img src={imageUrl} alt={title} />
      </Grid>
      <Grid item>
        <Paper>
          <Typography variant="h4" component="h2">
            {title}
          </Typography>
          <Typography variant="h5" component="h2">
            Airing: {airing}
          </Typography>
          <Typography variant="h5" component="h2">
            Score: {score}
          </Typography>
          <Typography variant="h5" component="h2">
            Rating: {rating}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SingleAnime;

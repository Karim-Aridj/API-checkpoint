import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./User.css";
const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 180,
  },
});

const User = ({user}) => {
  const classes = useStyles();

  return (
    <div className="user">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f05a9b5b-ead5-460e-8573-73ba2fff9cde/dcnlwkp-19df6a40-badc-4fe9-803d-9da05f5c68bc.png/v1/fill/w_1600,h_1237,strp/akatsuki_cloud_png_by_cporsdesigns_dcnlwkp-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIzNyIsInBhdGgiOiJcL2ZcL2YwNWE5YjViLWVhZDUtNDYwZS04NTczLTczYmEyZmZmOWNkZVwvZGNubHdrcC0xOWRmNmE0MC1iYWRjLTRmZTktODAzZC05ZGEwNWY1YzY4YmMucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.boOIlfNZMoKSfgoa3iXmZEM4bT79B9TTEb_qZb-3h6M"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {user.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`UserName: ${user.username}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`Email: ${user.email}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`City: ${user.address.city}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`Phone: ${user.phone}`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default User;

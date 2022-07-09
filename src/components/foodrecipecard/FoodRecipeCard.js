import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from "../../assets/img/foodpreview.png";
import { Link } from "react-router-dom";

export default function FoodCard(props) {
  return (
    <Card
      sx={{
        width: 400,
        height: 500,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <CardHeader
        title={props.recipe_title}
        subheader={props.recipe_upload_date}
      />
      <CardMedia
        component="img"
        height="50%"
        src={props.recipe_img}
        alt="Food"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.recipe_summary}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/viewRecipe">
          <Button size="small">View Recipe</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

import FoodCard from "../../components/foodrecipecard/FoodRecipeCard";
import { style } from "@mui/system";
import styled from "styled-components";
import { Typography, Button, TextField } from "@mui/material";
import { Text } from "../../components/typography/Typography";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import french_toast_img from "../../assets/img/breakfast/frenchtoast.jpg";
import omelette_img from "../../assets/img/breakfast/omelette.jpg";
import pancake_img from "../../assets/img/breakfast/pancake.jpg";
import pizza_img from "../../assets/img/lunch/pizza.jpg";
import hot_dog_img from "../../assets/img/lunch/hotdog.jpg";
import burger_img from "../../assets/img/lunch/burger.jpg";

const DEFAULT_MOST_RECENT = [
  {
    recipe_title: "Burger",
    recipe_upload_date: new Date(2020, 11, 17),
    recipe_summary: "Recipe summary",
    recipe_img: burger_img,
  },
  {
    recipe_title: "Hot dog",
    recipe_upload_date: new Date(2021, 11, 17),
    recipe_summary: "Recipe summary",
    recipe_img: hot_dog_img,
  },
  {
    recipe_title: "Pizza",
    recipe_upload_date: new Date(2022, 11, 17),
    recipe_summary: "Recipe summary",
    recipe_img: pizza_img,
  },
  {
    recipe_title: "French Toast",
    recipe_upload_date: new Date(2019, 11, 17),
    recipe_summary: "Recipe summary",
    recipe_img: french_toast_img,
  },
  {
    recipe_title: "Omelette",
    recipe_upload_date: new Date(2018, 11, 17),
    recipe_summary: "Recipe summary",
    recipe_img: omelette_img,
  },
  {
    recipe_title: "Pancake",
    recipe_upload_date: new Date(2017, 11, 17),
    recipe_summary: "Recipe summary",
    recipe_img: pancake_img,
  },
];

const sortByOptions = [
  {
    value: "newest",
    label: "Newest",
  },
  {
    value: "oldest",
    label: "Oldest",
  },
];

export function Home() {
  const [sortOrder, setSortOrder] = React.useState("newest");
  const [food, setFood] = React.useState(DEFAULT_MOST_RECENT);

  React.useEffect(() => {
    const copy = [...food];
    switch (sortOrder) {
      case "oldest":
        copy.sort((l1, l2) => l1.recipe_upload_date - l2.recipe_upload_date);
        setFood(copy);
        break;
      case "newest":
        copy.sort((l1, l2) => l2.recipe_upload_date - l1.recipe_upload_date);
        setFood(copy);
        break;
    }
  }, [sortOrder]);

  const handleSortTypeChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <>
      <Title>
        <Typography variant="h2">Welcome to BestRecipe !</Typography>
      </Title>
      <div style={{ textAlign: "center", margin: "30px" }}>
        <Typography variant="h5" align="center">
          A place for foodies and culinary explorers
        </Typography>
      </div>
      <div style={{ textAlign: "center", margin: "30px" }}>
        <Typography variant="body" align="center">
          View and Share recipes with others
        </Typography>
      </div>
      <HorizontalLine />
      <GridContainer>
        <div style={{ marginBottom: "25px" }}>
          <TextField
            select
            label="Sort order"
            style={{ background: "white" }}
            variant="standard"
            onChange={handleSortTypeChange}
            value={sortOrder}
          >
            {sortByOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <Grid>
          {food.map((value, index) => {
            return (
              <FoodCard
                key={index}
                recipe_title={value.recipe_title}
                recipe_upload_date={value.recipe_upload_date
                  .toDateString()
                  .split(" ")
                  .slice(1)
                  .join(" ")}
                recipe_summary={value.recipe_summary}
                recipe_img={value.recipe_img}
              />
            );
          })}
        </Grid>
      </GridContainer>
      <LoadMoreButton>
        <Button
          variant="container"
          style={{
            backgroundColor: "#CC9933",
            padding: "15px",
            width: "20%",
            margin: "50px",
          }}
        >
          <Typography variant="subtitle2">
            <Text>Load more</Text>
          </Typography>
        </Button>
      </LoadMoreButton>
    </>
  );
}

const LoadMoreButton = styled.div`
  text-align: center;
`;
const HorizontalLine = styled.hr`
  margin: 0 25%;
`;
const GridContainer = styled.div`
  margin: 100px auto;
  width: 75%;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 50px;
`;

const Title = styled.div`
  text-align: center;
  margin: 3% 0;
`;

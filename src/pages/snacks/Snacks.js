import FoodCard from "../../components/foodrecipecard/FoodRecipeCard";
import { style } from "@mui/system";
import styled from "styled-components";
import { Typography, Button, TextField } from "@mui/material";
import { Text } from "../../components/typography/Typography";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import fruit_snack_img from "../../assets/img/snacks/fruit_snack.jpg";
import granola_img from "../../assets/img/snacks/granola.jpg";
import pinwheel_pizza_img from "../../assets/img/snacks/pinwheel_pizza.jpg";

const DEFAULT_SNACKS = [
  {
    recipe_title: "Fruit Snack",
    recipe_upload_date: new Date(2020, 11, 17),
    recipe_summary: "Recipe summary",
    recipe_img: fruit_snack_img,
  },
  {
    recipe_title: "Homemade Granola",
    recipe_upload_date: new Date(2021, 11, 17),
    recipe_summary: "Recipe summary",
    recipe_img: granola_img,
  },
  {
    recipe_title: "Pinwheel Pizza",
    recipe_upload_date: new Date(2022, 11, 17),
    recipe_summary: "Recipe summary",
    recipe_img: pinwheel_pizza_img,
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
export function Snacks() {
  const [sortOrder, setSortOrder] = React.useState("newest");
  const [snacks, setSnacks] = React.useState(DEFAULT_SNACKS);

  React.useEffect(() => {
    const copy = [...snacks];
    switch (sortOrder) {
      case "oldest":
        copy.sort((l1, l2) => l1.recipe_upload_date - l2.recipe_upload_date);
        setSnacks(copy);
        break;
      case "newest":
        copy.sort((l1, l2) => l2.recipe_upload_date - l1.recipe_upload_date);
        setSnacks(copy);
        break;
    }
  }, [sortOrder]);

  const handleSortTypeChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <>
      <Title>
        <Typography variant="h2">Snacks</Typography>
      </Title>
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
          {snacks.map((value, index) => {
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

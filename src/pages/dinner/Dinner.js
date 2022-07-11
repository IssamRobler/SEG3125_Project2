import FoodCard from "../../components/foodrecipecard/FoodRecipeCard";
import { style } from "@mui/system";
import styled from "styled-components";
import { Typography, Button, TextField } from "@mui/material";
import { Text } from "../../components/typography/Typography";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import kor_chicken_img from "../../img/dinner/korean_fried_chicken.jpg";
import lasagna_img from "../../img/dinner/lasagna.jpg";
import spagetti_img from "../../img/dinner/spagetti_bolognese.jpg";
import { useTranslation } from "react-i18next";

const DEFAULT_DINNER = [
  {
    recipe_title: "Korean Fried Chicken",
    recipe_upload_date: new Date(2016, 11, 17),
    recipe_summary: "Recipe summary",
    recipe_img: kor_chicken_img,
  },
  {
    recipe_title: "Lasagna",
    recipe_upload_date: new Date(2015, 11, 17),
    recipe_summary: "Recipe summary",
    recipe_img: lasagna_img,
  },
  {
    recipe_title: "Spagetti Bolognese",
    recipe_upload_date: new Date(2014, 11, 17),
    recipe_summary: "Recipe summary",
    recipe_img: spagetti_img,
  },
];

export function Dinner() {
  const [sortOrder, setSortOrder] = React.useState("newest");
  const [dinner, setDinner] = React.useState(DEFAULT_DINNER);
  const { t } = useTranslation(["common"]);

  const sortByOptions = [
    {
      value: "newest",
      label: t("sortNew"),
    },
    {
      value: "oldest",
      label: t("sortOld"),
    },
  ];

  React.useEffect(() => {
    const copy = [...dinner];
    switch (sortOrder) {
      case "oldest":
        copy.sort((l1, l2) => l1.recipe_upload_date - l2.recipe_upload_date);
        setDinner(copy);
        break;
      case "newest":
        copy.sort((l1, l2) => l2.recipe_upload_date - l1.recipe_upload_date);
        setDinner(copy);
        break;
    }
  }, [sortOrder]);
  const handleSortTypeChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <>
      <Title>
        <Typography variant="h2">{t("dinner")}</Typography>
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
          {dinner.map((value, index) => {
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
            <Text>{t("loadbtn")}</Text>
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

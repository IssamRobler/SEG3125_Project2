import FoodCard from "../../components/foodrecipecard/FoodRecipeCard";
import { style } from "@mui/system";
import styled from "styled-components";
import { Typography } from "@mui/material";
export function Home() {
    return (
        <>
            <Title><Typography variant="h2">Most Recent</Typography></Title>
            <HorizontalLine/>
            <GridContainer>
                <Grid >
                    <FoodCard recipe_title="Recipe title" recipe_upload_date="January 1st 1990" recipe_summary="Recipe summary" />
                    <FoodCard recipe_title="Recipe title" recipe_upload_date="January 1st 1990" recipe_summary="Recipe summary" />
                    <FoodCard recipe_title="Recipe title" recipe_upload_date="January 1st 1990" recipe_summary="Recipe summary" />
                    <FoodCard recipe_title="Recipe title" recipe_upload_date="January 1st 1990" recipe_summary="Recipe summary" />
                    <FoodCard recipe_title="Recipe title" recipe_upload_date="January 1st 1990" recipe_summary="Recipe summary" />
                    <FoodCard recipe_title="Recipe title" recipe_upload_date="January 1st 1990" recipe_summary="Recipe summary" />
                </Grid>
            </GridContainer>
        </>
    )
}

const HorizontalLine = styled.hr`
    margin : 0 25%
`
const GridContainer = styled.div`
    margin:100px auto;
    width:75%;
    justify-content:center ;
    align-items: center ;
    display:flex;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap:50px
`

const Title = styled.div`
    text-align: center ;
    margin : 3% 0
`
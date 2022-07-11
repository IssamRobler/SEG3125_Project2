import { Link } from "react-router-dom";
import styled from "styled-components";
import { PageTitle, Text } from "../typography/Typography";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import { useTransition } from "react";
import { useTranslation } from "react-i18next";
import MenuItem from "@mui/material/MenuItem";

const languageOptions = [
  {
    value: "en",
    label: "EN",
  },
  {
    value: "fr",
    label: "FR",
  },
];

export function Nav() {
  const { t, i18n } = useTranslation(["common"]);
  return (
    <NavBar>
      <Title>
        <Link to="/">
          <Typography variant="h3">
            <PageTitle>BestRecipe</PageTitle>
          </Typography>
        </Link>
      </Title>
      <Links>
        <Link to="/breakfast">
          <Typography variant="subtitle1">
            <Text>{t("breakfast")}</Text>
          </Typography>
        </Link>
        <Link to="/lunch">
          <Typography variant="subtitle1">
            <Text>{t("lunch")}</Text>
          </Typography>
        </Link>
        <Link to="/dinner">
          <Typography variant="subtitle1">
            <Text>{t("dinner")}</Text>
          </Typography>
        </Link>
        <Link to="/snacks">
          <Typography variant="subtitle1">
            <Text>{t("snack")}</Text>
          </Typography>
        </Link>
      </Links>
      <Usercontent>
        <Link to="/sharerecipe">
          <Typography variant="subtitle1">
            <Text>{t("sharerecipe")}</Text>
          </Typography>
        </Link>
        <Link to="/login">
          <Button
            variant="container"
            style={{ backgroundColor: "#CC9933", padding: "15px" }}
          >
            <Typography variant="subtitle2">
              <Text>{t("signup")}</Text>
            </Typography>
          </Button>
        </Link>
        <LanguageSelect>
          <TextField
            select
            variant="standard"
            onChange={(e) => {
              i18n.changeLanguage(e.target.value);
              window.location.reload();
            }}
            value={i18n.language}
          >
            {languageOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </LanguageSelect>
      </Usercontent>
    </NavBar>
  );
}
const LanguageSelect = styled.div`
  margin: auto;
`;
const Usercontent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  background-color: #339999;
  margin-left: auto;
  justify-content: space-around;
  width: 30%;
  margin-right: 2%;
`;
const Links = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  background-color: #339999;
  width: 25%;
  justify-content: space-between;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  background-color: #339999;
  margin-left: 3%;
  margin-right: 5%;
`;
const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  background-color: #339999;

  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
  a {
    margin: auto;
  }
`;

import { Paper, TextField, Typography, Button } from "@mui/material";
import { width } from "@mui/system";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PageTitle, Text } from "../../components/typography/Typography";
import { useTranslation } from "react-i18next";

const paperStyle = {
  width: "50vh",
  minHeight: "50vh",
  background: "linear-gradient(#66CCCC, #FFCC33)",
  margin: "5% auto",
};
export function Login() {
  const { t } = useTranslation(["loginForm"]);
  return (
    <Paper elevation={3} style={paperStyle}>
      <Form>
        <Typography variant="h5" style={{ textAlign: "center" }}>
          <Text>{t("title")}</Text>
        </Typography>
        <UserInputs>
          <div>
            <TextField
              required
              id="outlined-required"
              label={t("email")}
              style={{ background: "white" }}
              fullWidth
              variant="filled"
            />
          </div>
          <div>
            <TextField
              required
              label={t("password")}
              style={{ background: "white" }}
              type="password"
              fullWidth
              variant="filled"
            />
          </div>
        </UserInputs>
        <RememberMeContainer>
          <Checkbox>
            <input id="rememberMe" type="checkbox" />
            <label htmlFor="rememberMe">
              <Text>{t("rememberMe")}</Text>
            </label>
          </Checkbox>

          <Text>{t("forgotPassword")}</Text>
        </RememberMeContainer>
        <Button
          variant="container"
          style={{ backgroundColor: "#CC9933", padding: "15px" }}
        >
          <Typography variant="subtitle2">
            <Text>{t("loginBtn")}</Text>
          </Typography>
        </Button>
        <Link to="/createAccount" style={{ textAlign: "center" }}>
          <Text>{t("createAccount")}</Text>
        </Link>
      </Form>
    </Paper>
  );
}

const Checkbox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 38%;
`;
const RememberMeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 0px;
`;
const UserInputs = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  height: 50vh;
  padding: 10%;
  width: 75%;

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
`;

import { Paper, TextField, Typography, Button } from "@mui/material";
import { width } from "@mui/system";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { PageTitle, Text } from "../../components/typography/Typography";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const paperStyle = {
  width: "50vh",
  minHeight: "50vh",
  background: "linear-gradient(#66CCCC, #FFCC33)",
  margin: "5% auto",
};
export function ForgotPassword() {
  const { t } = useTranslation(["forgotPassword"]);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({ title: "", msg: "" });
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleForgotPassword = () => {
    if (!email || email === "") {
      setIsError(true);
      setError({
        title: t("missingEmailErrorTitle"),
        msg: t("missingEmailErrorMsg"),
      });
    } else {
      setIsError(false);
      setError({ title: "", msg: "" });
      navigate("/sucessForgotPassword");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Paper elevation={3} style={paperStyle}>
      <Form>
        <Typography
          variant="h5"
          style={{ textAlign: "center", margin: "5vh 0" }}
        >
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
              onChange={handleEmailChange}
            />
          </div>
        </UserInputs>
        <Button
          variant="container"
          style={{ backgroundColor: "#CC9933", padding: "15px" }}
          onClick={handleForgotPassword}
        >
          <Typography variant="subtitle2">
            <Text>{t("btn")}</Text>
          </Typography>
        </Button>
        {!isError || (
          <Error>
            <Alert severity="error">
              <AlertTitle>{error.title}</AlertTitle>
              {error.msg}
            </Alert>
          </Error>
        )}
      </Form>
    </Paper>
  );
}

const Error = styled.div`
  margin: 3vh 0;
`;
const UserInputs = styled.div`
  height: 25vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 5vh;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  min-height: 50vh;
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

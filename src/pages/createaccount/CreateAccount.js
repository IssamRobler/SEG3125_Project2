import { Paper, TextField, Typography, Button } from "@mui/material";
import { width } from "@mui/system";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
export function CreateAccount() {
  const { t } = useTranslation(["createAccountForm"]);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({ title: "", msg: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const handleCreateAccountClicked = () => {
    console.log(email, password, retypePassword);
    if (!email || email === "") {
      setIsError(true);
      setError({
        title: t("missingEmailErrorTitle"),
        msg: t("missingEmailErrorMsg"),
      });
    } else if (!password || password === "") {
      setIsError(true);
      setError({
        title: t("missingPasswordErrorTitle"),
        msg: t("missingPasswordErrorMsg"),
      });
    } else if (!retypePassword || retypePassword === "") {
      setIsError(true);
      setError({
        title: t("missingRetypePasswordErrorTitle"),
        msg: t("missingRetypePasswordErrorMsg"),
      });
    } else if (retypePassword !== password) {
      setIsError(true);
      setError({
        title: t("differentPasswordErrorTitle"),
        msg: t("differentPasswordErrorMsg"),
      });
    } else {
      setIsError(false);
      setError({ title: "", msg: "" });
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRetypePasswordChange = (e) => {
    setRetypePassword(e.target.value);
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
          <div>
            <TextField
              required
              label={t("password")}
              style={{ background: "white" }}
              type="password"
              fullWidth
              variant="filled"
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <TextField
              required
              label={t("retypePassword")}
              style={{ background: "white" }}
              type="password"
              fullWidth
              variant="filled"
              onChange={handleRetypePasswordChange}
            />
          </div>
        </UserInputs>
        <Button
          variant="container"
          style={{ backgroundColor: "#CC9933", padding: "15px" }}
          onClick={handleCreateAccountClicked}
        >
          <Typography variant="subtitle2">
            <Text>{t("createAccountBtn")}</Text>
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

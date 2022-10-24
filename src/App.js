import "./App.css";
import Header from "./components/Header";

//Material UI
import { Container, Snackbar } from "@mui/material";
import SendTweet from "./components/SendTweet/SendTweet";

function App() {
  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header />
      <SendTweet />
    </Container>
  );
}

export default App;

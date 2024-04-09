import './App.scss';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import Container from "@mui/material/Container";

function App() {
  return (
    <Container>
      <MainPage/>
      <Footer />
    </Container>
  );
}

export default App;

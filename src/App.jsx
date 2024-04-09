import './App.scss';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import Container from "@mui/material/Container";

function App() {
  return (
    <div className='main-class'>
      <Container className='main-container'>
        <MainPage/>
        <Footer/>
      </Container>
    </div>
  );
}

export default App;

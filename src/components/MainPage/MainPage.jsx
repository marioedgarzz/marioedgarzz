import './MainPage.scss';
import { Grid } from "@mui/material";
import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage/AboutPage";
import ExperiencePage from "./ExperiencePage/ExperiencePage";
import ContactPage from "./ContactPage/ContactPage";

export default function MainPage() {
  return (
    <Grid className='main-page'>
      <HomePage/>
      <div className='divider'></div>
      <AboutPage/>
      <div className='divider'></div>
      <ExperiencePage/>
      <div className='divider'></div>
      <ContactPage/>
    </Grid>
  );
}

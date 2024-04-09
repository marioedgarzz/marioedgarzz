import './MainPage.scss';
import { Grid } from "@mui/material";
import HomePage from "./HomePage/HomePage";

export default function MainPage() {
  return (
    <Grid className='main-page'>
      <HomePage/>
    </Grid>
  );
}

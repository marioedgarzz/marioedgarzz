import './HomePage.scss';
import '../../../styles/colors.scss';
import { Slide } from "@mui/material";

export default function HomePage() {
  const sectionId = 'home'

  return (
    <div id={sectionId}>
      <Slide direction='up' in={true} timeout={1000} mountOnEnter unmountOnExit>
        <div className='home-page white-text grey-background'>
          <div className='space-between-column'>
            <div>
              <h1 className='teal-text center'>Hey there!</h1>
              <h2 className='center'>Nice to meet you</h2>
            </div>
            <div>
              <h2 className='center'>My name is</h2>
              <h3 className='teal-text center'>Mario Edgar Pranata</h3>
              <h4 className='center'>{"I'm a coder and I like to learn new things"}</h4>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
}

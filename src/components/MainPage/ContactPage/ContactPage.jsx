import './ContactPage.scss';
import '../../../styles/colors.scss';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { useEffect, useState } from "react";
import showOnScroll from "../../../utils/scrollListener";
import { Slide } from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function ContactPage() {

  const [isVisible, setIsVisible] = useState(false);

  const sectionId = 'contact';

  useEffect(() => {
    showOnScroll(sectionId, setIsVisible)
  }, []);

  return (
    <div id={sectionId} className='min-height-300'>
      <Slide direction='up' timeout={1000} in={isVisible} mountOnEnter unmountOnExit>
        <div  className='contact-page'>
          <h2 className='teal-text'>Contact Me</h2>
          <hr/>
          <div className='contact-class white-text'>
            <div className='center-vertical'>
              <div className='icon-div'>
                <GitHub fontSize='large'/>
              </div>
              <div>
                <a href="https://github.com/marioedgarzz">
                  marioedgarzz
                  <ArrowOutwardIcon fontSize='small'/>
                </a>
              </div>
            </div>
            <div className='center-vertical padding-top'>
              <div className='icon-div'>
                <LinkedIn fontSize='large'/>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/mario-edgar-pranata-6b41121ab/">
                  Mario Edgar Pranata
                  <ArrowOutwardIcon fontSize='small'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
}

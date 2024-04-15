import './AboutPage.scss';
import '../../../styles/colors.scss';
import { Slide, Step, StepContent, StepLabel, Stepper } from "@mui/material";
import { useEffect, useState } from "react";
import showOnScroll from "../../../utils/scrollListener";

export default function AboutPage() {

  const [isVisible, setIsVisible] = useState(false);

  const sectionId = 'about';

  useEffect(() => {
    showOnScroll(sectionId, setIsVisible)
  }, []);

  return (
    <div id={sectionId} className='min-height-500'>
      <Slide direction='up' timeout={1000} in={isVisible} mountOnEnter unmountOnExit>
        <div className='about-page'>
          <h2 className='teal-text'>About Me</h2>
          <hr/>
          <Stepper orientation='vertical'>
            <Step active={true}>
              <StepLabel>
                <h3 className='white-text'> Summary </h3>
              </StepLabel>
              <StepContent>
                <div className='white-text'>
                  An enthusiast in software development with a set of programming skills. Able to do multitasking,
                  having experience as an application developer.
                </div>
              </StepContent>
            </Step>
            <Step active={true}>
              <StepLabel>
                <h3 className='white-text'> Formal Education </h3>
              </StepLabel>
              <StepContent>
                <h4 className='teal-text'>Computer Science Graduate (S. Kom.)</h4>
                <h4 className='white-text'> 2018 - 2022 </h4>
                <h4 className='teal-text'> Bina Nusantara University </h4>
                <div className='white-text'>
                  <ul>
                    <li>{"Completed study in 3.5 years"}</li>
                    <li>{"Awarded with 'Summa Cumlaude' title"}</li>
                  </ul>
                </div>
              </StepContent>
            </Step>
          </Stepper>
        </div>
      </Slide>
    </div>
  );
}

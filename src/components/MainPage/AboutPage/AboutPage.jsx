import './AboutPage.scss';
import '../../../styles/colors.scss';
import { Step, StepContent, StepLabel, Stepper } from "@mui/material";

export default function AboutPage() {
  return (
    <div className='about-page'>
      <h1 className='teal-text'>About Me</h1>
      <hr/>
      <Stepper orientation='vertical'>
        <Step active={true}>
          <StepLabel>
            <h2 className='white-text'> Summary </h2>
          </StepLabel>
          <StepContent>
            <div className='white-text'>
              An enthusiast in software development with a set of programming skills. Able to do multitasking, having experience as an application developer.
            </div>
          </StepContent>
        </Step>
        <Step active={true}>
          <StepLabel>
            <h2 className='white-text'> Formal Education </h2>
          </StepLabel>
          <StepContent>
            <h3 className='teal-text'>Computer Science Graduate (S. Kom.)</h3>
            <h3 className='white-text'> 2018 - 2022 </h3>
            <h3 className='teal-text'> Bina Nusantara University </h3>
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
  );
}

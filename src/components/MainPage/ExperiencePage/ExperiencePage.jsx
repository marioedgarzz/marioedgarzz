import './ExperiencePage.scss';
import '../../../styles/colors.scss';
import { Slide, Step, StepContent, StepLabel, Stepper } from "@mui/material";
import { useEffect, useState } from "react";
import showOnScroll from "../../../utils/scrollListener";

export default function ExperiencePage() {

  const [isVisible, setIsVisible] = useState(false);

  const sectionId = 'experience';

  useEffect(() => {
    showOnScroll(sectionId, setIsVisible)
  }, []);

  return (
    <div id={sectionId} className='min-height-500'>
      <Slide direction='up' timeout={1000} in={isVisible} mountOnEnter unmountOnExit>
        <div className='experience-page'>
          <h2 className='white-text'>My Work Experiences</h2>
          <hr/>
          <Stepper orientation='vertical'>
            <Step active={true}>
              <StepLabel>
                <h3 className='teal-text'> Software Engineer </h3>
              </StepLabel>
              <StepContent>
                <h4 className='white-text'>Oct 2022 - present</h4>
                <h4 className='teal-text'> GoToFinancial </h4>
                <div className='white-text'>
                  <ul>
                    <li>{"Maintained and improved fraud detection system to deny transaction due to fraud and abuse cases on all Order events across GoTo"}</li>
                    <li>{"Integrated post actions of fraud and abuse cases to prevent fraudsters from doing cashout such as force logout, delinking card, block user, etc."}</li>
                    <li>{"Handled customer support in case of customer complaints on fraud and abuse cases"}</li>
                    <li>{"Took part in cleaning up almost full storage on database and redis"}</li>
                    <li>{"Took part in the Cost Optimization project: deprecate old service by migrating its functionality to an existing service"}</li>
                    <li>{"Fixed the urgency of redis clean up as many flows started integrating to the fraud detection system by setting up TTL (Time to Live) to expire / delete unused keys"}</li>
                    <li>{"Improved Fraud Detection System by integrating fraud detection across different regions in Indonesia"}</li>
                  </ul>
                </div>
              </StepContent>
            </Step>
            <Step active={true}>
              <StepLabel>
                <h3 className='teal-text'> Database Administrator </h3>
              </StepLabel>
              <StepContent>
                <h4 className='white-text'>Sep 2020 - Aug 2022</h4>
                <h4 className='teal-text'> Software Laboratory Center - Bina Nusantara University </h4>
                <div className='white-text'>
                  <ul>
                    <li>{"Supported data request from laboratory coordinators"}</li>
                    <li>{"Maintained database related to laboratories"}</li>
                    <li>{"Managed Exam, Score, Honor, Attendance, and Dispensation Data for students enrolling in laboratories"}</li>
                    <li>{"Managed Room Transaction for internal purposes"}</li>
                    <li>{"Maintained internal website used by laboratories"}</li>
                  </ul>
                </div>
              </StepContent>
            </Step>
            <Step active={true}>
              <StepLabel>
                <h3 className='teal-text'> Application Developer </h3>
              </StepLabel>
              <StepContent>
                <h4 className='white-text'>Feb 2021 - Feb 2022</h4>
                <h4 className='teal-text'> Intern - Bina Nusantara University </h4>
                <div className='white-text'>
                  <ul>
                    <li>{"Developed website for project requested by School of Computer Science using Angular Typescript"}</li>
                    <li>{"Coordinated with backend developer to complete project software development"}</li>
                    <li>{"Supported enrichment operations for enrichment program students"}</li>
                  </ul>
                </div>
              </StepContent>
            </Step>
            <Step active={true}>
              <StepLabel>
                <h3 className='teal-text'> Teaching Assistant </h3>
              </StepLabel>
              <StepContent>
                <h4 className='white-text'>Sep 2019 - Sep 2020</h4>
                <h4 className='teal-text'> Software Laboratory Center - Bina Nusantara University </h4>
                <div className='white-text'>
                  <ul>
                    <li>{"Taught practicum classes in Software laboratories of Software Laboratory Center Division"}</li>
                    <li>{"Made practicum cases, exam cases, and assignment cases for Software laboratory"}</li>
                    <li>{"Handled assignment, project and exam corrections"}</li>
                    <li>{"Participated in trainings and self-developments (3D Game Programming, Desktop Application, Web Programming, Mobile Application Development and Networking"}</li>
                    <li>{"Entrusted as a Subject Coordinator (Database) for SLC New Assistant Recruitement - Even Semester 2019/2020. Managed trainer allocation, quality control for trainers' case making, and lead evaluations for new assistant candidate"}</li>
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

import React, { useState } from "react";
import {
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Personaldetails from "./FormGroup/Personal_details";
import Contactdetails from "./FormGroup/Contact_details";
import Educationdetails from "./FormGroup/Education_details";
import Experiencedetails from "./FormGroup/experience_details";
import { useForm, FormProvider } from "react-hook-form";
import Referencedetails from "./FormGroup/Reference_details";
import { addUser } from "../api";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 900,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  button: {
    marginRight: theme.spacing(1),
  },
  newButton: {
    position: "absolute",
    right: "30px",
    marginLeft: theme.spacing(1),
    bottom: "20px",
  },
  backButton: {
    position: "absolute",
    right: "120px",
    marginLeft: theme.spacing(1),
    bottom: "20px",
  },
}));

function getSteps() {
  return [
    "Personal Information",
    "Contact Information",
    "Education Details",
    "Experience",
    "Reference Details",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Personaldetails />;

    case 1:
      return <Contactdetails />;
    case 2:
      return <Educationdetails />;
    case 3:
      return <Experiencedetails />;
    case 4:
      return <Referencedetails />;

    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const methods = useForm();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const isStepFailed = () => {
    return Boolean(Object.keys(methods.formState.errors).length);
  };
  const isStepOptional = (step) => {
    return;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    if (activeStep === steps.length - 1) {
      const user = data;
      addUser(user);
      console.log(user);
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepSkipped(activeStep)) {
  //     setSkippedSteps([...skippedSteps, activeStep]);
  //   }
  //   setActiveStep(activeStep + 1);
  // };

  return (
    <div>
      <Paper className={classes.paper}>
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((step, index) => {
            const labelProps = {};
            const stepProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography
                  variant="caption"
                  align="center"
                  style={{
                    display: "block",
                  }}
                >
                  optional
                </Typography>
              );
            }
            if (isStepFailed() && activeStep === index) {
              labelProps.error = true;
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step {...stepProps} key={index}>
                <StepLabel {...labelProps}> {step} </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Paper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              <Paper className={classes.paper}>
                {getStepContent(activeStep)}
              </Paper>

              <Paper className={classes.paper}>
                <Grid container spacing={2} direction="row-reverse">
                  <Grid>
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="primary"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                    >
                      back
                    </Button>
                    {/* {isStepOptional(activeStep) && (
                          <Button
                            className={classes.button}
                            variant="contained"
                            color="primary"
                            onClick={handleSkip}
                          >
                            skip
                          </Button>
                        )} */}
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="primary"
                      type="submit"
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;

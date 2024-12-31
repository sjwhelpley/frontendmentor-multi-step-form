import { Grid2, Paper, Theme, Typography, useMediaQuery } from '@mui/material';

import NavigationButtons from './StepComponents/NavigationButtons';
import StepList from './StepList';
import StepTemplate from './StepTemplate';

import iconThankYou from '../../assets/images/icon-thank-you.svg';
import { useAppSelector } from '../../redux/hooks';
import { selectCurrentStep } from '../../redux/slices/formSlice';

export default function FormView() {
  const currentStep = useAppSelector(selectCurrentStep);
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  const steps = (
    <>
      {currentStep === 1 && (
        <StepTemplate
          stepNumber={1}
          title="Personal info"
          description="Please provide your name, email address, and phone number."
        />
      )}
      {currentStep === 2 && (
        <StepTemplate
          stepNumber={2}
          title="Select your plan"
          description="You have the option of monthly or yearly billing."
        />
      )}
      {currentStep === 3 && (
        <StepTemplate
          stepNumber={3}
          title="Add-ons"
          description="Add-ons help enhance your gaming experience."
        />
      )}
      {currentStep === 4 && (
        <StepTemplate
          stepNumber={4}
          title="Finishing up"
          description="Double-check everything looks OK before confirming."
        />
      )}
      {currentStep === 5 && (
        <Grid2 container justifyContent="center" alignItems="center">
          <Grid2
            sx={{ width: { xs: 300, md: 450 }, my: { xs: 8, md: 0 } }}
            container
            justifyContent="center"
          >
            <img src={iconThankYou} alt="Thank you" />
            <Typography
              variant="stepTitle"
              align="center"
              sx={{ mt: 4, mb: 1, fontSize: { xs: 24, md: 32 } }}
            >
              Thank you!
            </Typography>
            <Typography variant="stepSubtitle" align="center">
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com.
            </Typography>
          </Grid2>
        </Grid2>
      )}
    </>
  );

  if (mdUp) {
    return (
      <Grid2
        container
        justifyContent="center"
        alignItems="center"
        sx={{ height: '100vh' }}
      >
        <Paper sx={{ p: 2, width: '940px', height: '600px', borderRadius: 4 }}>
          <Grid2 container sx={{ height: '100%' }}>
            <Grid2 sx={{ width: { xs: '100%', md: '274px' } }}>
              <StepList />
            </Grid2>
            <Grid2
              size={{ xs: 12, md: 'grow' }}
              container
              justifyContent="center"
            >
              {steps}
            </Grid2>
          </Grid2>
        </Paper>
      </Grid2>
    );
  }

  return (
    <Grid2 sx={{ height: '100vh' }} container justifyContent="center">
      <StepList />

      <Paper
        sx={{
          width: 'calc(100% - 32px)',
          p: 3,
          position: 'absolute',
          top: '96px',
        }}
      >
        {steps}
      </Paper>

      {currentStep !== 5 && (
        <Grid2
          size={12}
          sx={{
            backgroundColor: 'white',
            height: 72,
            p: 2,
            position: 'absolute',
            bottom: 0,
          }}
        >
          <NavigationButtons stepNumber={currentStep} />
        </Grid2>
      )}
    </Grid2>
  );
}

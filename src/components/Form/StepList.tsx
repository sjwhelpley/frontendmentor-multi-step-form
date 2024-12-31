import { Grid2, Theme, Typography, useMediaQuery } from '@mui/material';

import background from '../../assets/images/bg-sidebar-desktop.svg?url';
import mobileBackground from '../../assets/images/bg-sidebar-mobile.svg?url';
import { useAppSelector } from '../../redux/hooks';
import { selectCurrentStep } from '../../redux/slices/formSlice';
import { lightBlue } from '../../styles';

export default function StepList() {
  const currentStep = useAppSelector(selectCurrentStep);
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  const steps = [
    {
      title: 'YOUR INFO',
      steps: [1],
    },
    {
      title: 'SELECT PLAN',
      steps: [2],
    },
    {
      title: 'ADD-ONS',
      steps: [3],
    },
    {
      title: 'SUMMARY',
      steps: [4, 5],
    },
  ];

  if (mdUp) {
    return (
      <Grid2
        sx={{
          width: '100%',
          height: { xs: '172px', md: '100%' },
          backgroundImage: `url("${mdUp ? background : mobileBackground}")`,
          backgroundSize: 'cover',
          pl: { xs: 0, md: 4 },
          pt: { xs: 0, md: 4 },
        }}
      >
        <Grid2 container spacing={2}>
          {steps.map((step) => (
            <Grid2
              size={{ xs: 'grow', md: 12 }}
              key={step.title}
              container
              alignItems="center"
            >
              <Grid2 size={{ xs: 'grow', md: 3 }}>
                <Grid2
                  container
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    width: '33px',
                    height: '33px',
                    borderRadius: '50%',
                    border: step.steps.includes(currentStep)
                      ? 'none'
                      : '1px solid white',
                    backgroundColor: step.steps.includes(currentStep)
                      ? '#BEE2FD'
                      : 'transparent',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      color: step.steps.includes(currentStep)
                        ? 'black'
                        : 'white',
                    }}
                  >
                    {step.steps[0]}
                  </Typography>
                </Grid2>
              </Grid2>
              {mdUp && (
                <Grid2 size="grow">
                  <Typography sx={{ fontSize: 12, color: lightBlue }}>
                    STEP {step.steps[0]}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 14,
                      letterSpacing: '1px',
                      fontWeight: 'bold',
                      color: 'white',
                    }}
                  >
                    {step.title}
                  </Typography>
                </Grid2>
              )}
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
    );
  }
  return (
    <Grid2
      sx={{
        width: '100%',
        height: '172px',
        backgroundImage: `url("${mobileBackground}")`,
        backgroundSize: 'cover',
        pt: 4,
      }}
      container
      justifyContent="center"
    >
      <Grid2 container spacing={2} sx={{ width: 180, height: 40 }}>
        {steps.map((step) => (
          <Grid2
            sx={{ width: 'fit-content' }}
            key={step.title}
            container
            alignItems="center"
          >
            <Grid2
              container
              justifyContent="center"
              alignItems="center"
              sx={{
                width: '33px',
                height: '33px',
                borderRadius: '50%',
                border: step.steps.includes(currentStep)
                  ? 'none'
                  : '1px solid white',
                backgroundColor: step.steps.includes(currentStep)
                  ? '#BEE2FD'
                  : 'transparent',
              }}
            >
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: step.steps.includes(currentStep) ? 'black' : 'white',
                }}
              >
                {step.steps[0]}
              </Typography>
            </Grid2>
          </Grid2>
        ))}
      </Grid2>
    </Grid2>
  );
}

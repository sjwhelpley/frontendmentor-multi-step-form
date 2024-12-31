import { Grid2, Theme, Typography, useMediaQuery } from '@mui/material';

import NavigationButtons from './StepComponents/NavigationButtons';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';

export default function StepTemplate({
  stepNumber,
  title,
  description,
}: {
  stepNumber: number;
  title: string;
  description: string;
}) {
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return (
    <Grid2
      sx={{
        width: { xs: '100%', md: '75%' },
        pt: { xs: 0, md: 6 },
        position: 'relative',
      }}
    >
      <Typography variant="stepTitle">{title}</Typography>
      <Typography variant="stepSubtitle" sx={{ mb: { xs: 3, md: 4 } }}>
        {description}
      </Typography>

      {stepNumber === 1 && <Step1 />}
      {stepNumber === 2 && <Step2 />}
      {stepNumber === 3 && <Step3 />}
      {stepNumber === 4 && <Step4 />}

      {mdUp && (
        <Grid2
          size={12}
          sx={{ position: 'absolute', bottom: '16px', right: 0 }}
        >
          <NavigationButtons stepNumber={stepNumber} />
        </Grid2>
      )}
    </Grid2>
  );
}

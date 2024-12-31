import { Button } from '@mui/material';
import { Grid2 } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
  addError,
  removeError,
  setCurrentStep,
} from '../../../redux/slices/formSlice';
import { denimBlue } from '../../../styles';
import { grey } from '../../../styles';
export default function NavigationButtons({
  stepNumber,
}: {
  stepNumber: number;
}) {
  const dispatch = useAppDispatch();
  const form = useAppSelector((state) => state.form);

  const handleBack = () => {
    dispatch(setCurrentStep(stepNumber - 1));
  };

  const handleNext = () => {
    let hasErrors = false;

    if (stepNumber === 1) {
      // Reset errors
      dispatch(removeError('name'));
      dispatch(removeError('email'));
      dispatch(removeError('phone'));

      // Check for errors
      if (form.name === '') {
        dispatch(
          addError({ fieldName: 'name', message: 'This field is required' })
        );
        hasErrors = true;
      }
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (form.email === '') {
        dispatch(
          addError({ fieldName: 'email', message: 'This field is required' })
        );
        hasErrors = true;
      } else if (!emailRegex.test(form.email)) {
        dispatch(
          addError({
            fieldName: 'email',
            message: 'Please enter a valid email address',
          })
        );
        hasErrors = true;
      }
      // Phone validation
      const phoneRegex = /^\+?[\d\s-()]{10,}$/;
      if (form.phone === '') {
        dispatch(
          addError({ fieldName: 'phone', message: 'This field is required' })
        );
        hasErrors = true;
      } else if (!phoneRegex.test(form.phone)) {
        dispatch(
          addError({
            fieldName: 'phone',
            message: 'Please enter a valid phone number',
          })
        );
        hasErrors = true;
      }
    }

    if (!hasErrors) {
      dispatch(setCurrentStep(stepNumber + 1));
    }
  };

  return (
    <Grid2 container justifyContent="space-between">
      {stepNumber > 1 ? (
        <Button
          onClick={handleBack}
          sx={{
            color: grey,
            backgroundColor: 'transparent',
            boxShadow: 'none',
            '&:hover': {
              color: denimBlue,
              backgroundColor: 'transparent',
              boxShadow: 'none',
            },
          }}
        >
          Go Back
        </Button>
      ) : (
        <Grid2 />
      )}
      {stepNumber < 4 ? (
        <Button variant="contained" onClick={handleNext}>
          Next Step
        </Button>
      ) : (
        <Button variant="contained" color="secondary" onClick={handleNext}>
          Confirm
        </Button>
      )}
    </Grid2>
  );
}

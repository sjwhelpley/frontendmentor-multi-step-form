import { Grid2 } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
  selectForm,
  setEmail,
  setName,
  setPhone,
} from '../../../redux/slices/formSlice';
import FormField from '../StepComponents/FormField';

export default function Step1() {
  const dispatch = useAppDispatch();
  const form = useAppSelector(selectForm);

  return (
    <Grid2>
      <FormField
        label="Name"
        placeholder="e.g. Stephen King"
        value={form.name}
        setValue={(value) => dispatch(setName(value))}
        isError={form.errors.some((error) => error.fieldName === 'name')}
        errorMessage={
          form.errors.find((error) => error.fieldName === 'name')?.message || ''
        }
        containerProps={{ sx: { mb: { xs: 2, md: 4 } } }}
      />

      <FormField
        label="Email Address"
        placeholder="e.g. stephenking@lorem.com"
        value={form.email}
        setValue={(value) => dispatch(setEmail(value))}
        isError={form.errors.some((error) => error.fieldName === 'email')}
        errorMessage={
          form.errors.find((error) => error.fieldName === 'email')?.message ||
          ''
        }
        containerProps={{ sx: { mb: { xs: 2, md: 4 } } }}
      />

      <FormField
        label="Phone Number"
        placeholder="e.g. +1 234 567 890"
        value={form.phone}
        setValue={(value) => dispatch(setPhone(value))}
        isError={form.errors.some((error) => error.fieldName === 'phone')}
        errorMessage={
          form.errors.find((error) => error.fieldName === 'phone')?.message ||
          ''
        }
        containerProps={{ sx: { mb: { xs: 0, md: 4 } } }}
      />
    </Grid2>
  );
}

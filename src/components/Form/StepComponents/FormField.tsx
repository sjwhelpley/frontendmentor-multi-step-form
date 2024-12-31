import { Grid2, Grid2Props, TextField, Typography } from '@mui/material';

import { denimBlue, purple } from '../../../styles';

export default function FormField({
  label,
  placeholder,
  value,
  setValue,
  isError,
  errorMessage,
  containerProps,
}: {
  label: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  isError: boolean;
  errorMessage: string;
  containerProps?: Grid2Props;
}) {
  return (
    <Grid2 container {...containerProps}>
      <Grid2 size={12} container justifyContent="space-between" sx={{ mb: 1 }}>
        <Typography sx={{ fontSize: 14, color: denimBlue }}>{label}</Typography>
        {isError && (
          <Typography
            sx={{ fontSize: 14, color: '#EE374A', fontWeight: 'bold' }}
          >
            {errorMessage}
          </Typography>
        )}
      </Grid2>
      <Grid2 size={12}>
        <TextField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          size="small"
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: isError ? '#EE374A' : '#D6D9E6',
              },
              '&:hover fieldset': {
                borderColor: isError ? '#EE374A' : purple,
              },
              '&.Mui-focused fieldset': {
                borderColor: isError ? '#EE374A' : purple,
              },
              '& input': {
                fontWeight: 500,
              },
              '& input::placeholder': {
                fontWeight: 500,
              },
            },
          }}
        />
      </Grid2>
    </Grid2>
  );
}

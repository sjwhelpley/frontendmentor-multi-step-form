import { Box, Grid2, Typography } from '@mui/material';

import checkmark from '../../../assets/images/icon-checkmark.svg';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
  addAddon,
  removeAddon,
  selectAddons,
  selectPlanType,
} from '../../../redux/slices/formSlice';
import { denimBlue, purple, veryLightGrey } from '../../../styles';

export default function AddonCard({
  name,
  description,
  monthlyPrice,
  yearlyPrice,
}: {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
}) {
  const dispatch = useAppDispatch();
  const planType = useAppSelector(selectPlanType);
  const addons = useAppSelector(selectAddons);

  const isSelected = addons.includes(name);

  const onClick = () => {
    if (isSelected) {
      dispatch(removeAddon(name));
    } else {
      dispatch(addAddon(name));
    }
  };

  return (
    <Grid2
      size={12}
      container
      alignItems="center"
      spacing={1}
      sx={{
        border: '1px solid',
        borderColor: isSelected ? purple : '#D6D9E6',
        backgroundColor: isSelected ? veryLightGrey : 'none',
        borderRadius: 2,
        p: 1,
        pr: 3,
        cursor: 'pointer',
        ':hover': {
          borderColor: 'blue',
        },
      }}
      onClick={onClick}
    >
      <Grid2>
        {isSelected ? (
          <Grid2
            container
            justifyContent="center"
            alignItems="center"
            sx={{
              backgroundColor: purple,
              width: 20,
              height: 20,
              borderRadius: '4px',
              mx: 1,
            }}
          >
            <img src={checkmark} alt="checkmark" />
          </Grid2>
        ) : (
          <Box
            sx={{
              border: '1px solid',
              borderColor: '#D6D9E6',
              width: 20,
              height: 20,
              borderRadius: '4px',
              mx: 1,
            }}
          />
        )}
      </Grid2>
      <Grid2 size="grow">
        <Typography sx={{ fontWeight: 500, fontSize: 16, color: denimBlue }}>
          {name}
        </Typography>
        <Typography
          variant="stepSubtitle"
          sx={{ fontSize: { xs: 12, md: 15 } }}
        >
          {description}
        </Typography>
      </Grid2>
      <Grid2>
        <Typography
          sx={{
            color: purple,
            fontSize: { xs: 12, md: 15 },
            lineHeight: '20px',
          }}
        >
          {planType === 'monthly'
            ? `$${monthlyPrice}/mo`
            : `$${yearlyPrice}/yr`}
        </Typography>
      </Grid2>
    </Grid2>
  );
}

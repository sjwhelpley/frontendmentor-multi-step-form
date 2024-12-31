import { Grid2, Typography } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
  selectPlanTier,
  selectPlanType,
  setPlanTier,
} from '../../../redux/slices/formSlice';
import { denimBlue, grey, purple, veryLightGrey } from '../../../styles';

export default function PlanCard({
  name,
  icon,
  monthlyPrice,
  yearlyPrice,
}: {
  name: string;
  icon: string;
  monthlyPrice: number;
  yearlyPrice: number;
}) {
  const dispatch = useAppDispatch();
  const planType = useAppSelector(selectPlanType);
  const planTier = useAppSelector(selectPlanTier);

  const onClick = () => {
    dispatch(setPlanTier(name));
  };

  return (
    <Grid2
      size={{ xs: 12, md: 'grow' }}
      container
      direction={{ xs: 'row', md: 'column' }}
      alignItems="center"
      justifyContent="space-between"
      sx={{
        height: { xs: 'fit-content', md: planType === 'monthly' ? 160 : 183 },
        border: '1px solid',
        borderColor: planTier === name ? purple : grey,
        backgroundColor: planTier === name ? veryLightGrey : 'none',
        borderRadius: 2,
        p: 2,
        cursor: 'pointer',
        ':hover': {
          borderColor: 'blue',
        },
      }}
      onClick={onClick}
    >
      <Grid2
        size={{ xs: 3, md: 12 }}
        container
        justifyContent={{ xs: 'center', md: 'flex-start' }}
      >
        <img src={icon} alt={name} style={{ width: 40, height: 40 }} />
      </Grid2>
      <Grid2 size={{ xs: 'grow', md: 12 }}>
        <Typography sx={{ fontWeight: 500, fontSize: 16 }}>{name}</Typography>
        <Typography variant="stepSubtitle" sx={{ lineHeight: '20px' }}>
          {planType === 'monthly'
            ? `$${monthlyPrice}/mo`
            : `$${yearlyPrice}/yr`}
        </Typography>
        {planType === 'yearly' && (
          <Typography sx={{ fontSize: 12, color: denimBlue, mt: '4px' }}>
            2 months free
          </Typography>
        )}
      </Grid2>
    </Grid2>
  );
}

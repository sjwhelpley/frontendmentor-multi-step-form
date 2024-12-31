import { Button, Grid2, Typography } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
  selectAddons,
  selectPlanTier,
  selectPlanType,
  setCurrentStep,
} from '../../../redux/slices/formSlice';
import {
  selectMonthlyPrices,
  selectYearlyPrices,
} from '../../../redux/slices/pricesSlice';
import { denimBlue, grey, purple, veryLightGrey } from '../../../styles';

export default function Step4() {
  const dispatch = useAppDispatch();
  const planType = useAppSelector(selectPlanType) as 'monthly' | 'yearly';
  const planTier = useAppSelector(selectPlanTier) as
    | 'Arcade'
    | 'Advanced'
    | 'Pro';
  const addons = useAppSelector(selectAddons);
  const monthlyPrices = useAppSelector(selectMonthlyPrices);
  const yearlyPrices = useAppSelector(selectYearlyPrices);

  const planTierLower = planTier.toLowerCase() as 'arcade' | 'advanced' | 'pro';
  const planPrice =
    planType === 'monthly'
      ? monthlyPrices[planTierLower]
      : yearlyPrices[planTierLower];

  const addonPrices = addons.map((addon) => {
    const addonLower = addon.toLowerCase().replace(' ', '-') as
      | 'online-service'
      | 'larger-storage'
      | 'customizable-profile';
    return planType === 'monthly'
      ? monthlyPrices[addonLower]
      : yearlyPrices[addonLower];
  });

  return (
    <Grid2>
      <Grid2
        sx={{
          backgroundColor: veryLightGrey,
          borderRadius: '4px',
          p: 2,
          mb: 2,
        }}
      >
        <Grid2
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{
            borderBottom: '1px solid',
            borderColor: '#9699AA',
            pb: 2,
            mb: 2,
          }}
        >
          <Grid2>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: { xs: 14, md: 16 },
                color: denimBlue,
              }}
            >
              {planTier} ({planType.charAt(0).toUpperCase() + planType.slice(1)}
              )
            </Typography>
            <Button
              sx={{
                fontSize: { xs: 14, md: 16 },
                p: 0,
                minWidth: 'fit-content',
                textDecoration: 'underline',
                color: grey,
                backgroundColor: 'transparent',
                boxShadow: 'none',
                '&:hover': {
                  color: purple,
                  backgroundColor: 'transparent',
                  textDecoration: 'underline',
                  boxShadow: 'none',
                },
              }}
              onClick={() => {
                dispatch(setCurrentStep(2));
              }}
            >
              Change
            </Button>
          </Grid2>
          <Grid2>
            <Typography
              sx={{
                fontSize: { xs: 14, md: 16 },
                lineHeight: '20px',
                fontWeight: 'bold',
                color: denimBlue,
              }}
            >
              {planType === 'monthly' ? `$${planPrice}/mo` : `$${planPrice}/yr`}
            </Typography>
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2}>
          {addons.map((addon, index) => (
            <Grid2
              key={addon}
              size={12}
              container
              justifyContent="space-between"
              spacing={2}
            >
              <Typography
                sx={{ fontSize: 14, lineHeight: '20px', color: grey }}
              >
                {addon}
              </Typography>
              <Typography
                sx={{ fontSize: 14, lineHeight: '20px', color: denimBlue }}
              >
                {`+$${addonPrices[index]}/${planType === 'monthly' ? 'mo' : 'yr'}`}
              </Typography>
            </Grid2>
          ))}
        </Grid2>
      </Grid2>

      <Grid2 container justifyContent="space-between" sx={{ p: 2 }}>
        <Typography sx={{ fontSize: 14, lineHeight: '20px', color: grey }}>
          Total (per {planType === 'monthly' ? 'month' : 'year'})
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 16, md: 20 },
            fontWeight: 'bold',
            lineHeight: '20px',
            color: purple,
          }}
        >
          {`$${planPrice + addonPrices.reduce((acc, curr) => acc + curr, 0)}/${planType === 'monthly' ? 'mo' : 'yr'}`}
        </Typography>
      </Grid2>
    </Grid2>
  );
}

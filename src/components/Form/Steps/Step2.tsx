import { Grid2, Stack, Switch, Typography } from '@mui/material';

import iconAdvanced from '../../../assets/images/icon-advanced.svg';
import iconArcade from '../../../assets/images/icon-arcade.svg';
import iconPro from '../../../assets/images/icon-pro.svg';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { selectForm, setPlanType } from '../../../redux/slices/formSlice';
import {
  selectMonthlyPrices,
  selectYearlyPrices,
} from '../../../redux/slices/pricesSlice';
import { denimBlue, grey, veryLightGrey } from '../../../styles';
import PlanCard from '../StepComponents/PlanCard';

export default function Step2() {
  const dispatch = useAppDispatch();
  const form = useAppSelector(selectForm);
  const monthlyPrices = useAppSelector(selectMonthlyPrices);
  const yearlyPrices = useAppSelector(selectYearlyPrices);

  const plans = [
    {
      name: 'Arcade',
      icon: iconArcade,
      monthlyPrice: monthlyPrices.arcade,
      yearlyPrice: yearlyPrices.arcade,
    },
    {
      name: 'Advanced',
      icon: iconAdvanced,
      monthlyPrice: monthlyPrices.advanced,
      yearlyPrice: yearlyPrices.advanced,
    },
    {
      name: 'Pro',
      icon: iconPro,
      monthlyPrice: monthlyPrices.pro,
      yearlyPrice: yearlyPrices.pro,
    },
  ];

  return (
    <Grid2>
      <Grid2 container spacing={{ xs: 1, md: 2 }}>
        {plans.map((plan) => (
          <PlanCard key={plan.name} {...plan} />
        ))}
      </Grid2>

      <Grid2
        container
        justifyContent="center"
        sx={{
          backgroundColor: veryLightGrey,
          borderRadius: 2,
          mt: { xs: 3, md: 4 },
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 500,
              color: form.planType === 'monthly' ? denimBlue : grey,
            }}
          >
            Monthly
          </Typography>
          <Switch
            checked={form.planType === 'yearly'}
            onChange={() => {
              dispatch(
                setPlanType(form.planType === 'yearly' ? 'monthly' : 'yearly')
              );
            }}
          />
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 500,
              color: form.planType === 'yearly' ? denimBlue : grey,
            }}
          >
            Yearly
          </Typography>
        </Stack>
      </Grid2>
    </Grid2>
  );
}

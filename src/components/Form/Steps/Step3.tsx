import { Grid2 } from '@mui/material';

import { useAppSelector } from '../../../redux/hooks';
import {
  selectMonthlyPrices,
  selectYearlyPrices,
} from '../../../redux/slices/pricesSlice';
import AddonCard from '../StepComponents/AddonCard';

export default function Step3() {
  const monthlyPrices = useAppSelector(selectMonthlyPrices);
  const yearlyPrices = useAppSelector(selectYearlyPrices);

  const addonOptions = [
    {
      name: 'Online service',
      description: 'Access to multiplayer games',
      monthlyPrice: monthlyPrices['online-service'],
      yearlyPrice: yearlyPrices['online-service'],
    },
    {
      name: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      monthlyPrice: monthlyPrices['larger-storage'],
      yearlyPrice: yearlyPrices['larger-storage'],
    },
    {
      name: 'Customizable profile',
      description: 'Custom theme on your profile',
      monthlyPrice: monthlyPrices['customizable-profile'],
      yearlyPrice: yearlyPrices['customizable-profile'],
    },
  ];

  return (
    <Grid2>
      <Grid2 container spacing={2}>
        {addonOptions.map((addon) => (
          <AddonCard key={addon.name} {...addon} />
        ))}
      </Grid2>
    </Grid2>
  );
}

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ROUTES} from '../../constants';
import {TListItem} from './MoreTypes';
import MoreView from './MoreView';

const optionData: TListItem[] = [
  {
    title: 'Self Service',
  },
  {
    title: 'Scheduled Payments',
  },
  {
    title: 'Card Management',
  },
  {
    title: 'Lifestyle & Travel',
  },
  {
    title: 'Manage Biometrics',
  },
  {
    title: 'Profile Image',
  },
  {
    title: 'Paycode',
  },
  {
    title: 'FAQ',
  },
  {
    title: 'Frequent Transaction',
  },
  {
    title: 'Dispute Resolution',
  },
  {
    title: 'Share App',
  },
  {
    title: 'Customer Profile',
  },
  {
    title: 'Delete Profile',
  },
];

const MoreContainer = () => {
  const navigation = useNavigation();
  const goToManageBiometrics = () =>
    navigation.navigate(ROUTES.MORE.MANAGE_BIOMETRICS);
  const goToProfileImage = () => navigation.navigate(ROUTES.MORE.PROFILE_IMAGE);

  const optionsFormater = (arr: TListItem[]) => {
    let arrayWithOptions = [];
    arrayWithOptions = arr.map(item => ({
      title: item.title,
      onOptionPress:
        item.title === 'Manage Biometrics'
          ? goToManageBiometrics
          : item.title === 'Profile Image'
          ? goToProfileImage
          : undefined,
    }));
    return arrayWithOptions;
  };
  return <MoreView optionsArray={optionsFormater(optionData)} />;
};

export default MoreContainer;

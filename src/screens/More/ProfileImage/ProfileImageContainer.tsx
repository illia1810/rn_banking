import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileImageView from './ProfileImageView';

const ProfileImageContainer = () => {
  const [profileImagePath, setProfileImagePath] = useState('');
  const [imageFromStorage, setImageFromStorage] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('ProfileImagePath').then(
      img => img && setImageFromStorage(img),
    );
  });
  return (
    <ProfileImageView
      imagePath={imageFromStorage ? imageFromStorage : profileImagePath}
      onSelectImage={setProfileImagePath}
      onDeleteItemFromStore={setImageFromStorage}
    />
  );
};

export default ProfileImageContainer;

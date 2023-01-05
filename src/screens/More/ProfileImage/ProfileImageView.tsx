import React from 'react';
import {Alert, Image, Pressable, Text, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CameraIcon} from '../../../assets/svg';
import CustomButton from '../../../components/CustomButton';
import {defaultImageOptions, TProfileImageProps} from './ProfileImageTypes';
import styles from './styles';

const ProfileImageView = ({
  imagePath,
  onSelectImage,
  onDeleteItemFromStore,
}: TProfileImageProps) => {
  const handleImagePicker = () => {
    ImagePicker.openPicker(defaultImageOptions).then(selectImage => {
      onSelectImage(selectImage.path);
      AsyncStorage.setItem('ProfileImagePath', selectImage.path);
    });
  };

  const handleDeleteImage = () => {
    onSelectImage('');
    AsyncStorage.removeItem('ProfileImagePath');
    onDeleteItemFromStore('');
  };

  const handleContinue = async () => {
    try {
      await AsyncStorage.setItem('ProfileImagePath', imagePath);
    } catch (e) {
      Alert.alert('Oopps, something went wrong', 'Try to upload phato again', [
        {
          text: 'Try again',
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.topTitle}>Upload Photo</Text>
        {imagePath ? (
          <Image source={{uri: imagePath}} style={styles.imageContainer} />
        ) : (
          <View style={[styles.imageContainer, styles.mockupPhoto]}>
            <CameraIcon />
          </View>
        )}
        <View style={styles.smallButtonsWrapper}>
          {imagePath ? (
            <>
              <Pressable
                onPress={handleImagePicker}
                style={[styles.smallButtonContainer, styles.rightMargin]}>
                <Text style={styles.textInSmallButton}>Change Photo</Text>
              </Pressable>
              <Pressable
                onPress={handleDeleteImage}
                style={styles.smallButtonContainer}>
                <Text style={styles.textInSmallButton}>Delete Photo</Text>
              </Pressable>
            </>
          ) : (
            <Pressable
              onPress={handleImagePicker}
              style={styles.smallButtonContainer}>
              <Text style={styles.textInSmallButton}>Upload Photo</Text>
            </Pressable>
          )}
        </View>
        <Text style={styles.nameText}>Angel Carder</Text>
        <Text style={styles.userNameText}>Username</Text>
      </View>
      <View>
        {imagePath ? (
          <CustomButton
            buttonType={'primary'}
            handlePress={handleContinue}
            title={'continue'}
            customStyle={styles.largeButton}
          />
        ) : (
          <>
            <CustomButton
              buttonType={'ghost'}
              handlePress={() => console.log(1)}
              title={'Skip'}
              customStyle={[styles.largeButton, styles.largeButtonSec]}
            />
            <CustomButton
              buttonType={'primary'}
              handlePress={() => console.log(1)}
              title={'continue'}
              isDisabled={true}
              customStyle={styles.largeButton}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default ProfileImageView;

import {Options, ImageOrVideo} from 'react-native-image-crop-picker';

export const defaultImageOptions: Options = {
  mediaType: 'photo',
  includeBase64: true,
  compressImageQuality: 0.6,
  cropping: true,
  freeStyleCropEnabled: true,
  width: 180,
  height: 180,
};

export type Base64Image = ImageOrVideo & {data: string};

export type TProfileImageProps = {
  imagePath: string;
  onSelectImage(selectImagePath: string): void;
  onDeleteItemFromStore(imgPath: string): void;
};

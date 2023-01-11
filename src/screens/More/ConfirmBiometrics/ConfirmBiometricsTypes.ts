import {TBiometricsConfirmation} from '../../../types';

export type TConfirmBiometricsProps = {
  handleGoBack(): void;
  onPinSubmit(data: TBiometricsConfirmation): void;
  isSuccessModalVisible: boolean;
  isFailModalVisable: boolean;
  handleSuccessModalClose(): void;
  handleFailModalClose(): void;
};

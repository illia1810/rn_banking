import {TTransferConfirmation} from '../../../types';

export type TSecondBMAProps = {
  dataForTransfer: any;
  onBiometricsConfirmation(): void;
  onTransferSubmit(data: TTransferConfirmation): void;
  showModal: boolean;
  onGoBack(): void;
  isSavingBeneficiary: boolean;
  onCloseModal(): void;
  onSavingBeneficiaryChange(): void;
  onSuccessTransfer(): void;
  pinCodeFromStorage?: string;
};

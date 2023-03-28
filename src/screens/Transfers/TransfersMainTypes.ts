export type TransfersMainProps = {
  onPressViewAllTransaction: () => void;
  onPressBetweenMyAccounts: () => void;
  profileImagePath: string | undefined;
};

export type TTransaction = {
  type: 'incoming' | 'outcoming';
  date: string;
  ammount: string;
  name: string;
};

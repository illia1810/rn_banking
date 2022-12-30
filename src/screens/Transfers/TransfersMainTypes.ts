export type TransfersMainProps = {
  onPressViewAllTransaction: () => void;
  onPressBetweenMyAccounts: () => void;
};

export type TTransaction = {
  type: 'incoming' | 'outcoming';
  date: string;
  ammount: string;
  name: string;
};

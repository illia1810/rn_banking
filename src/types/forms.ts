export type TLoginFormData = {
  login: string;
  password: string;
};

export type TTransferFormData = {
  sourceAcc: string;
  destinationAcc: string;
  ammount: string;
  remark: string;
};

export type TTransferConfirmation = {
  pinCode: string;
};

export type TBiometricsConfirmation = {
  pinCode: string;
};

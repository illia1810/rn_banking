export type TDropdownOption = {
  key: string;
  option: string;
};

export type TFirstBMA = {
  sourceAccountsData: TDropdownOption[];
  destinationAccountsData: TDropdownOption[];
  frequencyData: TDropdownOption[];
};

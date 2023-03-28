export type TListItem = {
  title: string;
  onOptionPress?: () => void;
};

export type TMoreProps = {
  optionsArray: TListItem[];
};

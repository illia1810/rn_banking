import React, {FC} from 'react';
import {Switch} from 'react-native-switch';
import {COLORS} from '../../constants';

interface ISwitchButtonProps {
  value: boolean;
  setValue: (value: boolean) => void;
}

const SwitchButton: FC<ISwitchButtonProps> = ({value, setValue}) => {
  return (
    <Switch
      value={value}
      onValueChange={val => setValue(val)}
      disabled={false}
      activeText={'On'}
      inActiveText={'Off'}
      circleSize={18}
      barHeight={18}
      circleBorderWidth={1}
      backgroundActive={COLORS.GREEN}
      backgroundInactive={COLORS.RED}
      circleActiveColor={COLORS.WHITE}
      circleInActiveColor={COLORS.WHITE}
      circleBorderActiveColor={COLORS.GREY}
      circleBorderInactiveColor={COLORS.GREY}
      changeValueImmediately={true}
      renderActiveText={false}
      renderInActiveText={false}
      switchWidthMultiplier={2}
      switchBorderRadius={18}
    />
  );
};

export default SwitchButton;

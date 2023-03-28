import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import FirstBMAView from './FirstBMAView';

const sourceAccountsArray = [
  '0250908029',
  '0250908030',
  '0250908031',
  '0250908032',
  '0250908033',
];
const destinationAccountsArray = ['0260908029', '0260908030', '0260908031'];
const frequencyArray = ['1', '2', '3', '4', '5'];

const FirstBMAContainer = () => {
  const navigation = useNavigation();

  const optionsFormater = (arr: string[]) => {
    let arrayWithOptions = [];
    arrayWithOptions = arr.map((item, index) => ({
      key: `${index}`,
      option: item,
    }));
    return arrayWithOptions;
  };

  useEffect(() => {
    navigation
      .getParent()
      ?.setOptions({tabBarStyle: {display: 'none'}, tabBarVisible: false});
    return () =>
      navigation
        .getParent()
        ?.setOptions({tabBarStyle: undefined, tabBarVisible: undefined});
  }, [navigation]);

  return (
    <FirstBMAView
      sourceAccountsData={optionsFormater(sourceAccountsArray)}
      destinationAccountsData={optionsFormater(destinationAccountsArray)}
      frequencyData={optionsFormater(frequencyArray)}
    />
  );
};

export default FirstBMAContainer;

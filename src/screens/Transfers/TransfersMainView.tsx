import React from 'react';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GreySquare, LogoSmall, Museum, Walet} from '../../assets/svg';
import {LargeSquareWhiteButton, MobileTransaction} from '../../components';
import {TransfersMainProps, TTransaction} from './TransfersMainTypes';
import styles from './styles';

const largeGridButtons = [
  {
    icon: <Walet />,
    title: 'Between my accounts',
  },
  {
    icon: <LogoSmall />,
    title: 'To NIRSAL Bank',
  },
  {
    icon: <Museum />,
    title: 'To Another Bank',
  },
];

const horisontalList = [
  {
    id: '1',
    name: 'Caroline',
  },
  {
    id: '2',
    name: 'Michael',
  },
  {
    id: '3',
    name: 'Matt',
  },
  {
    id: '4',
    name: 'Caroline',
  },
  {
    id: '5',
    name: 'Michael',
  },
  {
    id: '6',
    name: 'Matt',
  },
  {
    id: '7',
    name: 'Caroline',
  },
  {
    id: '8',
    name: 'Michael',
  },
];
const transactionData: TTransaction[] = [
  {
    type: 'outcoming',
    date: 'Sunday, May 12th, 2019',
    ammount: '12 009,86',
    name: 'TRF/Nepa Bill/FRM Richard',
  },
  {
    type: 'incoming',
    date: 'Sunday, May 12th, 2019',
    ammount: '12 009,86',
    name: 'TRF/Nepa Bill/FRM Richard',
  },
  {
    type: 'incoming',
    date: 'Thursday, May 29th, 2022',
    ammount: '12 009,86',
    name: 'TRF/Nepa Bill/FRM Richard',
  },
  {
    type: 'outcoming',
    date: 'Sunday, May 12th, 2019',
    ammount: '12 009,86',
    name: 'TRF/Nepa Bill/FRM Richard',
  },
  {
    type: 'incoming',
    date: 'Sunday, May 12th, 2019',
    ammount: '12 009,86',
    name: 'TRF/Nepa Bill/FRM Richard',
  },
  {
    type: 'incoming',
    date: 'Thursday, May 29th, 2022',
    ammount: '12 009,86',
    name: 'TRF/Nepa Bill/FRM Richard',
  },
  {
    type: 'incoming',
    date: 'Thursday, May 29th, 2022',
    ammount: '12 009,86',
    name: 'TRF/Nepa Bill/FRM Richard',
  },
];

const TransfersMainView = ({
  onPressViewAllTransaction,
  onPressBetweenMyAccounts,
  profileImagePath,
}: TransfersMainProps) => {
  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={styles.safeArea}>
      <View style={styles.topContainer}>
        <View style={styles.userInfoWrapper}>
          {profileImagePath ? (
            <Image source={{uri: profileImagePath}} style={styles.imageSize} />
          ) : (
            <View style={[styles.imageSize, styles.mockupImage]} />
          )}
          <View>
            <Text style={styles.textPrimaryTop}>Good Morning,</Text>
            <Text style={styles.textPrimaryTop}>Mr. Oladele Ahmed</Text>
          </View>
        </View>
        <View>
          <Text style={[styles.textPrimaryTop, styles.rightText]}>
            Your Total Balance:
          </Text>
          <Text style={styles.textBoldTop}>₦200,000.00</Text>
        </View>
      </View>
      <View style={styles.greenView} />
      <View style={styles.absoluteContainer}>
        <View style={styles.largeButtonContainer}>
          {largeGridButtons.map((buttonItem, index) => {
            return (
              <LargeSquareWhiteButton
                icon={buttonItem.icon}
                title={buttonItem.title}
                onPress={onPressBetweenMyAccounts}
                key={index}
              />
            );
          })}
        </View>
      </View>
      <View style={styles.horisontalListContainer}>
        <View style={styles.listTitleContainer}>
          <Text style={styles.listTitle}>Transfer to Favourites</Text>
          <Pressable>
            <Text style={styles.listButton}>+ Add / Edit</Text>
          </Pressable>
        </View>
        <View style={styles.horisontalList}>
          <FlatList
            data={horisontalList}
            renderItem={({item}) => (
              <Pressable style={styles.horisontalListItem} key={item.id}>
                <GreySquare style={styles.greySquare} />
                <Text>{item.name}</Text>
              </Pressable>
            )}
            horizontal
          />
        </View>
      </View>
      <View style={styles.verticalListContainer}>
        <View style={[styles.listTitleContainer, styles.decreasedMarginBottom]}>
          <Text style={styles.listTitle}>Latest Transaction</Text>
          <Pressable onPress={onPressViewAllTransaction}>
            <Text style={styles.listButton}>View All</Text>
          </Pressable>
        </View>
        <View style={styles.transactionsList}>
          <FlatList
            data={transactionData}
            renderItem={({item, index}) => (
              <MobileTransaction
                transactionType={item.type}
                date={item.date}
                ammount={item.ammount}
                transactionName={item.name}
                key={index}
              />
            )}
            scrollEnabled={true}
            showsVerticalScrollIndicator={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TransfersMainView;

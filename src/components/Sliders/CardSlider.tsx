import React, {FC} from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {HistoryGreen} from '../../assets/svg';
import {COLORS} from '../../constants';

const SLIDER_WIDTH = Dimensions.get('window').width;
const SLIDER_HEIGHT = 145;
const ITEM_WIDTH = 330;
const ITEM_HEIGHT = SLIDER_HEIGHT;

type Card = {
  id: number;
  cardHolder: string;
  cardTag: string;
  totalAmmount: string;
  accountNumber: string;
};

interface ICardSliderProps {
  cards: Card[];
  activeSlide: number;
  onSnapToItem: (idx: number) => void;
  isScrollEnabled?: boolean;
}

const CardSlider: FC<ICardSliderProps> = ({
  cards,
  activeSlide,
  onSnapToItem,
  isScrollEnabled,
}) => {
  const renderItem = ({item, index}: {item: Card; index: number}) => {
    return (
      <View key={index} style={styles.cardWrapper}>
        <View style={styles.card}>
          <View style={styles.rowContainer}>
            <Text style={styles.textPrimary}>{item.cardHolder}</Text>
            <View style={styles.cardTagContainer}>
              <Text style={styles.cardTag}>{item.cardTag}</Text>
            </View>
          </View>
          <Text style={styles.totalAmmount}>{item.totalAmmount}</Text>
          <View style={styles.rowContainer}>
            <Text style={styles.textPrimary}>
              Account: {item.accountNumber}
            </Text>
            <Pressable style={styles.transactionHistory}>
              <HistoryGreen />
              <Text style={styles.textSecondary}>Transaction History</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.absolute}>
        <Carousel
          layout={'default'}
          data={cards}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          sliderHeight={ITEM_HEIGHT}
          itemWidth={ITEM_WIDTH}
          itemHeight={ITEM_HEIGHT}
          onSnapToItem={onSnapToItem}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          scrollEnabled={isScrollEnabled}
        />
        {cards.length > 1 && (
          <Pagination
            dotsLength={cards.length}
            activeDotIndex={activeSlide}
            inactiveDotOpacity={1}
            dotStyle={styles.dotActive}
            inactiveDotStyle={styles.dotInactive}
            containerStyle={styles.paginationContainer}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.DARK,
    borderRadius: 10,
    height: 145,
    width: 315,
    marginBottom: 15,
  },
  absolute: {
    position: 'absolute',
    top: 0,
  },
  card: {
    padding: 15,
    height: 145,
    justifyContent: 'space-between',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paginationContainer: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  infoTitle: {
    opacity: 0.5,
  },
  textPrimary: {
    fontSize: 10,
    color: COLORS.WHITE,
  },
  cardTagContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: COLORS.BLACK_ALT,
    borderRadius: 113,
  },
  cardTag: {
    fontSize: 10,
    color: COLORS.GREY_TEXT,
  },
  totalAmmount: {
    fontSize: 20,
    color: COLORS.WHITE,
    fontWeight: '600',
  },
  transactionHistory: {
    backgroundColor: COLORS.LIGHT_GREEN,
    borderRadius: 113,
    paddingVertical: 4,
    paddingHorizontal: 7,
    flexDirection: 'row',
  },
  textSecondary: {
    fontSize: 10,
    color: COLORS.AURO_METAL,
  },
  dotActive: {
    width: 15,
    height: 2,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: COLORS.GREEN,
  },
  dotInactive: {
    width: 9,
    height: 2,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: COLORS.GREY_SEC,
  },
});

export default CardSlider;

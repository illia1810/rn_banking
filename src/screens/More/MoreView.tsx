import React from 'react';
import {FlatList, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Cross} from '../../assets/svg';
import {TMoreProps} from './MoreTypes';
import styles from './styles';

const MoreView = ({optionsArray}: TMoreProps) => {
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.safeArea}>
      <View style={styles.topContainer}>
        <Text style={styles.topTitle}>More</Text>
        <Pressable>
          <Cross />
        </Pressable>
      </View>
      <FlatList
        data={optionsArray}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.optionContainer}
            onPress={item.onOptionPress}
            activeOpacity={0.9}>
            <Text style={styles.optionTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default MoreView;

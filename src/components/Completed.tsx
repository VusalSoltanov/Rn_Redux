import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {Theme} from '../context/Theme';
import Checkbox from './Checkbox';

const Completed = () => {
  const {isDarkMode, toggleTheme, theme} = useContext(Theme);

  return (
    <ScrollView>
      <Text style={[styles.Header, {color: theme.textColor}]}>Completed</Text>
      <View style={styles.Checbox}>
        <Checkbox />
        <Text style={[styles.textItem, {color: theme.textColor}]}>
          Upload 1099-R to TurboTax
        </Text>
      </View>
    </ScrollView>
  );
};

export default Completed; //complete

const styles = StyleSheet.create({
  Header: {
    fontWeight: '700',
    fontSize: 18,
    paddingBottom: 12,
  },
  textItem: {
    fontWeight: '500',
    fontSize: 16,
  },
  Checbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
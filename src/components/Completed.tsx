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
        Feed you fishes at 09:00
        </Text>
        
      </View>
      <View style={styles.Checbox}>
        <Checkbox />
        <Text style={[styles.textItem, {color: theme.textColor}]}>
        Feed you fishes at 21:00
        </Text>
        
      </View>
      <View style={styles.Checbox}>
        <Checkbox />
        <Text style={[styles.textItem, {color: theme.textColor}]}>
         Write React redux todo app
        </Text> 
      </View>
      <View style={styles.Checbox}>
        <Checkbox />
        <Text style={[styles.textItem, {color: theme.textColor}]}>
        Sleep 1 hour
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
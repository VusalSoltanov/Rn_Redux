import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import { Theme} from '../context/Theme';
import Checkbox from './Checkbox';
import {useSelector} from 'react-redux';

const Incompleted = () => {
    const { isDarkMode, toggleTheme, theme } = useContext(Theme);
    const incompletedTodos = useSelector((state: any) => state.incompletedTodos);
  
    if (!incompletedTodos || incompletedTodos.length === 0) {
      return null;
    }
  
    return (
      <ScrollView style={styles.mainCont}>
        <Text style={[styles.Header, { color: theme.textColor }]}>
          Incompleted
        </Text>
        <View style={styles.Checkbox}>
          {incompletedTodos.map((todo: any) => (
            <React.Fragment key={todo.id}>
              <Checkbox />
              <Text style={[styles.textItem, { color: theme.textColor }]}>
                {todo.task}
              </Text>
            </React.Fragment>
          ))}
        </View>
      </ScrollView>
    );
  };

export default Incompleted;

const styles = StyleSheet.create({
  mainCont: {
    marginBottom: 30,
  },
  Header: {
    fontWeight: '700',
    fontSize: 18,
    paddingBottom: 12,
  },
  textItem: {
    fontWeight: '500',
    fontSize: 16,
    flexDirection: 'column',
  },
  Checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
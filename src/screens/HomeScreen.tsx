import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import { Theme } from '../context/Theme';
import { Divider, Switch } from 'react-native-paper';
import Complete from '../components/Completed';
import AddTodo from '../components/AddTodo';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/index';
import Incomplete from '../components/Incompleted';
import moment from 'moment';

const HomeScreen: React.FC = () => {    //SomeComponent
  const { isDarkMode, toggleTheme, theme } = useContext(Theme);
  const [modalVisible, setModalVisible] = useState(false);
  const [taskInput, setTaskInput] = useState('');

  let dispatch = useDispatch();

  const handleAddTask = (task: string) => {
    
    dispatch({
      type: "ADD_TODO", payload: {
        id: Math.floor(Math.random() * 1000),
        title: task,
        completed: false,
      }
    })


    setModalVisible(false);
    setTaskInput('');
  };

  const closeModal = () => {
    setModalVisible(false);
    setTaskInput('');
  };
  const onToggleSwitch = () => {
    toggleTheme();
  };
  const currentDate = moment().format('MMMM D, YYYY');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.backgroundColor}
      />
      <View style={styles.mainConatiner}>
        <View style={styles.headerStyle}>
          <View>
            <Text style={[styles.textHeader, { color: theme.textColor }]}>
              {currentDate}
            </Text>
          </View>
          <TouchableOpacity onPress={toggleTheme}>
            <Switch value={isDarkMode} onValueChange={onToggleSwitch} />
          </TouchableOpacity>
        </View>
        <Divider style={styles.dividerStyle} />
        <Incomplete />
        <Complete />
        <TouchableOpacity
          style={styles.plusIcon}
          onPress={() => setModalVisible(true)}>
          <Image source={require('../assets/PlusSign.png')} />
        </TouchableOpacity>
        <AddTodo
          visible={modalVisible}
          onClose={closeModal}
          onAddTodo={handleAddTask}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainConatiner: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textHeader: {
    fontSize: 32,
    fontWeight: '700',
  },
  statusText: {
    paddingVertical: 8,
    color: '#575767',
  },
  dividerStyle: {
    paddingTop: 1,
    marginTop: 8,
    marginBottom: 16,
    color: '#575767',
    opacity: 0.2,
  },
  plusIcon: {
    position: 'absolute',
    top: '235%',
    left: '85%',
  },
});
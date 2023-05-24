import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../actions/todoActions';
import { RootState } from '../store/store';
import { View, Text } from 'react-native';
import TodoList from '../components/TodoList';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const incompleteTodos = todos.filter((todo) => !todo.completed);
  const completeTodos = todos.filter((todo) => todo.completed);

  return (
    <View>
      <Text>Incomplete {incompleteTodos.length}, Complete {completeTodos.length}</Text>
      <Text>Incompleted</Text>
      <TodoList />
      <Text>Completed</Text>
      <TodoList />
    </View>
  );
};

export default HomeScreen;

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { View, Text } from 'react-native';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <View>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </View>
  );
};

export default TodoList;

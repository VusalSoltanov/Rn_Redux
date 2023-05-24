import React from 'react';
import { useDispatch } from 'react-redux';
import { markTodoCompleted } from '../actions/todoActions';
import { View, Text  } from 'react-native';
import { Todo } from '../types/types';
import { Checkbox } from 'react-native-paper';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggleCompleted = () => {
    dispatch(markTodoCompleted(todo.id));
  };

  return (
    <View>
      <Checkbox value={todo.completed} onValueChange={handleToggleCompleted} />
      <Text>{todo.title}</Text>
    </View>
  );
};

export default TodoItem;

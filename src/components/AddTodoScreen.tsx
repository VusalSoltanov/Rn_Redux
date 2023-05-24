import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/todoActions';
import { View, TextInput, Button } from 'react-native';

const AddTodoScreen: React.FC = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo(title));
    setTitle('');
  };

  return (
    <View>
      <TextInput
        placeholder="Enter todo name"
        value={title}
        onChangeText={setTitle}
      />
      <Button title="Add" onPress={handleAddTodo} />
    </View>
  );
};

export default AddTodoScreen;

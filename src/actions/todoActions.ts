import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Todo } from '../types/types';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('https://646dbeb69c677e23218a5678.mockapi.io/todos');
  return response.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (title: string) => {
  const response = await axios.post('https://646dbeb69c677e23218a5678.mockapi.io/todos', { title, completed: false });
  return response.data;
});

export const markTodoCompleted = createAsyncThunk('todos/markTodoCompleted', async (id: string) => {
  const response = await axios.put(`https://646dbeb69c677e23218a5678.mockapi.io/todos/${id}`, { completed: true });
  return response.data;
});

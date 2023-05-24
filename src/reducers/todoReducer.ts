import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/types';
import { fetchTodos, addTodo, markTodoCompleted } from '../actions/todoActions';
import { AppDispatch } from '../store/store';

interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch todos.';
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(markTodoCompleted.fulfilled, (state, action) => {
        const todoIndex = state.todos.findIndex((todo) => todo.id === action.payload.id);
        if (todoIndex !== -1) {
          state.todos[todoIndex] = action.payload;
        }
      });
  },
});

export default todoSlice.reducer;

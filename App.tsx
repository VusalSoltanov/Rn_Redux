import {Provider} from 'react-redux';
import {ThemeProvider} from './src/context/Theme';
import HomeScreen from './src/screens/HomeScreen';
import {TodoReducer} from './src/redux/reducers/Reducer';
import {createStore} from 'redux';

let store = createStore(TodoReducer);

export type RootState = ReturnType<typeof store.getState>;

const App = () => {
  console.log(typeof store.getState);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <HomeScreen />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
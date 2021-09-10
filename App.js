import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import Navigator from './src/routes/Route';
import Store from './src/utils/TokenStore';


function App() {
  return (
    <Store >
      <Navigator />
    </Store>
  );
}

export default App;

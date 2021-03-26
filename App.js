

import React from 'react';

import {Provider as PaperProvider} from 'react-native-paper';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './navigations/MainNavigation'
import AuthNavigation from './navigations/AuthNavigation'

// import AuthProvider from './store/providers/AuthProvider'
// import AuthContext from './store/contexts/AuthContext'





const App =() => {
 const isAuthenticated =false
  return (
    //<AuthProvider>
    <PaperProvider>
   <NavigationContainer>

      {
        !isAuthenticated ? <AuthNavigation/> :<MainNavigation/>
      }
   </NavigationContainer>
    </PaperProvider>

    //</AuthProvider>
  )
};



export default App;

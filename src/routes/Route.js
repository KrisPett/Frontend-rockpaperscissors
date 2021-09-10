import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LandingScreen from '../screens/LandingScreen';
import HomeScreen from '../screens/HomeScreen';
import SelectScreen from '../screens/SelectScreen';
import ListsScreen from '../screens/ListsScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ActiveGameScreen from '../screens/ActiveGameScreen';
import ResultScreen from '../screens/ResultScreen';

const Stack = createStackNavigator();

const screens = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >

                <Stack.Screen
                    name="LandingScreen"
                    component={LandingScreen}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="SelectScreen"
                    component={SelectScreen}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="ListsScreen"
                    component={ListsScreen}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="HistoryScreen"
                    component={HistoryScreen}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="ActiveGameScreen"
                    component={ActiveGameScreen}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="ResultScreen"
                    component={ResultScreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default screens;

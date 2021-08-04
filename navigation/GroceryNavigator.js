import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text} from "react-native";

//import screens later here
import StoreScreen from '../screens/StoreScreen';
import ModalPage from '../screens/ModalPage';

const ModalStack = createStackNavigator();

export default function GroceryNavigator() {

    return (
        <ModalStack.Navigator initialRouteName="Store" mode="modal">
            <ModalStack.Screen name="Store" component={StoreScreen} />
            <ModalStack.Screen name="Recipe" component={ModalPage} />
        </ModalStack.Navigator> 
    );
}

const styles = StyleSheet.create({

});
import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Meals({dayMeal, navigation}) {
    return (
        dayMeal.map((meal, index) => (

            <View key={index} style={styles.mealContainer}>
                <View style={styles.mealDetails}>
                    {/* {setMealImage(meal.image)} */}
                    <View>
                        <Image
                            style={styles.imagePlaceholder}
                            // source={require('../assets/icon.png')}
                            source={{uri: meal.image}}
                        />
                        </View>
                        <View style={{margin: 10}}>
                        <Text style={{fontWeight: 'bold', fontSize: 16, paddingLeft: 5}}>{meal.mealName}</Text>
                        <Text style={{paddingLeft: 5, fontSize: 13}}>{meal.mealPrepTime} minute meal | {meal.priceRange} Price Range</Text>
                        <TouchableOpacity
                            style={styles.recipeButton}
                            onPress={() => navigation.navigate('Recipe')}
                        >
                            <Text style={{fontWeight: "bold", textAlign: 'center'}}>Recipe</Text>
                        </TouchableOpacity>
                    </View> 
                </View>
            </View>   
        ))
    );
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panel: {
      padding: 20,
      backgroundColor: '#ECECEC',
      paddingTop: 20,
    //   minHeight: 400,
    },
    panelHeader: {
      alignItems: 'center'
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    imagePlaceholder: {
      width: 100,
      height: 100,
      borderRadius: 85,
      borderWidth: 5,
    },
    groceryDetails: {
      flexDirection: 'row', 
    },
    groceryDetailsText: {
      padding: 20
    },
    button: {
      backgroundColor: "#000000",
      padding: 10,
      width: 120,
      marginTop: 20,
      borderRadius: 50,
      justifyContent: "space-between"
    },
    buttonMeal: {
      backgroundColor: "#000000",
      padding: 10,
      width: 90,
    //   marginTop: 10,
      borderRadius: 50,
      justifyContent: "space-between"
    },
    recipeButton: {
      backgroundColor: "#DEDEDE",
      padding: 5,
      width: 100,
      marginTop: 10,
      marginLeft: 5,
      borderRadius: 50,
      justifyContent: "space-between"
    },
    mealContainer: {
      backgroundColor: "white",
      borderRadius: 20,
      marginTop: 10,
    },
    mealDetails: {
      flexDirection: 'row',
      margin: 20
      // alignItems: 'center'
    }
  });
import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Meals({dayMeal}) {
    return (
        <View>
            {/* <Text>Select what you're looking for!</Text> */}
            <View>
                <View style={styles.bubbleContainer}>
                    <View style={styles.detailImage}>
                        <Image 
                            source={require('../assets/icon.png')}
                            style={{width: 75, height: 75}}
                        />
                    </View>
                    <View style={styles.detailText}>
                        <Text style={{fontWeight: 'bold', marginBottom: 10}}>Sign up for CalFresh</Text>
                        <Text style={{marginBottom: 10}}>CalFresh is California's Supplemental Nutrition Assistance Program</Text>
                        <TouchableOpacity style={styles.bubbleButton}>
                            <Text style={{fontWeight: 'bold'}}>Apply Now</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <Text>Sign up for CalFresh</Text> */}
                </View>

                <View style={styles.bubbleContainer}>
                    <View style={styles.detailImage}>
                        <Image 
                            source={require('../assets/icon.png')}
                            style={{width: 75, height: 75}}
                        />
                    </View>
                    <View style={styles.detailText}>
                        <Text style={{fontWeight: 'bold', marginBottom: 10}}>Need help?</Text>
                        <Text style={{marginBottom: 10}}>Our answers to the questions you need</Text>
                        <TouchableOpacity style={styles.bubbleButton}>
                            <Text style={{fontWeight: 'bold'}}>Apply Now</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <Text>Sign up for CalFresh</Text> */}
                </View>
            </View>

            <Text style={{width: 375, textAlign: 'center', fontWeight: 'bold', marginTop: 15, marginBottom: 15}}>Grab some resources</Text>

            <View style={styles.bottomBitmoji}>
            <Image 
                style={{width: 200, height: 200}}
                source={require('../assets/baconBit.png')}
            />
            </View>

            {/* <View style={styles.bubbleContainer}>
                <Text>Sign up for CalFresh</Text>
            </View> */}
        </View>   
    );
}

const styles = StyleSheet.create({
    bubbleContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        // flexWrap: 'wrap',
        width: 375,
        height: 150,
        borderRadius: 25,
        marginTop: 10,
        marginBottom: 10
    },
    detailImage: {
        flexGrow: 0,
        justifyContent: "center",
        marginLeft: 15
    },
    detailText: {
        flexGrow: 1,
        padding: 20,
        marginTop: 5,
        // marginBottom: 10,
        // flexWrap: 'wrap',
        width: 100
    },
    bubbleButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        borderRadius: 25,
        marginTop: 5,
        width: 100,
        height: 30
    },
    bottomBitmoji: {
        width: 365,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 50
    }
});
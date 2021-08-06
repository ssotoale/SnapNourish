import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, Image, SafeAreaView, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Meals({dayMeal}) {
    return (
        <View>
            
            <View style={styles.calfreshLogo}>
            <Image 
                style={{width: 400, height: 180}}
                source={require('../assets/calfresh.png')}
            />
            </View>

            <Text style={{width: 375, marginLeft: 5, fontWeight: 'bold', marginTop: 15, marginBottom: 0}}>Apply Now!</Text>

            <SafeAreaView>
                <TextInput
                    // value={text}
                    style={styles.field}
                    placeholder={'Zip Code'}
                />

                <TextInput
                    // value={text}
                    style={styles.field}
                    placeholder={'First & Last Name'}
                />


                <TextInput
                    // value={text}
                    style={styles.field}
                    placeholder={'Age'}
                />


                <TextInput
                    // value={text}
                    style={styles.field}
                    placeholder={'Members in Household'}
                />


                <TextInput
                    // value={text}
                    style={styles.field}
                    placeholder={'Have you applied for CalFresh in the last year or so?'}
                />

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity 
                        style={styles.button}
                    >
                        <Text style={{color: "lightgrey"}}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                    >
                        <Text style={{color: "lightgrey"}}>No</Text>
                    </TouchableOpacity>
                </View>

                <TextInput
                    // value={text}
                    style={styles.field}
                    placeholder={'Do you get supplemental security income (SSI/SSP)?'}
                />

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity 
                        style={styles.button}
                    >
                        <Text style={{color: "lightgrey"}}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                    >
                        <Text style={{color: "lightgrey"}}>No</Text>
                    </TouchableOpacity>
                </View>

                <TextInput
                    // value={text}
                    style={styles.field}
                    placeholder={'Is everyone in the application a US citizen?'}
                />


                <TextInput
                    // value={text}
                    style={styles.field}
                    placeholder={'Are you a college student?'}
                />


                <TextInput
                    // value={text}
                    style={styles.field}
                    placeholder={'Do you have a job?'}
                />

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity 
                        style={styles.button}
                    >
                        <Text style={{color: "lightgrey"}}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                    >
                        <Text style={{color: "lightgrey"}}>No</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <TouchableOpacity 
                        style={styles.submit}
                    >
                        <Text style={{color: 'white', fontWeight: 'bold'}}>Submit</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </View>   
    );
}

const styles = StyleSheet.create({
    field: {
        backgroundColor: 'white',
        borderRadius: 25,
        borderColor: 'black',
        width: 370,
        height: 40,
        marginTop: 12,
        marginBottom: 12,
        paddingLeft: 15
    },
    buttonleft: {
        backgroundColor: 'white',
        borderRadius: 25,
        width: 180,
        height: 40,
        marginTop: 12,
        marginBottom: 12,
        // paddingLeft: 15
        // marginRight: 5

    },
    button: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        width: 185,
        height: 40,
        marginTop: 12,
        marginBottom: 12,
        // paddingLeft: 15
        // marginLeft: 5

    },
    buttonRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: 'center',
        // alignItems: 'stretch'
    }, 
    submit: {
        backgroundColor: 'lightblue',
        color: 'white',
        width: 375,
        height: 50,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 12,
    },
    calfreshLogo: {
        width: 370,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 25
    }
});
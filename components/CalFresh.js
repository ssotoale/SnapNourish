import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, Image, SafeAreaView, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Meals({dayMeal}) {
    return (
        <View>
            <Text>CalFresh form here!</Text>

            <SafeAreaView>
                <TextInput
                    // value={text}
                    style={styles.field}
                    placeholder={'write here'}
                />

                <TextInput
                    // value={text}
                    style={styles.field}
                    placeholder={'write here'}
                />


                <TextInput
                    // value={text}
                    style={styles.field}
                    placeholder={'write here'}
                />


                <TextInput
                    // value={text}
                    style={styles.field}
                    placeholder={'write here'}
                />


                <TextInput
                    // value={text}
                    style={styles.field}
                    placeholder={'write here'}
                />


                <TextInput
                    // value={text}
                    style={styles.field}
                    placeholder={'write here'}
                />


                <TextInput
                    // value={text}
                    style={styles.field}
                    placeholder={'write here'}
                />


                <TextInput
                    // value={text}
                    style={styles.field}
                    placeholder={'write here'}
                />


                <TextInput
                    // value={text}
                    style={styles.field}
                    placeholder={'write here'}
                />

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
        marginTop: 10,
        marginBottom: 12,
        paddingLeft: 15
    }
});
import React from 'react';
import { StyleSheet, View, Text} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default function ModalPage() {

    return(
        // <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        //     <Text>Hi from the Grocery Store</Text>
        // </View>
        <ScrollView>
            <View style={styles.panel}>
                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 24}}>Name of Meal</Text>
                    <Text>10 minute meal | $6 | 6 servings</Text>
                </View>
                
                <Text style={{fontWeight: "bold", marginTop: 30}}>Ingridients</Text>

                <View style={styles.placeholderContainer}>
                    <View style={styles.imagePlaceholder}>
                        <View style={styles.emptyIngrident}>
                        </View>
                        <View style={styles.bottomText}>
                            <Text style={{textAlign: 'center', marginTop: 15}}>Item Name</Text>
                        </View>
                    </View>

                    <View style={styles.imagePlaceholder}>
                        <View style={styles.emptyIngrident}>
                        </View>
                        <View style={styles.bottomText}>
                            <Text style={{textAlign: 'center', marginTop: 15}}>Item Name</Text>
                        </View>
                    </View>

                    <View style={styles.imagePlaceholder}>
                        <View style={styles.emptyIngrident}>
                        </View>
                        <View style={styles.bottomText}>
                            <Text style={{textAlign: 'center', marginTop: 15}}>Item Name</Text>
                        </View>
                    </View>

                    <View style={styles.imagePlaceholder}>
                        <View style={styles.emptyIngrident}>
                        </View>
                        <View style={styles.bottomText}>
                            <Text style={{textAlign: 'center', marginTop: 15}}>Item Name</Text>
                        </View>
                    </View>

                    <View style={styles.imagePlaceholder}>
                        <View style={styles.emptyIngrident}>
                        </View>
                        <View style={styles.bottomText}>
                            <Text style={{textAlign: 'center', marginTop: 15}}>Item Name</Text>
                        </View>
                    </View>

                    <View style={styles.imagePlaceholder}>
                        <View style={styles.emptyIngrident}>
                        </View>
                        <View style={styles.bottomText}>
                            <Text style={{textAlign: 'center', marginTop: 15}}>Item Name</Text>
                        </View>
                    </View>
                </View>
                    
                
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    panel: {
        padding: 20,
        backgroundColor: '#ECECEC',
        paddingTop: 20,
        // minHeight: 400, //has to fill all the screen from top to bottom
    },
    placeholderContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        // marginTop: 10,
        justifyContent: 'center',
        height: 1000,
        // zIndex: 1
    },
    imagePlaceholder: {
        backgroundColor: 'white',
        borderRadius: 25,
        height: 300,
        width: 200,
        margin: 20
    },
    bottomText: {
        backgroundColor: 'grey',
        position: 'absolute',
        bottom: 0,
        width: 200,
        height: 50,
        // zIndex: 0
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    emptyIngrident: {
        backgroundColor: 'black',
        height: 300,
        width: 200,
        borderRadius: 25
    }
});
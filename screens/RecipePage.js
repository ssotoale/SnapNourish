import { stopLocationUpdatesAsync } from 'expo-location';
import React from 'react';
import { StyleSheet, View, Text, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default function RecipePage() {

    return(
        // <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        //     <Text>Hi from the Grocery Store</Text>
        // </View>
        <ScrollView>
            <View style={styles.panel}>
                <View style={styles.header}>
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: 24, width: 200, marginBottom: 5}}>Ground Turkey Stuffed Peppers</Text>
                        <Text>10 minute meal | $10-$12 | 8 servings</Text>
                    </View>
                    <View>
                        <View style={{flexDirection: 'row', marginLeft: 25}}>
                            <Image 
                                style={{width: 50, height: 50}}
                                source={require('../assets/Arrow_box.png')}
                            />
                            <Image 
                                style={{width: 50, height: 50}}
                                source={require('../assets/heart_box.png')}
                            />
                        </View>
                    </View>
                </View>
                
                <Text style={{fontWeight: "bold", marginTop: 30, marginBottom: 10, fontSize: 18}}>Ingredients</Text>

                <View style={styles.placeholderContainer}>

                    <View style={styles.imagePlaceholder}>
                        <Image
                            style={styles.imageItem}
                            source={require('../assets/recipes/BellPepper_1.png')}
                        />
                        {/* <View style={styles.emptyIngrident}>
                        </View> */}
                        <View style={styles.bottomText}>
                            <Text style={styles.placeholderText}>3 green bell peppers</Text>
                            {/* <Text style={styles.placeholderText}>bell peppers </Text> */}
                        </View>
                    </View>

                    <View style={styles.imagePlaceholder}>
                        <Image
                            style={styles.imageItem}
                            source={require('../assets/recipes/Turkey_2.png')}
                        />
                        {/* <View style={styles.emptyIngrident}>
                        </View> */}
                        <View style={styles.bottomText}>
                            <Text style={styles.placeholderText}>1 lbs of Ground Turkey</Text>
                            {/* <Text style={{textAlign: 'center', color: 'white', bottom: 3}}>Ground Turkey </Text> */}
                        </View>
                    </View>

                    <View style={styles.imagePlaceholder}>
                        <Image
                            style={styles.imageItem}
                            source={require('../assets/recipes/Onion_4.png')}
                        />
                        {/* <View style={styles.emptyIngrident}>
                        </View> */}
                        <View style={styles.bottomText}>
                            <Text style={styles.placeholderText}>1 Large yellow onion</Text>
                            {/* <Text style={{textAlign: 'center', color: 'white'}}>yellow onion</Text> */}
                        </View>
                    </View>

                    <View style={styles.imagePlaceholder}>
                        <Image
                            style={styles.imageItem}
                            source={require('../assets/recipes/Bread_7.png')}
                        />
                        {/* <View style={styles.emptyIngrident}>
                        </View> */}
                        <View style={styles.bottomText}>
                            <Text style={styles.placeholderText}>1-1/2 cups soft bread crumbs</Text>
                            {/* <Text style={{textAlign: 'center', color: 'white'}}>bread crumbs</Text> */}
                        </View>
                    </View>

                    <View style={styles.imagePlaceholder}>
                        <Image
                            style={styles.imageItem}
                            source={require('../assets/recipes/Tomato_3.png')}
                        />
                        {/* <View style={styles.emptyIngrident}>
                        </View> */}
                        <View style={styles.bottomText}>
                            <Text style={styles.placeholderText}>2 medium tomatoes</Text>
                            {/* <Text style={{textAlign: 'center', color: 'white'}}>tomatoes</Text> */}
                        </View>
                    </View>

                    <View style={styles.imagePlaceholder}>
                        <Image
                            style={styles.imageItem}
                            source={require('../assets/recipes/Cheese_5.png')}
                        />
                        {/* <View style={styles.emptyIngrident}>
                        </View> */}
                        <View style={styles.bottomText}>
                            <Text style={styles.placeholderText}>1-2/4 cups shredded cheese</Text>
                            {/* <Text style={{textAlign: 'center', color: 'white'}}>shredded cheese </Text> */}
                        </View>
                    </View>

                    <View style={styles.imagePlaceholder}>
                        <Image
                            style={styles.imageItem}
                            source={require('../assets/recipes/Garlic_6.png')}
                        />
                        {/* <View style={styles.emptyIngrident}>
                        </View> */}
                        <View style={styles.bottomText}>
                            <Text style={styles.placeholderText}>1 garlic clove, minced</Text>
                            {/* <Text style={{textAlign: 'center', color: 'white'}}>minced</Text> */}
                        </View>
                    </View>

                    <View style={styles.imagePlaceholder}>
                        <Image
                            style={styles.imageItem}
                            source={require('../assets/recipes/Cumin_8.png')}
                        />
                        {/* <View style={styles.emptyIngrident}>
                        </View> */}
                        <View style={styles.bottomText}>
                            <Text style={styles.placeholderText}>2 teaspoons ground cumin</Text>
                            {/* <Text style={{textAlign: 'center', color: 'white'}}>ground cumin </Text> */}
                        </View>
                    </View>

                    <View style={styles.imagePlaceholder}>
                        <Image
                            style={styles.imageItem}
                            source={require('../assets/recipes/Salt_10_.png')}
                        />
                        {/* <View style={styles.emptyIngrident}>
                        </View> */}
                        <View style={styles.bottomText}>
                            <Text style={styles.placeholderText}>1/2 teaspoon salt</Text>
                            {/* <Text style={{textAlign: 'center', color: 'white'}}>salt</Text> */}
                        </View>
                    </View>

                    <View style={styles.imagePlaceholder}>
                        <Image
                            style={styles.imageItem}
                            source={require('../assets/recipes/pepper_11.png')}
                        />
                        {/* <View style={styles.emptyIngrident}>
                        </View> */}
                        <View style={styles.bottomText}>
                            <Text style={styles.placeholderText}>1/2 teaspoon pepper</Text>
                            {/* <Text style={{textAlign: 'center', color: 'white'}}>pepper</Text> */}
                        </View>
                    </View>

                    <View style={styles.imagePlaceholder}>
                        <Image
                            style={styles.imageItem}
                            source={require('../assets/recipes/Paprika_12.png')}
                        />
                        {/* <View style={styles.emptyIngrident}>
                        </View> */}
                        <View style={styles.bottomText}>
                            <Text style={styles.placeholderText}>1/4 teaspoon paprika</Text>
                            {/* <Text style={{textAlign: 'center', color: 'white'}}>paprika</Text> */}
                        </View>
                    </View>

                </View>

                <Text style={{fontWeight: "bold", marginTop: 30, marginBottom: 5, fontSize: 18}}>Instructions</Text>

                <View style={styles.bubbleTextContainer}>
                    <View style={styles.instructionIcon}>
                        <Image 
                            style={{width: 30, height: 30}}
                            source={require('../assets/8-4_Icons/Nourish_Recipes_Icons-04.png')}
                        />
                    </View>
                    <View style={styles.bubbleTextDetails}>
                        <Text>Preheat oven to 325 degrees. Cut peppers lengthwise in half; remove seeds. Place in a pan coated with cooking spray.</Text>
                        {/* <Text>remove seeds. Place in a pan coated with cooking spray.</Text> */}
                    </View>

                </View>

                <View style={styles.bubbleTextContainer}>
                    <View style={styles.instructionIcon}>
                        <Image 
                            style={{width: 30, height: 30}}
                            source={require('../assets/8-4_Icons/Nourish_Recipes_Icons-05.png')}
                        />
                    </View>
                    <View style={styles.bubbleTextDetails}>
                        <Text>In a large skillet, heat oil over medium-high heat. Cook and crumble turkey with onion, garlic, and seasonings over medium-high heat until meat is no longer pink, 6-8 minutes. Cool slightly. Stir in tomatoes, cheese, and bread crumbs.</Text>
                    </View>
                </View>

                <View style={styles.bubbleTextContainer}>
                    <View style={styles.instructionIcon}>
                        <Image 
                            style={{width: 30, height: 30}}
                            source={require('../assets/8-4_Icons/Nourish_Recipes_Icons-06.png')}
                        />
                    </View>
                    <View style={styles.bubbleTextDetails}>
                        <Text>Fill with turkey mixture. Sprinkle with paprika. Bake, uncovered, until filling is heated through and peppers are tender, 20-25 minutes.</Text>
                    </View>
                </View>

                

                <Text style={{fontWeight: "bold", marginTop: 30, marginBottom: 5, fontSize: 18}}>Tips and Tricks</Text>
                
                <View style={styles.bubbleTextContainer}>
                    <View style={styles.instructionIcon}>
                        <Image 
                            style={{width: 30, height: 30}}
                            source={require('../assets/8-4_Icons/Nourish_Recipes_Icons-02.png')}
                        />
                    </View>
                    <View style={styles.bubbleTextDetails}>
                        <Text>Don't have a teaspoon? You can use a kitchen spoon and fill it half way with your ingredient.</Text>
                    </View>
                </View>

                <View style={styles.bubbleTextContainer}>
                    <View style={styles.instructionIcon}>
                        <Image 
                            style={{width: 30, height: 30}}
                            source={require('../assets/8-4_Icons/Nourish_Recipes_Icons-02.png')}
                        />
                    </View>
                    <View style={styles.bubbleTextDetails}>
                        <Text>Using things you already have in your pantry can be a big help! Look for some salt, pepper, paprika, and cumin.</Text>
                    </View>
                </View>

                <Text style={{fontWeight: "bold", marginTop: 30, marginBottom: 5, fontSize: 18}}>Tips and Tricks</Text>

                <View style={styles.bubbleTextContainer}>
                    <View style={styles.instructionIcon, {margin: 14}}>
                        <Image 
                            style={{width: 30, height: 30}}
                            source={require('../assets/8-4_Icons/Nourish_Recipes_Icons-03.png')}
                        />
                    </View>
                    <View style={styles.bubbleTextDetails}>
                        <Text>I feel healthy and strong today!</Text>
                    </View>
                </View>

                <Text style={{textAlign: 'center', marginTop: 30, fontWeight: 'bold'}}>Now that was easy!</Text>
                <View style={{flexDirection: 'row', padding: 5, justifyContent: 'center'}}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{fontWeight: "bold", textAlign: 'center'}}>More recipes!</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.bottomBitmoji}>
                    <Image 
                        style={{width: 200, height: 200}}
                        source={require('../assets/Bitmojis/Lexie/Lexie_Yum.png')}
                    />
                </View>


                
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    panel: {
        padding: 20,
        backgroundColor: '#ECECEC',
        // paddingTop: 20,
        // minHeight: 400, //has to fill all the screen from top to bottom
    },
    header: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    placeholderContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        // marginTop: 10,
        justifyContent: 'center',
        // height: 1000,
        // zIndex: 1
    },
    imagePlaceholder: {
        backgroundColor: 'white',
        borderRadius: 25,
        height: 150,
        width: 100,
        margin: 10
    },
    bottomText: {
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        position: 'absolute',
        fontWeight: 'bold',
        bottom: 0,
        width: 100,
        height: 50,
        // zIndex: 0
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    emptyIngrident: {
        backgroundColor: 'lightgrey',
        height: 300,
        width: 200,
        borderRadius: 25
    },
    imageItem: {
        height: 150,
        width: 100,
        borderRadius: 25
    },
    placeholderText: {
        textAlign: 'center',
        fontSize: 12,
        width: 100,
        // marginTop: 3, 
        fontWeight: 'bold',
        color: 'white'
    },
    bubbleTextContainer: {
        flexDirection: 'row',
        backgroundColor: "white",
        borderRadius: 20,
        marginTop: 10
    },
    bubbleTextDetails: {
        // flexDirection: 'row',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        width: 280
        // alignItems: 'center'
    },
    button: {
        backgroundColor: "rgb(227, 228, 228)",
        shadowColor: '#000',
        shadowOffset: {
          width: 3,
          height: 3,
        },
        shadowOpacity: 0.30,
        shadowRadius: 2,
        elevation: 5,
        
        padding: 10,
        width: 150,
        margin: 20,
        borderRadius: 50,
        // color: 'white'
        // justifyContent: "space-between"
    },
    instructionIcon: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    },
    bottomBitmoji: {
        width: 365,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 30
    }
});
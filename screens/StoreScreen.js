import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Meals from '../components/Meals.js';
import CalFresh from '../components/CalFresh.js';
import DefaultStoreUI from '../components/DefaultStoreUI.js';
import db from "../firebase";
import { assets } from "../react-native.config.js";

export default function StoriesScreen({navigation}) {

    const [store, setStore] = useState({});
    const [breakfast, setBreakfast] = useState([]);
    const [lunch, setLunch] = useState([]);
    const [dinner, setDinner] = useState([]);
    const [dayMeal, setDayMeal] = useState(null);
    const [otherUI, setOtherUI] = useState(undefined);
    const [storeImage, setStoreImage] = useState(null);

    let storeName;
    // let dayMeal;
    let breakfastImageTest;

    useEffect(() => {
        var docRef = db.collection("groceryData").doc("stores");

        docRef.get().then((doc) => {
            if (doc.exists) {
                // console.log("Document data:", doc.data());
                setStore(doc.data().groceryOutlet);
                setBreakfast(doc.data().groceryOutlet['meals']['breakfast']);
                setLunch(doc.data().groceryOutlet['meals']['lunch']);
                setDinner(doc.data().groceryOutlet['meals']['dinner']);
                // setStoreImage(doc.data().groceryOutlet['meals']['breakfast'][0].image);
                setStoreImage(doc.data().groceryOutlet.groceryImage);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

    }, []);

    const callGroceryUI = (s) => {

        setDayMeal(null);
        setOtherUI(undefined);

        if (s === 'breakfast') {
            setDayMeal(breakfast);
        }
        else if (s === 'lunch') {
            setDayMeal(lunch);
        } else if (s === 'dinner') {
            setDayMeal(dinner)
        } else {
            setOtherUI('calfresh');
        }

        // console.log(s);

        if(dayMeal)
            console.log('daymeal is defined')
        
        if(otherUI)
            console.log('otherUI is defined')
    };


    if ((breakfast && lunch && dinner) === []) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    } else {

        return (
        
        <ScrollView>
            <View style={styles.panel}>
            <View>
                <View style={styles.groceryDetails}>
                <View>
                    <Image
                    style={styles.imagePlaceholder}
                    // source={require('../assets/icon.png')}
                    source={{uri: storeImage}}
                    />
                </View>
                <View style={styles.groceryDetailsText}>
                    <View style={{flexGrow: 2}}>
                        <Text style={{fontWeight: 'bold', fontSize: 22}}>{store.name}</Text>
                        <Text>Affordable Market</Text>
                    </View>
                    
                    
                </View>
                <View style={{padding: 20, marginLeft: 30}}>
                        <Image 
                            style={{width: 25, height: 20}}
                            source={require('../assets/3dots.png')}
                        />
                </View>
            </View>
                
                
                <View style={{padding: 10}}></View>
                <Text>
                    <Text style={{fontWeight: "bold"}}>Open Now  </Text>
                    <Text>{store.hours}</Text>
                </Text>
                {/* <Text>Open Now {store.hours}</Text> */}
                <Text>{'\t1615 W Verdugo Ave, Burbank, CA 91506'}</Text>
                <Text>{'\t(747)283-1129'}</Text>

                <View style={{flexDirection: 'row', padding: 5, justifyContent: 'center'}}>

                    <View style={{padding: 5}}>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={() => setDayMeal(null)}
                        >
                            <Text style={styles.buttonText}>Resources</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{padding: 5}}>
                        <TouchableOpacity 
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Directions</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{padding: 5}}>
                        <TouchableOpacity 
                            style={styles.sendButton}
                        >
                            <Text style={{color: 'white', fontWeight:'bold', textAlign: 'center', fontSize: 13}}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </View>



                <View style={{flexDirection: 'row', padding: 5, justifyContent: 'center'}}>
                    <View style={{paddingLeft: 5, paddingRight: 5}}>
                        <TouchableOpacity 
                            style={styles.buttonMeal}
                            onPress={() => setDayMeal(breakfast)} 
                        >
                            <Text style={styles.buttonText}>Breakfast</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{paddingLeft: 5, paddingRight: 5}}>
                        <TouchableOpacity 
                            style={styles.buttonMeal}
                            onPress={() => setDayMeal(lunch)} 
                        >
                            <Text style={styles.buttonText}>Lunch</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{paddingLeft: 5, paddingRight: 5}}>
                        <TouchableOpacity 
                            style={styles.buttonMeal}
                            onPress={() => setDayMeal(dinner)} 
                        >
                            <Text style={styles.buttonText}>Dinner</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{paddingLeft: 5, paddingRight: 5}}>
                        <TouchableOpacity 
                            style={styles.buttonMeal}
                            onPress={() => setDayMeal(store['meals']['snacks'])} 
                        >
                            <Text style={styles.buttonText}>Snacks</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/*MAPPING THROUGH MEALS HERE*/}
                    {
                    dayMeal ?
                        <View>
                            <Meals dayMeal={dayMeal} navigation={navigation}/>
                            <Text style={{width: 375, textAlign: 'center', fontWeight: 'bold', marginTop: 40, marginBottom: 15}}>That's some good eats!</Text>

                            {/* <Text style={{textAlign: 'center', marginTop: 30}}>Now that was easy!</Text> */}
                            <View style={{flexDirection: 'row', padding: 5, justifyContent: 'center'}}>
                                <TouchableOpacity style={styles.buttonTop}>
                                    <Text style={{fontWeight: "bold", textAlign: 'center'}}>Back to the top</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.bottomBitmoji}>
                                <Image 
                                    style={{width: 200, height: 200}}
                                    source={require('../assets/Bitmojis/Nayeli/file-7.png')}
                                />
                            </View>
                        </View>
                        :
                        <DefaultStoreUI dayMeal={dayMeal}/>
                    // : otherUI ?
                    //     <CalFresh />
                    // :
                    //     <DefaultStoreUI />
                    }     


            </View>      
            </View>
        </ScrollView>
    );
}
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
      backgroundColor: 'rgb(238, 239, 241)9',
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
      width: 380 
    },
    groceryDetailsText: {
      padding: 20
    },
    button: {
    //   fontFamily: 'GraphikSemibold',
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
      width: 120,
      marginTop: 20,
      borderRadius: 50,
      justifyContent: "space-between"
    },
    sendButton: {
        // fontFamily: 'GraphikSemibold',
        backgroundColor: 'rgb(79,170,248)',
        padding: 10,
        width: 120,
        marginTop: 20,
        borderRadius: 50,
        justifyContent: "space-between"
    },
    buttonMeal: {
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
      width: 87,
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
    buttonText: {
        fontWeight:'bold', 
        textAlign: 'center',
        fontSize: 13
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
    },
    bottomBitmoji: {
        width: 365,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 30
    },
    buttonTop: {
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
        width: 140,
        // margin: 20,
        marginTop: 5,
        marginBottom: 30,
        borderRadius: 50,
        // color: 'white'
        // justifyContent: "space-between"
    }
  });
  
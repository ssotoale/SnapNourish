import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import db from "../firebase";

export default function StoriesScreen({navigation}) {

    const [dummySelf, setDummySelf] = useState([]);
    // const [test, setTest] = useState('NameHere');
    const [store, setStore] = useState({});

    let storeName;
    let dayMeal;
    let breakfastImageTest;

    useEffect(() => {
        (async () => {
            // let dummy = await db.collection("dummyTest").doc("dummySelfData").get();
            // setDummySelf(dummy.data().self);
            // console.log('Printing dummy data to console')
            // console.log(dummy.data().self);
            // console.log(dummySelf[0]);

            let d = await db.collection("groceryData").doc("stores").get();
            setStore(d.data().groceryOutlet);
            // console.log('Printing Store Data');
            // console.log(store);
            // storeName = store['name'];
            // console.log(storeName);
        })();
    }, []);

    // storeName = store['name'];
    // // dayMeal = store.meals.breakfast;
    // breakfastImageTest = store.meals.breakfast[0].image;


    return (
    
    <ScrollView>
        {console.log(store)}
        <View style={styles.panel}>
        <View>
            <View style={styles.groceryDetails}>
            <View>
                <Image
                style={styles.imagePlaceholder}
                source={require('../assets/icon.png')}
                // source={{URI: store.meals.breakfast[0].image}}
                />
            </View>
            <View style={styles.groceryDetailsText}>
                <Text style={{fontWeight: 'bold', fontSize: 22}}>{store.name}</Text>
                <Text>Affordable Market</Text>
            </View>
            </View>
            
            
            <View style={{padding: 10}}></View>
            <Text>Open Now {store.hours}</Text>
            <Text>{'\t1615 W Verdugo Ave, Burbank, CA 91506'}</Text>
            <Text>{'\t(123)456-7890'}</Text>

            <View style={{flexDirection: 'row', padding: 5, justifyContent: 'center'}}>
            {/* <Button
                title="Directions"
            />
            <Button
                title="Coupons"
            />
            <Button
                title="Send"
            /> */}
            <View style={{padding: 5}}>
                <TouchableOpacity 
                style={styles.button}
                >
                <Text style={{color: "white", textAlign: 'center'}}>Directions</Text>
                </TouchableOpacity>
            </View>

            <View style={{padding: 5}}>
                <TouchableOpacity 
                style={styles.button}
                >
                <Text style={{color: "white", textAlign: 'center'}}>Coupons</Text>
                </TouchableOpacity>
            </View>

            <View style={{padding: 5}}>
                <TouchableOpacity 
                style={styles.button}
                >
                <Text style={{color: "white", textAlign: 'center'}}>Send</Text>
                </TouchableOpacity>
            </View>
            </View>

            
            {
            //trying to retrieve data from firebase
            /* <View>
            <Text>{dummySelf[0]}</Text>
            <Text>{dummySelf[1]}</Text>
            </View> */}

            {/*MAPPING THROUGH MEALS HERE*/}

            {/* {dayMeal.map((meal) => {

            })}             */}

            <View style={styles.mealContainer}>
            <View style={styles.mealDetails}>
                <View>
                <Image
                    style={styles.imagePlaceholder}
                    source={require('../assets/icon.png')}
                />
                </View>
                <View style={{margin: 10}}>
                <Text style={{fontWeight: 'bold', fontSize: 18, paddingLeft: 10}}>Food Name</Text>
                <Text style={{paddingLeft: 10}}>10 minute meal | $6 | 6 servings</Text>
                <TouchableOpacity
                    style={styles.recipeButton}
                    onPress={() => navigation.navigate('Recipe')}
                >
                    <Text style={{fontWeight: "bold", textAlign: 'center'}}>Recipe</Text>
                </TouchableOpacity>
                </View>
            </View>
            </View>

            <View style={styles.mealContainer}>
            <View style={styles.mealDetails}>
                <View>
                <Image
                    style={styles.imagePlaceholder}
                    source={require('../assets/icon.png')}
                />
                </View>
                <View style={{margin: 10}}>
                <Text style={{fontWeight: 'bold', fontSize: 18, paddingLeft: 10}}>Food Name</Text>
                <Text style={{paddingLeft: 10}}>10 minute meal | $6 | 6 servings</Text>
                <TouchableOpacity
                    style={styles.recipeButton}
                >
                    <Text style={{fontWeight: "bold", textAlign: 'center'}}>Recipe</Text>
                </TouchableOpacity>
                </View>
            </View>
            </View>

            <View style={styles.mealContainer}>
            <View style={styles.mealDetails}>
                <View>
                <Image
                    style={styles.imagePlaceholder}
                    source={require('../assets/icon.png')}
                />
                </View>
                <View style={{margin: 10}}>
                <Text style={{fontWeight: 'bold', fontSize: 18, paddingLeft: 10}}>Food Name</Text>
                <Text style={{paddingLeft: 10}}>10 minute meal | $6 | 6 servings</Text>
                <TouchableOpacity
                    style={styles.recipeButton}
                >
                    <Text style={{fontWeight: "bold", textAlign: 'center'}}>Recipe</Text>
                </TouchableOpacity>
                </View>
            </View>
            </View>

            <View style={styles.mealContainer}>
            <View style={styles.mealDetails}>
                <View>
                <Image
                    style={styles.imagePlaceholder}
                    source={require('../assets/icon.png')}
                />
                </View>
                <View style={{margin: 10}}>
                <Text style={{fontWeight: 'bold', fontSize: 18, paddingLeft: 10}}>Food Name</Text>
                <Text style={{paddingLeft: 10}}>10 minute meal | $6 | 6 servings</Text>
                <TouchableOpacity
                    style={styles.recipeButton}
                    // onPress={() => navigation.navigate('Recipe')}
                >
                    <Text style={{fontWeight: "bold", textAlign: 'center'}}>Recipe</Text>
                </TouchableOpacity>
                </View>
            </View>
            </View>

            <View style={styles.mealContainer}>
            <View style={styles.mealDetails}>
                <View>
                <Image
                    style={styles.imagePlaceholder}
                    source={require('../assets/icon.png')}
                />
                </View>
                <View style={{margin: 10}}>
                <Text style={{fontWeight: 'bold', fontSize: 18, paddingLeft: 10}}>Food Name</Text>
                <Text style={{paddingLeft: 10}}>10 minute meal | $6 | 6 servings</Text>
                <TouchableOpacity
                    style={styles.recipeButton}
                >
                    <Text style={{fontWeight: "bold", textAlign: 'center'}}>Recipe</Text>
                </TouchableOpacity>
                </View>
            </View>
            </View>

            <View style={styles.mealContainer}>
            <View style={styles.mealDetails}>
                <View>
                <Image
                    style={styles.imagePlaceholder}
                    source={require('../assets/icon.png')}
                />
                </View>
                <View style={{margin: 10}}>
                <Text style={{fontWeight: 'bold', fontSize: 18, paddingLeft: 10}}>Food Name</Text>
                <Text style={{paddingLeft: 10}}>10 minute meal | $6 | 6 servings</Text>
                <TouchableOpacity
                    style={styles.recipeButton}
                >
                    <Text style={{fontWeight: "bold", textAlign: 'center'}}>Recipe</Text>
                </TouchableOpacity>
                </View>
            </View>
            </View>

            {/* <Text>Grocery Lists</Text>
            <Text>Your pinned content should go here!</Text>   */}
        </View>      
        </View>
    </ScrollView>
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
      width: 150,
      marginTop: 20,
      borderRadius: 50,
      justifyContent: "space-between"
    },
    recipeButton: {
      backgroundColor: "#DEDEDE",
      padding: 5,
      width: 100,
      marginTop: 10,
      marginLeft: 10,
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
  
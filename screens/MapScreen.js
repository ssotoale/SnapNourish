import React, { useState, useEffect, useRef } from "react";
import Colors from "../constants/Colors";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import * as Location from "expo-location";
import MapView, { Callout, Marker} from "react-native-maps";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/Colors";

//may need to yarn install these bottom two dependencies if you create or merge branches
//refer to https://github.com/osdnk/react-native-reanimated-bottom-sheet
import BottomSheet from 'reanimated-bottom-sheet';
import Animated, { withDecay } from "react-native-reanimated";
import { rosybrown } from "color-name";

//trying to retrieve data from firebase
import db from "../firebase";
import firebase from "@firebase/app";

const LOS_ANGELES_REGION = {
  latitude: 34.0522,
  longitude: -118.2437,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const bottomNav = () => {
  console.log("Should pop off a bottom navigator");
}

export default function MapScreen({navigation}) {
  const [currLocation, setCurrLocation] = useState(null);
  const mapView = useRef(null);
  
  //trying to retrieve data from firebase
  const [dummySelf, setDummySelf] = useState([]);

  const renderInner = () => (
    <View style={styles.panel}>
      <View>
        <View style={styles.groceryDetails}>
          <View>
            <Image
              style={styles.imagePlaceholder}
              source={require('../assets/icon.png')}
            />
          </View>
          <View style={styles.groceryDetailsText}>
            <Text style={{fontWeight: 'bold', fontSize: 22}}>Grocery Name</Text>
            <Text>Affordable Market</Text>
          </View>
        </View>
        
        
        <View style={{padding: 10}}></View>
        <Text>Open Now 8:00 am - 10:00 pm</Text>
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
    // <Text>hello</Text>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  let bs = React.createRef();
  let fall = new Animated.Value(1);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrLocation(location.coords);
      
      //trying to retrieve data from firebase
      // let dummy = await db.collection("dummyTest").doc("dummySelfData").get();
      // setDummySelf(dummy);
      // console.log('Printing dummy data to console')
      // console.log(dummy.data().self);
    })();
  }, []);

  const goToCurrLocation = () => {
    mapView?.current.animateToRegion(
      {
        latitude: currLocation.latitude,
        longitude: currLocation.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      1000
    );
  };

  return (
    <>
      <BottomSheet 
        ref={bs}
        snapPoints={[330, 0]}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
        renderContent={renderInner}
        renderHeader={renderHeader}
      />
      <MapView
        ref={mapView}
        style={styles.map}
        initialRegion={LOS_ANGELES_REGION}
      >
        {currLocation ? (
          <Marker
            coordinate={currLocation}
            title={"Current Location"}
            description={"You are here!"}
            // onr={alert("Popping a navigation from the bottom!")}
          >
          {/* {bs.current.snapTo(0)} */}
          {/* navigation.navigate("Store") */}
            <Callout onPress={() =>  navigation.navigate("Store")}> 
              {/* {console.log('hEY, SuP')} */}
              <View>
                <Text>Click Me!</Text>
              </View>
            </Callout>
          </Marker>
        ) : null}
      </MapView>
      {currLocation ? (
        <View style={styles.locateButtonContainer}>
          <TouchableOpacity
            style={styles.locateButton}
            onPress={goToCurrLocation}
          >
            <Ionicons
              name={"navigate"}
              size={40}
              color={Colors.snapblue}
              style={{ marginTop: 5, marginLeft: 3 }}
            />
          </TouchableOpacity>
        </View>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  locateButtonContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  locateButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.snapyellow,
  },
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
    minHeight: 400,
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

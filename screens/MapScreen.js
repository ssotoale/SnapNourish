import React, { useState, useEffect, useRef } from "react";
import Colors from "../constants/Colors";
import { StyleSheet, View, Text, Image, YellowBox } from "react-native";
import * as Location from "expo-location";
import MapView, { Callout, Marker, Polygon} from "react-native-maps";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons'; 
import colors from "../constants/Colors";
import { render } from "react-dom";

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

  
export default function MapScreen({navigation}) {

  //hard coded markets near me
  state = {
    coordinates: [
      { id: "Grocery Store", name: "Grocery Outlet", latitude: 34.04138508288139, longitude: -118.20572644498924 },
      // { name: "2", latitude: 34.04161326513858, longitude: -118.19196488652315 },
      { id: "Grocery Store", name: "Northgate Market", latitude: 34.04149176634087, longitude: -118.21305306673202 },
      // { id: "Grocery Store", name: "Maria's Market", latitude: 34.05386544479957, longitude:  -118.21238943869908 },
      // { id: "Grocery Store", name: "OK Market", latitude: 34.048898025826524, longitude: -118.20207774216696 },
      { id: "Community Fridge", name: "Milpa Grille Community Fridge", latitude: 34.04557389613924, longitude: -118.20430516486128 },
      { id: "Grocery Store", name: "El Super", latitude: 34.042485251204994, longitude: -118.19204009359478 },
      { id: "Grocery Store", name: "Smart and Final", latitude: 34.04145398670342, longitude: -118.21259654209187 },
      { id: "Farmers Market", name: "East LA Farmer's Market", latitude: 34.035989409230865, longitude: -118.15829650851983 },
      { id: "Farmers Market", name: "Historic Downtown Farmer's Market", latitude: 34.04909207602838, longitude: -118.24600910592015 },
      { id: "Pantry", name: "Hospitality Kitchen", latitude: 34.04136433668679, longitude: -118.24147278228973 },
      // { id: "SamLocation", name: "Sam", latitude: 34.04665228450897, longitude: -118.20757001008553 } 
    ]
  }
  const [currLocation, setCurrLocation] = useState(null);
  const mapView = useRef(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrLocation(location.coords);
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

  const goToFriendLocation = () => {
    mapView?.current.animateToRegion(
      {
        latitude: 34.04665228450897,
        longitude: -118.20757001008553,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      1000
    );
  };

  return (
    <>
      <MapView
        ref={mapView}
        style={styles.map}
        initialRegion={LOS_ANGELES_REGION}
      >
      
      {/* polygon for shaded area of close markets */}
      {/* <Polygon
        coordinates={this.state.coordinates}
        fillColor={'rgba(100, 200, 200, 0.3)'}
        strokeWidth={1}
      /> */}

        {currLocation ? (
          <Marker
            coordinate={currLocation}
            title={"Current Location"}
            description={"You are here!"}
          >
            {/* <Image source={require('../assets/sam.png')} style={height: 100, width:100 } /> */}
            <Image source={require('../assets/file-2.png')} style={{height: 150, width:150 }} resizeMode="contain"/>
            <View>
                {/* file path weird */}
                {/* <Image source={require('../assets/sam.png')} /> */}
                {/* <Text>Me</Text> */}
            </View>
            

            {/* <Image source={'../assets/sam.png'} /> */}

          </Marker>
        ) : null}

        {currLocation ? (
          <Marker
            coordinate={{latitude: 34.04665228450897, longitude: -118.20757001008553}}
            title={"Friend Location"}
            description={"Sam is here!"}
          >
            <Image source={require('../assets/sam2.png')} style={{height: 150, width:150 }} resizeMode="contain"/>
              {/* <View>
                <Text>Sam</Text>
              </View> */}
          </Marker>
        ) : null}
        
        {this.state.coordinates.map(marker => (
          <Marker
          key={marker.name}
          coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
          // image={require('../assets/2021_Map_Pin_Grocery.png')} 
          // title={marker.name}
          >
            {/* <Image source={require('../assets/2021_Map_Pin_Grocery.png')} style={{height: 100, width:100 }} resizeMode="contain"/> */}
            {marker.id === "Grocery Store" ? <Image source={require('../assets/2021_Map_Pin_Grocery.png')} style={{height: 60, width:60 }} resizeMode="contain"/> : null}
            {marker.id === "Community Fridge" ? <Image source={require('../assets/2021_Map_Pin_Community_Fridge.png')} style={{height: 60, width:60 }} resizeMode="contain"/> : null}
            {marker.id === "Farmers Market" ? <Image source={require('../assets/2021_Map_Pin_Farmers_Market.png')} style={{height: 60, width:60 }} resizeMode="contain"/> : null}
            {marker.id === "Pantry" ? <Image source={require('../assets/2021_Map_Pin_Pantry.png')} style={{height: 60, width:60 }} resizeMode="contain"/> : null}
            {/* {marker.id === "SamLocation" ? <Image source={require('../assets/sam2.png')} style={{height: 150, width:150 }} resizeMode="contain"/> : null}             */}
            {/* <Callout> */}
            <Callout onPress={() =>  navigation.navigate("Store")}> 
              <Text>{marker.name}</Text>
            </Callout>
          </Marker>
        ))
        }
        

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

        <View style={styles.locateButtonTextContainer}>
        <Text>My Bitmoji</Text>
        {/* <Ionicons name="text" size={24} color="white" /> */}
        </View>

        {/* <View style={styles.friend} onPress={goToFriendLocation}>
          <Image source={require('../assets/friend.png')} style={{height: 50, width:50 }} resizeMode="contain"/> 
        </View> */}
        {currLocation ? (
        <View style={styles.locateButton2Container}>
          <TouchableOpacity
            style={styles.locateButton2}
            onPress={goToFriendLocation}
          >
            {/* <Ionicons
              name={"navigate"}
              size={40}
              color={Colors.snapblue}
              style={{ marginTop: 5, marginLeft: 3 }}
            /> */}
            <FontAwesome5 name="user-friends" size={35} color={Colors.snapblue} style={{ marginTop: 5, marginLeft: 3 }}/>
          </TouchableOpacity>
        </View>
      ) : null}
        <View style={styles.locateButtonText2Container}>
          <Text>Friends</Text>
        {/* <Ionicons name="text" size={24} color="white" /> */}
        </View>
        {/* added nourish dog, search thing, nourish LA,gear, snap places */}
        {/* <View style={styles.snappyContent}>
          <View style={styles.snappyHeader}>
            <View>
              <Image source={require('../assets/Nourish_dog.png')} style={{height: 50, width:50}} />
            </View>
            <View style={{height: 50}}>
              <Image source={require('../assets/Nourish_Stories.png')}style={{height: 200, width: 200, position: 'absolute', top: 0}} resizeMode="contain"/>
            </View>
          </View>
          <View>
            <Image source={require('../assets/Nourish_Map_Layer.png')} style={{height: 100, width:100}} resizeMode="contain"/>
          </View>  
        </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  nourishdog: {
    backgroundColor: colors.snapyellow, 
  },
  locateButton2Container: {
    position: "absolute",
    bottom: 20,
    right: 10,
  },
  locateButton2: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.snapyellow,
  },
  locateButtonText2Container: {
    position: "absolute",
    bottom: 70,
    right: 15,
    backgroundColor: colors.snapyellow,
    // padding: 5,
    // width: 100,
    borderRadius: 50,
  },
  locateButtonTextContainer: {
    position: "absolute",
    bottom: 70,
    left: 15,
    backgroundColor: colors.snapyellow,
    // padding: 5,
    // width: 100,
    borderRadius: 50,
  },
  locateButtonContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
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
  },
  snappyContent: {
    width: 380
  },
  snappyHeader: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'center'
  }
});


import React, { useState, useEffect, useRef } from "react";
import Colors from "../constants/Colors";
import { StyleSheet, View, Text, Image, YellowBox } from "react-native";
import * as Location from "expo-location";
import MapView, { Callout, Marker, Polygon} from "react-native-maps";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/Colors";
import { render } from "react-dom";

const LOS_ANGELES_REGION = {
  latitude: 34.0522,
  longitude: -118.2437,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const bottomNav = () => {
  console.log("Should pop off a bottom navigator");
}

export default function MapScreen() {
  //hard coded markets near me
  state = {
    coordinates: [
      { name: "Food4Less", latitude: 34.04138508288139, longitude: -118.20572644498924 },
      // { name: "2", latitude: 34.04161326513858, longitude: -118.19196488652315 },
      { name: "Northgate Market", latitude: 34.04149176634087, longitude: -118.21305306673202 },
      { name: "Maria's Market", latitude: 34.05386544479957, longitude:  -118.21238943869908 },
      { name: "OK Market", latitude: 34.048898025826524, longitude: -118.20207774216696 },
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

  return (
    <>
      <MapView
        ref={mapView}
        style={styles.map}
        initialRegion={LOS_ANGELES_REGION}
      >
      
      {/* adding polygon for shaded area of close markets */}
      <Polygon
        coordinates={this.state.coordinates}
        fillColor={'rgba(100, 200, 200, 0.3)'}
        strokeWidth={1}
      />

        {currLocation ? (
          <Marker
            coordinate={currLocation}
            title={"Current Location"}
            description={"You are here!"}
            // onPress={alert("Popping a navigation from the bottom!")}
          >
            <Callout onPress={bottomNav}> 
              {/* {console.log('hEY, SuP')} */}
              <View>
                {/* file path weird */}
                {/* <Image source={require('../assets/sam.png')} /> */}
                <Text>Me</Text>
              </View>
            </Callout>

            {/* <Image source={'../assets/sam.png'} /> */}

          </Marker>
        ) : null}
        
        {this.state.coordinates.map(marker => (
          <Marker
          key={marker.name}
          coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
          // image={require('../assets/2021_Map_Pin_Grocery.png')} 
          // title={marker.name}
          >
            <Image source={require('../assets/2021_Map_Pin_Grocery.png')} style={{height: 100, width:100 }} resizeMode="contain"/>
            <Callout>
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
});

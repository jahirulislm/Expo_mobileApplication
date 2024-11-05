import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Details,
  OnBoarding,
  Search,
  Recommend,
  PlaceDetails,
  Hotel_Detail,
  Hotel_List,
  HotelSearch,
  SelectRoom,
  Payments,
  Settings,
  PersonalInformation,
} from "./index";

import BottomTap from "./components/navigation/BottomTap";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    medium: require("./assets/fonts/medium.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  // SplashScreen.preventAutoHideAsync();
  // setTimeout(SplashScreen.hideAsync, 200);

  // const handleAppLoadingComplete = useCallback(() => {
  //   SplashScreen.hideAsync();
  // }, []);

  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="OnBoarding"
            component={OnBoarding}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Bottom"
            component={BottomTap}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Recommended"
            component={Recommend}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PlaceDetails"
            component={PlaceDetails}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="HotelDetails"
            component={Hotel_Detail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HotelList"
            component={Hotel_List}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HotelSeach"
            component={HotelSearch}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SelectRoom"
            component={SelectRoom}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Payment"
            component={Payments}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PersonalInformation"
            component={PersonalInformation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

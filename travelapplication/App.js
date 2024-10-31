import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Details, OnBoarding, Search } from "./index";
import Recommend from "./components/screen/details/Recommend";
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
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

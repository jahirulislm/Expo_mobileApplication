import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingScreen from "../onboarding/OnboardingScreen";
import OnboardingScreenTwo from "../onboarding/OnboardingScreenTwo";
import OnboardingScreenThree from "../onboarding/OnboardingScreenThree";
import LoginScreen from "../screen/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnboardingScreenTwo"
        component={OnboardingScreenTwo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnboardingScreenThree"
        component={OnboardingScreenThree}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

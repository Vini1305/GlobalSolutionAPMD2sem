import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Radar from './screens/Radar';
import Services from './screens/Services';
import Home from './screens/Home';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarIcon: () => (
              <MaterialCommunityIcons name="home" size={24} color="black" />
            )}}/>
        <Tab.Screen name="Radar" component={Radar} 
        options={{
          tabBarIcon: () => (
              <MaterialCommunityIcons name="drone" size={24} color="black" />
            )}}/>
        <Tab.Screen name="Services" component={Services} 
        options={{
          tabBarIcon: () => (
              <MaterialCommunityIcons name="cards-variant" size={24} color="black" />
            )}}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

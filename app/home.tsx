import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FontAwesome6,
  Foundation,
  Ionicons,
  Octicons,
} from "@expo/vector-icons";
import Home from "../components/BottomTabsHome";
import Challenge from "../components/BottomTabsChallenge";
import Community from "../components/BottomTabsCommunity";
import Profile from "../components/BottomTabsProfile";

const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#A21942",
        tabBarStyle: {
          height: 70,
        },
        tabBarItemStyle: {
          margin: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Foundation name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Challenge"
        component={Challenge}
        options={{
          tabBarLabel: "Challenge",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="stats-chart" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarLabel: "Community",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="users" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Octicons name="person-fill" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

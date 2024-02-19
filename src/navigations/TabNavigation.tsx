import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import { AddPostScreen, ExploreScreen, HomeScreen, ProfileScreen } from '@/screens/main';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function TabNavigations() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 12, marginBottom: 3 }}>Home</Text>
          ),
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 12, marginBottom: 3 }}>Explore</Text>
          ),
          tabBarIcon: ({ color, size }) => <Ionicons name="search" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="addpost"
        component={AddPostScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 12, marginBottom: 3 }}>Add Post</Text>
          ),
          tabBarIcon: ({ color, size }) => <Ionicons name="camera" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 12, marginBottom: 3 }}>Profile</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

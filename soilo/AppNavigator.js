import React from 'react';
import { Icon, Touchable, useTheme } from '@draftbit/ui';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { systemWeights } from 'react-native-typography';
import LinkingConfiguration from './LinkingConfiguration';
import CaptureScreen from './screens/CaptureScreen';
import DashboardScreen from './screens/DashboardScreen';
import DocumentationScreen from './screens/DocumentationScreen';
import HistoryScreen from './screens/HistoryScreen';
import LoginScreen from './screens/LoginScreen';
import MapScreen from './screens/MapScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import ReportScreen from './screens/ReportScreen';
import SplashScreen from './screens/SplashScreen';
import palettes from './themes/palettes';
import Breakpoints from './utils/Breakpoints';
import useWindowDimensions from './utils/useWindowDimensions';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DefaultAndroidBackIcon({ tintColor }) {
  return (
    <View style={[styles.headerContainer, styles.headerContainerLeft]}>
      <Icon
        name="AntDesign/arrowleft"
        size={24}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </View>
  );
}

function DefaultDrawerIcon({ tintColor, navigation }) {
  return (
    <Touchable
      onPress={() => navigation.toggleDrawer()}
      style={[styles.headerContainer, styles.headerContainerLeft]}
    >
      <Icon
        name="EvilIcons/navicon"
        size={27}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </Touchable>
  );
}

function BottomTabNavigator() {
  const theme = useTheme();

  const tabBarOrDrawerIcons = {
    MapScreen: 'Feather/map-pin',
    DocumentationScreen: 'Entypo/documents',
    ReportScreen: 'Foundation/page-export-doc',
    HistoryScreen: 'Octicons/history',
    CaptureScreen: 'Feather/camera',
    DashboardScreen: 'FontAwesome/dashboard',
    ProfileScreen: 'MaterialCommunityIcons/account-circle-outline',
  };

  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: false,
        headerStyle: {
          backgroundColor: theme.colors.background.base,
          borderBottomColor: 'transparent',
        },
        headerTintColor: theme.colors.text.strong,
        headerTitleStyle: theme.typography.headline5,
        tabBarActiveTintColor: theme.colors.branding.primary,
        tabBarInactiveTintColor: theme.colors.text.light,
        tabBarLabelStyle: theme.typography.caption,
        tabBarStyle: {
          backgroundColor: theme.colors.background.base,
          borderTopColor: 'transparent',
        },
      })}
    >
      <Tab.Screen
        name="MapScreen"
        component={MapScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Feather/map-pin"
              size={25}
              color={
                focused
                  ? theme.colors.branding.primary
                  : theme.colors.text.light
              }
            />
          ),
          title: 'Map',
        })}
      />
      <Tab.Screen
        name="DocumentationScreen"
        component={DocumentationScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Entypo/documents"
              size={25}
              color={
                focused
                  ? theme.colors.branding.primary
                  : theme.colors.text.light
              }
            />
          ),
          title: 'Documentation',
        })}
      />
      <Tab.Screen
        name="ReportScreen"
        component={ReportScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Foundation/page-export-doc"
              size={25}
              color={
                focused
                  ? theme.colors.branding.primary
                  : theme.colors.text.light
              }
            />
          ),
          title: 'Report',
        })}
      />
      <Tab.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Octicons/history"
              size={25}
              color={
                focused
                  ? theme.colors.branding.primary
                  : theme.colors.text.light
              }
            />
          ),
          title: 'History',
        })}
      />
      <Tab.Screen
        name="CaptureScreen"
        component={CaptureScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Feather/camera"
              size={25}
              color={
                focused
                  ? theme.colors.branding.primary
                  : theme.colors.text.light
              }
            />
          ),
          title: 'Capture',
        })}
      />
      <Tab.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="FontAwesome/dashboard"
              size={25}
              color={
                focused
                  ? theme.colors.branding.primary
                  : theme.colors.text.light
              }
            />
          ),
          title: ' Dashboard',
        })}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialCommunityIcons/account-circle-outline"
              size={25}
              color={
                focused
                  ? theme.colors.branding.primary
                  : theme.colors.text.light
              }
            />
          ),
          title: 'Profile',
        })}
      />
    </Tab.Navigator>
  );
}

export default function RootAppNavigator() {
  const theme = useTheme();

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: theme.colors.background.base,
        },
      }}
      linking={LinkingConfiguration}
    >
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          cardStyle: { flex: 1 },
          headerBackImage:
            Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
          headerStyle: {
            backgroundColor: theme.colors.background.base,
            borderBottomColor: 'transparent',
          },
          headerTintColor: theme.colors.text.strong,
          headerTitleStyle: theme.typography.headline5,
        })}
      >
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={({ navigation }) => ({
            title: 'Login',
          })}
        />
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={({ navigation }) => ({
            title: 'Registration',
          })}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={({ navigation }) => ({
            title: 'Splash',
          })}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={({ navigation }) => ({
            title: 'Bottom Tab Navigator',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({ ios: { marginLeft: 8 } }),
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({ ios: { marginRight: 6 } }),
});

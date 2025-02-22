import React from 'react';
import { withTheme } from '@draftbit/ui';
import { View } from 'react-native';
import palettes from '../themes/palettes';
import useWindowDimensions from '../utils/useWindowDimensions';

const defaultProps = {
  currentRoute: { icon: 'Entypo/home', name: 'RouteOne', label: 'Route 1' },
  routes: [
    { icon: 'Entypo/home', name: 'RouteOne', label: 'Route 1' },
    { icon: 'Entypo/home', name: 'RouteTwo', label: 'Route 2' },
    { icon: 'Entypo/home', name: 'RouteThree', label: 'Route 3' },
  ],
};

const NavBarBottonBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return <View />;
};

export default withTheme(NavBarBottonBlock);

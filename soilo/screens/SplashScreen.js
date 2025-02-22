import React from 'react';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { Text } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const SplashScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: 'rgb(255, 255, 255)' },
        dimensions.width
      )}
    >
      <Text
        accessible={true}
        selectable={false}
        {...GlobalStyles.TextStyles(theme)['Text'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.TextStyles(theme)['Text'].style,
            theme.typography.body1,
            {
              alignSelf: 'center',
              fontFamily: 'ADLaMDisplay_400Regular',
              fontSize: 38,
              marginBottom: '0%',
              marginTop: '95%',
              textAlign: 'center',
              textDecorationLine: 'none',
            }
          ),
          dimensions.width
        )}
      >
        {'SOILO'}
      </Text>
    </ScreenContainer>
  );
};

export default withTheme(SplashScreen);

import React from 'react';
import { Button, ExpoImage, ScreenContainer, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const CaptureScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* reg title */}
      <Text
        accessible={true}
        selectable={false}
        {...GlobalStyles.TextStyles(theme)['Text'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.TextStyles(theme)['Text'].style,
            theme.typography.body1,
            {
              alignSelf: 'auto',
              fontFamily: 'ADLaMDisplay_400Regular',
              fontSize: 36,
              marginTop: '10%',
              textAlign: 'center',
            }
          ),
          dimensions.width
        )}
      >
        {'CAPTURE'}
      </Text>

      <View
        style={StyleSheet.applyWidth(
          { alignContent: 'center', alignItems: 'center', height: '50%' },
          dimensions.width
        )}
      >
        <ExpoImage
          allowDownscaling={true}
          cachePolicy={'disk'}
          contentPosition={'center'}
          resizeMode={'cover'}
          source={imageSource(
            'https://static.draftbit.com/images/placeholder-image.png'
          )}
          transitionDuration={300}
          transitionEffect={'cross-dissolve'}
          transitionTiming={'ease-in-out'}
          {...GlobalStyles.ExpoImageStyles(theme)['Image'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ExpoImageStyles(theme)['Image'].style,
              { height: '90%', marginTop: 15, width: '80%' }
            ),
            dimensions.width
          )}
        />
      </View>
      <Button
        accessible={true}
        iconPosition={'left'}
        {...GlobalStyles.ButtonStyles(theme)['Button'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ButtonStyles(theme)['Button'].style,
            theme.typography.button,
            {
              borderRadius: 20,
              fontSize: 22,
              height: 50,
              margin: '10%',
              width: '80%',
            }
          ),
          dimensions.width
        )}
        title={'Capture'}
      />
      {/* Button 3 */}
      <Button
        accessible={true}
        iconPosition={'left'}
        {...GlobalStyles.ButtonStyles(theme)['Button'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ButtonStyles(theme)['Button'].style,
            theme.typography.button,
            {
              borderRadius: 20,
              fontFamily: 'ADLaMDisplay_400Regular',
              fontSize: 22,
              height: 50,
              margin: '10%',
              width: '80%',
            }
          ),
          dimensions.width
        )}
        title={'Upload'}
      />
    </ScreenContainer>
  );
};

export default withTheme(CaptureScreen);

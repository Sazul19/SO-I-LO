import React from 'react';
import { ExpoImage, withTheme } from '@draftbit/ui';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const LogoBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ExpoImage
      allowDownscaling={true}
      cachePolicy={'disk'}
      contentPosition={'center'}
      resizeMode={'cover'}
      transitionDuration={300}
      transitionEffect={'cross-dissolve'}
      transitionTiming={'ease-in-out'}
      {...GlobalStyles.ExpoImageStyles(theme)['Image'].props}
      source={imageSource(Images['soilologo'])}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(GlobalStyles.ExpoImageStyles(theme)['Image'].style, {
          borderRadius: 100,
          borderTopWidth: '0%',
          height: 150,
          marginLeft: '30%',
          marginTop: '10%',
          width: 150,
        }),
        dimensions.width
      )}
    />
  );
};

export default withTheme(LogoBlock);

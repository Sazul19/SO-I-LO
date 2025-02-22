import React from 'react';
import { withTheme } from '@draftbit/ui';
import { Text } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const RegTitleBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
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
      {'REGISTRATION'}
    </Text>
  );
};

export default withTheme(RegTitleBlock);

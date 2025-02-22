import React from 'react';
import { Button, withTheme } from '@draftbit/ui';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const SingUpButtonBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <Button
      accessible={true}
      iconPosition={'left'}
      {...GlobalStyles.ButtonStyles(theme)['Button'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(
          GlobalStyles.ButtonStyles(theme)['Button'].style,
          theme.typography.button,
          {
            backgroundColor: 'rgb(0, 0, 0)',
            borderRadius: 20,
            marginLeft: '10%',
            marginTop: '10%',
            width: '80%',
          }
        ),
        dimensions.width
      )}
      title={'Sign Up'}
    />
  );
};

export default withTheme(SingUpButtonBlock);

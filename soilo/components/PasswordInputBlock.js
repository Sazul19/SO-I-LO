import React from 'react';
import { TextInput, withTheme } from '@draftbit/ui';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const PasswordInputBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [textInput3Value, setTextInput3Value] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <TextInput
      autoCapitalize={'none'}
      autoCorrect={true}
      changeTextDelay={500}
      onChangeText={newTextInput3Value => {
        const textInputValue = newTextInput3Value;
        try {
          setTextInput3Value(newTextInput3Value);
        } catch (err) {
          console.error(err);
        }
      }}
      webShowOutline={true}
      {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
      placeholder={'Password'}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(
          GlobalStyles.TextInputStyles(theme)['Text Input'].style,
          theme.typography.body2,
          {
            alignSelf: 'center',
            borderColor: 'rgb(0, 0, 0)',
            color: 'rgb(0, 0, 0)',
            fontFamily: 'ADLaMDisplay_400Regular',
            marginTop: '8%',
            width: '80%',
          }
        ),
        dimensions.width
      )}
      value={textInput3Value}
    />
  );
};

export default withTheme(PasswordInputBlock);

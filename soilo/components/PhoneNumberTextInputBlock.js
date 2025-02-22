import React from 'react';
import { TextInput, withTheme } from '@draftbit/ui';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const PhoneNumberTextInputBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [textInput2Value, setTextInput2Value] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <TextInput
      autoCapitalize={'none'}
      autoCorrect={true}
      changeTextDelay={500}
      onChangeText={newTextInput2Value => {
        const textInputValue = newTextInput2Value;
        try {
          setTextInput2Value(newTextInput2Value);
        } catch (err) {
          console.error(err);
        }
      }}
      webShowOutline={true}
      {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
      placeholder={'Phone Number'}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(
          GlobalStyles.TextInputStyles(theme)['Text Input'].style,
          theme.typography.body2,
          {
            alignSelf: 'center',
            borderColor: 'rgb(0, 0, 0)',
            fontFamily: 'ADLaMDisplay_400Regular',
            marginTop: '8%',
            width: '80%',
          }
        ),
        dimensions.width
      )}
      value={textInput2Value}
    />
  );
};

export default withTheme(PhoneNumberTextInputBlock);

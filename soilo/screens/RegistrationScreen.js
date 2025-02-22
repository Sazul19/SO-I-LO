import React from 'react';
import {
  Button,
  ExpoImage,
  ScreenContainer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const RegistrationScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [textInput2Value, setTextInput2Value] = React.useState('');
  const [textInput3Value, setTextInput3Value] = React.useState('');
  const [textInput4Value, setTextInput4Value] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
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
          StyleSheet.compose(
            GlobalStyles.ExpoImageStyles(theme)['Image'].style,
            {
              borderRadius: 100,
              borderTopWidth: '0%',
              height: 150,
              marginLeft: '30%',
              marginTop: '10%',
              width: 150,
            }
          ),
          dimensions.width
        )}
      />
      <View>
        <TextInput
          autoCapitalize={'none'}
          autoCorrect={true}
          changeTextDelay={500}
          onChangeText={newTextInputValue => {
            const textInputValue = newTextInputValue;
            try {
              setTextInputValue(newTextInputValue);
            } catch (err) {
              console.error(err);
            }
          }}
          webShowOutline={true}
          {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
          placeholder={'Full Name'}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextInputStyles(theme)['Text Input'].style,
              theme.typography.body2,
              {
                alignSelf: 'center',
                borderColor: 'rgb(0, 0, 0)',
                fontFamily: 'ADLaMDisplay_400Regular',
                marginTop: '12%',
                width: '80%',
              }
            ),
            dimensions.width
          )}
          value={textInputValue}
        />
        {/* Text Input 2 */}
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
        {/* Text Input 3 */}
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
        {/* Text Input 4 */}
        <TextInput
          autoCapitalize={'none'}
          autoCorrect={true}
          changeTextDelay={500}
          onChangeText={newTextInput4Value => {
            const textInputValue = newTextInput4Value;
            try {
              setTextInput4Value(newTextInput4Value);
            } catch (err) {
              console.error(err);
            }
          }}
          webShowOutline={true}
          {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
          placeholder={'Re-enter Password'}
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
          value={textInput4Value}
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
      {/* Button 2 */}
      <Button
        accessible={true}
        iconPosition={'left'}
        onPress={() => {
          try {
            navigation.navigate('LoginScreen');
          } catch (err) {
            console.error(err);
          }
        }}
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
        title={'Login'}
      />
    </ScreenContainer>
  );
};

export default withTheme(RegistrationScreen);

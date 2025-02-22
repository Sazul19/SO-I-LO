import React from 'react';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Text } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import LogoBlock from '../components/LogoBlock';
import PasswordInputBlock from '../components/PasswordInputBlock';
import PhoneNumberTextInputBlock from '../components/PhoneNumberTextInputBlock';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const LoginScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [textInputValue, setTextInputValue] = React.useState('');
  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      navigation.navigate('BottomTabNavigator', { screen: 'DashboardScreen' });
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

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
        {'LOGIN'}
      </Text>
      <LogoBlock />
      <PhoneNumberTextInputBlock />
      <PasswordInputBlock />
      {/* sing up button */}
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
        title={'Login'}
      />
      {/* sing up button 2 */}
      <Button
        accessible={true}
        iconPosition={'left'}
        onPress={() => {
          try {
            navigation.navigate('RegistrationScreen');
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
        title={'Sing Up'}
      />
    </ScreenContainer>
  );
};

export default withTheme(LoginScreen);

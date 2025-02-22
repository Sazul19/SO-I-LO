import React from 'react';
import {
  Button,
  Icon,
  ScreenContainer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const DocumentationScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

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
              marginBottom: 45,
              marginTop: '10%',
              textAlign: 'center',
              textTransform: 'uppercase',
            }
          ),
          dimensions.width
        )}
      >
        {'Documentation'}
      </Text>

      <View
        style={StyleSheet.applyWidth(
          {
            alignContent: 'center',
            marginBottom: 40,
            marginLeft: 15,
            marginRight: 15,
            marginTop: 18,
            paddingTop: 25,
          },
          dimensions.width
        )}
      >
        <Button
          accessible={true}
          iconPosition={'left'}
          {...GlobalStyles.ButtonStyles(theme)['Button'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Button'].style,
              theme.typography.button,
              {
                borderRadius: 30,
                fontFamily: 'ADLaMDisplay_400Regular',
                fontSize: 24,
                height: 60,
              }
            ),
            dimensions.width
          )}
          title={'Download as PDF'}
        />
        {/* Button 2 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          {...GlobalStyles.ButtonStyles(theme)['Button'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Button'].style,
              theme.typography.button,
              {
                borderRadius: 30,
                fontSize: 24,
                height: 60,
                marginBottom: 25,
                marginTop: 15,
              }
            ),
            dimensions.width
          )}
          title={'Share'}
        />
      </View>
      {/* View 2 */}
      <View
        style={StyleSheet.applyWidth(
          { marginLeft: 10, marginRight: 10, marginTop: 35 },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row' },
            dimensions.width
          )}
        >
          <Icon size={24} name={'AntDesign/infocirlceo'} />
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Text'].style,
                theme.typography.body1,
                { marginLeft: 15 }
              ),
              dimensions.width
            )}
          >
            {'Add Feedback'}
          </Text>
        </View>
        {/* View 2 */}
        <View>
          <TextInput
            autoCorrect={true}
            changeTextDelay={500}
            multiline={true}
            numberOfLines={4}
            onChangeText={newTextAreaValue => {
              const textInputValue = newTextAreaValue;
              try {
                setTextAreaValue(newTextAreaValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            }
            textAlignVertical={'top'}
            webShowOutline={true}
            {...GlobalStyles.TextInputStyles(theme)['Text Area'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Area'].style,
                theme.typography.body2,
                { marginBottom: 25, marginTop: 5 }
              ),
              dimensions.width
            )}
            value={textAreaValue}
          />
        </View>
        {/* View 3 */}
        <View>
          <Button
            accessible={true}
            iconPosition={'left'}
            {...GlobalStyles.ButtonStyles(theme)['Button'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['Button'].style,
                theme.typography.button,
                {
                  borderRadius: 30,
                  fontFamily: 'ADLaMDisplay_400Regular',
                  fontSize: 26,
                  height: 60,
                }
              ),
              dimensions.width
            )}
            title={'Send Feedback'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(DocumentationScreen);

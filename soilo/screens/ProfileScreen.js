import React from 'react';
import { ExpoImage, ScreenContainer, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const ProfileScreen = props => {
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
        {' PROFILE'}
      </Text>
      {/* logo */}
      <ExpoImage
        allowDownscaling={true}
        cachePolicy={'disk'}
        contentPosition={'center'}
        resizeMode={'cover'}
        transitionDuration={300}
        transitionEffect={'cross-dissolve'}
        transitionTiming={'ease-in-out'}
        {...GlobalStyles.ExpoImageStyles(theme)['Image'].props}
        source={imageSource(Images['profileicon'])}
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
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: 'rgb(30, 29, 29)',
            borderColor: 'rgb(0, 0, 0)',
            borderRadius: 10,
            height: '48%',
            margin: '10%',
            marginTop: 15,
            padding: 10,
            paddingBottom: 10,
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              borderRadius: 15,
              flexDirection: 'row',
              height: '10%',
              marginBottom: '5%',
            },
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
                { alignSelf: 'center', color: 'rgb(253, 253, 253)', flex: 1 }
              ),
              dimensions.width
            )}
          >
            {'Full Name'}
          </Text>
          {/* Text 2 */}
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Text'].style,
                theme.typography.body1,
                { flex: 2 }
              ),
              dimensions.width
            )}
          >
            {'Lorem ipsum dolor sit amet'}
          </Text>
        </View>
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            {
              borderRadius: 15,
              flexDirection: 'row',
              height: '10%',
              marginBottom: '5%',
            },
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
                { alignSelf: 'center', color: 'rgb(245, 245, 245)', flex: 1 }
              ),
              dimensions.width
            )}
          >
            {'Phone Number'}
          </Text>
          {/* Text 2 */}
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Text'].style,
                theme.typography.body1,
                { flex: 2 }
              ),
              dimensions.width
            )}
          >
            {'Lorem ipsum dolor sit amet'}
          </Text>
        </View>
        {/* View 3 */}
        <View
          style={StyleSheet.applyWidth(
            {
              borderRadius: 15,
              flexDirection: 'row',
              height: '10%',
              marginBottom: '5%',
            },
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
                { alignSelf: 'center', color: 'rgb(255, 254, 254)', flex: 1 }
              ),
              dimensions.width
            )}
          >
            {'Location'}
          </Text>
          {/* Text 2 */}
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Text'].style,
                theme.typography.body1,
                { flex: 2 }
              ),
              dimensions.width
            )}
          >
            {'Lorem ipsum dolor sit amet'}
          </Text>
        </View>
        {/* View 4 */}
        <View
          style={StyleSheet.applyWidth(
            { borderRadius: 15, flexDirection: 'row', height: '10%' },
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
                { alignSelf: 'center', color: 'rgb(245, 244, 244)', flex: 1 }
              ),
              dimensions.width
            )}
          >
            {'Something'}
          </Text>
          {/* Text 2 */}
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Text'].style,
                theme.typography.body1,
                { flex: 2 }
              ),
              dimensions.width
            )}
          >
            {'Lorem ipsum dolor sit amet'}
          </Text>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ProfileScreen);

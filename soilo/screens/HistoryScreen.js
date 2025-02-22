import React from 'react';
import { ExpoImage, Icon, ScreenContainer, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const HistoryScreen = props => {
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
        {'HISTORY'}
      </Text>

      <View
        style={StyleSheet.applyWidth(
          {
            borderRadius: 30,
            flexDirection: 'row',
            marginBottom: 10,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 15,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth({ marginRight: 0 }, dimensions.width)}
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
                { borderRadius: 30 }
              ),
              dimensions.width
            )}
          />
        </View>
        {/* View 2 */}
        <View>
          <View style={StyleSheet.applyWidth({ flex: 2 }, dimensions.width)}>
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  theme.typography.body1,
                  {
                    flex: 2,
                    fontFamily: 'ADLaMDisplay_400Regular',
                    fontSize: 20,
                    marginLeft: 10,
                  }
                ),
                dimensions.width
              )}
            >
              {'Soil type - 122'}
            </Text>
          </View>
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                flex: 1,
                flexDirection: 'row',
                marginBottom: 10,
                marginLeft: 10,
              },
              dimensions.width
            )}
          >
            <Icon size={24} name={'Feather/info'} />
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  theme.typography.body1,
                  { fontFamily: 'ADLaMDisplay_400Regular', marginLeft: 10 }
                ),
                dimensions.width
              )}
            >
              {'Info'}
            </Text>
          </View>
          {/* View 3 */}
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, flexDirection: 'row', marginLeft: 10 },
              dimensions.width
            )}
          >
            <Icon size={24} name={'Entypo/location-pin'} />
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  theme.typography.body1,
                  { fontFamily: 'ADLaMDisplay_400Regular', marginLeft: 10 }
                ),
                dimensions.width
              )}
            >
              {'Location'}
            </Text>
          </View>
        </View>
        {/* View 3 */}
        <View
          style={StyleSheet.applyWidth(
            { alignContent: 'space-around', flexDirection: 'row' },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row' },
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
                  {
                    alignSelf: 'center',
                    fontFamily: 'ADLaMDisplay_400Regular',
                    marginLeft: 25,
                    marginRight: 10,
                  }
                ),
                dimensions.width
              )}
            >
              {'Activo'}
            </Text>
            <Icon
              color={theme.colors.foreground.success}
              name={'Entypo/cycle'}
              size={28}
            />
          </View>
        </View>
      </View>
      {/* View 5 */}
      <View
        style={StyleSheet.applyWidth(
          {
            borderRadius: 30,
            flexDirection: 'row',
            marginBottom: 10,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 15,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth({ marginRight: 0 }, dimensions.width)}
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
                { borderRadius: 30 }
              ),
              dimensions.width
            )}
          />
        </View>
        {/* View 2 */}
        <View>
          <View style={StyleSheet.applyWidth({ flex: 2 }, dimensions.width)}>
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  theme.typography.body1,
                  {
                    flex: 2,
                    fontFamily: 'ADLaMDisplay_400Regular',
                    fontSize: 20,
                    marginLeft: 10,
                  }
                ),
                dimensions.width
              )}
            >
              {'Soil type - 122'}
            </Text>
          </View>
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                flex: 1,
                flexDirection: 'row',
                marginBottom: 10,
                marginLeft: 10,
              },
              dimensions.width
            )}
          >
            <Icon size={24} name={'Feather/info'} />
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  theme.typography.body1,
                  { fontFamily: 'ADLaMDisplay_400Regular', marginLeft: 10 }
                ),
                dimensions.width
              )}
            >
              {'Info'}
            </Text>
          </View>
          {/* View 3 */}
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, flexDirection: 'row', marginLeft: 10 },
              dimensions.width
            )}
          >
            <Icon size={24} name={'Entypo/location-pin'} />
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  theme.typography.body1,
                  { fontFamily: 'ADLaMDisplay_400Regular', marginLeft: 10 }
                ),
                dimensions.width
              )}
            >
              {'Location'}
            </Text>
          </View>
        </View>
        {/* View 3 */}
        <View
          style={StyleSheet.applyWidth(
            { alignContent: 'space-around', flexDirection: 'row' },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row' },
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
                  {
                    alignSelf: 'center',
                    fontFamily: 'ADLaMDisplay_400Regular',
                    marginLeft: 25,
                    marginRight: 10,
                  }
                ),
                dimensions.width
              )}
            >
              {'Activo'}
            </Text>
            <Icon
              color={theme.colors.foreground.success}
              name={'Entypo/cycle'}
              size={28}
            />
          </View>
        </View>
      </View>
      {/* View 4 */}
      <View
        style={StyleSheet.applyWidth(
          {
            borderRadius: 30,
            flexDirection: 'row',
            marginBottom: 10,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 15,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth({ marginRight: 0 }, dimensions.width)}
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
                { borderRadius: 30 }
              ),
              dimensions.width
            )}
          />
        </View>
        {/* View 2 */}
        <View>
          <View style={StyleSheet.applyWidth({ flex: 2 }, dimensions.width)}>
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  theme.typography.body1,
                  {
                    flex: 2,
                    fontFamily: 'ADLaMDisplay_400Regular',
                    fontSize: 20,
                    marginLeft: 10,
                  }
                ),
                dimensions.width
              )}
            >
              {'Soil type - 122'}
            </Text>
          </View>
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                flex: 1,
                flexDirection: 'row',
                marginBottom: 10,
                marginLeft: 10,
              },
              dimensions.width
            )}
          >
            <Icon size={24} name={'Feather/info'} />
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  theme.typography.body1,
                  { fontFamily: 'ADLaMDisplay_400Regular', marginLeft: 10 }
                ),
                dimensions.width
              )}
            >
              {'Info'}
            </Text>
          </View>
          {/* View 3 */}
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, flexDirection: 'row', marginLeft: 10 },
              dimensions.width
            )}
          >
            <Icon size={24} name={'Entypo/location-pin'} />
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  theme.typography.body1,
                  { fontFamily: 'ADLaMDisplay_400Regular', marginLeft: 10 }
                ),
                dimensions.width
              )}
            >
              {'Location'}
            </Text>
          </View>
        </View>
        {/* View 3 */}
        <View
          style={StyleSheet.applyWidth(
            { alignContent: 'space-around', flexDirection: 'row' },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row' },
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
                  {
                    alignSelf: 'center',
                    fontFamily: 'ADLaMDisplay_400Regular',
                    marginLeft: 25,
                    marginRight: 10,
                  }
                ),
                dimensions.width
              )}
            >
              {'Activo'}
            </Text>
            <Icon
              color={theme.colors.foreground.success}
              name={'Entypo/cycle'}
              size={28}
            />
          </View>
        </View>
      </View>
      {/* View 3 */}
      <View
        style={StyleSheet.applyWidth(
          {
            borderRadius: 30,
            flexDirection: 'row',
            marginBottom: 10,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 15,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth({ marginRight: 0 }, dimensions.width)}
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
                { borderRadius: 30 }
              ),
              dimensions.width
            )}
          />
        </View>
        {/* View 2 */}
        <View>
          <View style={StyleSheet.applyWidth({ flex: 2 }, dimensions.width)}>
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  theme.typography.body1,
                  {
                    flex: 2,
                    fontFamily: 'ADLaMDisplay_400Regular',
                    fontSize: 20,
                    marginLeft: 10,
                  }
                ),
                dimensions.width
              )}
            >
              {'Soil type - 122'}
            </Text>
          </View>
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                flex: 1,
                flexDirection: 'row',
                marginBottom: 10,
                marginLeft: 10,
              },
              dimensions.width
            )}
          >
            <Icon size={24} name={'Feather/info'} />
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  theme.typography.body1,
                  { fontFamily: 'ADLaMDisplay_400Regular', marginLeft: 10 }
                ),
                dimensions.width
              )}
            >
              {'Info'}
            </Text>
          </View>
          {/* View 3 */}
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, flexDirection: 'row', marginLeft: 10 },
              dimensions.width
            )}
          >
            <Icon size={24} name={'Entypo/location-pin'} />
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  theme.typography.body1,
                  { fontFamily: 'ADLaMDisplay_400Regular', marginLeft: 10 }
                ),
                dimensions.width
              )}
            >
              {'Location'}
            </Text>
          </View>
        </View>
        {/* View 3 */}
        <View
          style={StyleSheet.applyWidth(
            { alignContent: 'space-around', flexDirection: 'row' },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row' },
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
                  {
                    alignSelf: 'center',
                    fontFamily: 'ADLaMDisplay_400Regular',
                    marginLeft: 25,
                    marginRight: 10,
                  }
                ),
                dimensions.width
              )}
            >
              {'Activo'}
            </Text>
            <Icon
              color={theme.colors.foreground.success}
              name={'Entypo/cycle'}
              size={28}
            />
          </View>
        </View>
      </View>
      {/* View 2 */}
      <View
        style={StyleSheet.applyWidth(
          {
            borderRadius: 30,
            flexDirection: 'row',
            marginBottom: 10,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 15,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth({ marginRight: 0 }, dimensions.width)}
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
                { borderRadius: 30 }
              ),
              dimensions.width
            )}
          />
        </View>
        {/* View 2 */}
        <View>
          <View style={StyleSheet.applyWidth({ flex: 2 }, dimensions.width)}>
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  theme.typography.body1,
                  {
                    flex: 2,
                    fontFamily: 'ADLaMDisplay_400Regular',
                    fontSize: 20,
                    marginLeft: 10,
                  }
                ),
                dimensions.width
              )}
            >
              {'Soil type - 122'}
            </Text>
          </View>
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                flex: 1,
                flexDirection: 'row',
                marginBottom: 10,
                marginLeft: 10,
              },
              dimensions.width
            )}
          >
            <Icon size={24} name={'Feather/info'} />
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  theme.typography.body1,
                  { fontFamily: 'ADLaMDisplay_400Regular', marginLeft: 10 }
                ),
                dimensions.width
              )}
            >
              {'Info'}
            </Text>
          </View>
          {/* View 3 */}
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, flexDirection: 'row', marginLeft: 10 },
              dimensions.width
            )}
          >
            <Icon size={24} name={'Entypo/location-pin'} />
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  theme.typography.body1,
                  { fontFamily: 'ADLaMDisplay_400Regular', marginLeft: 10 }
                ),
                dimensions.width
              )}
            >
              {'Location'}
            </Text>
          </View>
        </View>
        {/* View 3 */}
        <View
          style={StyleSheet.applyWidth(
            { alignContent: 'space-around', flexDirection: 'row' },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row' },
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
                  {
                    alignSelf: 'center',
                    fontFamily: 'ADLaMDisplay_400Regular',
                    marginLeft: 25,
                    marginRight: 10,
                  }
                ),
                dimensions.width
              )}
            >
              {'Activo'}
            </Text>
            <Icon
              color={theme.colors.foreground.success}
              name={'Entypo/cycle'}
              size={28}
            />
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(HistoryScreen);

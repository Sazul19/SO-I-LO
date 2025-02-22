import React from 'react';
import { Icon, LinearProgress, ScreenContainer, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const DashboardScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <View
        style={StyleSheet.applyWidth(
          { flexDirection: 'row', marginTop: '10%' },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', justifyContent: 'center' },
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors.text.strong}
            name={'Ionicons/partly-sunny'}
            size={50}
            style={StyleSheet.applyWidth(
              { height: 60, marginLeft: 5, marginRight: 5, width: 60 },
              dimensions.width
            )}
          />
        </View>
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row' },
            dimensions.width
          )}
        >
          <View>
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: 'rgb(18, 17, 17)',
                  borderRadius: 30,
                  height: 40,
                  justifyContent: 'center',
                  paddingRight: 5,
                  width: 150,
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
                    {
                      alignSelf: 'center',
                      color: 'rgb(242, 235, 235)',
                      fontFamily: 'ADLaMDisplay_400Regular',
                      fontSize: 22,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'24°C'}
              </Text>
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: 'rgb(18, 0, 0)',
                  borderRadius: 30,
                  height: 40,
                  justifyContent: 'center',
                  marginTop: 5,
                  width: 150,
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
                    {
                      color: 'rgb(244, 239, 239)',
                      fontFamily: 'ADLaMDisplay_400Regular',
                      fontSize: 22,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'6 km/h'}
              </Text>
            </View>
          </View>
          {/* View 2 */}
          <View>
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: 'rgb(18, 1, 1)',
                  borderRadius: 30,
                  height: 40,
                  justifyContent: 'center',
                  marginLeft: 5,
                  width: 150,
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
                    {
                      color: 'rgb(253, 252, 252)',
                      fontFamily: 'ADLaMDisplay_400Regular',
                      fontSize: 22,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'60%'}
              </Text>
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: 'rgb(0, 0, 0)',
                  borderRadius: 30,
                  height: 40,
                  justifyContent: 'center',
                  marginLeft: 5,
                  marginTop: 5,
                  width: 150,
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
                    {
                      alignSelf: 'center',
                      color: 'rgb(239, 221, 221)',
                      fontFamily: 'ADLaMDisplay_400Regular',
                      fontSize: 22,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'10%'}
              </Text>
            </View>
          </View>
        </View>
      </View>
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
              marginLeft: 10,
              marginTop: '10%',
              textAlign: 'left',
              textTransform: 'uppercase',
            }
          ),
          dimensions.width
        )}
      >
        {'Dashboard'}
      </Text>
      {/* View 2 */}
      <View>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: 'rgb(115, 81, 81)',
              borderRadius: 30,
              flexDirection: 'row',
              height: 40,
              justifyContent: 'space-between',
              marginBottom: 10,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
            },
            dimensions.width
          )}
        >
          {/* Text 2 */}
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
                  color: 'rgb(255, 249, 249)',
                  fontFamily: 'ADLaMDisplay_400Regular',
                  fontSize: 23,
                  marginLeft: 12,
                }
              ),
              dimensions.width
            )}
          >
            {'High Humidity'}
          </Text>
          {/* Text 3 */}
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
                  color: 'rgb(247, 243, 243)',
                  fontFamily: 'ADLaMDisplay_400Regular',
                  fontSize: 22,
                  marginRight: 12,
                }
              ),
              dimensions.width
            )}
          >
            {'18:25'}
          </Text>
        </View>
        {/* View 3 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: 'rgb(115, 81, 81)',
              borderRadius: 30,
              flexDirection: 'row',
              height: 40,
              justifyContent: 'space-between',
              marginBottom: 10,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
            },
            dimensions.width
          )}
        >
          {/* Text 2 */}
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
                  color: 'rgb(255, 249, 249)',
                  fontFamily: 'ADLaMDisplay_400Regular',
                  fontSize: 23,
                  marginLeft: 12,
                }
              ),
              dimensions.width
            )}
          >
            {'High pH'}
          </Text>
          {/* Text 3 */}
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
                  color: 'rgb(247, 243, 243)',
                  fontFamily: 'ADLaMDisplay_400Regular',
                  fontSize: 22,
                  marginRight: 12,
                }
              ),
              dimensions.width
            )}
          >
            {'14:53'}
          </Text>
        </View>
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: 'rgb(115, 81, 81)',
              borderRadius: 30,
              flexDirection: 'row',
              height: 40,
              justifyContent: 'space-between',
              marginBottom: 10,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
            },
            dimensions.width
          )}
        >
          {/* Text 2 */}
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
                  color: 'rgb(255, 249, 249)',
                  fontFamily: 'ADLaMDisplay_400Regular',
                  fontSize: 23,
                  marginLeft: 12,
                }
              ),
              dimensions.width
            )}
          >
            {'Connection Error'}
          </Text>
          {/* Text 3 */}
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
                  color: 'rgb(247, 243, 243)',
                  fontFamily: 'ADLaMDisplay_400Regular',
                  fontSize: 22,
                  marginRight: 12,
                }
              ),
              dimensions.width
            )}
          >
            {'11:13'}
          </Text>
        </View>
      </View>
      {/* View 3 */}
      <View>
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Text'].style,
              theme.typography.body1,
              {
                fontFamily: 'ADLaMDisplay_400Regular',
                fontSize: 25,
                marginLeft: 10,
              }
            ),
            dimensions.width
          )}
        >
          {'History'}
        </Text>
      </View>
      {/* View 4 */}
      <View style={StyleSheet.applyWidth({ marginTop: 150 }, dimensions.width)}>
        {/* Progress */}
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Text'].style,
              theme.typography.body1,
              {
                fontFamily: 'ADLaMDisplay_400Regular',
                fontSize: 25,
                marginLeft: 10,
              }
            ),
            dimensions.width
          )}
        >
          {'Progress Bar'}
        </Text>
        <LinearProgress
          animationDuration={500}
          indeterminate={false}
          isAnimated={true}
          showTrack={true}
          trackColor={theme.colors.border.base}
          trackLineCap={'round'}
          {...GlobalStyles.LinearProgressStyles(theme)['Linear Progress'].props}
          color={theme.colors.text.medium}
          lineCap={'round'}
          minimumValue={0}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.LinearProgressStyles(theme)['Linear Progress'].style,
              { alignSelf: 'center', marginTop: 15, width: '80%' }
            ),
            dimensions.width
          )}
          thickness={40}
          value={60}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(DashboardScreen);

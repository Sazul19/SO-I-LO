import React from 'react';
import { MapView } from '@draftbit/maps';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { Text } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const MapScreen = props => {
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
        {'MAP'}
      </Text>
      <MapView
        autoClusterMarkers={false}
        autoClusterMarkersDistanceMeters={10000}
        latitude={37.40241}
        loadingEnabled={true}
        longitude={-122.12125}
        moveOnMarkerPress={true}
        rotateEnabled={true}
        scrollEnabled={true}
        showsCompass={false}
        showsPointsOfInterest={true}
        zoom={8}
        zoomEnabled={true}
        {...GlobalStyles.MapViewStyles(theme)['Map View'].props}
        apiKey={process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}
        followsUserLocation={true}
        showsUserLocation={true}
        style={StyleSheet.applyWidth(
          GlobalStyles.MapViewStyles(theme)['Map View'].style,
          dimensions.width
        )}
      />
    </ScreenContainer>
  );
};

export default withTheme(MapScreen);

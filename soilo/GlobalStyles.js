import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

import palettes from './themes/palettes';

export const ButtonStyles = theme =>
  StyleSheet.create({
    Button: {
      style: {
        backgroundColor: theme.colors.branding.primary,
        borderRadius: 8,
        fontFamily: 'System',
        fontWeight: '700',
        textAlign: 'center',
      },
      props: {},
    },
  });

export const TabViewItemStyles = theme =>
  StyleSheet.create({ 'Tab View Item': { style: { flex: 1 }, props: {} } });

export const FetchStyles = theme =>
  StyleSheet.create({ Fetch: { style: { minHeight: 40 }, props: {} } });

export const LinearProgressStyles = theme =>
  StyleSheet.create({
    'Linear Progress': { style: { width: '100%' }, props: {} },
  });

export const TextInputStyles = theme =>
  StyleSheet.create({
    'Text Area': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors.border.base,
        borderLeftWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
    'Text Input': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors.border.base,
        borderLeftWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
  });

export const MapViewStyles = theme =>
  StyleSheet.create({
    'Map View': {
      style: { flex: 1, height: '100%', width: '100%' },
      props: {},
    },
  });

export const TextStyles = theme =>
  StyleSheet.create({
    Text: { style: { color: theme.colors.text.strong }, props: {} },
  });

export const ExpoImageStyles = theme =>
  StyleSheet.create({
    Image: { style: { height: 100, width: 100 }, props: {} },
  });

export const VStackStyles = theme =>
  StyleSheet.create({
    'V Stack': { style: { flexDirection: 'column' }, props: {} },
  });

export const TextFieldStyles = theme =>
  StyleSheet.create({
    'Styled Text Area': { style: {}, props: {} },
    'Styled Text Field': { style: {}, props: {} },
  });

import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

export const primary1Color = '#3F51B5';
export const primary2Color = '#303F9F';
export const primary3Color = '#C5CAE9';
export const accent1Color = '#FF5722';
export const textColor = '#212121';
export const secondaryTextColor = '#757575';
export const alternateTextColor = '#FFFFFF';

export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: primary1Color,
    primary2Color: primary2Color,
    primary3Color: primary3Color,
    accent1Color: accent1Color,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: textColor,
    secondaryTextColor: secondaryTextColor,
    alternateTextColor: alternateTextColor,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: '#3F51B5',
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};
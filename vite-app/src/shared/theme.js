import { color } from './color';

const primaryColor = color.purple;

export const theme = {
  color: {
    primary: {
      default: primaryColor.default,
      hover: primaryColor.hover,
      active: primaryColor.active,
      focus: primaryColor.focus,
      disabled: primaryColor.disabled,
    },
    monochrome: {
      lightest: color.white.default,
      // lighter: ""
      light: color.gray.light,
      medium: color.gray.default,
      dark: color.gray.dark,
      darker: color.gray.darker,
      darkest: color.black.default,
    },
    error: {
      lighter: color.red.lighter,
      light: color.red.light,
      default: color.red.default,
      dark: color.red.dark,
    },
    success: {
      default: color.green.default,
    },
    notification: {
      default: color.blue.default,
    },
  },
};

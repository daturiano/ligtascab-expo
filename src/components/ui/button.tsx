import {
  backgroundColor,
  BackgroundColorProps,
  createRestyleComponent,
  createVariant,
  spacing,
  SpacingProps,
  VariantProps,
} from '@shopify/restyle';
import React from 'react';
import { PressableProps, TouchableOpacity } from 'react-native';
import { Theme } from '~/src/theme/theme';

type ButtonProps = SpacingProps<Theme> &
  BackgroundColorProps<Theme> &
  VariantProps<Theme, 'buttonVariants'> &
  PressableProps & {
    children: React.ReactNode;
  };

const Button = createRestyleComponent<ButtonProps, Theme>(
  [spacing, backgroundColor, createVariant({ themeKey: 'buttonVariants' })],
  TouchableOpacity
);

export default Button;

export const buttonVariants = {
  defaults: {
    width: '100%',
    paddingVertical: 'm',
    paddingHorizontal: 'l',
    borderRadius: 'm',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'primary',
  },
  primary: {
    backgroundColor: 'primary',
  },
  secondary: {
    backgroundColor: 'secondary',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'mainForeground',
  },
  input: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'mutedLighter',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  disabled: {
    opacity: 0.5,
  },
};

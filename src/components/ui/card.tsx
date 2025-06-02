import React from 'react';
import { StyleProp, StyleSheet, View, ViewProps, ViewStyle } from 'react-native';
import ThemedText from '../themed-text';
import { Theme } from '~/src/theme/theme';
import { useTheme } from '@shopify/restyle';
import Box from './box';
import Text from './text';

type CardProps = {
  style?: StyleProp<ViewStyle>;
} & ViewProps;
type CardSectionProps = ViewProps;

export function Card({ style, ...props }: CardProps) {
  const theme = useTheme<Theme>();
  const { cardBackground } = theme.colors;
  return (
    <Box
      style={[styles.card, { backgroundColor: cardBackground }, style]}
      {...props}
      padding="xl"
    />
  );
}

export function CardHeader({ style, ...props }: CardSectionProps) {
  return <View style={[styles.header, style]} {...props} />;
}

export function CardTitle({ style, ...props }: React.ComponentProps<typeof ThemedText>) {
  return <Text style={[styles.title, style]} {...props} />;
}

export function CardDescription({ style, ...props }: React.ComponentProps<typeof Text>) {
  const theme = useTheme<Theme>();
  const { muted } = theme.colors;
  return <Text style={[styles.description, style, { color: muted }]} {...props} />;
}

export function CardContent({ style, ...props }: CardSectionProps) {
  return <View style={[styles.content, style]} {...props} />;
}

export function CardFooter({ style, ...props }: CardSectionProps) {
  return <View style={[styles.footer, style]} {...props} />;
}

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    flex: 1,
    width: '100%',
    gap: 24,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth: 0,
    borderRadius: 12,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 2,
  },
  header: {
    gap: 2,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title: {
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 24,
  },
  description: {
    fontSize: 13,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

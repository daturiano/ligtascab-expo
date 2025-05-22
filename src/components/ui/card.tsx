import React from 'react';
import { StyleSheet, Text, View, ViewProps } from 'react-native';
import { useTheme } from '../theme-provider';
import ThemedText from '../themed-text';
import { padding } from '~/src/theme/spacing';

type CardProps = ViewProps;
type CardSectionProps = ViewProps;

export function Card({ ...props }: CardProps) {
  const { theme } = useTheme();
  return <View style={[styles.card, padding.small, { backgroundColor: theme.card }]} {...props} />;
}

export function CardHeader({ style, ...props }: CardSectionProps) {
  return <View style={[styles.header, style]} {...props} />;
}

export function CardTitle({ style, ...props }: React.ComponentProps<typeof ThemedText>) {
  return <ThemedText style={[styles.title, style]} {...props} />;
}

export function CardDescription({ style, ...props }: React.ComponentProps<typeof Text>) {
  const { theme } = useTheme();
  return <Text style={[styles.description, style, { color: theme.muted }]} {...props} />;
}

export function CardContent({ style, ...props }: CardSectionProps) {
  return <View style={[styles.content, style]} {...props} />;
}

export function CardFooter({ style, ...props }: CardSectionProps) {
  return <View style={[styles.footer, style]} {...props} />;
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    gap: 24,
    flexDirection: 'column',
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

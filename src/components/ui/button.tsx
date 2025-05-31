import { useTheme } from '@shopify/restyle';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Theme } from '~/src/theme/theme';

type Variant = 'primary' | 'outline' | 'ghost' | 'secondary';

type ButtonProps = {
  title: string;
  variant?: Variant;
} & TouchableOpacityProps;

export function Button({ title, variant = 'primary', ...props }: ButtonProps) {
  const theme = useTheme<Theme>();
  const styles = createButtonStyles(theme, variant);

  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const createButtonStyles = (theme: Theme, variant: Variant = 'primary') => {
  const variants: Record<Variant, object> = {
    primary: {
      width: '100%',
      backgroundColor: theme.colors.primary,
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: theme.colors.muted,
      width: '100%',
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
    },
    secondary: {
      backgroundColor: theme.colors.secondary,
      width: '100%',
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
    },
    ghost: {
      backgroundColor: 'transparent',
    },
  };

  return StyleSheet.create({
    button: { ...variants[variant] },
    text: {
      color: variant === 'primary' ? '#ffffff' : theme.colors.mainBackground,
      fontWeight: '600',
      fontSize: 12,
    },
  });
};

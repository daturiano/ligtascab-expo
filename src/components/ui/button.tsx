import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { useTheme } from '../theme-provider';
import { Theme } from '~/src/theme/colors';

type ButtonProps = {
  title: string;
  variant?: Variant;
} & TouchableOpacityProps;

export function Button({ title, variant = 'primary', ...props }: ButtonProps) {
  const { theme } = useTheme();
  const styles = createButtonStyles(theme, variant);

  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

type Variant = 'primary' | 'outline' | 'ghost';

export const createButtonStyles = (theme: Theme, variant: Variant = 'primary') => {
  const variants: Record<Variant, object> = {
    primary: {
      width: '100%',
      backgroundColor: theme.primary,
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: theme.primary,
    },
    ghost: {
      backgroundColor: 'transparent',
    },
  };

  return StyleSheet.create({
    button: { ...variants[variant] },
    text: {
      color: variant === 'primary' ? '#ffffff' : theme.primary,
      fontWeight: '600',
      fontSize: 12,
    },
  });
};

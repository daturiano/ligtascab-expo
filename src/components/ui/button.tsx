import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Theme } from '~/src/theme/colors';
import { useTheme } from '../theme-provider';

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

type Variant = 'primary' | 'outline' | 'ghost' | 'secondary';

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
      borderColor: theme.bgForeground,
      width: '100%',
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
    },
    secondary: {
      backgroundColor: theme.secondary,
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
      color: variant === 'primary' ? '#ffffff' : theme.text,
      fontWeight: '600',
      fontSize: 12,
    },
  });
};

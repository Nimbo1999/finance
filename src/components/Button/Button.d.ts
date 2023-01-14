import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { CSSProperties } from 'react';

type ButtonVariant = 'solid' | 'outline' | 'text';
type ButtonColor = 'primary' | 'secondary' | 'success' | 'info' | 'error' | 'default';

export interface ButtonProps {
    variant?: ButtonVariant;
    color?: ButtonColor;
    rightIcon?: FontAwesomeIconProps['icon'];
    leftIcon?: FontAwesomeIconProps['icon'];
    iconProps?: Omit<FontAwesomeIconProps, 'icon'>;
    textTransform?: CSSProperties['textTransform'];
}

export type ButtonFCProps = ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

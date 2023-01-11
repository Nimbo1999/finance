type ButtonVariant = 'solid' | 'outline' | 'text';
type ButtonColor = 'primary' | 'secondary' | 'success' | 'info' | 'error' | 'default';

export interface ButtonProps {
    variant?: ButtonVariant;
    color?: ButtonColor;
}

export type ButtonFCProps = ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

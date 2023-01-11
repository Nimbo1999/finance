import { Button } from './Button.styled';
import { ButtonFCProps } from './Button.d';

const ButtonComponent: React.FC<ButtonFCProps> = ({ children, ...props }) => {
    return <Button {...props}>{children}</Button>;
};

export default ButtonComponent;

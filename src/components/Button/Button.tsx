import { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, ButtonWithIcon } from './Button.styled';
import { ButtonFCProps } from './Button.d';

const ButtonComponent = forwardRef<HTMLButtonElement, ButtonFCProps>(
    (
        {
            children,
            leftIcon,
            rightIcon,
            iconProps,
            textTransform = 'uppercase',
            ...props
        },
        ref,
    ) => {
        if (leftIcon || rightIcon)
            return (
                <ButtonWithIcon ref={ref} textTransform={textTransform} {...props}>
                    <>
                        {!!leftIcon && <FontAwesomeIcon {...iconProps} icon={leftIcon} />}
                        {children}
                        {!!rightIcon && (
                            <FontAwesomeIcon {...iconProps} icon={rightIcon} />
                        )}
                    </>
                </ButtonWithIcon>
            );

        return (
            <Button ref={ref} textTransform={textTransform} {...props}>
                {children}
            </Button>
        );
    },
);
ButtonComponent.displayName = 'ButtonComponent';

export default ButtonComponent;

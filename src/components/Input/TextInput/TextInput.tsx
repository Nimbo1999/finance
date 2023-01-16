import { forwardRef, useEffect, useRef, useState } from 'react';
import { FieldError, useFormContext } from 'react-hook-form';

import { Typography } from '@/components';
import Label from '../Label/Label';
import { TextInputContainer, Input } from './TextInput.styled';
import { TextInputProps } from '../Input';

type TextInputComponentProps = TextInputProps &
    React.InputHTMLAttributes<HTMLInputElement>;

const TextInput = forwardRef<HTMLInputElement, TextInputComponentProps>(
    ({ label, id, name, colon, ...props }, ref) => {
        const {
            getFieldState,
            formState: { submitCount },
        } = useFormContext();
        const [error, setError] = useState<FieldError | undefined>();
        const submitCountRef = useRef(submitCount);

        useEffect(() => {
            if (name && submitCountRef.current < submitCount) {
                submitCountRef.current = submitCount;
                setError(getFieldState(name).error);
            }
        }, [submitCount, name]);

        return (
            <TextInputContainer>
                <Label
                    htmlFor={id}
                    colon={colon}
                    required={props.required}
                    hasError={Boolean(error)}
                >
                    {label}
                </Label>

                <Input
                    {...props}
                    id={id}
                    name={name}
                    ref={ref}
                    hasError={Boolean(error)}
                />

                {Boolean(error) && (
                    <Typography.Caption color="error">
                        {error?.message}
                    </Typography.Caption>
                )}
            </TextInputContainer>
        );
    },
);
TextInput.displayName = 'TextInput';

export default TextInput;

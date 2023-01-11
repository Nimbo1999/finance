import { forwardRef } from 'react';
import Label from '../Label/Label';
import { TextInputContainer, Input } from './TextInput.styled';
import { TextInputProps } from '../Input';

type TextInputComponentProps = TextInputProps &
    React.InputHTMLAttributes<HTMLInputElement>;

const TextInput = forwardRef<HTMLInputElement, TextInputComponentProps>(
    ({ label, id, colon, ...props }, ref) => {
        return (
            <TextInputContainer>
                <Label htmlFor={id} colon={colon} required={props.required}>
                    {label}
                </Label>

                <Input {...props} id={id} ref={ref} />
            </TextInputContainer>
        );
    },
);
TextInput.displayName = 'TextInput';

export default TextInput;

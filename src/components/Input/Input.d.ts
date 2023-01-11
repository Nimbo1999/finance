export interface LabelProps {
    required?: boolean;
    colon?: boolean;
}

export interface TextInputProps extends Omit<LabelProps, 'required'> {
    label?: string;
}

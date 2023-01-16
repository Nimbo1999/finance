import React from 'react';

export interface LabelProps {
    required?: boolean;
    colon?: boolean;
    hasError?: boolean;
}

export interface TextInputProps extends Omit<LabelProps, 'required'> {
    label?: React.ReactNode;
}

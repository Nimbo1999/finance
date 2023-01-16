import React from 'react';

type TypographyVariant = 'body1' | 'body2' | 'caption';
export type TypographyColor =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'error'
    | 'default';

export interface TypographyBodyProps extends React.HTMLAttributes<HTMLParagraphElement> {
    variant?: TypographyVariant;
    color?: TypographyColor;
}

export interface TypographyCaptionProps extends React.HTMLAttributes<HTMLSpanElement> {
    color?: TypographyColor;
}

export interface TypographyComponents {
    Body: React.FC<TypographyBodyProps>;
    Caption: React.FC<TypographyCaptionProps>;
}

type TypographyVariant = 'body1' | 'body2';

export interface TypographyProps
    extends React.HTMLAttributes<HTMLParagraphElement>,
        BodyProps {}

export interface TypographyComponents {
    Body: React.FC<TypographyProps>;
}

export interface BodyProps {
    variant?: TypographyVariant;
}

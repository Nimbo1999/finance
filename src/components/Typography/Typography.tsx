import { BodyC, BodyProps } from './Typography.styled';

export interface TypographyProps
    extends React.HTMLAttributes<HTMLParagraphElement>,
        BodyProps {}

interface TypographyComponents {
    Body: React.FC<TypographyProps>;
}

const Typography: React.FC<TypographyProps> & TypographyComponents = props => (
    <BodyC {...props} />
);

const Body: React.FC<TypographyProps> = props => <BodyC {...props} />;

Typography.Body = Body;

export default Typography;

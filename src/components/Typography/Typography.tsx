import { BodyC } from './Typography.styled';
import { TypographyComponents, TypographyProps } from './Typography.d';

const Typography: React.FC<TypographyProps> & TypographyComponents = props => (
    <BodyC {...props} />
);

const Body: React.FC<TypographyProps> = props => <BodyC {...props} />;

Typography.Body = Body;

export default Typography;

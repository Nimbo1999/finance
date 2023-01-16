import { BodyC, CaptionC } from './Typography.styled';
import {
    TypographyComponents,
    TypographyBodyProps,
    TypographyCaptionProps,
} from './Typography.d';

const Typography: React.FC<TypographyBodyProps> & TypographyComponents = props => (
    <BodyC {...props} />
);

const Body: React.FC<TypographyBodyProps> = props => <BodyC {...props} />;
const Caption: React.FC<TypographyCaptionProps> = props => <CaptionC {...props} />;

Typography.Body = Body;
Typography.Caption = Caption;

export default Typography;

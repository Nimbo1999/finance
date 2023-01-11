import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Anchor = styled(Link)`
    text-decoration: none;
    font-size: 1rem;
    color: ${({ theme }) => theme.palette.info.light};
`;

export default Anchor;

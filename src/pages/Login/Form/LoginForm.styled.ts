import { Typography, Anchor as AnchorComponent } from '@/components';
import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const FormHeader = styled.header`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const FormMainContent = styled.main`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const SubTitle = styled(Typography)`
    max-width: 70%;
`;

export const Anchor = styled(AnchorComponent)`
    margin-left: 0.5rem;
`;

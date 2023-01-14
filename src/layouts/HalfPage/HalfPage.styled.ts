import styled from 'styled-components';
import { Button as TranslationButtonComponent } from '@/components';

export const Layout = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 100%;
    height: 100vh;
    width: 100vw;
`;

export interface ImageSideProps {
    imgUrl: string;
}

export const ImageSide = styled.aside<ImageSideProps>`
    background-image: url(${({ imgUrl }) => imgUrl});
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
`;

export const Content = styled.main`
    position: relative;
    display: flex;
    align-items: center;
    padding: 4rem 8rem;
    background-color: ${({ theme }) => theme.palette.background.light};
`;

export const TranslationButton = styled(TranslationButtonComponent)`
    position: absolute;
    top: 2rem;
    right: 2rem;
`;

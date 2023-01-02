import React from 'react';
import { Layout, Content, ImageSide, ImageSideProps } from './HalfPage.styled';

export interface HalfPageLayoutProps extends ImageSideProps {
    children?: React.ReactNode;
}

const HalfPageLayout: React.FC<HalfPageLayoutProps> = ({ imgUrl, children }) => {
    return (
        <Layout>
            <ImageSide imgUrl={imgUrl} data-testid="half-page-layout-image-side" />

            <Content>{children}</Content>
        </Layout>
    );
};

export default HalfPageLayout;

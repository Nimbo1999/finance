import React from 'react';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { useTranslation, Trans } from 'react-i18next';

import { Dropdown } from '@/components';
import {
    Layout,
    Content,
    ImageSide,
    ImageSideProps,
    TranslationButton,
} from './HalfPage.styled';

export interface HalfPageLayoutProps extends ImageSideProps {
    children?: React.ReactNode;
}

const HalfPageLayout: React.FC<HalfPageLayoutProps> = ({ imgUrl, children }) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang: string) => i18n.changeLanguage(lang);

    return (
        <Layout>
            <ImageSide imgUrl={imgUrl} data-testid="half-page-layout-image-side" />

            <Content>
                <Dropdown
                    options={[
                        { label: t('lang.en'), value: 'en-US' },
                        { label: t('lang.pt'), value: 'pt-BR' },
                    ]}
                    onChange={changeLanguage}
                >
                    <TranslationButton
                        rightIcon={faLanguage}
                        iconProps={{ size: '2x' }}
                        color="primary"
                        variant="outline"
                        textTransform="none"
                    >
                        <Trans i18nKey="lang.language" />
                    </TranslationButton>
                </Dropdown>

                {children}
            </Content>
        </Layout>
    );
};

export default HalfPageLayout;

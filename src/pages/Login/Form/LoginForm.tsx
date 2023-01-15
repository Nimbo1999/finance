import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { TextInput, Typography, Button } from '@/components';
import { Form, FormHeader, FormMainContent, SubTitle, Anchor } from './LoginForm.styled';
import { useTranslation, Trans } from 'react-i18next';

const LoginForm: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Form>
            <FormHeader>
                <h3>
                    <Trans i18nKey="sign-in.sign-in-title" />
                </h3>

                <SubTitle data-testid="login-page-subtitle">
                    <Trans i18nKey="sign-in.sign-in-subtitle" />
                </SubTitle>
            </FormHeader>

            <FormMainContent>
                <TextInput label={t('form.email.label')} type="email" id="email" />

                <TextInput
                    label={t('form.password.label')}
                    type="password"
                    id="password"
                />

                <Typography variant="body1">
                    <span data-testid="login-page-dont-have-account">
                        <Trans
                            i18nKey="sign-in.sign-in-create-account"
                            components={{ anchor: <Anchor to="/" /> }}
                        />
                    </span>
                </Typography>
            </FormMainContent>

            <Button type="submit" color="primary">
                <Trans i18nKey="sign-in.sign-in-submit" />
            </Button>

            <Button type="submit" color="primary" variant="outline" leftIcon={faGoogle}>
                <Trans i18nKey="sign-in.sign-in-with-google" />
            </Button>
        </Form>
    );
};

export default LoginForm;

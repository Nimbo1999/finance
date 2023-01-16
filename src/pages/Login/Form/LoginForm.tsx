import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useFormContext } from 'react-hook-form';
import { useTranslation, Trans } from 'react-i18next';

import { TextInput, Typography, Button } from '@/components';
import { emailValidator } from '@/lib/utils/validator.utils';
import withForm from '@/lib/HOCs/withForm';
import { Form, FormHeader, FormMainContent, SubTitle, Anchor } from './LoginForm.styled';

const LoginForm: React.FC = () => {
    const { t } = useTranslation();
    const { register, handleSubmit } = useFormContext();

    const onSubmit = (values: any) => console.log(values);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormHeader>
                <h3>
                    <Trans i18nKey="sign-in.sign-in-title" />
                </h3>

                <SubTitle data-testid="login-page-subtitle">
                    <Trans i18nKey="sign-in.sign-in-subtitle" />
                </SubTitle>
            </FormHeader>

            <FormMainContent>
                <TextInput
                    label={t('form.email.label')}
                    type="email"
                    id="email"
                    {...register('email', {
                        required: t('form.email.required') as string,
                        validate: emailValidator,
                    })}
                    required
                />

                <TextInput
                    label={t('form.password.label')}
                    type="password"
                    id="password"
                    {...register('password', {
                        required: t('form.password.required') as string,
                        minLength: {
                            message: t('form.password.min-lenght'),
                            value: 6,
                        },
                    })}
                    required
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

export default withForm(LoginForm);

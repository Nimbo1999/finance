import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { TextInput, Typography, Button } from '@/components';
import { Form, FormHeader, FormMainContent, SubTitle, Anchor } from './LoginForm.styled';

// export interface LoginFormProps {}

const LoginForm: React.FC = () => {
    return (
        <Form>
            <FormHeader>
                <h3>Sign in</h3>

                <SubTitle data-testid="login-page-subtitle">
                    Provide your credentions in order to access the system.
                </SubTitle>
            </FormHeader>

            <FormMainContent>
                <TextInput label="Email" type="email" id="email" />

                <TextInput label="Password" type="password" id="password" />

                <Typography variant="body1">
                    <span data-testid="login-page-dont-have-account">
                        Don&apos;t have a account?
                    </span>

                    <Anchor to="/">Create account now</Anchor>
                </Typography>
            </FormMainContent>

            <Button type="submit" color="primary">
                Sign in
            </Button>

            <Button type="submit" color="primary" variant="outline" leftIcon={faGoogle}>
                Sign in with Google
            </Button>
        </Form>
    );
};

export default LoginForm;

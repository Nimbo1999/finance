import { Typography } from '@/components';

import { Form } from './LoginForm.styled';

// export interface LoginFormProps {}

const LoginForm: React.FC = () => {
    return (
        <Form>
            <h3>Sign in</h3>
            <Typography data-testid="login-page-subtitle">
                Provide your credentions in order to access the system.
            </Typography>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </div>

            <Typography variant="body1">
                <span data-testid="login-page-dont-have-account">
                    Don&apos;t have a account?
                </span>
                <a href="http://localhost:3000">Create account now</a>
            </Typography>

            <button type="submit">Sign in</button>
        </Form>
    );
};

export default LoginForm;

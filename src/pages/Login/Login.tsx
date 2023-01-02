import HalfPageLayout from '@/layouts/HalfPage/HalfPage';
import LoginForm from '@/pages/Login/Form/LoginForm';

const LoginPage: React.FC = () => {
    return (
        <HalfPageLayout imgUrl="/image/login-background.jpg">
            <LoginForm />
        </HalfPageLayout>
    );
};

export default LoginPage;

import { FormProvider, useForm } from 'react-hook-form';

function withForm(Component: React.ComponentType) {
    return function WithForm(props: any) {
        const methods = useForm({ reValidateMode: 'onBlur' });

        return (
            <FormProvider {...methods}>
                <Component {...props} />
            </FormProvider>
        );
    };
}

export default withForm;

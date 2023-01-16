import { Validate, FieldValues } from 'react-hook-form';
import { getI18n } from 'react-i18next';
import validator from 'validator';

type ValidatorFunction = Validate<any, FieldValues>;

const i18n = getI18n();

export const emailValidator: ValidatorFunction = email =>
    validator.isEmail(email)
        ? undefined
        : (i18n.t('form.email.invalid', { email }) as string);

import { AccountType } from '@/lib/models/AccountType/AccountType';

export interface User {
    id: string;
    fullName: string;
    profilePicture?: string;
    isVerified: boolean;
    accountType: AccountType;
}

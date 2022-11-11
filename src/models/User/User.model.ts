import { UserData } from './UserData';

export class User implements UserData {
    id: string;
    firstName: string;
    lastName: string;
    profilePicture: string | null;

    constructor(userData: UserData) {
        this.id = userData.id;
        this.firstName = userData.firstName;
        this.lastName = userData.lastName;
        this.profilePicture = userData.profilePicture;
    }

    public get fullName(): string {
        return [this.firstName, this.lastName].join(' ');
    }

    public get nameInitials(): string {
        const [firstNameLetter] = this.firstName;
        const [lastNameLetter] = this.lastName;
        return firstNameLetter + lastNameLetter;
    }
}

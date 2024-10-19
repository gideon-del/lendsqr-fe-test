export declare global {
  export interface InputError {
    message: string;
  }
  export type InputValidator = (val: string) => InputError | null;

  export type Users = UserDetails[];
  export interface UserDetails {
    fullName: string;
    organization: string;
    username: string;
    phoneNumber: string;
    dateJoined: string;
    status: string;
    personalInformation: PersonalInformation;
    educationAndEmployment: EducationAndEmployment;
    twitter: string;
    facebook: string;
    instagram: string;
    guarantors: Guarantor[];
  }

  export interface PersonalInformation {
    phoneNumber: string;
    emailAddress: string;
    bvn: number;
    gender: string;
    maritalStatus: string;
    children: string;
    residence: string;
  }

  export interface EducationAndEmployment {
    levelOfEducation: string;
    employmentStatus: string;
    sectorOfEmployment: string;
    durationOfEmployment: string;
    officeEmail: string;
    monthlyIncome: string;
    loanRepayment: string;
  }

  export interface Guarantor {
    name: string;
    phoneNumber: string;
    emailAddress: string;
    relationship: string;
  }
}

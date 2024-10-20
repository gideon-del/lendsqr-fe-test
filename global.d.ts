export declare global {
  export interface InputError {
    message: string;
  }
  type InputValidator = (val: string) => InputError | null;

  type Users = UserDetails[];
  interface UserDetails {
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

  interface PersonalInformation {
    phoneNumber: string;
    emailAddress: string;
    bvn: number;
    gender: string;
    maritalStatus: string;
    children: string;
    residence: string;
  }

  interface EducationAndEmployment {
    levelOfEducation: string;
    employmentStatus: string;
    sectorOfEmployment: string;
    durationOfEmployment: string;
    officeEmail: string;
    monthlyIncome: string;
    loanRepayment: string;
  }

  interface Guarantor {
    name: string;
    phoneNumber: string;
    emailAddress: string;
    relationship: string;
  }
  interface SidBarLinkItem {
    icon: string;
    title: string;
    route?: string;
  }
  type SideBarLink =
    | SidBarLinkItem
    | {
        name: string;
        subLinks: SidBarLinkItem[];
      };
  type SidebarLinks = SideBarLink[];
}

export declare global {
  export interface InputError {
    message: string;
  }
  type InputValidator = (val: string) => InputError | null;

  type Users = UserDetails[];
  export interface UserDetails {
    firstName: string;
    lastName: string;
    fullName: string;
    organization: string;
    username: string;
    emailAddress: string;
    phoneNumber: string;
    dateJoined: string;
    status: string;
    personalInformation: PersonalInformation;
    educationAndEmployment: EducationAndEmployment;
    twitter: string;
    facebook: string;
    instagram: string;
    guarantors: Guarantor[];
    id: string;
  }

  export interface PersonalInformation {
    phoneNumber: string;
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

  interface SingleLinkRoute {
    icon: string;
    title: string;
    route?: string;
    pattern?: string;
  }
  interface NestedLinkRoutes {
    name: string;
    subLinks: SingleLinkRoute[];
  }
  type SideBarLink = SingleLinkRoute | NestedLinkRoutes;
  type SidebarLinks = SideBarLink[];
  interface FilterStructure {
    date: string;
    email: string;
    selectedOrganization: string;
    phoneNumber: string;
    selectedDate: Date | null;
    selectedStatus: string;
  }
}

export interface TransformedInfo {
  title: string;
  value: string;
}
const USER_KEY = "user";
export function formatDate(date: string) {
  const formater = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  return formater.format(new Date(date));
}
export function paginate<T>(data: T[], currentPage: number, limit: number) {
  const totalPages = Math.ceil(data.length / limit);

  if (currentPage < 1) currentPage = 1;
  if (currentPage > totalPages) currentPage = totalPages;
  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedData = data.slice(startIndex, endIndex);

  return {
    currentPage,
    totalPages,
    data: paginatedData,
  };
}

export function convertNumToPages(totalPages: number) {
  return Array(totalPages)
    .fill(1)
    .map((_, i) => i + 1);
}
export function addToLocalStorage(user: UserDetails) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}
export function getUserFromLocalStorag() {
  return JSON.parse(localStorage.getItem(USER_KEY) || "") || null;
}
export function transformPersonalInformation(
  user: UserDetails
): TransformedInfo[] {
  return [
    {
      title: "full Name",
      value: user.fullName,
    },
    {
      title: "Phone Number",
      value: user.personalInformation.phoneNumber,
    },
    {
      title: "Email Address",
      value: user.emailAddress,
    },
    {
      title: "Bvn",
      value: user.personalInformation.bvn.toString(),
    },
    {
      title: "Gender",
      value: user.personalInformation.gender,
    },
    {
      title: "Marital status",
      value: user.personalInformation.maritalStatus,
    },
    {
      title: "Children",
      value: user.personalInformation.children,
    },
    {
      title: "Type of residence",
      value: user.personalInformation.residence,
    },
  ];
}

export function transformEducation(user: UserDetails): TransformedInfo[] {
  return [
    {
      title: "level of education",
      value: user.educationAndEmployment.levelOfEducation,
    },
    {
      title: "employment status",
      value: user.educationAndEmployment.employmentStatus,
    },
    {
      title: "sector of employment",
      value: user.educationAndEmployment.sectorOfEmployment,
    },
    {
      title: "Duration of employment",
      value: user.educationAndEmployment.durationOfEmployment,
    },
    {
      title: "office email",
      value: user.educationAndEmployment.officeEmail,
    },
    {
      title: "Monthly income",
      value: user.educationAndEmployment.monthlyIncome,
    },
    {
      title: "loan repayment",
      value: user.educationAndEmployment.loanRepayment,
    },
  ];
}

export function transformSocials(user: UserDetails): TransformedInfo[] {
  return [
    {
      title: "Twitter",
      value: user.twitter,
    },
    {
      title: "Facebook",
      value: user.facebook,
    },
    {
      title: "Instagram",
      value: user.instagram,
    },
  ];
}
export function transformGaurantor(gaurantor: Guarantor): TransformedInfo[] {
  return [
    {
      title: "full Name",
      value: gaurantor.name,
    },
    {
      title: "Phone Number",
      value: gaurantor.phoneNumber,
    },
    {
      title: "Email Address",
      value: gaurantor.emailAddress,
    },
    {
      title: "Relationship",
      value: gaurantor.relationship,
    },
  ];
}

export function addOrganizations(users: Users): string[] {
  const organization: string[] = [];
  users.forEach((user) => {
    if (!organization.includes(user.organization)) {
      organization.push(user.organization);
    }
  });
  return organization.sort();
}

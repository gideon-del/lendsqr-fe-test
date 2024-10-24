import DashboardIcon from "@/assets/images/icons/home.svg";
import UsersIcon from "@/assets/images/icons/user-friends.svg";
import GuarantorsIcon from "@/assets/images/icons/users.svg";
import LoanIcon from "@/assets/images/icons/sack.svg";
import HandShakeIcon from "@/assets/images/icons/handshake-regular.svg";
import SavingsIcon from "@/assets/images/icons/piggy-bank.svg";
import LoanRequestIcon from "@/assets/images/icons/loan-request.svg";
import WhiteListIcon from "@/assets/images/icons/user-check.svg";
import KarmaIcon from "@/assets/images/icons/user-times.svg";
import OrganizationIcon from "@/assets/images/icons/briefcase.svg";
import BankIcon from "@/assets/images/icons/bank.svg";
import CoinIcon from "@/assets/images/icons/coins-solid.svg";
import TransactionIcon from "@/assets/images/icons/transaction.svg";
import ServicesIcon from "@/assets/images/icons/galaxy.svg";
import ServicesAccountIcon from "@/assets/images/icons/user-cog.svg";
import SettlementIcon from "@/assets/images/icons/scroll.svg";
import ReportsIcon from "@/assets/images/icons/chart-bar.svg";
import PreferencesIcon from "@/assets/images/icons/sliders-h.svg";
import FeeIcon from "@/assets/images/icons/badge-percent.svg";
import AuditIcon from "@/assets/images/icons/clipboard-list.svg";

export const sidebarLinks: SidebarLinks = [
  {
    title: "Dashboard",
    icon: DashboardIcon,
    pattern: "^/$",
    route: "/",
  },
  {
    name: "CUSTOMERS",
    subLinks: [
      {
        title: "Users",
        icon: UsersIcon,
        route: "/users",
        pattern: "^/users*",
      },
      {
        title: "Guarantors",
        icon: GuarantorsIcon,
      },
      {
        title: "Loans",
        icon: LoanIcon,
      },
      {
        title: "Decision Models",
        icon: HandShakeIcon,
      },
      {
        title: "Savings",
        icon: SavingsIcon,
      },
      {
        title: "Loan Requests",
        icon: LoanRequestIcon,
      },
      {
        title: "Whitelist",
        icon: WhiteListIcon,
      },
      {
        title: "Karma",
        icon: KarmaIcon,
      },
    ],
  },
  {
    name: "BUSINESSES",
    subLinks: [
      {
        title: "Organization",
        icon: OrganizationIcon,
      },
      {
        title: "Loan Products",
        icon: LoanRequestIcon,
      },
      {
        title: "Savings Products",
        icon: BankIcon,
      },
      {
        title: "Fees and Charges",
        icon: CoinIcon,
      },
      {
        title: "Transactions",
        icon: TransactionIcon,
      },
      {
        title: "Services",
        icon: ServicesIcon,
      },
      {
        title: "Service Account",
        icon: ServicesAccountIcon,
      },
      {
        title: "Settlements",
        icon: SettlementIcon,
      },
      {
        title: "Reports",
        icon: ReportsIcon,
      },
    ],
  },
  {
    name: "SETTINGS",
    subLinks: [
      {
        title: "Preferences",
        icon: PreferencesIcon,
      },
      {
        title: "Fees and Pricing",
        icon: FeeIcon,
      },
      {
        title: "Audit Logs",
        icon: AuditIcon,
      },
    ],
  },
];

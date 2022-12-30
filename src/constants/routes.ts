export enum AUTHENTICATION {
  LOGIN_SCREEN = 'Login',
  ACCOUNT = 'Account',
}

export enum TABS {
  DASHBOARD = 'Dashboard',
  TRANSFERS = 'Transfers',
  AIRTIME = 'Airtime',
  PAYMENTS = 'Payments',
  MORE = 'More',
}

export enum TRANSACTION_HISTORY {
  MAIN = 'Transaction History',
  ALL = 'All Transactions',
  MOBILE = 'Mobile Transactions',
}

export enum TRANSFERS {
  MAIN = 'Transfers dashboard',
  BETWEEN_ACCOUNTS_FIRST = 'Between my accounts first',
  BETWEEN_ACCOUNTS_SECOND = 'Between my accounts second',
}

export default {AUTHENTICATION, TABS, TRANSACTION_HISTORY, TRANSFERS};

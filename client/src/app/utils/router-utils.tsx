
export const ROUTE_NAMES = {
  LOG_IN: 'log-in',
  SIGN_UP: 'sign-up',
  LINKED_ACCOUNTS: 'linked-accounts',
  DASHBOARD: 'dashboard',
  CONTACT: 'contact',
  PORTFOLIO: 'portfolio',
  SIGN_OUT: 'sign-out',
}

export function getPathName (path: string): string {
  return path.split('/')[1]
}

export const getPageName = (path: string): string => {
  const pathName = getPathName(path)

  switch (pathName) {
    case ROUTE_NAMES.SIGN_UP:
      return 'Sign Up'
    case ROUTE_NAMES.LOG_IN:
      return 'Log In'
    case ROUTE_NAMES.SIGN_OUT:
      return 'Sign Out'
    case ROUTE_NAMES.LINKED_ACCOUNTS:
      return 'Accounts'
    case ROUTE_NAMES.DASHBOARD:
      return 'Dashboard'
    case ROUTE_NAMES.CONTACT:
      return 'Contact'
      case ROUTE_NAMES.PORTFOLIO:
        return 'Portfolio'
  }
  return 'Home'
}
export const ROUTES = {
  INDEX: '/',
  LOG_IN: `/${ROUTE_NAMES.LOG_IN}`,
  SIGN_UP: `/${ROUTE_NAMES.SIGN_UP}`,
  DASHBOARD: `/${ROUTE_NAMES.DASHBOARD}`,
  LINKED_ACCOUNTS: `/${ROUTE_NAMES.LINKED_ACCOUNTS}`,
  CONTACT: `/${ROUTE_NAMES.CONTACT}`,
  PORTFOLIO: `/${ROUTE_NAMES.PORTFOLIO}`,
}





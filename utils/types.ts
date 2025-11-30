// Header Types
export interface NavigationItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface HeaderProps {
  navigationItems?: NavigationItem[];
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationItems: NavigationItem[];
}

export interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

// Menu Types
export interface MenuItem {
  label: string;
  href: string;
  icon?: string;
}

export interface MenuSection {
  title: string;
  href?: string;
  items: MenuItem[];
  hasDropdown?: boolean;
}

export interface SidebarMenuItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface SeasonTab {
  label: string;
  value: string;
}

// Mega Menu Types
export interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
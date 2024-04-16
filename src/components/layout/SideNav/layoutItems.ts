import { paths } from "@/utils/paths";

export interface LayoutConfig {
  navItems: any[];
  secondaryNavItems: any[];
}

export const layoutConfig = {
  navItems: [
    {
      key: "dashboard",
      title: "Dashboard",
      items: [
        {
          key: "Home",
          title: "Home",
          href: paths.dashboard.overview,
          icon: "house",
        },
        {
          key: "Transacciones",
          title: "Transacciones",
          href: paths.dashboard.transactions,
          icon: "transactions",
        },
        {
          key: "Pagos",
          title: "Pagos",
          href: paths.dashboard.payments,
          icon: "payments",
        },
        {
          key: "Cuentas",
          title: "Cuentas",
          href: paths.dashboard.accounts,
          icon: "accounts",
        },
      ],
    },
  ],
  secondaryNavItems: [
    {
      key: "additional",
      title: "Additional",
      items: [
        {
          key: "Support",
          title: "Soporte",
          href: paths.dashboard.support,
          icon: "lifebuoy",
        },
        {
          key: "Config",
          title: "Configuración",
          href: paths.dashboard.settings,
          icon: "settings",
        },
        {
          key: "Account",
          title: "Cuenta",
          href: paths.dashboard.account,
          icon: "user",
        },
      ],
    },
  ],
};

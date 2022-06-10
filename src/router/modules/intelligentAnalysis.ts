import { $t } from "/@/plugins/i18n";
const Layout = () => import("/@/layout/index.vue");

const intelligentAnalysis = {
  path: "/intelligentAnalysis",
  name: "intelligentAnalysis",
  component: Layout,
  redirect: "/dashboard",
  meta: {
    icon: "el-icon-odometer",
    title: $t("menus.hsIntelligentAnalysis"),
    i18n: true,
    rank: 10
  },
  children: [
    {
      path: "/intelligentAnalysis/dashboard",
      component: () =>
        import("/@/views/intelligentAnalysis/dashboard/index.vue"),
      name: "dashboard",
      meta: {
        title: $t("menus.hsDashboard"),
        icon: "el-icon-pie-chart",
        i18n: true
      },
      children: []
    },
    {
      path: "/intelligentAnalysis/tableau-configuration",
      component: () =>
        import("/@/views/intelligentAnalysis/tableau-configuration/index.vue"),
      name: "TableauConfiguration",
      meta: {
        title: $t("menus.hsTableauConfiguration"),
        icon: "el-icon-setting",
        i18n: true
      }
    }
  ]
};

export default intelligentAnalysis;

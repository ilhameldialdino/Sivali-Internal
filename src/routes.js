
export const Routes = {
    // pages
    Presentation: { path: "/" },
    DashboardOverview: { path: "/dashboard/overview" },

    CreateTransaction: { path: "/dashboard/create-transaction" },
    CreateOrEditJobPosting: { path: "/dashboard/create-or-edit-job-posting/:method"},
    CreateOrEditPic: { path: "/dashboard/create-or-edit-pic/:method"},
    EditJobPosting: { path: "/dashboard/edit-job-posting"},
    JobPosting: { path: "/dashboard/job-posting" },
    ListAttendance: { path: "/dashboard/list-attendance" },
    ListTransaction: { path: "/dashboard/list-transaction" },
    ListPic: { path: "/dashboard/list-pic" },
    ListCandidate: { path: "/dashboard/list-candidate" },

    Transactions: { path: "/transactions" },
    Settings: { path: "/settings" },
    Upgrade: { path: "/upgrade" },
    BootstrapTables: { path: "/tables/bootstrap-tables" },
    Billing: { path: "/examples/billing" },
    Invoice: { path: "/examples/invoice" },
    Signin: { path: "/examples/sign-in" },
    Signup: { path: "/examples/sign-up" },

    // New
    RegisterPage: { path: "/page/register" },
    LoginPage: { path: "/page/login"},
    JobPost: { path: "/page/job-post" },
    ListAttendance: { path: "/page/list-attendance"},
    RecentTransaction: { path: "/page/recent-transaction" },

    ForgotPassword: { path: "/examples/forgot-password" },
    ResetPassword: { path: "/examples/reset-password" },
    Lock: { path: "/examples/lock" },
    NotFound: { path: "/examples/404" },
    ServerError: { path: "/examples/500" },

    // docs
    DocsOverview: { path: "/documentation/overview" },
    DocsDownload: { path: "/documentation/download" },
    DocsQuickStart: { path: "/documentation/quick-start" },
    DocsLicense: { path: "/documentation/license" },
    DocsFolderStructure: { path: "/documentation/folder-structure" },
    DocsBuild: { path: "/documentation/build-tools" },
    DocsChangelog: { path: "/documentation/changelog" },

    // components
    Accordions: { path: "/components/accordions" },
    Alerts: { path: "/components/alerts" },
    Badges: { path: "/components/badges" },
    Widgets: { path: "/widgets" },
    Breadcrumbs: { path: "/components/breadcrumbs" },
    Buttons: { path: "/components/buttons" },
    Forms: { path: "/components/forms" },
    Modals: { path: "/components/modals" },
    Navs: { path: "/components/navs" },
    Navbars: { path: "/components/navbars" },
    Pagination: { path: "/components/pagination" },
    Popovers: { path: "/components/popovers" },
    Progress: { path: "/components/progress" },
    Tables: { path: "/components/tables" },
    Tabs: { path: "/components/tabs" },
    Tooltips: { path: "/components/tooltips" },
    Toasts: { path: "/components/toasts" },
    WidgetsComponent: { path: "/components/widgets" }
};
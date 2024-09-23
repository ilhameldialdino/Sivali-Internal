import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

// pages
import Presentation from "./Presentation";
import Upgrade from "./Upgrade";
import DashboardOverview from "./dashboard/DashboardOverview";

import CreateTransaction from "./dashboard/CreateTransaction";
import CreateOrEditJobPosting from './dashboard/CreateOrEditJobPosting';
import CreateOrEditPic from './dashboard/CreateOrEditPic';
import CreateOrEditEducation from './dashboard/CreateOrEditEducation';
import CreateOrEditIndustry from './dashboard/CreateOrEditIndustry';
import CreateOrEditJobCategory from './dashboard/CreateOrEditJobCategory';
import CreateOrEditJobRole from './dashboard/CreateOrEditJobRole';
import JobPosting from "./dashboard/JobPosting";
import ListAttendance from "./dashboard/ListAttendance";
import ListTransaction from "./dashboard/ListTransaction";
import ListPic from "./dashboard/ListPic";
import ListCandidate from "./dashboard/ListCandidate";
import ListCompany from "./dashboard/ListCompany";
import ListEducation from "./dashboard/ListEducation";
import ListEmployee from "./dashboard/ListEmployee";
import ListIndustry from "./dashboard/ListIndustry";
import ListJobCategory from "./dashboard/ListJobCategory"
import ListJobRole from "./dashboard/ListJobRole";
import ListJobSpecialization from "./dashboard/ListJobSpecialization";

import Transactions from "./Transactions";
import Settings from "./Settings";
import BootstrapTables from "./tables/BootstrapTables";
import Signin from "./examples/Signin";
import Signup from "./examples/Signup";
import ForgotPassword from "./examples/ForgotPassword";
import ResetPassword from "./examples/ResetPassword";
import Lock from "./examples/Lock";
import NotFoundPage from "./examples/NotFound";
import ServerError from "./examples/ServerError";

// New
import Register from '../component/Register';
import Login from '../component/Login';
import JobPost from "../component/JobPost";
import RecentTransaction from "../component/RecentTransaction";

// documentation pages
import DocsOverview from "./documentation/DocsOverview";
import DocsDownload from "./documentation/DocsDownload";
import DocsQuickStart from "./documentation/DocsQuickStart";
import DocsLicense from "./documentation/DocsLicense";
import DocsFolderStructure from "./documentation/DocsFolderStructure";
import DocsBuild from "./documentation/DocsBuild";
import DocsChangelog from "./documentation/DocsChangelog";

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

import Accordion from "./components/Accordion";
import Alerts from "./components/Alerts";
import Badges from "./components/Badges";
import Breadcrumbs from "./components/Breadcrumbs";
import Buttons from "./components/Buttons";
import Forms from "./components/Forms";
import Modals from "./components/Modals";
import Navs from "./components/Navs";
import Navbars from "./components/Navbars";
import Pagination from "./components/Pagination";
import Popovers from "./components/Popovers";
import Progress from "./components/Progress";
import Tables from "./components/Tables";
import Tabs from "./components/Tabs";
import Tooltips from "./components/Tooltips";
import Toasts from "./components/Toasts";
import CreateOrEditJobSpecialization from './dashboard/CreateOrEditJobSpecialization';

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => ( <> <Preloader show={loaded ? false : true} /> <Component {...props} /> </> ) } />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  }

  return (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        <Sidebar />

        <main className="content">
          <Navbar />
          <Component {...props} />
          <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
        </main>
      </>
    )}
    />
  );
};

export default () => (
  <Switch>
    <RouteWithLoader exact path={Routes.Presentation.path} component={Presentation} />
    <RouteWithLoader exact path={Routes.Signin.path} component={Signin} />
    <RouteWithLoader exact path={Routes.Signup.path} component={Signup} />
    <RouteWithLoader exact path={Routes.ForgotPassword.path} component={ForgotPassword} />
    <RouteWithLoader exact path={Routes.ResetPassword.path} component={ResetPassword} />
    <RouteWithLoader exact path={Routes.Lock.path} component={Lock} />
    <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />
    <RouteWithLoader exact path={Routes.ServerError.path} component={ServerError} />

    <RouteWithLoader exact path={Routes.LoginPage.path} component={Login} />
    <RouteWithLoader exact path={Routes.RegisterPage.path} component={Register} />
    <RouteWithLoader exact path={Routes.JobPost.path} component={JobPost} />
    <RouteWithLoader exact path={Routes.JobPost.path} component={ListAttendance} />
    <RouteWithLoader exact path={Routes.JobPost.path} component={RecentTransaction} />


    {/* pages */}
    <RouteWithSidebar exact path={Routes.DashboardOverview.path} component={DashboardOverview} />

    <RouteWithSidebar exact path={Routes.CreateTransaction.path} component={CreateTransaction} />
    <RouteWithSidebar exact path={Routes.CreateOrEditJobPosting.path} component={CreateOrEditJobPosting} />
    <RouteWithSidebar exact path={Routes.CreateOrEditPic.path} component={CreateOrEditPic} />
    <RouteWithSidebar exact path={Routes.CreateOrEditEducation.path} component={CreateOrEditEducation} />
    <RouteWithSidebar exact path={Routes.CreateOrEditIndustry.path} component={CreateOrEditIndustry} />
    <RouteWithSidebar exact path={Routes.CreateOrEditJobCategory.path} component={CreateOrEditJobCategory} />
    <RouteWithSidebar exact path={Routes.CreateOrEditJobPosting.path} component={CreateOrEditJobPosting} />
    <RouteWithSidebar exact path={Routes.CreateOrEditJobRole.path} component={CreateOrEditJobRole} />
    <RouteWithSidebar exact path={Routes.CreateOrEditJobSpecialization.path} component={CreateOrEditJobSpecialization} />

    <RouteWithSidebar exact path={Routes.JobPosting.path} component={JobPosting} />
    <RouteWithSidebar exact path={Routes.ListAttendance.path} component={ListAttendance} />
    <RouteWithSidebar exact path={Routes.ListTransaction.path} component={ListTransaction} />
    <RouteWithSidebar exact path={Routes.ListPic.path} component={ListPic} />
    <RouteWithSidebar exact path={Routes.ListCandidate.path} component={ListCandidate} />

    <RouteWithSidebar exact path={Routes.ListCompany.path} component={ListCompany} />
    <RouteWithSidebar exact path={Routes.ListEducation.path} component={ListEducation} />
    <RouteWithSidebar exact path={Routes.ListEmployee.path} component={ListEmployee} />
    <RouteWithSidebar exact path={Routes.ListIndustry.path} component={ListIndustry} />
    <RouteWithSidebar exact path={Routes.ListJobCategory.path} component={ListJobCategory} />
    <RouteWithSidebar exact path={Routes.ListJobRole.path} component={ListJobRole} />
    <RouteWithSidebar exact path={Routes.ListJobSpecialization.path} component={ListJobSpecialization} />

    <RouteWithSidebar exact path={Routes.Upgrade.path} component={Upgrade} />
    <RouteWithSidebar exact path={Routes.Transactions.path} component={Transactions} />
    <RouteWithSidebar exact path={Routes.Settings.path} component={Settings} />
    <RouteWithSidebar exact path={Routes.BootstrapTables.path} component={BootstrapTables} />

    {/* components */}
    <RouteWithSidebar exact path={Routes.Accordions.path} component={Accordion} />
    <RouteWithSidebar exact path={Routes.Alerts.path} component={Alerts} />
    <RouteWithSidebar exact path={Routes.Badges.path} component={Badges} />
    <RouteWithSidebar exact path={Routes.Breadcrumbs.path} component={Breadcrumbs} />
    <RouteWithSidebar exact path={Routes.Buttons.path} component={Buttons} />
    <RouteWithSidebar exact path={Routes.Forms.path} component={Forms} />
    <RouteWithSidebar exact path={Routes.Modals.path} component={Modals} />
    <RouteWithSidebar exact path={Routes.Navs.path} component={Navs} />
    <RouteWithSidebar exact path={Routes.Navbars.path} component={Navbars} />
    <RouteWithSidebar exact path={Routes.Pagination.path} component={Pagination} />
    <RouteWithSidebar exact path={Routes.Popovers.path} component={Popovers} />
    <RouteWithSidebar exact path={Routes.Progress.path} component={Progress} />
    <RouteWithSidebar exact path={Routes.Tables.path} component={Tables} />
    <RouteWithSidebar exact path={Routes.Tabs.path} component={Tabs} />
    <RouteWithSidebar exact path={Routes.Tooltips.path} component={Tooltips} />
    <RouteWithSidebar exact path={Routes.Toasts.path} component={Toasts} />

    {/* documentation */}
    <RouteWithSidebar exact path={Routes.DocsOverview.path} component={DocsOverview} />
    <RouteWithSidebar exact path={Routes.DocsDownload.path} component={DocsDownload} />
    <RouteWithSidebar exact path={Routes.DocsQuickStart.path} component={DocsQuickStart} />
    <RouteWithSidebar exact path={Routes.DocsLicense.path} component={DocsLicense} />
    <RouteWithSidebar exact path={Routes.DocsFolderStructure.path} component={DocsFolderStructure} />
    <RouteWithSidebar exact path={Routes.DocsBuild.path} component={DocsBuild} />
    <RouteWithSidebar exact path={Routes.DocsChangelog.path} component={DocsChangelog} />

    <Redirect to={Routes.NotFound.path} />
  </Switch>
);

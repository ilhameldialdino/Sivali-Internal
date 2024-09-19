
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield, faUserCheck, faMoneyCheck, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';

import { CounterWidget, CircleChartWidget, BarChartWidget, TeamMembersWidget, ProgressTrackWidget, RankingWidget, SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "../../components/Widgets";
import { PageVisitsTable } from "../../components/Tables";
import { trafficShares, totalOrders } from "../../data/charts";


export default () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">

      </div>

      <Row className="justify-content-md-center">
        <Col xs={12} className="mb-4 d-none d-sm-block">
          <SalesValueWidget
            title="Job Trend Interest"
            value="10,567"
            percentage={63.57}
          />
        </Col>
        <Col xs={12} className="mb-4 d-sm-none">
          <SalesValueWidgetPhone
            title="Job Trend Interest"
            value="10,567"
            percentage={3.57}
          />
        </Col>
        <Col xs={12} sm={6} xl={6} className="mb-4">
          <CounterWidget
            category="Credit Transaction"
            title="1.500.000.000,00"
            period="Jul 1 - Aug 1"
            percentage={100}
            icon={faMoneyCheck}
            iconColor="shape-secondary"
          />
        </Col>

        <Col xs={12} sm={6} xl={6} className="mb-4">
          <CounterWidget
            category="Credit Balance"
            title="Rp. 100.000.000,00"
            period="Jul 1 - Aug 1"
            percentage={28.4}
            icon={faCashRegister}
            iconColor="shape-tertiary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Candidate"
            title="20"
            period="Jul 1 - Aug 1"
            percentage={28.4}
            icon={faUserCheck}
            iconColor="shape-tertiary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CircleChartWidget
            title="Attendance"
            data={trafficShares} />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Job Post"
            title="20"
            period="Jul 1 - Aug 1"
            percentage={28.4}
            icon={faBriefcase}
            iconColor="shape-tertiary"
          />
        </Col>

      </Row>
    </>
  );
};

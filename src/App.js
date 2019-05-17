import React from 'react';
import RestarauntListPage from './RestarauntListPage';
import {
  Col,
  Row,
} from 'react-materialize';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col s={12} m={10} l={8} offset="m1 l2">
            <RestarauntListPage />
          </Col>
        </Row>
      </div>
    );
  }
}

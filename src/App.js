import React, { Component } from 'react';
import fecha from 'fecha';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Button, ButtonToolbar, Card, CardBody, Container, Col, Row } from 'reactstrap';

@observer
export default class App extends Component {

  @observable time = new Date();

  componentDidMount() {
    this.interval = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Container className="p-3">
        <Row>
          <Col sm={6} xs={12}>
            <ButtonToolbar>
              <Button color="primary">Hello</Button>
              <Button>World!</Button>
            </ButtonToolbar>
          </Col>
          <Col sm="3">
            <Card>
              <CardBody>
                <h2>{fecha.format(this.time, 'h:mm:ssA')}</h2>
                <h3 className="text-muted">{fecha.format(this.time, 'MMM Do, YYYY')}</h3>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

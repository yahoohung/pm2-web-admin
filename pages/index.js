import { Component } from 'react'
import io from 'socket.io-client'
import fetch from 'isomorphic-fetch'

import {
  Badge,
  Card, 
  CardImg, 
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
  Button,  
  ButtonGroup,
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import "../assets/sass/styles.scss";

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      processes: [],
    }
  
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // fetch old messages data from the server
  // static async getInitialProps({ req }) {
  //   const response = await fetch('http://localhost:3000/pm2')
  //   const processes = await response.json()
  //   return { processes }
  // }

  static defaultProps = {
    processes: [],
  }

  // init state with the prefetched processes

  // connect to WS server and listen event
  componentDidMount() {
    this.socket = io('http://localhost:9000/', {path: '/foo/bar'})
    this.socket.on('pm2', this.handleProcesses)


  }

  // close socket connection
  componentWillUnmount() {
    this.socket.off('pm2', this.handleProcesses)
    this.socket.close()
  }

  // add processes from server to the state
  handleProcesses = (processes) => {
    console.log(processes)
    this.setState({
      processes
    })
  }

  render() {

    return (
      <Container fluid>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">PM2 Web Admin</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/yahoohung/pm2-web-admin">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>      
        <Row>
          {this.state.processes.map(thisProcess=>     
          <Col xs="12">
            <Card key={thisProcess.pid}>
              <CardBody className="d-flex align-items-center">
                <div className="d-flex align-items-end flex-column">
                  <div className="btn" color="primary" outline>
                    CPU <Badge color="secondary">{thisProcess.monit.cpu}%</Badge>
                  </div>                  
                  <div className="btn" color="primary" outline>
                    RAM <Badge color="secondary">{Math.ceil(thisProcess.monit.memory / 1000 / 1000)}M</Badge>
                  </div>                 
                </div>
                <div>
                  <CardTitle>{thisProcess.name}</CardTitle>
                  <CardSubtitle>{thisProcess.pm2_env.pm_cwd}</CardSubtitle>
                  <CardText></CardText>
                </div>
                <div className="ml-auto">
                  <ButtonGroup>
                    <Button color="danger">Stop</Button>
                    <Button color="warning">Reload</Button>
                    <Button color="info">Restart</Button>
                  </ButtonGroup>                  
                </div>
              </CardBody>
            </Card>                     
          </Col>
          )}            
        </Row>
      </Container>      
    )
  }
}

export default HomePage
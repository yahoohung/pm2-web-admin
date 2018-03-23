import { Component } from 'react'
import io from 'socket.io-client'
import fetch from 'isomorphic-fetch'
import { Container, Row, Col } from 'reactstrap';


class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      processes: [],
    }
  
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
    this.socket = io('http://localhost:3000/', {path: '/foo/bar'})
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
      <Container>
        <Row>
          <Col>
            <ul>
              {this.state.processes.map(thisProcess=>
                <li key={thisProcess.pid}>{thisProcess.name}</li>
              )}
            </ul>          
          </Col>
        </Row>
      </Container>      
    )
  }
}

export default HomePage
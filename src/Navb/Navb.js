import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactStars from 'react-stars';

function Navb({inputSearch,setInputSearch,inputStars,setInputStars,}) {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand style={{fontFamily:'"Great Vibes", cursive',fontSize:'25px'}} href="#">AchFlix</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <div style={{display:'flex'}}>
            <Button onClick={()=>{setInputSearch('');setInputStars(0)}}>
              Reset
            </Button>
            <ReactStars 
            size={26}
            count={5}
            half={false}
            value={inputStars}
            onChange={(e)=>
                setInputStars(e)}
            />
          <Form className="d-flex"> 
            <Form.Control
            value={inputSearch}
            onChange={(e)=>setInputSearch(e.target.value)}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            
          </Form>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;
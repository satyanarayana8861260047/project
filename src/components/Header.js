import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Badge } from "@material-ui/core";
import { NavLink, Table } from "react-bootstrap";
import Menu from "@material-ui/core/Menu";
import { useSelector } from "react-redux";


const Header = () => {

const getdata=useSelector((state)=>state.cartreducer.carts);
console.log(getdata);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light">
            Add to Cart
          </NavLink>
          <Nav className="mr-auto">
            <NavLink to="/" className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>
          <Badge
            badgeContent={getdata.length}
            color="primary"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <i
              class="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >

          {
            getdata.length ?
            <div className="card_details" style={{width:'24rem'}}>
              <Table>
                <thead>
                  <tr>
                    <th>Photos</th>
                    <th>Resturant Name</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    getdata.map((e)=>{
                      return(
                        <>
                        <tr>
                          <td>
                           <img src={e.imgdata} alt="" />
                          </td>
                          <td>
                            {e.rname}
                          </td>
                        </tr>
                        </>
                      )
                    })
                  }
                </tbody>
              </Table>
            </div>:
              <div className="card_details d-flex justify-content-center align-items-center" style={{width:'24rem',padding:10,position:'relative'}}>
              <i className="fas fa-close smallclose" 
              onClick={handleClose}
              style={{position:"absolute",top:2,right:20,fontSize:23,cursor:'pointer'}}></i>
              <p style={{fontSize:22}}>Your carts is empty</p>
              <img src="./cart.gif" alt="" />
            </div>
          }
        
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;

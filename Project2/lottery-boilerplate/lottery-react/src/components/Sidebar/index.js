import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, Sidebarlink, SideBtnWrap, SidebarRoute } from './Sidebarelements';
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}> 
          <CloseIcon>
            </CloseIcon>  
            <SidebarWrapper>
              <SidebarMenu>
<Sidebarlink to="about" onClick={toggle}>
  About
  </Sidebarlink>
  <Sidebarlink to="discover" onClick={toggle}>
  Discover
  </Sidebarlink>
  <Sidebarlink to="services" onClick={toggle}>
  Services
  </Sidebarlink>
  <Sidebarlink to="signup" onClick={toggle}>
  Sign up
  </Sidebarlink>
                </SidebarMenu>
                <SideBtnWrap>
                  <SidebarRoute to='/signin'>
                    Sign In
                    </SidebarRoute>
                  </SideBtnWrap>
              </SidebarWrapper>
        </Icon>
        </SidebarContainer>
    );
};

export default Sidebar;

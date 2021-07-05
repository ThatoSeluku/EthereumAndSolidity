import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, Sidebarlink, SideBtnWrap, SidebarRoute } from './Sidebarelements';
const Sidebar = () => {
    return (
        <SidebarContainer>
        <Icon>
          <CloseIcon>
            </CloseIcon>  
            <SidebarWrapper>
              <SidebarMenu>
<Sidebarlink to="about">
  About
  </Sidebarlink>
  <Sidebarlink to="discover">
  Discover
  </Sidebarlink>
  <Sidebarlink to="services">
  Services
  </Sidebarlink>
  <Sidebarlink to="signup">
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

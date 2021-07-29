import React from 'react';
import {Menu} from 'semantic-ui-react'

const header = (props) => {
    return (
  <Menu>
<Menu.Menu position="left">
    <Menu.Item>
CrowdCoin
        </Menu.Item>
</Menu.Menu>
<Menu.Menu position="right">
    <Menu.Item>
Campaigns
        </Menu.Item>
        <Menu.Item>
+
        </Menu.Item>
</Menu.Menu>
      </Menu>
    );
  };
  export default header;

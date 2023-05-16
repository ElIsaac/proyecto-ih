import React from 'react'
import ReactDOM from 'react-dom/client'
import { Grid } from 'semantic-ui-react';
import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'
import App from './App'
import 'semantic-ui-css/semantic.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <Grid>
      <Grid.Row>
        <Grid.Column width={4}>
        <div>
      <Sidebar bgColor='black' isCollapsed={false}>
        
        <DropdownItem
          values={['First', 'Second', 'Third']}
          bgColor={'black'}>
          Menu
        </DropdownItem>

        <Item bgColor='black'>
          <Icon><i className="fas fa-home"/></Icon>
          Home
        </Item>
        <Item bgColor='black'>
          <Icon><i className="fas fa-info"/></Icon>
          About
        </Item>
        <Item bgColor='black'>
          <Icon><i className="fas fa-sitemap"/></Icon>
          My Website
        </Item>
        <Item bgColor='black'>
          <Icon><i className="far fa-address-book"/></Icon>
          Contacts
        </Item>
        <Item bgColor='black'>
          <Icon><i className="fas fa-rss-square"/></Icon>
          Blog
        </Item>
        <InputItem type='text' placeholder={'Search...'}/>
      </Sidebar>
    </div>
        </Grid.Column>
        <Grid.Column width={12}>
        <App />
        </Grid.Column>
      </Grid.Row>
    </Grid>
      
    </>
  );
import React from 'react'
import { Route, useHistory, useLocation } from 'react-router'
import {
  PageContainer,
  Title,
  SecondaryNavContainer,
  SecondaryNav,
  SecondaryNavItem,
  elMb9,
  Button,
  FlexContainer,
  elHFull,
} from '@reapit/elements'

import PropertiesSubmenu from './properties-submenu'
import AgentsSubmenu from './agent-submenu'
import ClientSubmenu from './clients-submenu'
import { navigate } from '../../utils/navigation'
import { Routes } from '../../constants/routes'

const Overview = () => {
  const history = useHistory()
  const location = useLocation()
  const { pathname } = location

  return (
    <FlexContainer isFlexAuto>
      <SecondaryNavContainer>
        <Title>Dashboard</Title>
        <SecondaryNav className={elMb9}>
          <SecondaryNavItem
            onClick={navigate(history, Routes.DASHBOARD_PROPERTIES)}
            active={pathname === Routes.DASHBOARD_PROPERTIES}
          >
            Property
          </SecondaryNavItem>
          <SecondaryNavItem
            onClick={navigate(history, Routes.DASHBOARD_AGENTS)}
            active={pathname.includes(Routes.DASHBOARD_AGENTS)}
          >
            Agent
          </SecondaryNavItem>
          <SecondaryNavItem
            onClick={navigate(history, Routes.DASHBOARD_CLIENTS)}
            active={pathname.includes(Routes.DASHBOARD_CLIENTS)}
          >
            Client
          </SecondaryNavItem>
        </SecondaryNav>
      </SecondaryNavContainer>
      <PageContainer className={elHFull}>
        <Route path={Routes.DASHBOARD_PROPERTIES} component={PropertiesSubmenu} exact />
        <Route path={Routes.DASHBOARD_AGENTS} component={AgentsSubmenu} exact />
        <Route path={Routes.DASHBOARD_CLIENTS} component={ClientSubmenu} exact />
      </PageContainer>
    </FlexContainer>
  )
}

export default Overview

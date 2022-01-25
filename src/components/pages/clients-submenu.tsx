import React from 'react'
import { Icon, Title, Subtitle } from '@reapit/elements'
import { OverviewCard, CustomTableWrapper } from './__styles__/clients-submenu-styles'

type Props = {}

const ClientSubmenu = (props: Props) => {
  return (
    <>
      <div className="el-flex el-flex-justify-end">
        {/* filter by applicant marketing mode */}
        <div>
          <select className="el-select el-ml2">
            <option value="buying">Buying</option>
            <option value="renting">Renting</option>
          </select>
        </div>
      </div>
      <div className="el-flex el-flex-row el-flex-align-center">
        <Icon icon="usersMenu" iconSize="large" />
        <div className="el-pl4">
          <Title hasNoMargin hasGreyText>
            72
          </Title>
          <Subtitle hasNoMargin>Client</Subtitle>
        </div>
      </div>
      <div className="el-flex el-flex-row el-flex-align-center el-pt6">
        <div>
          applicant status
          <p>-active</p>
          <p>-inactive</p>
        </div>
      </div>
      <CustomTableWrapper>
        <div>Sneak peek list of client</div>
      </CustomTableWrapper>
    </>
  )
}

export default ClientSubmenu

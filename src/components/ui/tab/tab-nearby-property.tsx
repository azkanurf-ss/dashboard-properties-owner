import React from 'react'
import { PropertyModel } from '@reapit/foundations-ts-definitions'
import { TabContentContainer } from '../../pages/__styles__/property-details-styles'

const TabNearbyProperty = ({ data }: { data: PropertyModel }) => {
  console.log({ data })
  return <TabContentContainer>nearby info</TabContentContainer>
}

export default TabNearbyProperty

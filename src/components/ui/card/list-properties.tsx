import React from 'react'
import { useHistory } from 'react-router'
import { BodyText, Button, SmallText, Title } from '@reapit/elements'
import { PropertyModel } from '@reapit/foundations-ts-definitions'

import convertText from '../../../utils/textConverter'
import { currencyConverter } from '../../../utils/currencyConverter'
import { CardSingleProperty, ListPropertiesWrapper } from '../__styles__/card-styles'
import dummy1 from '../../../assets/dummy/dummy-prop-1.webp'
import { BiBed, BiBuildingHouse } from 'react-icons/bi'
import { MdOutlineBathroom, MdOutlineMeetingRoom } from 'react-icons/md'
import { numberWithCommas } from '../../../utils/numberConverter'

type Props = {
  properties: PropertyModel[]
}

const CardProperty = ({ properties }: Props) => {
  const history = useHistory()

  return (
    <ListPropertiesWrapper>
      <div className="main-list el-mt4">
        {properties?.map((property, index) => {
          const typesProperty =
            property?.type && property?.type.length > 0 ? property?.type?.map((data) => convertText(data)) : ['House']
          return (
            <CardSingleProperty key={index} onClick={() => history.push(`/property/${property?.id}`)}>
              <img alt="property-img" src={dummy1} />
              <div className="el-mx3">
                <Title hasNoMargin className="title">
                  {property.address?.buildingNumber} &nbsp;
                  {property.address?.buildingName || 'Building Name'}
                </Title>
                <BodyText hasGreyText hasNoMargin>
                  {currencyConverter(property?.selling?.price, 'GBP')}
                </BodyText>
                <div className="additional-info">
                  <div className="el-flex el-flex-row">
                    <BodyText hasNoMargin className="el-pr3 el-has-grey-text">
                      {property?.bedrooms || 0}
                      <BiBed color="#262f69" size={20} />
                    </BodyText>
                    &nbsp;
                    <BodyText hasNoMargin className="el-pr3 el-has-grey-text">
                      {property?.receptions || 0}
                      <MdOutlineMeetingRoom color="#262f69" size={20} />
                    </BodyText>
                    &nbsp;
                    <BodyText hasNoMargin className="el-pr3 el-has-grey-text">
                      {property?.bathrooms || 0}
                      <MdOutlineBathroom color="#262f69" size={20} />
                    </BodyText>
                    &nbsp;
                    <BodyText hasNoMargin className="el-has-grey-text">
                      <BiBuildingHouse color="#262f69" size={20} />
                      {numberWithCommas(property?.internalArea?.min) || 0}ft&#178;
                    </BodyText>
                  </div>
                  <div className="el-flex el-flex-row el-flex-justify-end el-flex-wrap el-pt2">
                    {typesProperty?.map((data, index) => (
                      <Button className="badge el-ml2" key={index} intent="primary">
                        <span>{data}</span>
                      </Button>
                    ))}
                  </div>
                  <SmallText hasGreyText hasNoMargin className="el-flex el-flex-row el-flex-justify-end ">
                    {property.marketingMode === 'selling'
                      ? convertText(property?.selling?.status)
                      : convertText(property?.letting?.status)}
                  </SmallText>
                </div>
              </div>
            </CardSingleProperty>
          )
        })}
      </div>
    </ListPropertiesWrapper>
  )
}

export default CardProperty

import React, { useState } from 'react'
import { reapitConnectBrowserSession } from '../../core/connect-session'
import { useReapitConnect } from '@reapit/connect-session'
import { useParams } from 'react-router-dom'
import { BodyText, StatusIndicator, Subtitle, Tabs, Title, Loader, Button, PageContainer, Icon } from '@reapit/elements'
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import { BiBed, BiBuildingHouse, BiBookmarkMinus, BiBookmarkPlus } from 'react-icons/bi'
import { MdOutlineMeetingRoom, MdOutlineBathroom } from 'react-icons/md'

import { useSingleProperty } from '../../hooks/useProperties'
import { useSingleNegotiator } from '../../hooks/useNegotiators'
// import { useSinglePropertyImages } from '../../hooks/usePropertyImages'
import TabPropertyDetails from '../ui/tab/tab-property-details'
import TabOverviewProperty from '../ui/tab/tab-overview-property'
import TabNearbyProperty from '../ui/tab/tab-nearby-property'
import ModalPropertyAssets from '../ui/modal/modal-property-assets'
import ModalNegotiator from '../ui/modal/modal-negotiator'
import ChartPriceSingleProperty from '../ui/chart/price-history-single-property'
import { currencyConverter } from '../../utils/currencyConverter'
import { numberWithCommas } from '../../utils/numberConverter'
import dummy1 from '../../assets/dummy/dummy-prop-1.webp'
import dummy2 from '../../assets/dummy/dummy-prop-2.webp'
import dummy3 from '../../assets/dummy/dummy-prop-3.webp'
import dummyFloorPlan from '../../assets/dummy/dummy-floor-plan.png'
import { HouseCard, PropertyPhotoGrid } from './__styles__/property-details-styles'
import { TabContainer } from './__styles__/property-details-styles'

const PropertyDetails = (): JSX.Element => {
  const { connectSession } = useReapitConnect(reapitConnectBrowserSession)
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, isError } = useSingleProperty(connectSession, {
    id,
    embed: ['images', 'negotiator'],
  })
  const { data: negotiatorData } = useSingleNegotiator(connectSession, {
    id: data?.negotiatorId,
  })
  // const { data: images, isLoading: isImageLoading } = useSinglePropertyImages(
  //   connectSession,
  //   { propertyId: id }
  // )
  const [tab, setTab] = useState<boolean[]>([true, false, false])
  const [isBookmarked, setAsBookmark] = useState<Boolean>(false)
  const [isModalPropertyAssets, setModalPropertyAssets] = useState<boolean>(false)
  const [isModalNegotiator, setModalNegotiator] = useState<boolean>(false)

  const renderTabContent = () => {
    if (data) {
      return (
        <>
          {tab[0] && <TabOverviewProperty data={data} />}
          {tab[1] && <TabPropertyDetails data={data} />}
          {tab[2] && <TabNearbyProperty data={data} />}
        </>
      )
    }
  }
  if (isLoading || isError) {
    return <Loader className="el-mx-auto" />
  }
  return (
    <PageContainer>
      <header className="el-flex el-flex-row el-flex-justify-between">
        <div>
          <Title hasNoMargin className="el-pb3">{` ${data?.address?.buildingNumber || 'Building Number'} ${
            data?.address?.buildingName || 'Building Name'
          }`}</Title>
          <Subtitle>
            {`${data?.address?.line1}, ${data?.address?.line3 || 'City'}, ${data?.address?.line4 || 'State'}, ${
              data?.address?.postcode || 'PostCode'
            } `}
            {/*    ${data?.address?.line2}, ${data?.address?.line3}, ${data?.address?.line4} */}
          </Subtitle>
        </div>
        {isBookmarked ? (
          <BiBookmarkMinus
            color="#262f69"
            size={48}
            style={{ cursor: 'pointer' }}
            onClick={() => setAsBookmark(!isBookmarked)}
          />
        ) : (
          <BiBookmarkPlus
            color="#262f69"
            size={48}
            style={{ cursor: 'pointer' }}
            onClick={() => setAsBookmark(!isBookmarked)}
          />
        )}
      </header>
      <div className="el-grid">
        <section className="el-col-split">
          <HouseCard>
            <PropertyPhotoGrid onClick={() => setModalPropertyAssets(true)}>
              <div className="hero">
                <img alt="property photo" src={dummy1} />
              </div>
              <div className="side-photo">
                <img alt="property photo" src={dummy2} className="thumbnail" />
                <img alt="property photo" src={dummy3} className="thumbnail" />

                <div className="thumbnail last-layer">
                  <img alt="property photo" src={dummyFloorPlan} className="" />
                  <div className="overlay">
                    <span>5+</span>
                  </div>
                </div>
              </div>
            </PropertyPhotoGrid>
            <div className="el-flex el-flex-row el-flex-justify-between el-flex-align-end el-mt4">
              <div>
                <div className="el-flex el-flex-row">
                  <BodyText hasNoMargin>
                    {data?.marketingMode === 'selling' && (
                      <>
                        <StatusIndicator intent="primary" /> For Sale
                      </>
                    )}
                    {data?.marketingMode === 'letting' && (
                      <>
                        <StatusIndicator intent="secondary" />
                        For Rent
                      </>
                    )}
                    {data?.marketingMode === 'sellingAndLetting' && (
                      <>
                        <BodyText>
                          <StatusIndicator intent="primary" /> For Sale
                        </BodyText>
                        <BodyText>
                          <StatusIndicator intent="secondary" /> For Rent
                        </BodyText>
                      </>
                    )}
                    &nbsp;|&nbsp;
                  </BodyText>
                  <BodyText hasNoMargin className="el-has-grey-text">
                    On Market Since&nbsp;
                    {data?.marketingMode === 'selling'
                      ? data?.selling?.instructed || 'No Data'
                      : data?.letting?.instructed || 'No Data'}
                  </BodyText>
                </div>

                <div className="el-flex el-flex-row el-flex-align-end">
                  <Title hasNoMargin className="el-pr4">
                    {data?.marketingMode === 'selling'
                      ? currencyConverter(data?.selling?.price, data?.currency)
                      : currencyConverter(data?.letting?.rent, data?.currency)}
                  </Title>
                  <div className="el-flex el-flex-row">
                    <BodyText hasNoMargin className="el-pr3 el-has-grey-text">
                      {data?.bedrooms || 0}
                      <BiBed color="#262f69" size={20} />
                    </BodyText>
                    &nbsp;
                    <BodyText hasNoMargin className="el-pr3 el-has-grey-text">
                      {data?.receptions || 0}
                      <MdOutlineMeetingRoom color="#262f69" size={20} />
                    </BodyText>
                    &nbsp;
                    <BodyText hasNoMargin className="el-pr3 el-has-grey-text">
                      {data?.bathrooms || 0}
                      <MdOutlineBathroom color="#262f69" size={20} />
                    </BodyText>
                    &nbsp;
                    <BodyText hasNoMargin className="el-has-grey-text">
                      <BiBuildingHouse color="#262f69" size={20} />
                      {numberWithCommas(data?.internalArea?.min) || 0}ft&#178;
                    </BodyText>
                  </div>
                </div>
              </div>
              <Button intent="primary" onClick={() => setModalNegotiator(true)}>
                <Icon icon="phoneSystem" intent="neutral" className="el-pr2" />
                Contact The Agent
              </Button>
            </div>
          </HouseCard>

          <ChartPriceSingleProperty />
        </section>
        <TabContainer className="el-col-split">
          <Tabs
            name="my-tabs"
            isFullWidth
            options={[
              {
                id: 'tab-1',
                value: '0',
                text: 'Overview',
                isChecked: tab[0],
              },
              {
                id: 'tab-2',
                value: '1',
                text: 'Property Details',
                isChecked: tab[1],
              },
              {
                id: 'tab-3',
                value: '2',
                text: 'Nearby',
                isChecked: tab[2],
              },
            ]}
            onChange={(event: any) =>
              setTab((prevTab) => {
                const changeTab = prevTab.map(() => false)
                const trueIndex = Number(event.target.value)
                changeTab[trueIndex] = !changeTab[trueIndex]
                return changeTab
              })
            }
          />
          {renderTabContent()}
        </TabContainer>
      </div>
      <ModalPropertyAssets isOpen={isModalPropertyAssets} setModalState={setModalPropertyAssets} />

      <ModalNegotiator isOpen={isModalNegotiator} setModalState={setModalNegotiator} data={negotiatorData} />
    </PageContainer>
  )
}

export default PropertyDetails

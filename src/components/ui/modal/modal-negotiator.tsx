import React from 'react'
import { BodyText, Modal } from '@reapit/elements'
import { cutomModalNegotiator } from '../__styles__/modal'
import { NegotiatorCard } from '../../pages/__styles__/property-details-styles'
import negoProfpic from '../../../assets/dummy/dummy-negotiator-pic.jpg'

const ModalNegotiator = ({
  isOpen,
  setModalState,
  data,
}: {
  isOpen: boolean
  setModalState: React.Dispatch<React.SetStateAction<boolean>>
  data
}) => {
  console.log({ negotiatordata: data })
  return (
    <Modal isOpen={isOpen} onModalClose={() => setModalState(false)} className={cutomModalNegotiator}>
      <NegotiatorCard>
        <div className="el-flex">
          <img alt="agent profpic" src={negoProfpic} />
        </div>
        <BodyText hasNoMargin>{data?.name}</BodyText>
        <BodyText hasNoMargin>{data?.workPhone || '(021) 82758899'}</BodyText>
        <BodyText hasNoMargin className="el-pb3">
          {data?.email}
        </BodyText>
        <p>-rating</p>
        <p>-office info</p>
        <p>-input form to contact them</p>
      </NegotiatorCard>
    </Modal>
  )
}

export default ModalNegotiator

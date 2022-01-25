import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel'
import ReactPlayer from 'react-player/youtube'
import { Modal } from '@reapit/elements'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'
import { customCarouselContainer, carouselModalWrapper } from '../__styles__/carousel-styles'
import dummy1 from '../../../assets/dummy/dummy-prop-1.webp'
import dummy2 from '../../../assets/dummy/dummy-prop-2.webp'
import dummy3 from '../../../assets/dummy/dummy-prop-3.webp'
import dummy4 from '../../../assets/dummy/dummy-prop-4.webp'
import dummy5 from '../../../assets/dummy/dummy-prop-5.webp'
import dummy6 from '../../../assets/dummy/dummy-prop-6.webp'
import dummy7 from '../../../assets/dummy/dummy-prop-7.webp'
import dummyFloorPlan from '../../../assets/dummy/dummy-floor-plan.png'

const ModalPropertyAssets = ({
  isOpen,
  setModalState,
}: {
  isOpen: boolean
  setModalState: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <Modal isOpen={isOpen} onModalClose={() => setModalState(false)} className={carouselModalWrapper}>
      <CarouselProvider
        naturalSlideWidth={0}
        naturalSlideHeight={0}
        totalSlides={9}
        isIntrinsicHeight
        className={customCarouselContainer}
      >
        <Slider>
          <Slide index={1}>
            <div className="video-property">
              <ReactPlayer controls url="https://youtu.be/ThvZJqYSenc" width={'100%'} />
            </div>
          </Slide>
          <Slide index={2}>
            <Image hasMasterSpinner src={dummy1} alt="dummy img" className="propery-img" />
          </Slide>
          <Slide index={3}>
            <Image hasMasterSpinner src={dummy2} alt="dummy img" className="propery-img" />
          </Slide>
          <Slide index={4}>
            <Image hasMasterSpinner src={dummy3} alt="dummy img" className="propery-img" />
          </Slide>
          <Slide index={5}>
            <Image hasMasterSpinner src={dummy4} alt="dummy img" className="propery-img" />
          </Slide>
          <Slide index={6}>
            <Image hasMasterSpinner src={dummy5} alt="dummy img" className="propery-img" />
          </Slide>
          <Slide index={7}>
            <Image hasMasterSpinner src={dummy6} alt="dummy img" className="propery-img" />
          </Slide>
          <Slide index={8}>
            <Image hasMasterSpinner src={dummy7} alt="dummy img" className="propery-img" />
          </Slide>
          <Slide index={9}>
            <Image hasMasterSpinner src={dummyFloorPlan} alt="dummy img" className="propery-img" />
          </Slide>
        </Slider>
        <ButtonBack>
          <FaChevronCircleLeft color="#262f69" size={32} />
        </ButtonBack>
        <ButtonNext>
          <FaChevronCircleRight color="#262f69" size={32} />
        </ButtonNext>
      </CarouselProvider>
    </Modal>
  )
}

export default ModalPropertyAssets

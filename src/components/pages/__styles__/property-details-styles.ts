import { styled } from '@linaria/react'

export const HouseCard = styled.div`
  .propery-img {
    max-width: -webkit-fill-available;
  }
`
export const TabContainer = styled.section`
  // position: relative;
  // overflow-y: auto;
  max-height: calc(100vh - 55px);
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  // .el-tabs-wrap {
  //   position: fixed;
  //   border-radius: unset;
  //   width: calc(50% - 4rem);
  // }
`
export const TabContentContainer = styled.div`
  overflow-y: auto;
  // margin-top: 55px;
  max-height: calc(100vh - 105px);
`

export const NegotiatorCard = styled.section`
  padding: 1rem;
  background: var(--color-blue-light2);
  img {
    max-height: 120px;
    width: 120px;
    object-fit: cover;
    border-radius: 50%;
    margin: auto;
  }
`

export const PropertyPhotoGrid = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #333;
  max-width: 100%;
  height: 428px;
  flex-basis: 100%;
  cursor: pointer;

  .hero {
    max-width: calc(100% - 198px);

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .side-photo {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 197px;
    margin-left: 1px;

    .thumbnail {
      flex-basis: 33.33333%;
      object-fit: cover;
    }

    .thumbnail.last-layer {
      position: relative;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
      .overlay {
        position: absolute;
        height:100%;
        width:100%
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(32, 40, 46, 0.42);
        color: white;
        font-size: 2.5rem;
        font-weight: 500;
      }
    }
  }
`

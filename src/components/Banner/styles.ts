import styled from 'styled-components'

export const Image = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .container {
    position: relative;
    z-index: 2;
  }
`

export const Description = styled.p`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: 100;
  position: absolute;
  top: 25px;
  letter-spacing: -1px;
`

export const Title = styled.h2`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: bold;
  line-height: normal;
  position: absolute;
  top: 215px;
  white-space: nowrap;
  width: 676px;
`

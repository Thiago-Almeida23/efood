import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  z-index: 1;
`

export const CheckoutContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 2;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.salmon};
  z-index: 2;
  padding: 32px 8px 0 8px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;

  h3 {
    color: ${colors.lightSalmon};
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  button {
    margin-bottom: 8px;
  }
`

export const Form = styled.form`
  margin-bottom: 34px;
`

export const FormGroup = styled.div`
  margin-bottom: 16px;

  label {
    font-size: 14px;
    font-weight: bold;
    color: ${colors.lightSalmon};
    margin-bottom: 8px;
    display: block;
  }

  input {
    width: 100%;
    height: 32px;
    background-color: ${colors.lightSalmon};
    color: ${colors.almostBlack};
    font-size: 14px;
    font-weight: bold;
    padding: 8px;
    border: none;
    outline: none; /* Remove a borda de foco */

    /* Remove as setinhas do campo de número */
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    -moz-appearance: textfield;
  }
`

export const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 34px;

  ${FormGroup} {
    width: 48%;
  }
`

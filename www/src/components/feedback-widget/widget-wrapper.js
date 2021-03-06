/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"
import {
  mediaQueries,
  colors,
  radii,
  shadows,
  space,
} from "../../utils/presets"

const boldEntry = keyframes`
  100% {
    transform: scale(1);
    opacity: 1;
  }
`

const opacityEntry = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`

const WrapperDiv = styled(`div`)`
  background-color: ${colors.white};
  border-top: 1px solid ${colors.ui.border.subtle};
  height: 100%;
  opacity: 0.5;
  padding: ${space[6]} 0;
  width: 100%;
  z-index: 2;

  [tabindex="-1"]:focus {
    outline: none;
  }

  .opened & {
    animation: ${boldEntry} 0.5s ease forwards;
  }

  .failed &,
  .success & {
    animation: ${opacityEntry} 0.5s ease forwards;
  }

  @media screen and (prefers-reduced-motion: reduce) {
    .opened & {
      animation: none;
      transform: scale(1);
      opacity: 1;
    }

    .failed &,
    .success & {
      animation: none;
      transform: scale(1);
      opacity: 1;
    }
  }

  .submitting & {
    transform: scale(1);
    opacity: 1;
  }

  ${mediaQueries.lg} {
    box-shadow: ${shadows.overlay};
    border: 0;
    border-radius: ${radii[2]}px;
    height: 100%;
    padding: ${space[7]} ${space[6]};
    transform: scale(0);
    transform-origin: top center;
  }
`

const WidgetWrapper = ({ children, handleClose = () => {} }) => {
  const handleEscapeKey = event => {
    if (event.keyCode === 27) {
      handleClose()
    }
  }

  return (
    <WrapperDiv role="dialog" onKeyDown={handleEscapeKey}>
      {children}
    </WrapperDiv>
  )
}

export default WidgetWrapper

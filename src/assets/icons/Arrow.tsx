import  React from "react"
import Svg, { Rect } from "react-native-svg"

const SvgComponent = (props: any) => (
  <Svg
    width={19}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      y={7.861}
      width={11.451}
      height={2.202}
      rx={1.101}
      transform="rotate(-40 0 7.86)"
      fill="#fff"
    />
    <Rect
      x={1.416}
      y={6.452}
      width={11.451}
      height={2.202}
      rx={1.101}
      transform="rotate(40 1.416 6.452)"
      fill="#fff"
    />
    <Rect
      x={0.458}
      y={6.902}
      width={17.618}
      height={2.202}
      rx={1.101}
      fill="#fff"
    />
  </Svg>
)

export default SvgComponent

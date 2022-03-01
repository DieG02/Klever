import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { Colors } from '../../utils/stylers'

const SvgComponent = (props: any) => (
  <Svg
    width={12}
    height={2}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M5.97 1.903H.81a.848.848 0 0 1-.576-.284A.928.928 0 0 1 0 1C0 .77.084.548.234.38A.848.848 0 0 1 .81.098h10.34a.834.834 0 0 1 .551.217.91.91 0 0 1 .288.537.934.934 0 0 1-.111.605.866.866 0 0 1-.457.388c-.107.033-.218.049-.33.048l-5.12.01Z'
      fill={props.color || Colors.Yellow}
    />
  </Svg>
)

export default SvgComponent

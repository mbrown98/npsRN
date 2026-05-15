import React from 'react';
import Svg, {Circle, G} from 'react-native-svg';

const ProgressPie = ({
  radius = 100,
  percentage = 0,
  color = '#000',
  backgroundColor = '#ccc',
  strokeWidth = 12,
}) => {
  const size = radius * 2;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const clamped = Math.min(100, Math.max(0, percentage));
  const strokeDashoffset =
    circumference - (clamped / 100) * circumference;

  return (
    <Svg width={size} height={size}>
      <G rotation="-90" origin={`${radius}, ${radius}`}>
        <Circle
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <Circle
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </G>
    </Svg>
  );
};

export default ProgressPie;

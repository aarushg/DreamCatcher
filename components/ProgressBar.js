import React from 'react';
import * as Progress from 'react-native-progress';

const ProgressBar = ({ progress, color }) => (
  <Progress.Bar progress={progress} color={color} />
);

export default ProgressBar;

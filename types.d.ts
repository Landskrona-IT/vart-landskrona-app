declare module '*.svg' {
  import * as React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.webp' {
  const content: number; // React Native resolves images to a number (require returns an ID)
  export default content;
}

declare module '*.png' {
  const content: number; // React Native resolves images to a number (require returns an ID)
  export default content;
}
import React from 'react';
import Color from "color-thief-react";

interface BackgroundProps {
  getBackgroundColor: (BackgroundColor: string) => void;
  getAccentColor: (AccentColor: string) => void;
  image: string;
}

const ColorThief: React.FC<BackgroundProps> = ({ getBackgroundColor, getAccentColor, image }) => {

  const hexToRGBA = (hexColor: string, alpha: number) => {
      const hex = hexColor.replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      const a = alpha;
      return `rgba(${r},${g},${b},${a})`;
  };
    
  return (
    <div>
        <Color src={image} crossOrigin="anonymous" format="hex">
          {({ data: predominantColorData }) => {
            const color = predominantColorData ?? '';
            const backgroundRGBA = hexToRGBA(color, 0.6);
            getBackgroundColor(backgroundRGBA);
            const accentRGBA = hexToRGBA(color, 0.95);
            getAccentColor(accentRGBA);

            return (
              <div style={{ display: 'flex', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
                <img src='/loading.gif' style={{ width: '200px', height: '150px' }}/>
              </div>
            )
          }}
        </Color>
    </div>
  );
};

export default ColorThief;
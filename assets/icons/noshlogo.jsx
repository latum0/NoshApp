import React from 'react';
import { SvgXml } from 'react-native-svg';

const NoshLogo = ({ width, height }) => {
  const svgXml = `
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="${width}" height="${height}" viewBox="0 0 106.000000 38.000000"
      preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,38.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
        <path d="M0 376 c0 -3 23 -43 50 -91 28 -48 50 -91 50 -97 0 -6 -11 -31 -25
        -55 l-26 -43 55 0 56 0 25 51 26 50 -37 67 c-66 119 -69 122 -125 122 -27 0
        -49 -2 -49 -4z"/>
        <path d="M216 240 c27 -49 28 -50 76 -50 l48 0 -25 50 -25 50 -51 0 -50 0 27
        -50z"/>
        <path d="M429 205 c-12 -59 -12 -75 -3 -75 13 0 34 58 34 93 0 33 18 8 30 -43
        10 -42 16 -50 35 -50 19 0 24 8 35 63 6 34 14 68 16 75 2 6 -3 12 -10 12 -9 0
        -17 -16 -21 -42 -12 -74 -21 -77 -41 -15 -14 46 -22 57 -39 57 -18 0 -23 -10
        -36 -75z"/>
        <path d="M626 249 c-27 -32 -33 -67 -16 -100 14 -26 80 -26 104 0 22 24 31 83
        17 110 -18 34 -73 29 -105 -10z m74 -4 c23 -27 -6 -95 -40 -95 -34 0 -36 54
        -2 93 18 21 26 21 42 2z"/>
        <path d="M803 272 c-11 -7 -16 -26 -14 -49 0 -7 10 -21 22 -32 27 -25 16 -44
        -22 -39 -20 3 -29 0 -29 -9 0 -17 71 -18 88 -1 18 18 15 43 -8 63 -11 10 -20
        27 -20 38 0 15 5 18 25 13 18 -5 25 -2 25 9 0 16 -45 21 -67 7z"/>
        <path d="M912 222 c-16 -75 -15 -92 2 -92 9 0 16 12 18 28 2 21 9 28 31 30 27
        3 29 2 22 -27 -5 -24 -3 -31 9 -31 16 0 21 12 31 75 3 22 8 48 11 58 4 11 0
        17 -11 17 -9 0 -18 -12 -21 -30 -5 -24 -12 -30 -31 -30 -23 0 -25 3 -19 30 4
        24 2 30 -12 30 -14 0 -21 -14 -30 -58z"/>
        <path d="M222 148 c-43 -73 -72 -127 -72 -133 0 -3 21 -5 47 -3 l47 3 43 75
        c23 41 42 78 43 83 0 4 -20 7 -44 7 -39 0 -47 -4 -64 -32z"/>
      </g>
    </svg>
  `;

  return <SvgXml xml={svgXml} width={width} height={height} />;
};

export default NoshLogo;

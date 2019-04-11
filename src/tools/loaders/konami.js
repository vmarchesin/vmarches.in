// import React from 'react';
// import Image from 'components/Image';
// import styled from 'styled-components';
import turnDown from 'turn-down-for-what';

// import toastyImage from 'assets/images/toasty.png';
// import toastyAudio from 'assets/audio/toasty.mp3';

// const ToastyImage = styled(Image)`
//   position: fixed;
//   bottom: 0;
//   right: 0;
//   z-index: 9999;

//   animation: slide-in .5s ease-in-out;
// `;

export default (() => {
  // const audio = new Audio(toastyAudio);
  // const image = <ToastyImage src={toastyImage} />;
  const timeout = 0;

  return {
    action: () => {
      turnDown(['img', 'svg.fa-2x']);
    },
    timeout,
  };

  // return {
  //   action: () => audio.play(),
  //   image,
  //   timeout: 1000,
  // };
})();

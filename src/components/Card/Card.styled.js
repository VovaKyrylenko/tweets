import styled from '@emotion/styled';

import logo from 'img/Logo.png';
import bg from 'img/card-image.png';

export const CardBlock = styled.li`
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  position: relative;
`;

export const CardLogo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 75px;
  height: 22px;
  background: url(${logo});
  background-size: contain;
`;

export const CardImage = styled.div`
  position: absolute;
  width: 308px;
  height: 168px;
  left: 36px;
  top: 28px;
  background: url(${bg});
`;

export const CardLine = styled.div`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

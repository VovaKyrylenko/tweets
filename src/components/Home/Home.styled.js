import styled from "@emotion/styled";

export const Greeting = styled.h1`
  font-size: 2.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
  animation: fadeIn 2s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
      transform: translate(-50%, -50%);
    }
  }
`;

import {
  AvatarBackground,
  AvatarImage,
  AvavtarWrapper,
} from "./Avavtar.styled";

const Avatar = ({ src }) => {
  return (
    <AvavtarWrapper>
      <AvatarBackground>
        <AvatarImage src={src} />
      </AvatarBackground>
    </AvavtarWrapper>
  );
};

export default Avatar;

import styled from "styled-components";
import video from "../../videos/subnautica.mp4";
import wallpaper from "../../images/banner.png";

export const BackgroundVid = styled.video`
  position: fixed;
  float: left;
  top: 0;
  padding: none;
  filter: blur(8px);
  -webkit-filter: blur(8px);

  z-index: -999;

  @media (min-aspect-ratio: 16/9) {
    width: 100%;
    height: auto;
  }
  @media (max-aspect-ratio: 16/9) {
    width: auto;
    height: 100%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Blackholder = styled.div`
  display: block;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  width: 100vw;
  top: 0;
  float: left;
  height: 100vh;
  z-index: -998;
`;

function BackgroundVideo() {
  return (
    <>
      <Blackholder />
      <BackgroundVid poster={wallpaper} autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </BackgroundVid>
    </>
  );
}

export default BackgroundVideo;

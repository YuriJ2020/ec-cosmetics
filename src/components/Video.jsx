import React from "react";
import { MDBContainer } from "mdbreact";

import ScrollAnimation from "react-animate-on-scroll";

import ReactPlayer from "react-player";

const Video = () => {
  return (
    <>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <MDBContainer fluid className="p-0">
          <ReactPlayer
            className="react-player"
            url="../videos/video-comp-2.mp4"
            width="100%"
            height="100%"
            controls={false}
            muted={true}
            playing={true}
            loop={true}
          />
        </MDBContainer>
      </ScrollAnimation>
    </>
  );
};

export default Video;

import React, { useEffect, useRef } from "react";
import ProfileCard from "../common/Profile/ProfileCard";
import ProfileSubHeader from "../common/Profile/ProfileSubHeader";
// @ts-ignore
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { MasonryContainer, StyledProfileContents } from "./ProfileP.style";
import item1 from "../../assets/img/item1.png";
import test1 from "../../assets/img/test1.png";
import test2 from "../../assets/img/test2.png";
import test3 from "../../assets/img/test3.png";
import test4 from "../../assets/img/test4.png";
import test5 from "../../assets/img/test5.png";
import test6 from "../../assets/img/test6.png";
import test7 from "../../assets/img/test7.png";
import test8 from "../../assets/img/test8.png";
import test9 from "../../assets/img/test9.png";
import test10 from "../../assets/img/test10.png";
import Album from "../common/Album";

const ProfileP = () => {
  const target = useRef(null);

  let options = {
    threshold: 1.0,
  };
  const test = ([entry]: any, observer: any) =>
    console.log(entry.isIntersecting && "a");

  useEffect(() => {
    let observer = new IntersectionObserver(test, options);
    target.current && observer.observe(target.current);
  }, []);
  return (
    <>
      <ProfileCard />
      <ProfileSubHeader />
      <MasonryContainer>
        <Masonry columnsCount={5} gutter={20}>
          <img src={test1} />
          <img src={test2} />
          <img src={test3} />
          <img src={test4} />
          <img src={test2} />
          <img src={test3} />
          <img src={test1} />
          <img src={test4} />
          <img src={test6} />
          <img src={test4} />
          <img src={test8} />
          <img src={test9} />
          <img src={test10} />
          <img src={test2} />
          <img src={test6} />
          <img src={test5} />
          <img src={test2} />
          <img src={test5} />
          <img src={test6} />
          <img src={test2} />
          <img src={test7} />
          <img src={test8} />
          <img src={test10} />
          <img src={test2} />
          <img src={test7} />
          <img src={test9} />
          <img src={test1} />
          <img src={test4} />
          <img src={test6} />
          <img src={test4} />
          <img src={test8} />
          <img src={test9} ref={target} />
        </Masonry>
      </MasonryContainer>
      {/* <StyledProfileContents>
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
      </StyledProfileContents> */}
    </>
  );
};

export default ProfileP;

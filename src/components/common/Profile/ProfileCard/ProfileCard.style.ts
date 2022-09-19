import styled from "styled-components";
import cardImage from "../../../../assets/img/profilecard.png";
import { colorPalette } from "../../../../styles/ColorPalette";
import { fontPalette } from "../../../../styles/FontPalette";

export const StyledProfileCard = styled.div`
  z-index: 500;
  width: 100%;
  display: flex;
  height: 530px;
  position: relative;
  z-index: 10;
  & > img {
    position: absolute;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;

export const StyledProfileCardWrapper = styled.div`
  width: 80%;
  height: 50%;
  box-sizing: border-box;
  margin: auto;
`;

export const StyledProfileCardMain = styled.div`
  height: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  /* & > img {
    margin: 0 auto 0 0;
    width: 256px;
    height: 256px;
    box-sizing: border-box;
    margin-right: 50px;
  } */
`;

export const StyledProfileCardMainText = styled.div`
  margin: 0 auto 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const StyledProfileCardMainTextTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const StyledProfileCardName = styled.div`
  font-size: ${fontPalette.font48};
  color: ${colorPalette.white};
  font-weight: 700;
  margin-bottom: 15px;
`;

export const StyledProfileCardIntroduce = styled.div`
  font-size: ${fontPalette.font22};
  color: ${colorPalette.white};
  font-weight: 400;
`;

export const StyledProfileCardMainSubText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledProfileCardAreaEmail = styled.div`
  font-size: ${fontPalette.font16};
  color: ${colorPalette.white};
  font-weight: 400;
  margin-bottom: 15px;
  display: flex;
  text-align: center;
  & > img {
    width: 20px;
    height: 17px;
    padding-right: 15px;
  }
`;

export const StyledProfileCardFollowers = styled.div`
  font-size: ${fontPalette.font16};
  color: ${colorPalette.white};
  font-weight: 400;
  display: flex;
  align-items: center;

  & > span {
    font-size: ${fontPalette.font18};
    color: ${colorPalette.lightPurple};
    font-weight: 700;
    margin-right: 5px;
  }

  & > #followers {
    width: 20px;
    height: 17px;
    padding-right: 15px;
  }

  & > #dot {
    width: 3px;
    height: 3px;
    margin-right: 7px;
    margin-left: 7px;
  }
`;

export const StyledProfileCardSub = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-top: 26px;
  gap: 16px;
`;

export const StyledProfileCardMainWrapper = styled.div`
  height: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  & > img {
    margin: 0 auto 0 0;
    width: 256px;
    height: 256px;
    box-sizing: border-box;
    margin-right: 50px;
  }
`;

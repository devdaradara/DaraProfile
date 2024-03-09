import React from "react";
import styled from "styled-components";

import RankingIcon from "../assets/icons/ranking.webp";
import CodeIcon from "../assets/icons/code.webp";
import BookIcon from "../assets/icons/book.webp";
import SchoolIcon from "../assets/icons/school.webp";

interface OtherDetailProps {
  type: string;
  contents: string;
}

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 12px 0px;
`;

const DetailIcon = styled.img`
  height: 30px;
  margin-right: 20px;
`;

const DetailText = styled.div`
  font-family: Pretendard;
  font-weight: 200;
  font-size: 24px;
  color: #333;
  text-align: center;
`;

function OtherDetail({ type, contents }: OtherDetailProps) {
  return (
    <DetailContainer>
      <DetailIcon
        src={
          type === "ranking"
            ? RankingIcon
            : type === "code"
            ? CodeIcon
            : type === "study"
            ? BookIcon
            : SchoolIcon
        }
      />
      <DetailText>{contents}</DetailText>
    </DetailContainer>
  );
}

export default OtherDetail;

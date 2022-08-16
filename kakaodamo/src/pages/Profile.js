import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  text-align: center;

  .user_id {
    height: 100px;
  }

  img {
    border-radius: 50%;
    width: 300px;
    height: 300px;
  }
`;

const Profile = () => {
  const [user_id, setUserId] = useState();
  const [nickName, setNickName] = useState();
  const [profileImage, setProfileImage] = useState();
  //   console.log(window.Kakao);
  const getProfile = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });
      // 사용자 정보 변수에 저장
      setUserId(data.id);
      setNickName(data.properties.nickname);
      setProfileImage(data.properties.profile_image);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <ProfileBox>
      <div className="user_id">user_id : {user_id}</div>

      <div className="image_box">
        <img src={profileImage} alt={"이미지"} />
      </div>
      <h2>{nickName}</h2>
    </ProfileBox>
  );
};
export default Profile;

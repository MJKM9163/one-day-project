import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProfileBox = styled.div`
  background-color: #f0f5f1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;

  .intro {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
    animation: userHello 0.5s ease forwards;
    padding-top: 100px;
  }

  .user_id {
    height: 50px;
    opacity: ${(props) => (props.intro ? "0%" : "100%")};
    transition: 1s;
  }

  .user_name {
    opacity: 0%;
    transition: 1s;
    opacity: ${(props) => (props.intro ? "0%" : "100%")};
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      padding: 10px 0px;
    }
    div {
      width: 200px;
      height: 75px;
      font-size: 24px;
      img {
        vertical-align: middle;
        border-radius: 50%;
        width: 50px;
        padding-right: 10px;
      }
    }
  }
  .image_box {
    padding-top: 100px;
    opacity: ${(props) => (props.intro ? "0%" : "100%")};
    transition: 1s;
    img {
      border-radius: 50%;
      width: 300px;
      height: 300px;
    }
  }
  @keyframes userHello {
    0% {
      padding-top: 100px;
      opacity: 0%;
    }
    100% {
      padding-top: 0px;
      opacity: 100%;
    }
  }
`;

const Profile = () => {
  const [user_id, setUserId] = useState();
  const [nickName, setNickName] = useState();
  const [profileImage, setProfileImage] = useState();
  const [intro, setIntro] = useState(true);
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
    let time = setTimeout(() => {
      setIntro(false);
    }, 1800);

    return () => clearTimeout(time);
  }, []);
  return (
    <ProfileBox intro={intro}>
      {intro ? (
        <div className="intro">
          <h2>{nickName} 님</h2>
          <h2>어서오세요~</h2>
          <h2>기다리고 있었어요!</h2>
        </div>
      ) : null}
      <div className="user_id">user_id : {user_id}</div>

      <div className="image_box">
        <img src={profileImage} alt={"이미지"} />
      </div>
      <div className="user_name">
        <h2>{nickName}</h2>
        <div>
          <a href="https://github.com/MJKM9163">
            <img src="/images/git.png" alt="깃 이미지" />
            github
          </a>
        </div>
        <div>
          <a href="https://green-consonant-515.notion.site/9a88fdbad2394fb0b5a30df3221458f5?v=bc4ae03b7b554c1face6d482003c8f66">
            <img src="/images/notion.png" alt="노션 이미지" />
            notion
          </a>
        </div>
      </div>
    </ProfileBox>
  );
};
export default Profile;

import React from "react";
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from "../keys";
const Auth = () => {
  const code = new URL(window.location.href).searchParams.get("code");

  const navigate = useNavigate();
  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });
    try {
      // access token 가져오기
      const res = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        payload
      );

      // Kakao Javascript SDK 초기화
      window.Kakao.init(CLIENT_ID);
      // access token 설정
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getToken();
  }, []);
  return null;
};
export default Auth;

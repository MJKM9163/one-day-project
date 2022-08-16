import React, { useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import { CLIENT_ID, REDIRECT_URI } from "../keys";
//http://localhost:3000/oauth/callback/kakao
const Handler = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1];
  const code = new URL(window.location.href).searchParams.get("code");

  const getKakaoToken = async () => {
    await fetch("https://kauth.kakao.com/oauth/token", {
      method: "POST",
      headers: { "Content-type": "application/x-www-form-urlencoded" },
      body: `grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          localStorage.setItem("token", data.access_token);
        } else {
          console.log("ss");
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!location.search) {
      return;
    }
    getKakaoToken();
  }, []);

  return <div style={{ textAlign: "center" }}>토큰 받는 중..</div>;
};

export default Handler;

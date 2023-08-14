import React from "react";
import { Navigate } from "react-router-dom";

const SocialLogin = (props) => {
  const getUrlParameter = (name) => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    return params.get(name);
  };

  const handleSocialLogin = (provider) => {
    switch (provider) {
      case "github":
        // GitHub 로그인 처리 로직
        // 필요한 API 호출 및 인증 흐름을 구현합니다.
        break;
      case "google":
        // Google 로그인 처리 로직
        // 필요한 API 호출 및 인증 흐름을 구현합니다.
        break;
      case "NAVER":
        break;
      // 다른 소셜 공급자에 대한 처리 추가
      default:
        // 처리하지 않는 공급자에 대한 예외 처리
        break;
    }
  };

  const token = getUrlParameter("token");

  console.log("토큰 파싱: " + token);

  if (token) {
    console.log("로컬스토리지에 토큰 저장" + token);
    localStorage.setItem("ACCESS_TOKEN", token);
    return (
      <Navigate
        to={{
          pathname: "/",
          state: { from: props.location },
        }}
      />
    );
  } else {
    // 여러 소셜 로그인 공급자를 처리할 수 있도록 지원 추가
    const provider = getUrlParameter("provider"); // 공급자 쿼리 파라미터 예상
    switch (provider) {
      case "github":
        // GitHub 로그인 처리
        return handleSocialLogin("github");
      case "google":
        // Google 로그인 처리
        return handleSocialLogin("google");
      // 다른 소셜 공급자에 대한 case 추가
      default:
        return (
          <Navigate
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        );
    }
  }
};

export default SocialLogin; // SocialLogin 컴포넌트를 내보냅니다.
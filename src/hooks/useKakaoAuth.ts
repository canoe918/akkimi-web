import {
  COOKIE_KEY_ACCESS_TOKEN,
  COOKIE_KEY_REFRESH_TOKEN,
} from "@/libs/const/cookie.const";
import { ThirdPartyAuthException } from "@/libs/exception";
import Log from "@/libs/log";
import { setCookie } from "cookies-next";
import dayjs from "dayjs";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const useKakaoAuth = () => {
  const searchParams = useSearchParams();
  const isKakaoAuthRedirectedParams = searchParams.get("code");

  const checkKakaoPropertyExist = () => {
    if ("Kakao" in window) {
      return true;
    } else {
      throw new ThirdPartyAuthException({
        message: "Kakao is not defined in window",
      });
    }
  };

  const initialize = () => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js";
    script.integrity =
      "sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    script.addEventListener("load", () => {
      Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_AUTH_KEY);
      Log.log(Kakao.isInitialized());
    });
  };

  const loginWithKakao = (redirectUri: string) => {
    if (checkKakaoPropertyExist()) {
      Kakao.Auth.authorize({
        redirectUri,
      });
    }
  };

  const logout = () => {
    Kakao.Auth.logout();
  };

  const getAuthCode = async () => {
    try {
      const response = await fetch(`https://kauth.kakao.com/oauth/token`, {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({
          grant_type: "authorization_code",
          client_id: process.env.NEXT_PUBLIC_KAKAO_REST_AUTH_KEY,
          redirect_uri: "http://localhost:3000",
          code: isKakaoAuthRedirectedParams,
          client_secret: process.env.NEXT_PUBLIC_KAKAO_REST_SECRET_KEY,
        }),
      });

      const jsonResponse = await response.json();
      const {
        access_token,
        expires_in,
        refresh_token,
        refresh_token_expires_in,
      } = jsonResponse ?? {};
      const now = dayjs();

      setCookie(COOKIE_KEY_ACCESS_TOKEN, access_token, {
        expires: now.add(expires_in, "seconds").toDate(),
      });
      setCookie(COOKIE_KEY_REFRESH_TOKEN, refresh_token, {
        expires: now.add(refresh_token_expires_in, "seconds").toDate(),
      });

      // remove code query params
      const redirectUrl = window.location.pathname;
      window.location.href = redirectUrl;
    } catch (error) {
      throw new ThirdPartyAuthException({
        error,
        message: "failed to get token",
      });
    }
  };

  useEffect(() => {
    if (isKakaoAuthRedirectedParams) {
      getAuthCode();
    }
  }, [isKakaoAuthRedirectedParams]);

  return {
    initialize,
    loginWithKakao,
    logout,
  };
};

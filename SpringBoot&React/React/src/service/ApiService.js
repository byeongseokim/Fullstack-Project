import { API_BASE_URL } from "../api-config";

export function call(api, method, request) {
  let headers = new Headers({
    "Content-Type": "application/json",
  });

  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if (accessToken && accessToken !== null) {
    headers.append("Authorization", "Bearer " + accessToken);
  }

  let options = {
    headers: headers,
    method: method,
  };

  if (request) {
    options.body = JSON.stringify(request);
  }

  return fetch(API_BASE_URL + api, options)
    .then((response) => {
      if (response.status === 200) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          return response.json(); // Parse JSON here
        } else {
          // Handle non-JSON response here
          return response.text().then((text) => {
            throw new Error("Response is not in JSON format: " + text);
          });
        }
      } else if (response.status === 403) {
        window.location.href = "/login"; // Redirect
      } else {
        throw new Error(response.statusText); // Throw an error for non-200 responses
      }
    })
    .catch((error) => {
      console.error("http error", error);
      throw error; // Re-throw the error to propagate it further
    });
}

export function signin(userDTO) {
  return call("/auth/signin", "POST", userDTO)
    .then((response) => {
      if (response.token) {
        // 로컬 스토리지에 토큰 저장
        localStorage.setItem("ACCESS_TOKEN", response.token);
        // token이 존재하는 경우 Todo 화면으로 리디렉트
        window.location.href = "/";
      }
    });
}

export function signout() {
  localStorage.setItem("ACCESS_TOKEN", null);
  window.location.href = "/login";
}

export function signup(userDTO) {
  return call("/auth/signup", "POST", userDTO);
}

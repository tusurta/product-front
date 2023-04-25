import { LocalStorage } from "common/localStorage";
import { decodeToken } from "common/util";
import { useEffect, useState } from "react";

export const useProfile = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const token = LocalStorage.getItem<string>("auth_token");
    const { tokenInfo } = decodeToken(token);
    console.log({ tokenInfo });
    if (tokenInfo) {
      const { username } = tokenInfo;
      setUserName(username);
    }
  }, []);
  return { userName };
};

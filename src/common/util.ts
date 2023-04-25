import { format } from "date-fns";
import { ja } from "date-fns/locale";
import jwtDecode from "jwt-decode";
import { decode } from "punycode";

type JWTDecoded = {
  exp: number;
  iat: number;
  role: "admin" | "user";
  sub: number;
  username: string;
};

type TokenInfo = {
  isValid: boolean;
  tokenInfo?: JWTDecoded;
};

export const decodeToken = (token?: string): TokenInfo => {
  if (!token) return { isValid: false };
  const decoded = jwtDecode<JWTDecoded>(token);
  const exp = decoded.exp;
  const now = Date.now() / 1000;
  const isValid = exp > now;
  return { isValid, tokenInfo: decoded };
};

export const parseDate = (date: string) => {
  const parsed = format(new Date(date), "yyyy/MM/dd HH:mm", {
    locale: ja,
  });
  return parsed;
};

import { useRouter } from "next/router";
import { useEffect } from "react";

export const Private = ({ children, auth }: any) => {
  const Router = useRouter();

  useEffect(() => {
    if (auth === null) {
      Router.push("/user/auth/login");
    }
  });
  if (auth === null) return null;
  return <> {auth && children}</>;
};

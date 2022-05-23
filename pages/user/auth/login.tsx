import React, { useState } from "react";
import { useAuthContext } from "../../../Context/Authcontext";
import shopping1 from "../../../assets/shopping1.png";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const { Google, currentUser }: any = useAuthContext();
  const Router = useRouter();
  const [isCaptcha, setIsCaptcha] = useState<any>("");

  function onChange(value: any) {
    setIsCaptcha(value);
  }
  const onSignIn = () => {
    if (!isCaptcha) {
      setIsCaptcha(null);
      return;
    }

    Google();
  };

  if (currentUser) {
    Router.push("/user/account/myaccount/profile");
  }
  {
    console.log(process.env.CAPTCHA);
  }

  return (
    <>
      {currentUser == null && (
        <div className="login-main">
          <div className="login">
            <div className="img">
              <Image src={shopping1} alt="shopping1" />
            </div>
            <div className="reminder">
              <p>To continue in shopping you must have credential</p>
            </div>
            <div className="captcha">
              <ReCAPTCHA
                sitekey={`${process.env.CAPTCHA}`}
                onChange={onChange}
              />
            </div>
            {isCaptcha === null && (
              <div className="captchaErr">
                <p>please confirm that you are not a robot!</p>
              </div>
            )}
            <div className="action">
              <button onClick={onSignIn}>Sign in with google</button>{" "}
            </div>
            <div className="policy">
              <p>
                Check our{" "}
                <Link href="/privacyandpolicy">Privacy and Policy </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;

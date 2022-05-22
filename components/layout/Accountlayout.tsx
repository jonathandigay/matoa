import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuthContext } from "../../Context/Authcontext";

export const Accountlayout = ({ children, currentUser }: any) => {
  const Router = useRouter();
  const { dpUploadProgress, UpdateDP }: any = useAuthContext();
  const [active, setActive] = useState("profile");
  const [menu, setMenu] = useState(false);
  const [preview, setPreview] = useState<any>();

  const handleOnChange = (e: any) => {
    const file = e.target.files[0];
    setPreview(file);
  };

  const onUpdateDp = async ({ email }: any) => {
    if (!email) return null;
    if (!preview) return null;

    await UpdateDP({ email, file: preview });
  };
  const onCancelUpload = ({ email }: any) => {
    setPreview("");
  };
  const onActive = (payload: string) => {
    setMenu(!menu);
    window.localStorage.setItem("accountnav", payload);
    const nav: any = window.localStorage.getItem("accountnav");
    setActive(nav);
  };

  useEffect(() => {
    const nav: any = window.localStorage.getItem("accountnav");
    setActive(nav);
  }, [onActive, active, setActive]);

  return (
    <div className="my-account">
      <div
        className={`account-navbar ${menu && "navbar-on"} ${
          !menu && "navbar-off"
        }`}
      >
        <div className={`navbar `}>
          <div className="toogler" onClick={() => setMenu(!menu)}>
            {!menu && <span className="material-icons">menu</span>}
            {menu && <span className="material-icons">close</span>}
          </div>
          <div className="dp">
            <div className="img">
              {currentUser && !preview && (
                <Image
                  src={currentUser.profile}
                  layout="fill"
                  priority
                  alt={currentUser.name}
                />
              )}
              {preview && (
                <Image
                  src={URL.createObjectURL(preview)}
                  layout="fill"
                  alt="preview"
                  className="preview"
                />
              )}
              {preview && (
                <div
                  className="overlay"
                  style={{
                    transform: `translateY(${
                      dpUploadProgress && dpUploadProgress
                    })`,
                  }}
                ></div>
              )}
            </div>
          </div>
          {dpUploadProgress && (
            <p className="upload_progress">{dpUploadProgress}</p>
          )}
          <div className="upload-btn">
            <div className="action">
              {preview && !dpUploadProgress && (
                <div className="label">
                  <label onClick={onCancelUpload}>Cancel</label>
                </div>
              )}

              {preview && !dpUploadProgress && (
                <div className="label">
                  <label
                    onClick={() =>
                      onUpdateDp({ email: currentUser && currentUser.email })
                    }
                  >
                    Update DP
                  </label>
                </div>
              )}

              {!preview && (
                <div className="label">
                  <label htmlFor="uploadImg">Choose File</label>
                </div>
              )}

              <input
                type="file"
                id="uploadImg"
                accept="image/*"
                hidden
                onChange={handleOnChange}
              />
            </div>
          </div>
          {/* nav  */}
          <div className="nav">
            <Link href="/user/account/myaccount/profile" passHref>
              <div className="label">
                <h3>MY ACCOUNT</h3>
              </div>
            </Link>

            <div className="nav-lists">
              <Link href="/user/account/myaccount/profile" passHref>
                <div
                  className={`nav-list ${active === "profile" && "active"}`}
                  onClick={() => onActive("profile")}
                >
                  <p>profile</p>
                </div>
              </Link>
              <Link href="/user/account/myaccount/signout" passHref>
                <div
                  className={`nav-list ${active === "signout" && "active"}`}
                  onClick={() => onActive("signout")}
                >
                  <p>sign out</p>
                </div>
              </Link>
            </div>
          </div>
          {/* nav  */}
          {/* nav  */}
          <div className="nav">
            <Link href="/user/account/mypurchases/purchases" passHref>
              <div className="label">
                <h3>MY PURCHASES</h3>
              </div>
            </Link>

            <div className="nav-lists">
              <Link href="/user/account/mypurchases/purchases" passHref>
                <div
                  className={`nav-list ${active === "purchase" && "active"}`}
                  onClick={() => {
                    window.localStorage.setItem("purchasesnav", "toreceive");
                    onActive("purchase");
                  }}
                >
                  <p>purchases</p>
                </div>
              </Link>
              <Link href="/user/account/mypurchases/cancels" passHref>
                <div
                  className={`nav-list ${active === "cancels" && "active"}`}
                  onClick={() => onActive("cancels")}
                >
                  <p>Cancels</p>
                </div>
              </Link>
            </div>
          </div>
          {/* nav  */}
        </div>
      </div>

      <div className="account-wall">{children}</div>
    </div>
  );
};

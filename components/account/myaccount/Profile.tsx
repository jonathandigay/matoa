import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../../Context/Authcontext";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
const Profile = ({ currentUser }: any) => {
  const { UpdateUser, isComplete }: any = useAuthContext();
  const [userInfo, setUserInfo] = useState({
    phone: currentUser.phone,
    gender: currentUser.gender,
    barangay: currentUser.barangay,
    municipality: currentUser.municipality,
    city: currentUser.city,
    country: currentUser.country,
    postal: currentUser.postal,
  });
  const Router = useRouter();
  const { gender, barangay, phone, municipality, city, country, postal } =
    userInfo;

  const onUserInfoChange = (e: any) => {
    const { value, name } = e.target;
    console.log(name, ":", value);
    setUserInfo({ ...userInfo, [name]: value });
  };
  useEffect(() => {
    if (isComplete === false) {
      Router.push("/user/account/myaccount/profile");
      toast.warn("you  will need to completed your profile!");
      return;
    }
  }, []);

  const onUpdateUser = () => {
    UpdateUser({
      gender,
      barangay,
      phone,
      municipality,
      city,
      country,
      postal,
    });
  };

  return (
    <div className="profile-main">
      <div className="profile">
        <div className="header">
          <h1>My profile</h1>
          <p>manage and protect your profile</p>
        </div>
        <div className="profile-contents">
          <div className="profile-infos">
            <div className="primary">
              <div className="info">
                <label>Name:</label>
                <h3>{currentUser.name}</h3>
              </div>
              <div className="info">
                <label>Email:</label>
                <h3>{currentUser.email}</h3>
              </div>
            </div>

            <div className="phonenumber">
              <div className="title">
                <h1>Phone #:</h1>
              </div>
              <div className="code"></div>
              <input
                type="tel"
                name="phone"
                defaultValue={currentUser.phone}
                onChange={(e) => onUserInfoChange(e)}
              />
            </div>

            <div className="gendersWrapper">
              <div className="title">
                <h1>Gender:</h1>
              </div>
              <div className="genders">
                <div className="gender">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    defaultChecked={currentUser.gender === "female" && true}
                    onChange={(e) => onUserInfoChange(e)}
                  />
                  <span>Female</span>
                </div>
                <div className="gender">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    defaultChecked={currentUser.gender === "male" && true}
                    onChange={(e) => onUserInfoChange(e)}
                  />
                  <span>Male</span>
                </div>
                <div className="gender">
                  <input
                    type="radio"
                    name="gender"
                    defaultChecked={currentUser.gender === "others" && true}
                    value="others"
                    onChange={(e) => onUserInfoChange(e)}
                  />
                  <span>Others</span>
                </div>
              </div>
            </div>

            <div className="address">
              <div className="title">
                <h1>Address:</h1>
              </div>
              <form>
                <div className="fields">
                  <div className="field">
                    <label htmlFor="barangay">street/barangay</label>
                    <input
                      id="barangay"
                      name="barangay"
                      type="text"
                      defaultValue={currentUser.barangay}
                      onChange={(e) => onUserInfoChange(e)}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="municipality">municipality</label>
                    <input
                      id="municipality"
                      name="municipality"
                      type="text"
                      defaultValue={currentUser.municipality}
                      onChange={(e) => onUserInfoChange(e)}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="city">city/province</label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      defaultValue={currentUser.city}
                      onChange={(e) => onUserInfoChange(e)}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="country">country</label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      defaultValue={currentUser.country}
                      onChange={(e) => onUserInfoChange(e)}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="postal">postal code</label>
                    <input
                      id="postal"
                      name="postal"
                      type="text"
                      defaultValue={currentUser.postal}
                      onChange={(e) => onUserInfoChange(e)}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="action-btn">
          {(gender !== currentUser.gender ||
            barangay !== currentUser.barangay ||
            phone !== currentUser.phone ||
            municipality !== currentUser.municipality ||
            city !== currentUser.city ||
            country !== currentUser.country ||
            postal !== currentUser.postal) && (
            <button onClick={onUpdateUser}> Save Changes</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

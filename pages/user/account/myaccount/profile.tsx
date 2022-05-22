import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../../../Context/Authcontext";
import { Accountlayout } from "../../../../components/layout/Accountlayout";
import { Private } from "../../../../Routes/privateroute";
import { Formik, Field, Form } from "formik";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import * as Yup from "yup";
const Profile = () => {
  const { UpdateUser, currentUser, isComplete, setIsComplete }: any =
    useAuthContext();
  const initialValues = {
    phone: "",
    gender: "",
    barangay: "",
    municipality: "",
    city: "",
    country: "",
    postal: "",
  };

  const Validate = Yup.object({
    phone: Yup.string().required("required"),
    gender: Yup.string().required("required"),
    barangay: Yup.string().required("required"),
    municipality: Yup.string().required("required"),
    city: Yup.string().required("required"),
    country: Yup.string().required("required"),
    postal: Yup.string().required("required"),
  });
  const [isForm, setIsForm] = useState(false);

  const onFormEdit = () => {
    setIsForm(!isForm);
  };

  const onUpdateUser = ({
    gender,
    barangay,
    phone,
    municipality,
    city,
    country,
    postal,
  }: any) => {
    if (gender || barangay || phone || municipality || city || postal) {
      UpdateUser({
        gender,
        barangay,
        phone,
        municipality,
        city,
        country,
        postal,
      });
    }
  };
  return (
    <>
      <Private auth={currentUser}>
        {currentUser && (
          <Accountlayout currentUser={currentUser}>
            <div className="profile-main">
              <div className="profile">
                {isComplete === false && (
                  <div className="not-complete">
                    <div>profile not complete </div>
                  </div>
                )}

                <div className="header">
                  <h1>My profile</h1>
                  <p>manage and protect your profile</p>
                </div>

                {!isForm && (
                  <div className="profile-contents">
                    <div className="edit">
                      <button onClick={onFormEdit}>
                        <span className="material-icons">edit</span>
                      </button>
                    </div>

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

                        <div className="info">
                          <label>Phone:</label>
                          <h3>
                            {currentUser.phone ? currentUser.phone : "required"}
                          </h3>
                        </div>

                        <div className="info">
                          <label>Gender:</label>
                          <h3>
                            {currentUser.gender
                              ? currentUser.gender
                              : "required"}
                          </h3>
                        </div>

                        <div className="info">
                          <label>Address:</label>
                          <h3>
                            {currentUser.barangay
                              ? currentUser.barangay
                              : "required"}
                            {" / "}
                            {currentUser.municipality
                              ? currentUser.municipality
                              : "required"}
                            {" / "}
                            {currentUser.city ? currentUser.city : "required"}
                            {" / "}
                            {currentUser.country
                              ? currentUser.country
                              : "required"}
                          </h3>
                        </div>
                        <div className="info">
                          <label>CreatedAt:</label>
                          <h3>{currentUser.createdAt}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* form */}
                {isForm && (
                  <div className="form">
                    <div className="close" onClick={onFormEdit}>
                      <button>
                        <span className="material-icons">close</span>
                      </button>
                    </div>
                    <Formik
                      initialValues={initialValues}
                      validationSchema={Validate}
                      onSubmit={(
                        {
                          gender,
                          barangay,
                          phone,
                          municipality,
                          city,
                          country,
                          postal,
                        },
                        actions
                      ) => {
                        onUpdateUser({
                          gender,
                          barangay,
                          phone,
                          municipality,
                          city,
                          country,
                          postal,
                        });
                      }}
                    >
                      {({ errors, touched }: any) => (
                        <Form>
                          <div className="gender">
                            <div className="title">
                              <h1>Gender:</h1>
                            </div>

                            <div className="fields">
                              <div className="field">
                                <Field
                                  type="radio"
                                  name="gender"
                                  value="male"
                                  defaultChecked={
                                    currentUser.gender &&
                                    currentUser.gender === "male"
                                      ? true
                                      : false
                                  }
                                />
                                <label htmlFor="male">Male</label>
                              </div>
                              <div className="field">
                                <Field
                                  type="radio"
                                  name="gender"
                                  value="female"
                                  defaultChecked={
                                    currentUser.gender &&
                                    currentUser.gender === "female"
                                      ? true
                                      : false
                                  }
                                />
                                <label htmlFor="female">female</label>
                              </div>
                              <div className="field">
                                <Field
                                  type="radio"
                                  name="gender"
                                  value="others"
                                  defaultChecked={
                                    currentUser.gender &&
                                    currentUser.gender === "others"
                                      ? true
                                      : false
                                  }
                                />
                                <label htmlFor="others">others</label>
                              </div>
                              {errors.gender && touched.gender && (
                                <div className="error">{errors.gender}</div>
                              )}
                            </div>
                          </div>
                          <div className="phone">
                            <div className="title">
                              <h1>Phone:</h1>
                            </div>
                            <div className="field">
                              <Field
                                type="tel"
                                name="phone"
                                placeholder="contact no.."
                                defaultValue={
                                  currentUser.phone ? currentUser.phone : "null"
                                }
                              />
                            </div>
                            {errors.phone && touched.phone && (
                              <div className="error">{errors.phone}</div>
                            )}
                          </div>
                          <div className="address">
                            <div className="title">
                              <h1>Address:</h1>
                            </div>
                            <div className="fields">
                              <div className="field">
                                <label htmlFor="barangay">
                                  Barangay/Street:
                                </label>
                                <Field
                                  id="barangay"
                                  name="barangay"
                                  placeholder="brangay/street..."
                                  type="text"
                                  defaultValue={
                                    currentUser.barangay
                                      ? currentUser.barangay
                                      : "null"
                                  }
                                />
                                {errors.barangay && touched.barangay && (
                                  <div className="error">{errors.barangay}</div>
                                )}
                              </div>
                              <div className="field">
                                <label htmlFor="municipality">
                                  Municipality:
                                </label>
                                <Field
                                  id="municipality"
                                  name="municipality"
                                  placeholder="Municipality..."
                                  type="text"
                                  defaultValue={
                                    currentUser.municipality
                                      ? currentUser.municipality
                                      : "null"
                                  }
                                />
                                {errors.municipality && errors.municipality && (
                                  <div className="error">
                                    {errors.municipality}
                                  </div>
                                )}
                              </div>
                              <div className="field">
                                <label htmlFor="postal">postal:</label>
                                <Field
                                  id="postal"
                                  name="postal"
                                  placeholder="postal..."
                                  type="text"
                                  defaultValue={
                                    currentUser.postal
                                      ? currentUser.postal
                                      : "null"
                                  }
                                />
                                {errors.postal && errors.postal && (
                                  <div className="error">{errors.postal}</div>
                                )}
                              </div>
                              <div className="field">
                                <label htmlFor="city">City:</label>
                                <Field
                                  id="city"
                                  name="city"
                                  placeholder="city/province..."
                                  type="text"
                                  defaultValue={
                                    currentUser.city ? currentUser.city : "null"
                                  }
                                />
                                {errors.city && touched.city && (
                                  <div className="error">{errors.city}</div>
                                )}
                              </div>
                              <div className="field">
                                <label htmlFor="country">Country:</label>
                                <Field
                                  id="country"
                                  name="country"
                                  placeholder="country..."
                                  type="text"
                                  defaultValue={
                                    currentUser.country
                                      ? currentUser.country
                                      : "null"
                                  }
                                />
                                {errors.country && touched.country && (
                                  <div className="error">{errors.country}</div>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="action">
                            <button type="submit">Save Changes</button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                )}
              </div>
            </div>
            <ToastContainer
              position="bottom-center"
              closeOnClick
              theme="dark"
              autoClose={5000}
              hideProgressBar={false}
            />
          </Accountlayout>
        )}
      </Private>
    </>
  );
};

export default Profile;

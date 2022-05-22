import { useContext, createContext, useState, useEffect } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, GoogleProvider, db, storage } from "../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { useRouter } from "next/router";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  getDoc,
  addDoc,
  query,
  orderBy,
  updateDoc,
  where,
  limit,
} from "firebase/firestore";
import Cookies from "js-cookie";
import { useLoader } from "./PreloaderConext";
const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: any) => {
  const Router = useRouter();
  const { setIsLoader, setLoaderText } = useLoader();
  const [dpUploadProgress, setDpUploadProgress] = useState("");
  const [currentUser, setCurrentUser] = useState<any>("");
  const [isComplete, setIsComplete] = useState<any>("");
  const [user, setUser] = useState<any>("");

  // seting up the user starts
  useEffect(() => {
    return auth.onAuthStateChanged((user: any) => setUser(user));
  }, []);
  // seting up the user ends

  useEffect(() => {
    setIsLoader(true);
    const que = async () => {
      const q: any = query(
        collection(db, "users"),
        where("email", "==", user && user.email)
      );

      const qSnap = await getDocs(q);
      if (qSnap.empty) {
        setIsLoader(false);
        setCurrentUser(null);
      }
      qSnap.forEach((snap: any) => {
        const data = snap.data();
        setCurrentUser(data);
        setIsLoader(false);
        Cookies.set("user", JSON.stringify(data));
      });
    };
    que();
  }, [user, setUser]);

  // signing with google starts
  const Google = async () => {
    let email;
    let name;
    let profile;
    const data: any = new Date().toLocaleDateString();
    const time: any = new Date().toLocaleTimeString();

    try {
      await signInWithPopup(auth, GoogleProvider).then((res: any) => {
        const user = res.user;
        email = user.email;
        name = user.displayName;
        profile = user.photoURL;

        Cookies.set("user", JSON.stringify(res.user));
        console.log(res);
      });
      const docRef: any = doc(collection(db, "users"), email);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          email: email,
          name: name,
          profile: profile,
          gender: null,
          phone: null,
          barangay: null,
          municipality: null,
          city: null,
          postal: null,
          country: null,
          createdAt: `${data} , ${time}`,
        });
        window.location.reload();
        Router.push("/user/account/myaccount/profile");
      }
    } catch (e) {
      console.log(e);
    }
  };
  // signing with google ends

  // update user info starts
  const UpdateUser = async ({
    phone,
    gender,
    barangay,
    municipality,
    city,
    postal,
    country,
  }: any) => {
    setIsLoader(true);
    try {
      const docRef = doc(db, "users", user.email);
      await updateDoc(docRef, {
        phone,
        gender,
        barangay,
        municipality,
        postal,
        city,
        country,
      }).then(() => {
        window.location.reload();
        setIsLoader(false);
      });
    } catch (e) {
      console.log(e);
      setIsLoader(false);
    }
  };
  // update user info ends

  // signing put starts
  const Signout = async () => {
    try {
      await signOut(auth);
      Cookies.remove("user");
    } catch (e) {
      console.log(e);
    }
  };
  // signing put ends

  // Updating profile pic starts
  const UpdateDP = async ({ email, file }: any) => {
    try {
      const profileRef = ref(storage, `${email}/profile.png`);
      const uploadTask = uploadBytesResumable(profileRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setDpUploadProgress(`${Math.floor(progress)}% `);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log(downloadURL);

            const docRef = doc(db, "users", user.email);
            await updateDoc(docRef, {
              profile: downloadURL,
            }).then(() => {
              setDpUploadProgress(`Updated!`);
              window.location.reload();
              setTimeout(() => {
                setDpUploadProgress("");
              }, 2000);
            });
          });
        }
      );
    } catch (e) {}
  };
  // Updating profile pic ends

  const values = {
    currentUser,
    setCurrentUser,
    dpUploadProgress,
    UpdateDP,
    Google,
    Signout,
    setUser,
    isComplete,
    setIsComplete,
    user,
    UpdateUser,
  };

  return (
    <AuthContext.Provider value={values}> {children}</AuthContext.Provider>
  );
};

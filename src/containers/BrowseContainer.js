import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import SelectProfileContainer from "./ProfileContainer";
import { FirebaseContext } from "../context/firebase";
function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    console.log("profile", profile);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);
  return <SelectProfileContainer user={user} setProfile={setProfile} />;
}

export default BrowseContainer;

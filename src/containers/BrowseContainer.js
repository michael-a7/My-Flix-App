import React, { useContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import SelectProfileContainer from "./ProfileContainer";
import { FirebaseContext } from "../context/firebase";
function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  return <SelectProfileContainer user={user} setProfile={setProfile} />;
}

export default BrowseContainer;

import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import { Profiles } from "../components";
//Need Logo
function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header background={false}>
        <Header.Frame>
          <Header.Logo
            to={ROUTES.HOME}
            src="/images/icons/netflixlogo-removebg-preview.png"
            alt="Netflix Home"
          />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's Watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
export default SelectProfileContainer;

import React from "react";
import {
  InnerStyle,
  Title,
  List,
  User,
  Picture,
  Name,
} from "./styles/profiles";

export default function Profiles({ children, ...restProps }) {
  return <InnerStyle {...restProps}>{children}</InnerStyle>;
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfilesList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Profiles.User = function ProfilesUser({ children, ...restProps }) {
  return <User {...restProps}>{children}</User>;
};

Profiles.Picture = function ProfilesPicture({ src, ...restProps }) {
  return (
    <Picture
      {...restProps}
      src={src ? "/images/users/1.png" : "/images/misc/loading.gif"}
    />
  );
};

Profiles.Name = function ProfilesName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

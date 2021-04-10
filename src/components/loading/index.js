import React from "react";
import { Spinner, LockBody, ReleaseBody, Picture } from "./styles/loading";
function Loading({ src, ...restProps }) {
  return (
    <Spinner>
      <LockBody />
      <Picture src={"/images/users/1.png"} />
    </Spinner>
  );
}
export default Loading;

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};

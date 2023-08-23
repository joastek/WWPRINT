import React, { Component } from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookMsg = () => {
  return (
    <>
      <FacebookProvider appId="1427454364770339" chatSupport>
        <CustomChat pageId="100956915764013" minimized={true} />
      </FacebookProvider>{" "}
    </>
  );
};

export default FacebookMsg;

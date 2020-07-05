import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    if (localStorage.getItem("token") === null) {
      history.push("/login");
    } else {
      userHasAuthenticated(true);
      console.log("User has authenticated");
    }

    setIsAuthenticating(false);
  }

  return (
    !isAuthenticating && (
      <div className="App">
        <h4>HOME</h4>
      </div>
    )
  );
}

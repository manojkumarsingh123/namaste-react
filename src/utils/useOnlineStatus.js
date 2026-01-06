import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  //check online or offline status
  //https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event

  //we want to execute this once so we will use useEffect with passing []

  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("offline", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;

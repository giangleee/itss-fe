import { Snackbar, SnackbarOrigin } from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";

interface State extends SnackbarOrigin {
  isOpen: boolean;
}

export interface NotificationComponentRef {
  setState: (message: string) => void;
}

const NotificationComponent = forwardRef<NotificationComponentRef>((props, ref) => {
  const [notificationState, setNotificationState] = useState<State>({
    isOpen: false,
    vertical: "top",
    horizontal: "right",
  });

  const [snackbarMessage, setSnackbarMessage] = useState<string>("");

  const { vertical, horizontal, isOpen } = notificationState;

  const handleCloseNotification = () => {
    setNotificationState({ ...notificationState, isOpen: false });
  };

  useImperativeHandle(ref, () => ({
    setState: (message: string) => {
      setSnackbarMessage(message);
      setNotificationState({ ...notificationState, isOpen: true });
    },
  }));

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={isOpen}
      onClose={handleCloseNotification}
      message={snackbarMessage}
      key={vertical + horizontal}
    />
  );
});

export default NotificationComponent;

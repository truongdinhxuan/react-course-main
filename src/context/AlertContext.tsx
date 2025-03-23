import React, { useState } from 'react';

export enum AlertStatus {
  ERROR = "Error",
  SUCCESS = "Success",
  NONE = "None"
}

type AlertContextType = {
  alert: AlertStatus,
  alertText: string | null,
  success: (text: string, timeout?: number) => void,
  error: (text: string, timeout?: number) => void,
  clear: () => void
}

const AlertContext = React.createContext<AlertContextType | null>(null);
AlertContext.displayName = 'AlertContext';

type AlertProviderProps = {
  children: React.ReactNode
}

const AlertProvider = ({ children }: AlertProviderProps) => {
  const [alert, setAlert] = useState(AlertStatus.NONE);
  const [alertText, setAlertText] = useState<string | null>(null);

  return (
    <AlertContext.Provider
      value={{
        alert: alert,
        alertText: alertText,
        success: (text: string, timeout = 2) => {
          setAlertText(text);
          setAlert(AlertStatus.SUCCESS);
          setTimeout(() => {
            setAlert(AlertStatus.NONE);
          }, timeout * 1000 || 10000)

        },
        error: (text: string, timeout = 2) => {
          setAlertText(text);
          setAlert(AlertStatus.ERROR);
          setTimeout(() => {
            setAlert(AlertStatus.NONE);
          }, timeout * 1000 || 10000)
        },
        clear: () => (setAlert(AlertStatus.NONE)),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export { AlertProvider };
export default AlertContext;

import { BrowserRouter } from "react-router-dom";
import AppRoute from "./AppRoute";
import Notification from "./components/Notification";
import { ErrorProvider } from "./providers/ErrorProvider";
import { NotificationProvider } from "./providers/NotificationProvider";

function App() {
  return (
    <NotificationProvider>
      <ErrorProvider>
        <>
          <BrowserRouter>
            <AppRoute/>
          </BrowserRouter>
          <Notification />
        </>
      </ErrorProvider>
    </NotificationProvider>
  );
}

export default App;

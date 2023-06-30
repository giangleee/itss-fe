import { CssBaseline, StyledEngineProvider } from "@mui/material";
import NavigationScroll from "./layouts/NavigationScroll";
import Routes from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./states";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <NavigationScroll>
          <Provider store={store}>
            <Routes />
          </Provider>
        </NavigationScroll>
      </StyledEngineProvider>
      <ToastContainer />
    </QueryClientProvider>
  );
};

export default App;

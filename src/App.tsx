import { CssBaseline, StyledEngineProvider } from "@mui/material";
import NavigationScroll from "./layouts/NavigationScroll";
import Routes from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </StyledEngineProvider>
    </QueryClientProvider>
  );
};

export default App;

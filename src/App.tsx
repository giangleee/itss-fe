import { CssBaseline, StyledEngineProvider } from "@mui/material"
import NavigationScroll from "./layouts/NavigationScroll"
import Routes from "./routes"

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <NavigationScroll>
        <Routes />
      </NavigationScroll>
    </StyledEngineProvider>
  )
}

export default App

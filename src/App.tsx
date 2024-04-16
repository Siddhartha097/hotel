import { ThemeProvider } from "./components/ThemeProvider";

//components
import AppRoutes from "./components/AppRoutes";

const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <AppRoutes />
      </ThemeProvider>
    </>
  );
};

export default App;

import { createContext, useContext, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, chakraTheme } from "@styles/theme";
import { useAppUser } from "src/hooks/useAppUser";
import { useDarkMode } from "src/hooks/useDarkMode";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const { themeMode, themeToggler, isComponentMounted } = useDarkMode();
  const { appUser, updateAppUser } = useAppUser();
  const [accordionOpenEvent, setAccordionOpenEvent] = useState(false);

  const themeStyles = themeMode === "light" ? lightTheme : darkTheme;

  if (!isComponentMounted) return null;

  return (
    <GlobalContext.Provider
      value={{
        themeMode,
        themeToggler,
        themeStyles,
        appUser,
        updateAppUser,
        accordionOpenEvent,
        setAccordionOpenEvent,
      }}
    >
      <ChakraProvider theme={chakraTheme}>
        <ThemeProvider theme={themeStyles}>{children}</ThemeProvider>
      </ChakraProvider>
    </GlobalContext.Provider>
  );
};

export const useGlobalObjects = () => useContext(GlobalContext);

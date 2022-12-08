import { darkTheme, lightTheme } from "../styles/styles";
import { useReactiveVar } from "@apollo/client";
import { darkModeVar } from "./apollo";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
}

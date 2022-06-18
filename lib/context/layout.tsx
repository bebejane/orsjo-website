import { LayoutProps } from "framer-motion";
import { useReducer, useContext, createContext } from "react";

const initialState : PageLayoutProps = {
  layout: 'normal',
  menu: 'normal',
  color: ''
}

export const LayoutContext = createContext(initialState);

export type PageLayoutProps = {
  layout: string,
  menu: string,
  color: string
}

export type LayoutProviderProps = {
  children: React.ReactElement,
  value: PageLayoutProps
}

// Context provider
export const LayoutProvider = ({ children, value } : LayoutProviderProps) => {
  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
};
// useLayout hook
export const useLayout = () : PageLayoutProps => {
  return useContext(LayoutContext)
}

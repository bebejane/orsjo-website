import { LayoutProps } from "framer-motion";
import { useReducer, useContext, createContext } from "react";

export type PageLayoutProps = {
  layout: 'normal' | 'full',
  menu: 'normal' | 'inverted',
  color: string,
  sidebar:boolean
}

const initialState : PageLayoutProps = {
  layout: 'normal',
  menu: 'normal',
  color: '#ffffff',
  sidebar: true
}

export const LayoutContext = createContext(initialState);

export type LayoutProviderProps = {
  children: React.ReactElement,
  value: PageLayoutProps
}

// Context provider
export const LayoutProvider = ({ children, value } : LayoutProviderProps) => {
  return (
    <LayoutContext.Provider value={{...initialState, ...value}}>
      {children}
    </LayoutContext.Provider>
  )
};
// useLayout hook
export const useLayout = () : PageLayoutProps => {
  return useContext(LayoutContext)
}

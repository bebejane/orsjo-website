import { LayoutProps } from "framer-motion";
import { useReducer, useContext, createContext } from "react";

export type PageLayoutProps = {
  layout: 'normal' | 'full',
  menu: 'normal' | 'inverted',
  color: string,
  sidebar:boolean,
  footerLine?:boolean
}

const initialState : PageLayoutProps = {
  layout: 'normal',
  menu: 'normal',
  color: '--white',
  sidebar: true,
  footerLine:false
}

export const LayoutContext = createContext(initialState);

export type LayoutProviderProps = {
  children: React.ReactElement,
  value: PageLayoutProps
}

// Context provider
export const LayoutProvider = ({ children, value } : LayoutProviderProps) => {
  
  return (
    <LayoutContext.Provider value={{...initialState, ...value, color:`rgba(var(${value.color}),1)`}}>
      {children}
    </LayoutContext.Provider>
  )
};
// useLayout hook
export const useLayout = () : PageLayoutProps => {
  return useContext(LayoutContext)
}

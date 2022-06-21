import create from "zustand";
import shallow from "zustand/shallow"

export interface StoreState {
  showMenu: boolean,
  currentSection: string,
  invertSidebar: boolean,
  invertMenu: boolean,
  sections: string[],
  setSections: (sections: string[]) => void,
  setShowMenu: (showMenu: boolean) => void,
  setCurrentSection: (currentSection: string) => void,
  setInvertSidebar: (invertSidebar: boolean) => void,
  setInvertMenu: (invertMenu: boolean) => void
}

const useStore = create<StoreState>((set) => ({
	showMenu: true,
  currentSection: undefined,
  invertSidebar:false,
  invertMenu:false,
  sections:[],
  setSections: (sections: string[]) =>  
    set((state) => ({
      sections
    })
  ),
	setShowMenu: (showMenu : boolean) =>  
    set((state) => ({
      showMenu
    })
  ),
  setCurrentSection: (currentSection : string) =>  
    set((state) => ({
      currentSection
    })
  ),
  setInvertSidebar: (invertSidebar : boolean) =>  
    set((state) => ({
      invertSidebar
    })
  ),
  setInvertMenu: (invertMenu : boolean) =>  
    set((state) => ({
      invertMenu
    })
  ),
}));

export default useStore;
export { shallow, useStore };

import create from "zustand";
import shallow from "zustand/shallow"

export type SectionId = {
  title:string, id:string
}

export interface StoreState {
  showMenu: boolean,
  currentSection: string,
  invertSidebar: boolean,
  invertMenu: boolean,
  sections: SectionId[],
  setSections: (sections: SectionId[]) => void,
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
  setSections: (sections: SectionId[]) =>  
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

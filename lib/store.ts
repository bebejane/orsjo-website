import create from "zustand";
import shallow from "zustand/shallow"

export interface StoreState {
  showMenu: boolean,
  currentSection: string,
  sections: string[],
  setSections: (sections: string[]) => void,
  setShowMenu: (showMenu: boolean) => void,
  setCurrentSection: (currentSection: string) => void
}

const useStore = create<StoreState>((set) => ({
	showMenu: true,
  currentSection: undefined,
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
}));

export default useStore;
export { shallow, useStore };

import create from "zustand";
import shallow from "zustand/shallow"

const useStore = create((set) => ({
	showMenu: true,
  currentSection: undefined,
  sections:[],
  setSections: (sections: any[]) =>  
    set((state) => ({
      sections
    })
  ),
	setShowMenu: (show : boolean) =>  
    set((state) => ({
      showMenu: show
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

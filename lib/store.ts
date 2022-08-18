import create from "zustand";
import shallow from "zustand/shallow"
import { Gallery } from "/components";

export type SectionId = {
  title:string, id:string
}

export type GalleryProps = {
  images: FileField[],
  index?: number
}

export interface StoreState {
  showMenu: boolean,
  currentSection: string,
  invertSidebar: boolean,
  invertMenu: boolean,
  searchProducts: string,
  sections: SectionId[],
  gallery: GalleryProps,
  setSections: (sections: SectionId[]) => void,
  setShowMenu: (showMenu: boolean) => void,
  setCurrentSection: (currentSection: string) => void,
  setInvertSidebar: (invertSidebar: boolean) => void,
  setInvertMenu: (invertMenu: boolean) => void,
  setSearchProducts: (searchProducts : string) => void,
  setGallery: (gallery : GalleryProps)  => void,
  setGalleryIndex: (id : string)  => void
}

const useStore = create<StoreState>((set) => ({
	showMenu: true,
  currentSection: undefined,
  invertSidebar:false,
  invertMenu:false,
  sections:[],
  searchProducts:undefined,
  gallery:undefined,
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
  setSearchProducts: (searchProducts : string) =>  
    set((state) => ({
      searchProducts
    })
  ),
  setGallery: (gallery : GalleryProps) =>  
    set((state) => ({
      gallery:{
        images: gallery.images,
        index: gallery.index !== undefined ? gallery.index : undefined
      }
    })
  ),
  setGalleryIndex: (id : string) =>  
    set((state) => ({
      gallery:{
        ...state.gallery,
        index: state.gallery?.images?.findIndex((i) => i.id === id) ?? state.gallery?.index
      }
    })
  ),
}));

export default useStore;
export { shallow, useStore };

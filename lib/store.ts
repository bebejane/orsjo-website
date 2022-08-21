import create from "zustand";
import shallow from "zustand/shallow"

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
  gallery: GalleryProps,
  transitioning: boolean,
  setShowMenu: (showMenu: boolean) => void,
  setInvertSidebar: (invertSidebar: boolean) => void,
  setInvertMenu: (invertMenu: boolean) => void,
  setSearchProducts: (searchProducts : string) => void,
  setGallery: (gallery : GalleryProps)  => void,
  setGalleryIndex: (id : string)  => void,
  setTransitioning: (transitioning : boolean)  => void,

}

const useStore = create<StoreState>((set) => ({
	showMenu: true,
  currentSection: undefined,
  invertSidebar:false,
  invertMenu:false,
  sections:[],
  searchProducts:undefined,
  gallery:undefined,
  product:undefined,
  transitioning: false,
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
  setTransitioning: (transitioning) =>  
    set((state) => ({
      transitioning
    })
  ),
}));

export default useStore;
export { shallow, useStore };

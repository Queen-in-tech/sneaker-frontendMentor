interface MobileNavProps {
  setToggleNav: (value: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({setToggleNav}) => {
  return (
    <div className="absolute bg-black/70 z-10 w-screen h-full top-0 bottom-0 right-0 left-0 md:hidden">
    <div className="w-[60vw] h-full px-6 absolute z-20 bg-white">
      <img src="icon-close.svg" alt="close icon" className="pt-8 pb-12 text-lg" onClick={() => setToggleNav(false)}/>

      <ul className="flex flex-col gap-4 font-bold text-lg">
      <li className="">Collections</li>
          <li className="">Men</li>
          <li className="">Women</li>
          <li className="">About</li>
          <li className="">Contact</li>
      </ul>
    </div>
    </div>
  )
}

export default MobileNav

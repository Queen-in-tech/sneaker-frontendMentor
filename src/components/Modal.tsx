import { useState } from "react";

type ImageData = {
    smallImageUrl: string;
    bigImageUrl: string;
    id: number;
    active: boolean;
  };

const Modal= ({ imgData, setImgData, setToggleModal }: { imgData: ImageData[]; setToggleModal: (value: boolean) => void; setImgData: (value: ImageData[]) => void}) => {
    const [index, setIndex] = useState(0)

    const handleClick = (id: number) => {
        const updatedData = imgData.map((image: ImageData) => {
            if (image.id === id) {
              return {
                ...image,
                active: true,
              };
            } else {
              return {
                ...image,
                active: false,
              };
            }
          });
          setImgData(updatedData);
        setIndex(id)
    }
  return (
    <div className="hidden bg-black/80 w-full h-full top-0 bottom-0 right-0 left-0 absolute z-10 md:flex justify-center items-center">
        <div className="z-20 flex flex-col gap-5 relative">
        <img src="icon-close.svg" alt="" className="h-6 w-6 absolute -top-10 right-0 cursor-pointer" onClick={() => setToggleModal(false)}/>
        <div>
         <img src={imgData[index]?.bigImageUrl} alt="big product image"  className=" md:block md:rounded-2xl md:w-[460px] md:h-[400px] object-fill"/>

         <img src="icon-previous.svg" alt=""  className="bg-white p-3 h-9 w-9 rounded-full absolute top-48 -left-5 cursor-pointer" onClick={() => {
        if (index === 0){
            setIndex(3)
        }else{
            setIndex(index - 1)
        }
        }}/>
        <img src="icon-next.svg" alt=""  className="bg-white p-3 h-9 w-9 rounded-full absolute top-48 -right-5 cursor-pointer" onClick={() => {
            if (index === 3){
                setIndex(0)
            }else{
                setIndex(index + 1)
            }
        }}/>
        
         </div>
      <div className="flex gap-5 justify-center items-center">
        {
            imgData.map((image: ImageData) => (
                <div key={image.id} className={`flex ${image.active && `border border-orange-500 rounded-xl`}`}>
                    <img src={image.smallImageUrl} alt="shoe images" className={`hover:opacity-50 cursor-pointer rounded-xl w-24 h-24 ${image.active && ` opacity-40` }`} onClick={() => handleClick(image.id)}/>
                </div>
            ))
        }
      </div>
      </div>
    </div>
  )
}

export default Modal

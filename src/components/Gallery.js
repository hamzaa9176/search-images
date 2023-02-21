
import Image from "../components/Image";

const Gallery = ({ data, getImage, updatePage}) => {

  return (
    <>
    
      {
        data.map((item, index) => (
          <div className="w-full p-2 rounded lg:w-1/3 md:w-1/3 sm:w-2/4" key={index}>
          <Image item={item} indexImage={index} dataa={data} updatePage={updatePage} getImage={getImage}/>
          </div>
        ))
      }
    </>
  );
}

export default Gallery;

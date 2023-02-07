import Image from "../components/Image";

const Gallery = ({ data, imageUrl }) => {
  return (
    <>
      {
        data.map((item, index) => (
          <div className="w-full p-2 rounded lg:w-1/3" key={index}>
          <Image imageUrl={imageUrl} item={item}  />
          </div>
        ))
      }
    </>
  );
}

export default Gallery;

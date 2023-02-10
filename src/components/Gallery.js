import Image from "../components/Image";

const Gallery = ({ data}) => {
  return (
    <>
      {
        data.map((item, index) => (
          <div className="w-full p-2 rounded lg:w-1/3 md:w-1/3" key={index}>
          <Image item={item} />
          </div>
        ))
      }
    </>
  );
}

export default Gallery;

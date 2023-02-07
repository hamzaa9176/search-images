import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import InfiniteScroll from "react-infinite-scroll-component";
import Search from "./components/Search";
import Loader from './components/Loader'
function App() {
  const [data, setData] = useState([]);

  const [page, setPage] = useState(1);

  const[searchTerm, setSearchTerm] = useState('');


function getImageBySearch(){
  if(searchTerm.length>0){
    axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=45076dcc27861a55b03542146490a421&text=${searchTerm}&per_page=20&license=0&format=json&privacy_filter=1&nojsoncallback=1&page=${page}`
    )
    .then((response) => {
      setData(prev=>[...prev, ...response.data.photos.photo]);
      //console.log(response.data.photos);
    })
    .catch((error) => {
      console.log("error fetching data", error);
    });
  }
}
 
function getImage() {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=45076dcc27861a55b03542146490a421&text=${searchTerm}&per_page=20&license=0&format=json&privacy_filter=1&nojsoncallback=1&page=${page}`
      )
      .then((response) => {
        setData(prev=>[...prev, ...response.data.photos.photo]);
        //console.log(response.data.photos);
      })
      .catch((error) => {
        console.log("error fetching data", error);
      });
    
}

useEffect(()=>(
  getImageBySearch()
), [searchTerm])

  useEffect(()=>(
    getImage()
  ), [page])

 
  //Creating url for images from Img state
  const imageUrl = (serverId, id, secret) => {
    let urlImage = `https://live.staticflickr.com/${serverId}/${id}_${secret}_w.jpg`;
    return urlImage;
  };

  return (
    <>
    <Search setSearchTerm={setSearchTerm} setData={setData} setPage={setPage}/>

      
      <InfiniteScroll
              dataLength={data.length}
              next={() => setPage((prev) => prev + 1)}
              hasMore={true}
              loader={<Loader/>}
            >
            <div className="container flex flex-wrap mx-auto mt-20 relative">
              <Gallery data={data} imageUrl={imageUrl} />
              </div>
            </InfiniteScroll>
   
       
  </>
  );
}

export default App;

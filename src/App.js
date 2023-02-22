import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import InfiniteScroll from "react-infinite-scroll-component";
import Search from "./components/Search";
import Loader from "./components/Loader";
import NoImage from "./components/NoImage";



function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const [modalStateApp, setModalStateApp] = useState(false);
  function settingQuery(title) {
    if (searchTerm === title) {
      setData([]);
      setPage(1);
      getImage();
      console.log("same title:", searchTerm, title);
    } else {
      setSearchTerm(title);
      setPage(1);
      setData([]);
    }
  }

  function getImage() {
    let active = true;
    setLoading(true);

    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=45076dcc27861a55b03542146490a421&per_page=10&text=${
          searchTerm === "" ? "nature" : searchTerm
        }&license=0&format=json&privacy_filter=1&nojsoncallback=1&page=${page}`
      )
      .then((response) => {
        if (active) {
          if (page > 1) {
            setData((prev) => [...prev, ...response.data.photos.photo]);
            setLoading(false);
          } else {
            setData(response.data.photos.photo);
            setLoading(false);
          }
          //console.log(response.data);
          active = false;
        }
      })
      .catch((error) => {
        console.log("error fetching data", error);
        setLoading(false);
      });

    return () => (active = false);
  }
  useEffect(() => {
    getImage();

    // eslint-disable-next-line
  }, [page, searchTerm]);

  const updatePage = () => {
    setPage((prev) => prev + 1);
  };

  const getModalState = (state) => {
    setModalStateApp(state);
  };

  return (
    <>
      <Search
        settingQuery={settingQuery}
        searchTerm={searchTerm}
        data={data}
        modalStateApp={modalStateApp}
      />

      {!loading && data.length === 0 ? (
        <NoImage word={searchTerm} />
      ) : (
        <InfiniteScroll
          dataLength={data.length}
          next={() => setPage((prev) => prev + 1)}
          hasMore={true}
          loader={<Loader />}
        >
          <div
            className={
              "container z-40 flex flex-wrap mx-auto mt-5 lg:mt-10 md:mt-10 scroll-smooth "
            }
          >
            <Gallery
              data={data}
              updatePage={updatePage}
              getModalState={getModalState}
            />
          </div>
        </InfiniteScroll>
      )}
    </>
  );
}

export default App;

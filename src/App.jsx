import "./App.css";
import { useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadModeBtn/LoadModeBtn";
import { ImageModal } from "./components/ImageModal/ImageModal";
import * as imagesService from "./services/api";
import { useEffect } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState("");
  const [modalAlt, setModalAlt] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setIsLoading(true);
        const { results, total_pages } = await imagesService.fetchImages(
          query,
          page
        );

        if (!results.length) {
          return setIsEmpty(true);
        }

        setImages((prev) => [...prev, ...results]);
        setIsVisible(page < total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSetQuery = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setIsEmpty(false);
    setIsVisible(false);
    setPage(1);
    setError(null);
  };
  const onLoadMore = () => {
    setPage((perPage) => perPage + 1);
  };
  const openModal = (src, alt, description) => {
    setModalIsOpen(true);
    setModalSrc(src);
    setModalAlt(alt);
    setModalDescription(description);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setModalSrc("");
    setModalAlt("");
    setModalDescription("");
  };
  return (
    <>
      {!modalIsOpen && <SearchBar onSearch={handleSetQuery} />}
      <div className="container">
        {images.length > 0 && (
          <ImageGallery images={images} openModal={openModal} />
        )}
        {isLoading && <Loader>Loading ...</Loader>}
        {isVisible && (
          <LoadMoreBtn onClick={onLoadMore} disabled={isLoading}>
            {isLoading ? "Loading..." : "Loading more"}
          </LoadMoreBtn>
        )}
        {error && <ErrorMessage>Error - {error}</ErrorMessage>}
        {isEmpty && <ErrorMessage>No images ...</ErrorMessage>}
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          src={modalSrc}
          alt={modalAlt}
          description={modalDescription}
        />
      </div>
    </>
  );
}

export default App;

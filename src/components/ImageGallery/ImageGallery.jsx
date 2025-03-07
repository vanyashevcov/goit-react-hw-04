import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css"

export default function ImageGallery({ images, openModal }) {
  return (
    <ul className={s.list}>
      {images.map((item) => (
        <li key={item.id}>
          <ImageCard image={item} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
}

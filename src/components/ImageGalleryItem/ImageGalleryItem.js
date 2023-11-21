
import { useState } from 'react';
import { ReactModal } from 'components/Modal/Modal';
import { ImageGalleryItem, ImageGalleryItemImg } from './ImageGalleryItem.styled';


export const GalleryItem =( {webformatURL, largeImageURL })=> {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


    return (
      <>
      <ImageGalleryItem onClick={openModal}>
    <ImageGalleryItemImg src={webformatURL} alt="Result search" />
        </ImageGalleryItem>
        {isModalOpen && (
          <ReactModal
          imageURL={largeImageURL}
            isModalOpen={isModalOpen}
            closeModal={closeModal}
        
          />
        )}
      </>

    
    );
  }



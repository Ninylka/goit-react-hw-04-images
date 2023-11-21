
import { Searchbar } from './Searchbar/Searchbar';
import { ThreeDots } from  'react-loader-spinner';
import {  useEffect , useState} from 'react';
import { fetchSearch } from './api';
import { GalleryList } from './ImageGallery/ImageGallery';
import { ButtonLoad } from './Button/Button';
import toast, { Toaster } from 'react-hot-toast';

export const  App = () => {
const [images, setImages] = useState([]);
const [query, setQuery] = useState('');
const [page, setPage] = useState(1);
const [isLoading, setIsLoading] = useState(false);
const [loadMore, setLoadMore] = useState(false);





useEffect (() => {  
    if(!query.trim()){
      return;
    }
   
async function fetchImages () { 
  try {
    setIsLoading(true)
  const imageData = await fetchSearch({ query, page });

  if (imageData !== null) {

   
      setImages((prevImages) => [...prevImages, ...imageData.hits]);
      setLoadMore(page < Math.ceil(imageData.totalHits / 12));
    
  }

} catch ({ error } ) {
  toast.error('Oops! We encountered an issue. Please try refreshing the page!');

} finally {
  setIsLoading(false);
}
};

 fetchImages ();
  
}, [query, page]);




  const handleFormSubmit = (newQuery) => {
setQuery (newQuery)
setPage(1)
setImages([])
  }

const handleLoadMore = () => {
  setPage((prevPage) => prevPage + 1);
}
    

    return (
      <>
        <Searchbar onSubmit={handleFormSubmit} />
        {isLoading && <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#303f9f" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}/>}
       <GalleryList items={images} />
        {images.length > 0 && loadMore && (<ButtonLoad onClick={handleLoadMore} />)}
        <Toaster/>
      </>
    );
  
  }

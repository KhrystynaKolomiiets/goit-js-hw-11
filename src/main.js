import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from 'axios';
import { getImagesByQuery } from './js/pixabay-api';
import {
    createGallery,
    clearGallery,
    hideLoader,
    showLoader
} from './js/render-functions';


const lightBox = new SimpleLightbox(".image-item", {
    captionsData: 'alt',
    captionDelay: 250,
});
const form = document.querySelector(".form");
const inputField = document.querySelector(".input-field");
const loader = document.querySelector(".loader");
const gallery = document.querySelector(".gallery");

form.addEventListener("submit", handleSubmit)


function handleSubmit(event) {
    event.preventDefault();
    clearGallery();
    showLoader();
    const myPicture = inputField.value.trim();
    if (myPicture === '') {
        iziToast.warning({
      message: 'Please enter a search query.',
      position: 'topRight',
        });
        hideLoader();
    return;
  }
    getImagesByQuery(myPicture)
        .then(response => {
            hideLoader();
            if (response.hits.length === 0) {
                return iziToast.info({
                    title: 'Error',
                    message:
                        'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                });
            }
            const markup = createGallery(response.hits);
gallery.insertAdjacentHTML('beforeend', markup);
            lightBox.refresh();
        })
        .catch(error => {
            iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
            console.log(error)
        })
        .finally(() => {
            hideLoader();
            inputField.value = '';
    })


}

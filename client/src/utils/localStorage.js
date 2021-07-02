export const getSavedBookIds = () => {
  
let savedBookIds;
if (localStorage.getItem('saved_books')){
  savedBookIds=JSON.parse(localStorage.getItem('saved_books'))
}
else{
savedBookIds= [];
}

  return savedBookIds;
};

export const saveBookIds = (bookIdArr) => {
  if (bookIdArr.length) {
    localStorage.setItem('saved_books', JSON.stringify(bookIdArr));
  } else {
    localStorage.removeItem('saved_books');
  }
};

export const removeBookId = (bookId) => {
let savedBookIds;
if (localStorage.getItem('saved_books')){
  savedBookIds=JSON.parse(localStorage.getItem('saved_books'))
  
  }

  else{
savedBookIds= null;
  }


  if (!savedBookIds) {
    return false;
  }

  const updatedSavedBookIds = savedBookIds?.filter((savedBookId) => savedBookId !== bookId);
  localStorage.setItem('saved_books', JSON.stringify(updatedSavedBookIds));

  return true;
};


export const updateSongsInBooklet = (state = sessionStorage.getItem('booklet') ? JSON.parse(sessionStorage.getItem('booklet')).length : 0, action) => {
    return sessionStorage.getItem('booklet') ? JSON.parse(sessionStorage.getItem('booklet')).length : 0;
  }
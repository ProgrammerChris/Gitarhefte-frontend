
export const updateSongsInBooklet = (state = JSON.parse(sessionStorage.getItem('booklet')).length, action) => {
    return JSON.parse(sessionStorage.getItem('booklet')).length;
  }
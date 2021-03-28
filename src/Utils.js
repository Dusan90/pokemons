
export const relocate = (id, history) =>{
    history.push({
      pathname: `/pokemon/${id}/`,
    });
  };
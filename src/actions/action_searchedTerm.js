const action_searchedTerm = (term)=>{
    return {
      type: "SETSEARCHEDTERM",
      payload: term
    };
  }

  module.exports = action_searchedTerm;
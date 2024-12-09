// Azione per aggiungere un'azienda ai preferiti
export const addToFavourites = (company) => ({
  type: 'ADD_TO_FAVOURITES',
  payload: company,
})

// Azione per rimuovere un'azienda dai preferiti
export const removeFromFavourites = (company) => ({
  type: 'REMOVE_FROM_FAVOURITES',
  payload: company,
})

// Azione per settare i lavori cercati (opzionale per un design più completo)
export const setJobs = (jobs) => ({
  type: 'SET_JOBS',
  payload: jobs,
})

// Azione per indicare che è in corso una richiesta di ricerca lavori
export const setLoading = (isLoading) => ({
  type: 'SET_LOADING',
  payload: isLoading,
})

// Azione per gestire errori durante la ricerca dei lavori
export const setError = (error) => ({
  type: 'SET_ERROR',
  payload: error,
})

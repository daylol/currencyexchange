export const initialState = {
  usd: 0,
  eur: 0,
};

export function reducer(state, action) {
  switch (action.type) {
    case 'SET_USD':
      return { ...state, usd: action.payload };
    case 'SET_EUR':
      return { ...state, eur: action.payload };
    default:
      throw new Error();
  }
}

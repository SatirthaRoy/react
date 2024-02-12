import React, { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'eat':
      if(state.money-10 >= 0) {
        return { money: state.money-10 };
      }
      return state;
    case 'earn':
      return { money: state.money+10 };
    case 'bonus':
      return { money: state.money+100 };
    default:
      return state
  }
}

const Wallet = () => {

  const [state, dispatch] = useReducer(reducer, { money: 0});
  let disabled = false
  if(state.money === 0) {
    disabled = true;
  }

  return (
    <>
      <div>Wallet: ${state.money}</div>
      <button onClick={()=>dispatch({type: 'earn'})}>Earning day</button>
      <button onClick={()=>dispatch({type: 'eat'})} disabled={disabled}>Buying day</button>
      <button onClick={()=>dispatch({type: 'bonus'})}>Bonus day</button>
    </>
    
  )
}

export default Wallet
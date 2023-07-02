import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';
import { useSelector } from 'react-redux'
const Shop = () => {
  const dispatch = useDispatch();
  const amount = useSelector(state => state.amount)
  // 2) another way for doin this
  // const actions = bindActionCreators(actionCreators,dispatch) 

  // 3) way to do this
  const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch)
  return (
    <div className=''>
        <h2 className=''>Deposit/Withdraw Money</h2>
        <div>

            {/* One way to do this with out using const actions = bindActionCreators(actionCreators,dispatch) this function  */}
            {/* 1) <button className='btn btn-primary mx-2' onClick={ ()=> dispatch(actionCreators.withdrawMoney(100))}>-</button> Update Balance 
            <button className='btn btn-primary mx-2' onClick={ ()=> dispatch(actionCreators.depositMoney(100))}>+</button> */}

{/*             
           2) <button className='btn btn-primary mx-2' onClick={ ()=> (actions.withdrawMoney(100))}>-</button> Update Balance 
            <button className='btn btn-primary mx-2' onClick={ ()=> (actions.depositMoney(100))}>+</button> */}
            
            {/* 3) way to do this */}
            <button className='btn btn-primary mx-2' onClick={ ()=> (withdrawMoney(100))}>-</button> Update Balance = ({amount})
            <button className='btn btn-primary mx-2' onClick={ ()=> (depositMoney(100))}>+</button>
        </div>
    </div>
  )
}

export default Shop

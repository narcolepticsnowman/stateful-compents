import React from 'react'
import NumberListItem from './NumberListItem'
import SelectionProvider from './SelectGroupProvider'
import {providerOf, stateful} from 'react-stator'


export default stateful(
    { numbers: [], localTime: new Date().getTime() },
    ( { state, applyLocalState } ) =>{
        const selectionProvider = new SelectionProvider()
        const numbersProvider = providerOf("numbers")
        return <div>

            <h2>Change The shared state:</h2>
            <button onClick={()=>numbersProvider.loadNumber()}>load</button>

            <h2>Change The local state:</h2>
            <button onClick={()=>applyLocalState( { localTime: new Date().getTime() } )}> {state.localTime} </button>

            <h2>Read the sharedState</h2>
            <ul>
                {numbersProvider.hasNumbers()
                    ? state.numbers.map( n => NumberListItem(selectionProvider)({id:n}) )
                    : <li>No Numbers</li>
                }
            </ul>
        </div>
    }

)
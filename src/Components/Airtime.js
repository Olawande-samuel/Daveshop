import React from 'react'
import Purchase from './Reusables/Purchase';
import {Amount} from './Reusables/Amount'

function Airtime() {
    return (
        <div className="purchase">
            <Purchase  header="Buy airtime" rest= {<Amount />}/>
        </div>
    )
}

export default Airtime

import { React, useState } from 'react'
import { clientDetails} from '../models/clientModels'


const clientForm = (props) => {
 
    const [ clientName, setClientName ] = useState(clientDetails.name)
    const [ clientBusinessName, setClientBusinessName ] = useState(clientDetails.businessName)
    const [ clientNumber, setClientNumber ] = useState(clientDetails.phonenumber)
    const [ clientEmail, setClientEmail ] = useState(clientDetails.email)
    const [ clientAddress, setClientAddress ] = useState(clientDetails.address)
  

    return (
        <div>
            <form>
                <p>Client Details</p>
                <input type="text" placeholder="Name" value={clientName} onChange={e => setClientName(e.target.value)}></input>
                <input type="text" placeholder="Business" value={clientBusinessName} onChange={e => setClientBusinessName(e.target.value)}></input>
                <input type="phone" placeholder="Number" value={clientNumber} onChange={e => setClientNumber(e.target.value)}></input>
                <input type="email" placeholder="Email" value={clientEmail} onChange={e => setClientEmail(e.target.value)}></input>
                <input type="text" placeholder="Address" value={clientAddress} onChange={e => setClientAddress(e.target.value)}></input>
            </form>
        </div>
    )
}

export default clientForm
import React, { useState } from 'react'
import { clientDetails} from '../models/clientModels'
import { useCreateTicket } from '../hooks/index'


const ClientForm = (props) => {
 
    const [ clientName, setClientName ] = useState(clientDetails.name)
    const [ clientBusinessName, setClientBusinessName ] = useState(clientDetails.businessName)
    const [ clientNumber, setClientNumber ] = useState(clientDetails.phonenumber)
    const [ clientEmail, setClientEmail ] = useState(clientDetails.email)
    const [ clientAddress, setClientAddress ] = useState(clientDetails.address)

    const { create, ticket } = useCreateTicket()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(clientName === ''){
            alert("fill in the blank")
        } else{
            create(clientName, clientBusinessName, clientNumber, clientEmail, clientAddress)
        }
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <p>Client Details</p>
                <input type="text" placeholder="Name" value={clientName} onChange={e => setClientName(e.target.value)}></input>
                <input type="text" placeholder="Business" value={clientBusinessName} onChange={e => setClientBusinessName(e.target.value)}></input>
                <input type="phone" placeholder="Number" value={clientNumber} onChange={e => setClientNumber(e.target.value)}></input>
                <input type="email" placeholder="Email" value={clientEmail} onChange={e => setClientEmail(e.target.value)}></input>
                <input type="text" placeholder="Address" value={clientAddress} onChange={e => setClientAddress(e.target.value)}></input>
                <button type="submit">
                    Click to Submit
                </button>
            </form>

            {ticket.type}
        </div>
    )
}

export default ClientForm
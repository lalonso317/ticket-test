import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clientDetails } from "../../../models/clientModels"


// ACTION
const CREATE_TICKET = "direct/CREATE_TICKET"
const INITIAL_TICKET = "direct/INITIAL_TICKET"

// INITIAL STATE
const initialState  = {
    ticket: []
}

// REDUCER
export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TICKET:
            return {
                ...state, ticket: [...state.ticket, action.payload]
            }
        case INITIAL_TICKET:
            return initialTicket
        default:
            return state
    }
}

const createTicket = ticket => {
    const client = {
        type: ticket 
    }
    return dispatch => {
        dispatch({
            type: CREATE_TICKET,
            payload: client
        })
        console.log(client)
    }
}

const initialTicket = () => {
    return {
        type: INITIAL_TICKET
    }
}

// DISPATCHER
export function useCreateTicket() {
    const dispatch = useDispatch()
    const ticket = useSelector(appState => appState.createTicketState.ticket)
    const create = ( n, b, num, em, ad ) => dispatch(createTicket(n, b,num, em, ad))

    useEffect(() =>{
        dispatch(createTicket())
}, [dispatch])
return { ticket, create }
}


import * as clientService from "../services/clientService.js"

export const getClients = async (req, res) => {
    try {
        const clients =  await clientService.getClients()
        res.status(200).json(clients)
    } catch (err) {
        console.error('Error fetching clients: ', err.message)
        res.status(500).json({message:"Internal Server Error"})
    }
}

export const createClient = async (req, res) => {
    try {
        const clientData = req.body
        const newClient =  await clientService.createClient(clientData)
        res.status(201).json(newClient)
    } catch (err) {
        console.error('Error creating client: ', err.message)
        res.status(500).json({message:"Internal Server Error"})
    }
}

export const updateClient = async (req, res) => {
    try {
        const clientId = req.params.id
        const clientData = req.body
        const updatedClient =  await clientService.updateClient(clientData, clientId)
        if (!updatedClient) return res.status(404).json({message:"Client not found"})
        res.status(204).json(updatedClient)
    } catch (err) {
        console.error('Error updating client: ', err.message)
        res.status(500).json({message:"Internal Server Error"})
    }
}


export const deleteClient = async (req, res) => {
    try {
        const clientId = req.params.id
        const deletedClient =  await clientService.deleteClient(clientId)
        if (!deletedClient) return res.status(404).json({message:"Client not found"})
        res.status(205).json(deletedClient)
    } catch (err) {
        console.error('Error deleting client: ', err.message)
        res.status(500).json({message:"Internal Server Error"})
    }
}



export const searchClients = async (req, res) => {
    try {
        const searchTerm = req.query.q
        const clients =  await clientService.searchClients(searchTerm)
        res.status(200).json(clients)
    } catch (err) {
        console.error('Error deleting client: ', err.message)
        res.status(500).json({message:"Internal Server Error"})
    }
}


import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TableList from './components/TableList'
import ModalForm from './components/ModalForm'
import axios from 'axios'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [tableData, setTableData] = useState([])
  const [modalMode, setModalMode] = useState('add')
  const [searchTerm, setSearchTerm] = useState('')
  const [clientData, setClientData] = useState(null)
  const handleOpen = (mode, client) => {
    setClientData(client)
    setIsOpen(true)
    setModalMode(mode)
  }

  

  const handleSubmit = async (newClientData) => {
    if(modalMode === 'add'){
      try {
        const res = await axios.post('http://localhost:3000/api/clients', newClientData)
        console.log('Client added: ', res.data)
        setTableData((prevData) => [...prevData, res.data])
        setClientData(null)
      } catch (error) {
        console.error('Error adding client: ', error)
      }
      console.log('modal mode add')
    } else {
      console.log('modal mode edit')
      console.log('Updating client with ID: ', clientData.id)
      console.log('Updating client with ID: ', clientData)
      try {
        const res = await axios.patch(`http://localhost:3000/api/clients/${clientData.id}`, newClientData)
        console.log('Client updated', res.data)
        setTableData((prevData) => prevData.map((client) => client.id === res.data.id ? res.data : client))
      } catch (error) {
        console.error('Error updating client ', error)
      }

    }
  }
  return (
    <div>
      <Navbar onOpen={() => handleOpen('add')} onSearch={setSearchTerm}/>
      <TableList handleOpen={handleOpen} searchTerm={searchTerm} tableData={tableData} setTableData={setTableData}/>
      <ModalForm isOpen={isOpen} onClose={() => setIsOpen(false)} onSubmit={handleSubmit} mode={modalMode} clientData={clientData}/>
    </div>
  )
}

export default App
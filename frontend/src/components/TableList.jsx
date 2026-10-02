import React, { useEffect, useState } from 'react'
import axios from 'axios'
const TableList = ({handleOpen, searchTerm, tableData, setTableData}) => {
    const [error, setError] = useState("")
    
    useEffect(() => {
      fetchData()
    }, [tableData])
    
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/clients')
        setTableData(res.data)
        console.log(res.data)
      } catch (err) {
        console.error(err.message)
        setError(err.message)
      }
    }
    const handleDelete = async (id) => {
      const confirmDelete = window.confirm("Are you sure you want to delete this client?")
      if(confirmDelete){
        try {
          await axios.delete(`http://localhost:3000/api/clients/${id}`)
          setTableData(tableData.filter((client) => client.id !== id))
        } catch (error){
          setError(error.messages)
        }
      } else {
      }
    }

    const filteredData = tableData.filter(client => client.name.toLowerCase().includes(searchTerm.toLowerCase()) || client.email.toLowerCase().includes(searchTerm.toLowerCase()) || client.job.toLowerCase().includes(searchTerm.toLowerCase()) )


  return (
    <div className="overflow-x-auto mt-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Job</th>
        <th>Rate</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody className="hover">
      {/* row 1 */}
      {filteredData?.map((client) => (<tr key={client.id}>
        <th>{client.id}</th>
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.job}</td>
        <td>{client.rate}</td>
        <td>
            <button className={`btn rounded-full w-20 ${client.isactive ? "btn-primary":"btn-outline btn-primary"}`}>
                {client.isactive ? "Active" : "Inactive"}
            </button>
        </td>
        <td>
        <button className="btn btn-secondary" onClick={() => handleOpen('edit', client)}>Update</button>
        </td>
        <td>
        <button className="btn btn-accent" onClick={() => handleDelete(client.id)}>Delete</button>
        </td>
      </tr>))}      
      
    </tbody>
  </table>
</div>
  )
}

export default TableList
import React, { useEffect, useState } from "react";

const ModalForm = ({ isOpen, onClose, mode, onSubmit, clientData }) => {
    const [rate, setRate] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [job, setJob] = useState("")
    const [status, setStatus] = useState(false)
    const [error, setError] = useState('')
    const handleStatusChange = (e) => {
        setStatus(e.target.value === 'Active')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!name.trim() || !email.trim() || !job.trim() || rate <= 0) return setError("All fields required")
        try {
          const clientData = {name, email, job, rate:Number(rate), isactive: status}
          await onSubmit(clientData)
          setError(null)
        } catch (err) {
          console.error('Error adding client', err)
        }
        onClose()
    }
    useEffect(() => {
      if (mode === 'edit' && clientData){
        setName(clientData.name)
        setEmail(clientData.email)
        setJob(clientData.job)
        setRate(clientData.rate)
        setStatus(clientData.isactive)
      } else {
        setName('')
        setEmail('')
        setJob('')
        setRate('')
        setStatus(false)
      }
    }, [mode, clientData])
  return (
    <>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <h3 className="font-bold text-lg py-4">
            {mode == "edit" ? "Edit Client" : "Create Client"}
          </h3>
          <form method="dialog" onSubmit={handleSubmit}>
          {error && <p className="text-red-500">{error}</p>}
            <label className="input input-bordered flex items-center gap-2 my-4" >
              Name
              <input type="text" className="grow py-4" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label className="input input-bordered flex items-center gap-2 my-4">
              Email
              <input type="text" className="grow py-4" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label className="input input-bordered flex items-center gap-2 my-4">
              Job
              <input type="text" className="grow py-4" placeholder="job" value={job} onChange={(e) => setJob(e.target.value)} />
            </label>
            <div className="flex mb-4 justify-between my-4">
              <label className="input input-bordered flex items-center gap-2 my-4 mr-4">
                Rate
                <input type="number" className="grow py-4" placeholder="rate" value={rate} onChange={(e) => setRate(e.target.value)}/>
              </label>
              <select value={status ? "Active":"Inactive"} defaultValue="Status" className="select select-bordered w-full max-w-xs mt-4" onChange={handleStatusChange}>
                <option >Active</option>
                <option>Inactive</option>
              </select>
            </div>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={onClose}
              type="button"
            >
              ✕
            </button>
            <button className="btn btn-success" type="submit">
              {mode == "edit" ? "save changes" : "add client"}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ModalForm;

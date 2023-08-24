import { useState } from 'react'
import { User } from "../../../model/data"
import RowItem from "./RowItem/RowItem"
import ConfirmDeleteModal from "../../../components/ConfirmDeleteModal/ConfirmDeleteModal"
import './Table.css'

interface TableProps {
   data: User[]
   onToggleStatus: (id: number) => void
   onClickSettings: (id: number) => void
   onClickDelete: (id: number) => void
}

export default function Table( {data, onToggleStatus, onClickSettings, onClickDelete}: TableProps ) {
   const [showDeleteModal, setShowDeleteModal] = useState<User | null>(null)

   const onConfirmDelete = (id: number) => {
      setShowDeleteModal(null) 
      onClickDelete(id)     
   }

	return (
		<div className="table-users">
         <table className="table table-hover table-users__table">
            <thead>
               <tr className='table-users__header'>
                  <th className="no-bottom-border d-none d-md-table-cell" scope="col"></th>
                  <th className="align-top" scope="col">USER</th>
                  <th className="align-top text-center d-none d-sm-table-cell" scope="col">ROLE</th>
                  <th className="align-top text-center d-none d-sm-table-cell" scope="col">STATUS</th>
                  <th className="align-top text-center" scope="col">ACTIONS</th>
               </tr>
            </thead>
            <tbody>
               {
                  data.map(row => {
                     if(!(row?.hide && row.hide === true))
                        return <RowItem 
                           key={row.id}
                           data={row}
                           onToggleStatus={(id) => onToggleStatus(id)}
                           onClickSettings={(id) => onClickSettings(id)}
                           onClickDelete={(user) => setShowDeleteModal(user)}
                        />
                  })
               }
            </tbody>
         </table>
         <ConfirmDeleteModal 
            userData={showDeleteModal} 
            onHide={() => setShowDeleteModal(null)} 
            onConfirmed={() => showDeleteModal?.id && onConfirmDelete(showDeleteModal.id)} 
         />
		</div>
	)
}


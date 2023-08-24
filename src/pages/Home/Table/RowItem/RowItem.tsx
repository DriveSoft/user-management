import { User } from '../../../../model/data'
import userIcon from '../../../../assets/user-icon.svg'
import keyIcon from './assets/key.svg'
import settingsIcon from './assets/settings.png'
import deleteIcon from './assets/delete.svg'
import './RowItem.css'

interface RowItem {
   data: User
   onToggleStatus: (id: number) => void
   onClickSettings: (id: number) => void
   onClickDelete: (user: User) => void
}

export default function RowItem( { data, onToggleStatus, onClickSettings, onClickDelete }: RowItem ) {
   return (
      <tr className='table-user-row'>
         <td className="no-bottom-border d-none d-md-table-cell">
            <img src={userIcon} alt="" />
         </td>

         <td className="align-middle">
            <div className="fw-bolder">{data.firstName} {data.lastName}</div>
            <div className="fw-light">{data.email}</div>
         </td>

         <td className="align-middle position-relative text-center d-none d-sm-table-cell">
            {
               data.role === 'Admin' &&
               <div className="table-user-row__admin-icon-key position-absolute d-none d-md-block">
                  <img src={keyIcon} alt="" />
               </div>               
            }

            <div>{data.role}</div>
         </td>

         <td className="align-middle d-none d-sm-table-cell">
            <div className="form-check form-switch d-flex justify-content-center">
               <input 
                  className="form-check-input" 
                  type="checkbox" 
                  checked={data.active} 
                  style={{cursor: "pointer"}} 
                  onChange={() => onToggleStatus(data.id)} 
               />
            </div>                     
         </td>

         <td className="text-center align-middle">                     
            <img 
               src={settingsIcon}
               className="table-user-row__actions-icons me-3" 
               onClick={() => onClickSettings(data.id)}
            />
            <img 
               src={deleteIcon}
               className="table-user-row__actions-icons" 
               onClick={() => onClickDelete(data)}
            />                     
         </td>
      </tr>
   )
}

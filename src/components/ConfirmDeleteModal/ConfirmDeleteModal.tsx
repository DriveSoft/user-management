import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import userIcon from "./assets/user.png"
import "./ConfirmDeleteModal.css"
import { User } from "../../model/data"

interface ConfirmDeleteModalProps {
   userData: User | null
   onHide: () => void
   onConfirmed: () => void
}

export default function ConfirmDeleteModal( {userData, onHide, onConfirmed}: ConfirmDeleteModalProps ) {
	const show = userData !== null;
   return (
		<Modal
         className="confirm-delete"
         show={show}
         onHide={onHide}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton className="confirm-delete__header"></Modal.Header>
			<Modal.Body className="confirm-delete__body">

            <div className="row">
               <div className="confirm-delete__title col offset-1">Delete User</div>
            </div>

            <div className="row mt-5">
               <div className="col-1"><img src={userIcon} alt="" /></div>
               <div className="col-6">{userData?.firstName} {userData?.lastName}</div>
               <div className="col-5 d-flex justify-content-end confirm-delete__user-status">{userData?.active ? "Active User" : "Inactive User"}</div>
            </div>

            <div className="row mt-4">
               <div className="col-11 offset-1 confirm-delete__bottom-line"></div>
            </div>     

            <div className="row mt-5">
               <div className="col-11 offset-1">
                  <Button onClick={onConfirmed} className="confirm-delete__button">Delete User</Button>
               </div>
            </div>                    				
			</Modal.Body>

		</Modal>
	);
}

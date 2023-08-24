import React, { useState, useEffect } from "react"
import Form from 'react-bootstrap/Form';
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import faceIcon from "./assets/face.svg"
import emailIcon from "./assets/email.svg"
import keyIcon from "./assets/key.svg"
import "./CreateUserModal.css"
import { NewUser } from "../../model/data"

interface CreateUserModalProps {
   show: boolean
   onHide: () => void
   onSave: (newUser: NewUser) => void
}

export default function CreateUserModal( {show, onHide, onSave}: CreateUserModalProps ) {
   const [formData, setFormData] = useState<NewUser>({firstName: "", lastName: "", email: "", role: "User"})
   const isFilled = formData.firstName !== "" && formData.lastName !== "" && formData.email !== ""

   useEffect(() => {
      setFormData({firstName: "", lastName: "", email: "", role: "User"})
   }, [show])

   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();  
      onSave(formData)    
   }

   const onChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
      setFormData(prev => ({...prev, [event.target.name]: event.target.value}))      
   }

   return (
		<Modal
         className="create-user"
         show={show}
         onHide={onHide}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton className="create-user__header"></Modal.Header>
			<Modal.Body className="create-user__body">

            <div className="row">
               <div className="create-user__title col offset-1">Invite New User</div>
            </div>

            <Form onSubmit={onSubmit}>
               <div className="row">
                  <div className="col-1 d-flex align-items-end d-none d-sm-flex">
                     <img src={faceIcon} alt="" />
                  </div>

                  <div className="col-11">
                     <div className="row mt-5">
                        <div className="col-sm-6">
                           <div className="create-user__label">* First Name</div>
                           <input className="create-user__input" name="firstName" type="text" value={formData.firstName} onChange={onChange} required />
                        </div>
                        <div className="col-sm-6 mt-5 mt-sm-0">
                           <div className="create-user__label">* Last Name</div>
                           <input className="create-user__input" name="lastName" type="text" value={formData.lastName} onChange={onChange} required />
                        </div>
                     </div>
                  </div>
               </div>

               <div className="row mt-5">
                  <div className="col-1 d-flex align-items-end d-none d-sm-flex">
                     <img src={emailIcon} alt="" />
                  </div>

                  <div className="col-11">
                     <div className="row">
                        <div className="col-12">
                           <div className="create-user__label">* Email</div>
                           <input className="create-user__input" name="email" type="email" value={formData.email} onChange={onChange} required />
                        </div>
                     </div>
                  </div>
               </div>

               <div className="row">
                  <div className="col-1 d-flex align-items-end d-none d-sm-flex">
                     <img src={keyIcon} alt="" />
                  </div>

                  <div className="col-11">
                     <div className="row mt-5">
                        <div className="col-sm-6">
                           <div className="create-user__label">* Role</div>
                           <select name="role" className="create-user__input" value={formData.role} onChange={onChange} required>
                              <option value="Admin">Admin</option>
                              <option value="User">User</option>
                           </select>
                        </div>
                     </div>
                  </div>
               </div>            
            

               <div className="row mt-4">
                  <div className="col-11 offset-1 create-user__bottom-line"></div>
               </div>     

               <div className="row mt-5">
                  <div className="col-11 offset-1 d-flex justify-content-between align-items-baseline flex-wrap">
                     <Button disabled={!isFilled} type="submit" className="create-user__button">Send Invitation</Button>
                     <div className={`create-user__validation ${isFilled ? "create-user__validation-valid" : "create-user__validation-invalid"} `}>{isFilled ? "Good to go" : "Fill in all the fields"}</div>
                  </div>
               </div> 
            </Form>                   				
			</Modal.Body>

		</Modal>
	);
}

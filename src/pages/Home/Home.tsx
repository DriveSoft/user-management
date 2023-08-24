import { useState, useEffect } from 'react'
import Header from '../../components/Header/Header';
import Table from './Table/Table';
import Container from 'react-bootstrap/Container';
import CreateUserModal from '../../components/CreateUserModal/CreateUserModal';
import { NewUser, User, userData } from '../../model/data';
import "./Home.css";

export default function Home() {
   const [dataUsers, setDataUser] = useState<User[]>([]);
   const [newUserDialogShow, setNewUserDialogShow] = useState(false)

   useEffect(() => {
      setDataUser(userData);
   }, []);


   const onSaveNewUser = (newUser: NewUser) => {      
      setNewUserDialogShow(false)
      const userToAdd: User = {
         ...newUser, 
         id: Number(new Date()), 
         active: true, 
         superAdmin: false, 
         permissions: []         
      }
      setDataUser([...dataUsers, userToAdd])
   }

   const onToggleStatus = (id: number) => {
      setDataUser(dataUsers.map(user => {
         if(user.id === id) return {...user, active: !user.active}
         return user
      }))   
   }

   const onClickSettings = (id: number) => {
      console.log(id)
   }   

   const onClickDelete = (id: number) => {
      setDataUser(dataUsers.filter(user => {
         if(user.id !== id) return user
      })) 
   }   
   
   const onSearch = (query: string) => {    
      setDataUser(dataUsers.map(user => {
         const isFullnameFound = `${user.firstName} ${user.lastName}`.toLowerCase().includes(query.toLowerCase());
         const isEmailFound = `${user.email}`.toLowerCase().includes(query.toLowerCase());
         if(isFullnameFound || isEmailFound) return {...user, hide: false}
         return {...user, hide: true}
      }))          
   }     

   return (
      <div>         
         <Header 
            title='Project Access'
            buttonIcon='add'
            searchBar={true}
            onSearch={onSearch}
            onClickButton={() => setNewUserDialogShow(true)}
         />    
         <Container>
            <Table 
               data={dataUsers}
               onToggleStatus={onToggleStatus} 
               onClickSettings={onClickSettings}
               onClickDelete={onClickDelete}
            />            
         </Container>  

         <CreateUserModal 
            show={newUserDialogShow} 
            onHide={() => setNewUserDialogShow(false)} 
            onSave={onSaveNewUser} 
         />
      </div>
  )
}

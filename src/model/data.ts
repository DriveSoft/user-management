export type UserRole = "Admin" | "User";
 
export interface User {   
   id: number
   firstName: string
   lastName: string 
   email: string
   active: boolean
   superAdmin: boolean
   role: UserRole
   permissions: number[]
   hide?: boolean
}

export type NewUser = Omit<User, 'id' | 'active' | 'superAdmin' | 'permissions'>

export const userData: User[] = [
   {
      id: 1,
      firstName: "Samantha",
      lastName: "Standford", 
      email: "Samantha.standford@testtask.com",
      active: true,
      superAdmin: false,
      role: "Admin",
      permissions: [1, 2]      
   },
   {
      id: 2,
      firstName: "Danniel",
      lastName: "Blichman", 
      email: "danniel.blichman@testtask.com",
      active: true,
      superAdmin: false,
      role: "Admin",
      permissions: [2, 3, 4]      
   },   
   {
      id: 3,
      firstName: "Margarette",
      lastName: "Jones", 
      email: "margarette.jones@testtask.com",
      active: true,
      superAdmin: false,
      role: "User",
      permissions: [1, 3, 4]      
   },    
   {
      id: 4,
      firstName: "Bethany",
      lastName: "Doe", 
      email: "bethany.doe@testtask.com",
      active: true,
      superAdmin: false,
      role: "User",
      permissions: [1, 3, 4]      
   },  
   {
      id: 5,
      firstName: "Samuel",
      lastName: "Jackson", 
      email: "samuel.jackson@testtask.com",
      active: true,
      superAdmin: false,
      role: "User",
      permissions: [4]      
   },     
   {
      id: 6,
      firstName: "Persival",
      lastName: "Blinn", 
      email: "persival.blinn@testtask.com",
      active: false,
      superAdmin: false,
      role: "Admin",
      permissions: [4]      
   }, 
];


interface PermItem {
   id: number
   name: string
}

interface Permissions {
   id: number
   groupName: string
   perms: PermItem[]
}

export const permissions: Permissions[] = [
   {
      id: 1,
      groupName: "group 1",
      perms: [
         {
            id: 1,
            name: "Permission 11"
         },
         {
            id: 2,
            name: "Permission 12"
         },
         {
            id: 3,
            name: "Permission 13"
         },
         {
            id: 4,
            name: "Permission 14"
         },
         {
            id: 5,
            name: "Permission 15"
         },                                    
      ]
   },
   {
      id: 2,
      groupName: "group 2",
      perms: [
         {
            id: 6,
            name: "Permission 16"
         },
         {
            id: 7,
            name: "Permission 17"
         },                                   
      ]
   },   
   {
      id: 3,
      groupName: "group 3",
      perms: [
         {
            id: 8,
            name: "Permission 18"
         },
         {
            id: 9,
            name: "Permission 19"
         },                                   
      ]
   },    
];
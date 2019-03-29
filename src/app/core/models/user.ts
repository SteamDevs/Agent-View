import { Rol } from './rol'

export class User {
    id: number;
    username: string;
    password: string;
    enabled: boolean = true;
    nombre : string;
    apellido: string;
    email: string
    roles: any =[
        {
            id: 1,
            name : 'ROLE_NAME'
        }
    ] 
}

import { Request, Response } from 'express';
import createUser from './services/CreateUser';

// string, number, boolean, object, Array
// interfaces

export function helloWorld( request: Request, response: Response){
    const user = createUser({
        email: 'luciano@taragatech.com',
        password: '123456',
        techs: [
            'Node.js',
            'React.js',
            { title: 'Javascript', experience: 100}
        ],
    });

    return response.json({ message: 'Hello World'});
}
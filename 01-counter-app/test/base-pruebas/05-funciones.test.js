import { getUser } from "../../src/base-pruebas/05-funciones";

describe( 'Pruebas en 05 funciones', ()=>{

    test( 'LA FUNCION USER FUE APROBADA', ()=>{

        const testUser = {
            uid:'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        // To compare two objects we use toEqual
        expect( testUser ).toEqual( user );

    } )

} )
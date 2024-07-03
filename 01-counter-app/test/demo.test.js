describe('Pruebas del componente <ComponentTest />', ()=>{

    test('Esta prueba no debe de fallar', ()=>{
        const message = 'Hola mundo';
        const secondMessage = 'Hola mundo '.trim();
        // expect( message ).toBe( secondMessage );
        expect( message ).toBe( secondMessage )
    } );

});
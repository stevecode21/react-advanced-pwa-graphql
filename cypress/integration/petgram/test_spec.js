// Describimos nuestro test, la cual tendrá la descripción y como segunda parámetro una función donde pondremos los test que va a tener
// Para evitar que eslint me advertencias de que hay palabras qu eno están definidas, vamos a decirle a eslint que son variables globales
/* global describe, it, cy */
describe('Petgram', function () {
  // El primer test será para ver si la app funciona
  it('para ver si la app funciona', function () {
    // Si funciona, vamos a visitar la página que es la home utilizando visit del objeto cy que es de cypress, y a visit le específicamos en donde se encuentra la home
    cy.visit('/')
  })
  // Añadimos otro test el cual será para ver si podemos navegar entre las categorías y ver fotografías (El parametro de la funcion será el test)
  it('navegamos a una categoría y vemos fotos', function () {
    // Haremos una visita al path especificado que en este caso para esta app será al path pet con la categoría 1
    cy.visit('/pet/1')
    // Lo que tenemos que mirar es si realmente tenemos algun elemento article, por lo cual usamos get de cypress que recibe como parámetro un selector css
    cy.get('article')
  })
  // Añadimos otro para ver si podemos navegar con la navbar a la home
  it('si podemos navegar con la navbar a la home', function () {
    // Visitarenos un path
    cy.visit('/pet/1')
    // Vamos a recuperar un elemento del navbar para obtener el link, recuperaremos el primero y le indicamos que me haga click al primer anchor del nav bar el cual sería el home
    cy.get('nav a').first().click()
    // Como nos debería llevar a la home, vamos a revisar si la url es justamente o incluye la ruta exacta el home, el cual es el slash (si le agregaramos algo mas despues del slash, nuestro test no pasaría)
    cy.url().should('include', '/')
  })
  // Añadimos un ultimo para asegurarnos que los usuarios no registrados ven el formulario de registro/login al ir a favs
  it('los ususarios no registrados ven el formulario de registro e inicio de sesión al ir a favs', function () {
    // Haremos que visiten el path de favs
    cy.visit('/favs')
    // Como el usuario no está registrado, deberíamos recuperar la etiqueta form y también le decimos que debería tener mas de un formulario, como son 2 etiquetas form, le especificamos que tenga una longitud de 2
    cy.get('form').should('have.length', 2)
  })
})

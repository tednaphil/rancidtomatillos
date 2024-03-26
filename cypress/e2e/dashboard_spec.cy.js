describe('Rancid Tomatillos', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'all_movies'
    })
    .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200,
      fixture: 'single_movie'
    })
    .visit('http://localhost:3000')
  })

  it('Should show movies upon load', () => {
    cy.contains('Rancid Tomatillos')
    .get('.movies').find('.movie-card').should('have.length', 5)
    .get('aside').first().contains('Black Adam')
    .get('aside').last().contains('The Minute You Wake Up Dead')
  })

  it('Should show one movie upon click', () => {
    cy.get('.movie-card').first().click()
    .get('h2').contains('Black Adam (10/19/2022)')
    .get('h3').contains('The world needed a hero. It got Black Adam.')
    .get('.description').contains('Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.')
  })

  it('Should take us back to the homepage', () => {
    cy.get('.movie-card').first().click()
    .get('.home-button').click()
    .get('.movies').find('.movie-card').should('have.length', 5)
    .get('.heading2').contains('Top Movies Now...')
  })
})
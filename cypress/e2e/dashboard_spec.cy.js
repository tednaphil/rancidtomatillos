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
    .visit('http://localhost:3000/rancidtomatillos')
  })

  it('Should show movies upon load', () => {
    cy.contains('Rancid Tomatillos')
    .get('.movies').find('.movie-card').should('have.length', 5)
    .get('aside').first().contains('Black Adam')
    .get('aside').last().contains('The Minute You Wake Up Dead')
  })

  it('Should show an error message if data retrieval unsuccesful', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500,
    })
    cy.wait(6000)
    .get('.error').contains('There was an issue getting the information... check back later.')
  })

  it('Should show an error page if user navigates to a non-existent path', () => {
    cy.visit('http://localhost:3000/rancidtomatillos/badsillypath')
    .get('h2').contains('Page Not Found')
    .get('a').click()
    .url().should('eq', 'http://localhost:3000/rancidtomatillos')
  })

  it('Should should show an error message if data retrival of a single movie is unsuccesful', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 500,
    })
    .visit('http://localhost:3000/rancidtomatillos/movie/436270')
    .get('h2').contains('We couldn\'t find the movie, please check back later.')
  })

  it('Should show one movie upon click', () => {
    cy.get('.movie-card').first().click()
    .url().should('include', '/436270')
    .get('h2').contains('Black Adam (2022)')
    .get('h3').contains('The world needed a hero. It got Black Adam.')
    .get('.description').contains('Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.')
  })


  it('Should take us back to the homepage', () => {
    cy.get('.movie-card').first().click()
    .get('.home-button').click()
    .url().should('eq', 'http://localhost:3000/rancidtomatillos')
    .get('.movies').find('.movie-card').should('have.length', 5)
    .get('.heading2').contains('Top Movies Now...')
  })

  it('Should reveal movie detail preview on hover', () => {
    cy.viewport(1025, 700)
    .get('.popup').should('be.hidden')
    .get('.movie-card').first().realHover()
    .get('.popup').first().contains('Black Adam')
  })
})
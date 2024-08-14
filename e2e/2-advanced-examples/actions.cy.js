/// <reference types="cypress" />

describe('example to-do app', () => {


  
  it('Find Pet by ID', () => {
    cy.request('GET', 'https://petstore.swagger.io/v2/pet/30')
    .then((response) => {
      expect(response.status).to.eq(200)
    })

  })

  it('Find Pet by Status', () => {
    cy.request('GET', 'https://petstore.swagger.io/v2/pet/findByStatus?status=available')
    .then((response) => {
      expect(response.status).to.eq(200)
    })

  })

  it('Store Inventory', () => {
    cy.request('GET', 'https://petstore.swagger.io/v2/store/inventory')
    .then((response) => {
      expect(response.status).to.eq(200)
    })

  it('Create User with List', () => {
    const postData = [
      {
       "id": 0,
       "username": "didem3",
       "firstName": "didem",
       "lastName": "gulec",
       "email": "gulecdidemtest3@gmail.com",
       "password": "deneme123",
       "phone": "11111111111",
       "userStatus": 0
     },
      {
       "id": 0,
       "username": "didem2",
       "firstName": "didem2",
       "lastName": "gulec2",
       "email": "gulecdidemtest2@gmail.com",
       "password": "deneme123",
       "phone": "11111111111",
       "userStatus": 0
     }
   ]
    cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/user/createWithList',
        body: postData,
        headers: headers
      })
    .then((response) => {
      expect(response.status).to.eq(200)
    })

  })

  it('Create User', () => {
    const postData = 
      {
       "id": 0,
       "username": "didem3",
       "firstName": "didem",
       "lastName": "gulec",
       "email": "gulecdidemtest3@gmail.com",
       "password": "deneme123",
       "phone": "11111111111",
       "userStatus": 0
     }
      
   
    cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/user',
        body: postData,
        headers: headers
      })
    .then((response) => {
      expect(response.status).to.eq(200)
    })

  })

  it('Placed Order', () => {
    const postData = 
    {
      "id": 9223372036854759708,
      "petId": 30,
      "quantity": 0,
      "shipDate": "2024-08-14T19:45:12.274+0000",
      "status": "placed",
      "complete": true
  }
      
   
    cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/store/order',
        body: postData,
        headers: headers
      })
    .then((response) => {
      expect(response.status).to.eq(200)
    })

  })

  })
  
  it('Update User', () => {
    const postData = 
    {
       "id": 0,
       "username": "didem3",
       "firstName": "didem",
       "lastName": "gulec",
       "email": "gulecdidemtest3@gmail.com",
       "password": "deneme123",
       "phone": "11111111111",
       "userStatus": 1
  }
      
   
    cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/user/didem3',
        body: postData,
      })
    .then((response) => {
      expect(response.status).to.eq(200)
    })

  })



    
  it('Delete User', () => {

    const headerBody={
      "accept":"application/json"
    }

    cy.request({
      methog :"DELETE",
      url : "https://petstore.swagger.io/v2/user/didem3",
      Headers : headerBody

    
    })
    .then((response) => {
      expect(response.status).to.eq(200)
    })

  })


  it('Delete Pet', () => {

    const headerBody={
      "accept":"application/json"
    }

    cy.request({
      methog :"DELETE",
      url : "https://petstore.swagger.io/v2/pet/25",
      Headers : headerBody

    
    })
    .then((response) => {
      expect(response.status).to.eq(200)
    })

  })


  it('Delete Order', () => {

    const headerBody={
      "accept":"application/json"
    }

    cy.request({
      methog :"DELETE",
      url : "https://petstore.swagger.io/v2/store/order/9223372036854759708",
      Headers : headerBody

    
    })
    .then((response) => {
      expect(response.status).to.eq(200)
    })

  })
  






})


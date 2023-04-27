
describe("DB Testing", function(){
  it.only("Select all rows from Persons Table", function(){
    cy.request({
      url: `http://127.0.0.1:5000/query`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        // Selecting all values from Persons Table where Last Name is Kumar
        mysqlQuery: "SELECT * FROM Demo1.Persons WHERE LastName='Kumar'",
      },
    }).then((response) =>{
      // Expecting Response to contain the Last Name of Kumar
        expect(response.body.LastName == "Kumar")
        console.log("Showing Result of the Lastname "+response.body.LastName)
    });
  })
    

  it.only("Insert Row into Database", function(){

    cy.request({
      url: `http://127.0.0.1:5000/query`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        // Insert a new row into Persons Table
        mysqlQuery: "INSERT INTO Persons (PersonID) VALUES('007')"
      },
    })
    .then((response) =>{
       // Expecting a single row to be affected
      expect(response.body.affectedRows ==1);
      console.log("affected rows= "+response.body.affectedRows);
      // console.log(response.status);
    });
  });


  // it.only("Check Assertion", function(){
  //   cy.task("queryDb",`SELECT * FROM Demo1.Persons WHERE LastName='Kumar'`).then(count => {
  //     expect(count).to.have.lengthOf(1);
  //   });
  // });
      // cy.task("queryDb",`INSERT INTO Persons (LastName) VALUES('Agent')`)


  

 

});



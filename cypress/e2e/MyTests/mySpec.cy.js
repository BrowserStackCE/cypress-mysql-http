
describe("DB Testing", function(){
  it.only("Check Assertion", function(){
    cy.task("queryDb",`SELECT * FROM Demo1.Persons WHERE LastName='Kumar'`).then(count => {
      expect(count).to.have.lengthOf(1);
    });
  });


  it.only("InsertIntoDb", function(){
    cy.task("queryDb",`INSERT INTO Persons (LastName) VALUES('Gates')`)
    // .then((result) =>{
    //   expect(result.affectedRows).to.equal(2);
    // });

  });

});



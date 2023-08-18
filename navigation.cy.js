// go{}
//===> Navigation 
describe ('mysuite', ()=>
it('NavigationTest', ()=>
{
cy.visit('https://demo.opencart.com/');
cy.title().should('eq',"Your Store"); // home page

cy.get("li:nth-child(7) a:nth-child(1)").click();  //click on camera page
cy.get("div[id='content'] h2").should('have.text',"Cameras");  // in camera page.


cy.go('back'); //go back to homepage again
cy.title().should('eq',"Your Store"); 

cy.go('forward'); //  go to the camera page
cy.get("div[id='content'] h2").should('have.text',"Cameras"); 

// alternative for back forward
cy.go(-1); // also go back to Home Page
cy.title().should('eq',"Your Store");   //verifying title of homepage

cy.go(1);  // again on camera pages
cy.get("div[id='content'] h2").should('have.text',"Cameras");

// For relaoding
cy.reload();


}
))
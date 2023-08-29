/// <reference types="cypress" />

import { buttonText as buttonEN } from '../../../src/Settings/Languages/en/buttons';
import { buttonText as buttonID } from '../../../src/Settings/Languages/id/buttons';
import { loan as loanID } from '../../../src/Settings/Languages/id/loan';
import { loan as loanEN } from '../../../src/Settings/Languages/en/loan';

describe('Loan Application Step 6 (Review) Individual Script Indonesia', () => {
  let locale = 'id';
  let loan = locale == 'id' ? loanID : loanEN;
  let header = loan.review.header.replace('{br}', '<br>');
  const button = locale == 'id' ? buttonID : buttonEN;

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.get(
      '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-ufzfy2 > div:nth-child(1) > div.MuiBox-root.css-13tqxrv > div > button:nth-child(2) > label'
    ).click();

    cy.get('#idNumber').type('1234567890123456');

    cy.fixture('step6Response.json').then((data) => {
      cy.intercept(
        { method: 'POST', url: 'v1/entry-point/resume' },
        {
          ...data['resumeIndividualResponse']
        }
      );
    });
    cy.get('#submitButton').click();
  });

  // it('Loan Application Step 6 (Review) Render', () => {
  //   cy.get('#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-10sq7dl')
  //     .should('exist')
  //     .and(($div) => {
  //       expect($div.get(0).innerHTML).to.eq(header);
  //     });
  //   cy.get(
  //     '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-1x9xi88 > div'
  //   )
  //     .should('exist')
  //     .and('have.text', LAStep6.review.facilityDetails.header);
  //   cy.get(
  //     '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-1x9xi88 > button'
  //   ).should('exist');
  //   //edit Facility Button
  //   cy.get(
  //     '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(1) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
  //   )
  //     .should('exist')
  //     .and('have.text', LAStep6.review.facilityDetails.financingFacility.label);
  //   cy.get(
  //     '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(1) > div:nth-child(2)'
  //   )
  //     .should('exist')
  //     .and('have.text', LAStep6.review.facilityDetails.financingFacility.value);
  //   cy.get(
  //     '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(2) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
  //   )
  //     .should('exist')
  //     .and('have.text', LAStep6.review.facilityDetails.maritalStatus.label);
  //   cy.get(
  //     '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(2) > div:nth-child(2)'
  //   )
  //     .should('exist')
  //     .and('contain.text', 'Lajang');

  //   cy.get(
  //     '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(3) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
  //   )
  //     .should('exist')
  //     .and('have.text', LAStep6.review.facilityDetails.creditType.label);
  //   cy.get(
  //     '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(3) > div:nth-child(2)'
  //   )
  //     .should('exist')
  //     .and('contain.text', 'Konvensional');

  //   cy.get(
  //     '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(4) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
  //   )
  //     .should('exist')
  //     .and('have.text', LAStep6.review.facilityDetails.tenor.label);
  //   cy.get(
  //     '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(4) > div:nth-child(2)'
  //   )
  //     .should('exist')
  //     .and('contain.text', '24 bulan');

  //   cy.get(
  //     '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(5) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
  //   )
  //     .should('exist')
  //     .and('have.text', LAStep6.review.facilityDetails.financingAmount.label);
  //   cy.get(
  //     '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(5) > div:nth-child(2)'
  //   )
  //     .should('exist')
  //     .and('contain.text', 'Rp200.000.000');

  //   cy.get(
  //     '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div.MuiBox-root.css-cfaci6 > div.ant-row.css-dev-only-do-not-override-14wwjjs > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
  //   )
  //     .should('exist')
  //     .and('have.text', LAStep6.review.facilityDetails.installment.label);
  //   cy.get(
  //     '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div.MuiBox-root.css-cfaci6 > div.ant-row.css-dev-only-do-not-override-14wwjjs > div:nth-child(2)'
  //   )
  //     .should('exist')
  //     .and('contain.text', 'Rp2.000.000');

  //   cy.get(
  //     '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div.MuiBox-root.css-cfaci6 > div.MuiBox-root.css-1bfeqff'
  //   )
  //     .should('exist')
  //     .and(($div) => {
  //       expect($div.get(0).innerHTML).to.eq(LAStep6.review.facilityDetails.note);
  //     });

  //   cy.get(
  //     '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-1x9xi88 > div'
  //   )
  //     .should('exist')
  //     .and('have.text', LAStep6.review.companyDetails.header);
  //   cy.get(
  //     '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-1x9xi88 > button'
  //   ).should('exist');
  //   //edit Company Button
  //   cy.get(
  //     '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-11a7kd3 > div:nth-child(1) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
  //   )
  //     .should('exist')
  //     .and('have.text', LAStep6.review.companyDetails.companyName.label);
  //   cy.get(
  //     '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-11a7kd3 > div:nth-child(1) > div:nth-child(2)'
  //   )
  //     .should('exist')
  //     .and('contain.text', 'PT Garuda Raya Semesta');

  //   cy.get(
  //     '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-11a7kd3 > div:nth-child(2) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
  //   )
  //     .should('exist')
  //     .and('have.text', LAStep6.review.companyDetails.dateOfEstablishment.label);
  //   cy.get(
  //     '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-11a7kd3 > div:nth-child(2) > div:nth-child(2)'
  //   )
  //     .should('exist')
  //     .and('contain.text', '03 July, 1995');

  //   cy.get(
  //     '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-11a7kd3 > div:nth-child(3) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
  //   )
  //     .should('exist')
  //     .and('have.text', LAStep6.review.companyDetails.latestAnnualSales.label);
  //   cy.get(
  //     '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-11a7kd3 > div:nth-child(3) > div:nth-child(2)'
  //   )
  //     .should('exist')
  //     .and('contain.text', 'Rp300.000.000');

  //   cy.get(
  //     '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-11a7kd3 > div:nth-child(4) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
  //   )
  //     .should('exist')
  //     .and('have.text', LAStep6.review.companyDetails.businessCategory.label);
  //   cy.get(
  //     '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-11a7kd3 > div:nth-child(4) > div:nth-child(2)'
  //   )
  //     .should('exist')
  //     .and('contain.text', 'Industri Pengolahan');

  //   cy.get('#root > div.MuiBox-root.css-1q4ndps > div:nth-child(4)').should('exist');
  //   cy.get('#root > div.MuiBox-root.css-1q4ndps > div:nth-child(4) > label')
  //     .should('exist')
  //     .and('have.text', LAStep6.review.footer.note);
  //   cy.get('#root > div.MuiBox-root.css-1q4ndps > div:nth-child(4) > button')
  //     .should('exist')
  //     .and('have.text', button.apply);
  // });

  it('Loan Application Review - Contact Details', () => {
    cy.get(
      '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(3) > div.MuiBox-root.css-11a7kd3 > div:nth-child(1) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs > label'
    )
      .should('exist')
      .and('have.text', loan.review.contactDetails.salutation.label);
    cy.get(
      '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(3) > div.MuiBox-root.css-11a7kd3 > div:nth-child(2) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs > label'
    )
      .should('exist')
      .and('have.text', loan.review.contactDetails.fullName.label);
    cy.get(
      '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(3) > div.MuiBox-root.css-11a7kd3 > div:nth-child(3) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs > label'
    )
      .should('exist')
      .and('have.text', loan.review.contactDetails.emailAddress.label);
    cy.get(
      '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(3) > div.MuiBox-root.css-11a7kd3 > div:nth-child(4) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs > label'
    )
      .should('exist')
      .and('have.text', loan.review.contactDetails.phoneNumber.label);
    cy.get(
      '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(3) > div.MuiBox-root.css-11a7kd3 > div:nth-child(5) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs > label'
    )
      .should('exist')
      .and('have.text', loan.review.contactDetails.spouseFullName.label);
    cy.get(
      '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(3) > div.MuiBox-root.css-11a7kd3 > div:nth-child(6) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs > label'
    )
      .should('exist')
      .and('have.text', loan.review.contactDetails.spouseEmailAddress.label);
    cy.get(
      '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(3) > div.MuiBox-root.css-11a7kd3 > div:nth-child(7) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs > label'
    )
      .should('exist')
      .and('have.text', loan.review.contactDetails.spousePhoneNumber.label);
  });
});

// describe('Loan Application Step 6 (Review) Corporate Script Indonesia', () => {
//   let locale = 'id';
//   let LAStep6 = locale == 'id' ? loanID : loanEN;
//   let header = LAStep6.review.header.replace('{br}', '<br>');
//   const button = locale == 'id' ? buttonID : buttonEN;

//   beforeEach(() => {
//     cy.visit('http://localhost:3000/');
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-ufzfy2 > div:nth-child(1) > div.MuiBox-root.css-13tqxrv > div > button:nth-child(2) > label'
//     ).click();
//     cy.fixture('step6Response.json').then((data) => {
//       cy.intercept(
//         {
//           method: 'POST',
//           url: 'v1/entry-point/resume'
//         },
//         {
//           ...data['resumeResponseStep6Corporate']
//         }
//       ).as('interceptedResumeResponse');
//     });

//     cy.get('#idNumber').type('1234567890123456');
//     cy.get('#submitButton').click();
//   });

//   it('Loan Application Step 6 (Review) Render', () => {
//     cy.get('#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-10sq7dl')
//       .should('exist')
//       .and(($div) => {
//         expect($div.get(0).innerHTML).to.eq(header);
//       });
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-1x9xi88 > div'
//     )
//       .should('exist')
//       .and('have.text', LAStep6.review.facilityDetails.header);
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-1x9xi88 > button'
//     ).should('exist');
//     //edit Facility Button
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(1) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
//     )
//       .should('exist')
//       .and('have.text', LAStep6.review.facilityDetails.financingFacility.label);
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(1) > div:nth-child(2)'
//     )
//       .should('exist')
//       .and('have.text', LAStep6.review.facilityDetails.financingFacility.value);
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(2) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
//     )
//       .should('exist')
//       .and('have.text', LAStep6.review.facilityDetails.maritalStatus.label);
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(2) > div:nth-child(2)'
//     )
//       .should('exist')
//       .and('contain.text', 'Lajang');

//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(3) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
//     )
//       .should('exist')
//       .and('have.text', LAStep6.review.facilityDetails.creditType.label);
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(3) > div:nth-child(2)'
//     )
//       .should('exist')
//       .and('contain.text', 'Konvensional');

//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(4) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
//     )
//       .should('exist')
//       .and('have.text', LAStep6.review.facilityDetails.tenor.label);
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(4) > div:nth-child(2)'
//     )
//       .should('exist')
//       .and('contain.text', '24 bulan');

//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(5) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
//     )
//       .should('exist')
//       .and('have.text', LAStep6.review.facilityDetails.financingAmount.label);
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(5) > div:nth-child(2)'
//     )
//       .should('exist')
//       .and('contain.text', 'Rp200.000.000');

//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div.MuiBox-root.css-cfaci6 > div.ant-row.css-dev-only-do-not-override-14wwjjs > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
//     )
//       .should('exist')
//       .and('have.text', LAStep6.review.facilityDetails.installment.label);
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div.MuiBox-root.css-cfaci6 > div.ant-row.css-dev-only-do-not-override-14wwjjs > div:nth-child(2)'
//     )
//       .should('exist')
//       .and('contain.text', 'Rp2.000.000');

//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div.MuiBox-root.css-cfaci6 > div.MuiBox-root.css-1bfeqff'
//     )
//       .should('exist')
//       .and(($div) => {
//         expect($div.get(0).innerHTML).to.eq(LAStep6.review.facilityDetails.note);
//       });

//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-1x9xi88 > div'
//     )
//       .should('exist')
//       .and('have.text', LAStep6.review.companyDetails.header);
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-1x9xi88 > button'
//     ).should('exist');
//     //edit Company Button
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-11a7kd3 > div:nth-child(1) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
//     )
//       .should('exist')
//       .and('have.text', LAStep6.review.companyDetails.companyName.label);
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-11a7kd3 > div:nth-child(1) > div:nth-child(2)'
//     )
//       .should('exist')
//       .and('contain.text', 'PT Garuda Raya Semesta');

//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-11a7kd3 > div:nth-child(2) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
//     )
//       .should('exist')
//       .and('have.text', LAStep6.review.companyDetails.dateOfEstablishment.label);
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-11a7kd3 > div:nth-child(2) > div:nth-child(2)'
//     )
//       .should('exist')
//       .and('contain.text', '03 July, 1995');

//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-11a7kd3 > div:nth-child(3) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
//     )
//       .should('exist')
//       .and('have.text', LAStep6.review.companyDetails.latestAnnualSales.label);
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-11a7kd3 > div:nth-child(3) > div:nth-child(2)'
//     )
//       .should('exist')
//       .and('contain.text', 'Rp300.000.000');

//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-11a7kd3 > div:nth-child(4) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
//     )
//       .should('exist')
//       .and('have.text', LAStep6.review.companyDetails.businessCategory.label);
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-11a7kd3 > div:nth-child(4) > div:nth-child(2)'
//     )
//       .should('exist')
//       .and('contain.text', 'Industri Pengolahan');

//     cy.get('#root > div.MuiBox-root.css-1q4ndps > div:nth-child(4)').should('exist');
//     cy.get('#root > div.MuiBox-root.css-1q4ndps > div:nth-child(4) > label')
//       .should('exist')
//       .and('have.text', LAStep6.review.footer.note);
//     cy.get('#root > div.MuiBox-root.css-1q4ndps > div:nth-child(4) > button')
//       .should('exist')
//       .and('have.text', button.apply);
//   });
// });

// describe('Loan Application Step 6 (Review) Individual Script English', () => {
//   let locale = 'en';
//   let LAStep6 = locale == 'id' ? loanID : loanEN;
//   let header = LAStep6.review.header.replace('{br}', '<br>');
//   const button = locale == 'id' ? buttonID : buttonEN;

//   beforeEach(() => {
//     cy.visit('http://localhost:3000/');
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-ufzfy2 > div:nth-child(1) > div.MuiBox-root.css-13tqxrv > div > div > button:nth-child(1)'
//     ).click();
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-ufzfy2 > div:nth-child(1) > div.MuiBox-root.css-13tqxrv > div > button:nth-child(2) > label'
//     ).click();
//     cy.fixture('step6Response.json').then((data) => {
//       cy.intercept(
//         {
//           method: 'POST',
//           url: 'v1/entry-point/resume'
//         },
//         {
//           ...data['resumeResponseStep6Individual']
//         }
//       ).as('interceptedResumeResponse');
//     });

//     cy.get('#idNumber').type('1234567890123456');
//     cy.get('#submitButton').click();
//   });

//   it('Loan Application Step 6 (Review) Render', () => {
//     cy.get('#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-10sq7dl')
//       .should('exist')
//       .and(($div) => {
//         expect($div.get(0).innerHTML).to.eq(header);
//       });
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-1x9xi88 > div'
//     )
//       .should('exist')
//       .and('have.text', LAStep6.review.facilityDetails.header);
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-1x9xi88 > button'
//     ).should('exist');
//     //edit Facility Button
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(1) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
//     )
//       .should('exist')
//       .and('have.text', LAStep6.review.facilityDetails.financingFacility.label);
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(1) > div:nth-child(2)'
//     )
//       .should('exist')
//       .and('have.text', LAStep6.review.facilityDetails.financingFacility.value);
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(2) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
//     )
//       .should('exist')
//       .and('have.text', LAStep6.review.facilityDetails.maritalStatus.label);
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(2) > div:nth-child(2)'
//     )
//       .should('exist')
//       .and('contain.text', 'Single');

//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(3) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
//     )
//       .should('exist')
//       .and('have.text', LAStep6.review.facilityDetails.creditType.label);
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(3) > div:nth-child(2)'
//     )
//       .should('exist')
//       .and('contain.text', 'Conventional');

//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(4) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
//     )
//       .should('exist')
//       .and('have.text', LAStep6.review.facilityDetails.tenor.label);
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(4) > div:nth-child(2)'
//     )
//       .should('exist')
//       .and('contain.text', '24 months');

//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(5) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
//     )
//       .should('exist')
//       .and('have.text', LAStep6.review.facilityDetails.financingAmount.label);
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div:nth-child(5) > div:nth-child(2)'
//     )
//       .should('exist')
//       .and('contain.text', 'IDR 200.000.000');

//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div.MuiBox-root.css-cfaci6 > div.ant-row.css-dev-only-do-not-override-14wwjjs > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
//     )
//       .should('exist')
//       .and('have.text', LAStep6.review.facilityDetails.installment.label);
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div.MuiBox-root.css-cfaci6 > div.ant-row.css-dev-only-do-not-override-14wwjjs > div:nth-child(2)'
//     )
//       .should('exist')
//       .and('contain.text', 'IDR 2.000.000');

//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(1) > div.MuiBox-root.css-11a7kd3 > div.MuiBox-root.css-cfaci6 > div.MuiBox-root.css-1bfeqff'
//     )
//       .should('exist')
//       .and(($div) => {
//         expect($div.get(0).innerHTML).to.eq(LAStep6.review.facilityDetails.note);
//       });

//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-1x9xi88 > div'
//     )
//       .should('exist')
//       .and('have.text', LAStep6.review.companyDetails.header);
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-1x9xi88 > button'
//     ).should('exist');
//     //edit Company Button
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-11a7kd3 > div:nth-child(1) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
//     )
//       .should('exist')
//       .and('have.text', LAStep6.review.companyDetails.companyName.label);
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-11a7kd3 > div:nth-child(1) > div:nth-child(2)'
//     )
//       .should('exist')
//       .and('contain.text', 'PT Garuda Raya Semesta');

//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-11a7kd3 > div:nth-child(2) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
//     )
//       .should('exist')
//       .and('have.text', LAStep6.review.companyDetails.dateOfEstablishment.label);
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-11a7kd3 > div:nth-child(2) > div:nth-child(2)'
//     )
//       .should('exist')
//       .and('contain.text', '03 July, 1995');

//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-11a7kd3 > div:nth-child(3) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
//     )
//       .should('exist')
//       .and('have.text', LAStep6.review.companyDetails.latestAnnualSales.label);
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-11a7kd3 > div:nth-child(3) > div:nth-child(2)'
//     )
//       .should('exist')
//       .and('contain.text', 'IDR 300.000.000');

//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-11a7kd3 > div:nth-child(4) > div.ant-col.ant-col-.css-dev-only-do-not-override-14wwjjs'
//     )
//       .should('exist')
//       .and('have.text', LAStep6.review.companyDetails.businessCategory.label);
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-1oe0fcg > div:nth-child(2) > div.MuiBox-root.css-11a7kd3 > div:nth-child(4) > div:nth-child(2)'
//     )
//       .should('exist')
//       .and('contain.text', 'Processing Industry');

//     cy.get('#root > div.MuiBox-root.css-1q4ndps > div:nth-child(4)').should('exist');
//     cy.get('#root > div.MuiBox-root.css-1q4ndps > div:nth-child(4) > label')
//       .should('exist')
//       .and('have.text', LAStep6.review.footer.note);
//     cy.get('#root > div.MuiBox-root.css-1q4ndps > div:nth-child(4) > button')
//       .should('exist')
//       .and('have.text', button.apply);
//   });
// });

// describe('Loan Application Step 6 (Review) Corporate Script English', () => {
//   let locale = 'id';
//   let LAStep6 = locale == 'id' ? loanID : loanEN;
//   let header = LAStep6.review.header.replace('{br}', '<br>');
//   const button = locale == 'id' ? buttonID : buttonEN;

//   beforeEach(() => {
//     cy.visit('http://localhost:3000/');
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-ufzfy2 > div:nth-child(1) > div.MuiBox-root.css-13tqxrv > div > div > button:nth-child(1)'
//     ).click();
//     cy.get(
//       '#root > div.MuiBox-root.css-1q4ndps > div.MuiBox-root.css-ufzfy2 > div:nth-child(1) > div.MuiBox-root.css-13tqxrv > div > button:nth-child(2) > label'
//     ).click();
//     cy.fixture('step6Response.json').then((data) => {
//       cy.intercept(
//         {
//           method: 'POST',
//           url: 'v1/entry-point/resume'
//         },
//         {
//           ...data['resumeResponseStep6Corporate']
//         }
//       ).as('interceptedResumeResponse');
//     });

//     cy.get('#idNumber').type('1234567890123456');
//     cy.get('#submitButton').click();

//     cy.fixture('otpResponse.json').then((data) => {
//       cy.intercept(
//         {
//           method: 'POST',
//           url: 'v1/entry-point/otp/generate'
//         },
//         {
//           ...data['generateOtpResponse']
//         }
//       ).as('interceptedGenerateOtpResponse');
//     });

//     cy.get('#continueButton').click();

//     cy.get('#otpTextBox0').type('1');
//     cy.get('#otpTextBox1').type('1');
//     cy.get('#otpTextBox2').type('1');
//     cy.get('#otpTextBox3').type('1');

//     cy.fixture('otpResponse.json').then((data) => {
//       cy.intercept(
//         {
//           method: 'POST',
//           url: 'v1/entry-point/otp/validate'
//         },
//         {
//           ...data['verifyOtpResponse']
//         }
//       ).as('interceptedVerifyOtpResponse');
//     });

//     cy.get('#buttonVerify').click();
//   });
// });

import { test, expect } from '@playwright/test';
import fs from 'fs';

test("employee_details", async () => {

    const employeefile = fs.readFileSync('./Emplyee.json', 'utf-8');
    const empreader = JSON.parse(employeefile);
    const mobdetails = empreader.contact_no.phone2;

    console.log("Second phone Number:", mobdetails);

    // Verify API skill
    expect(empreader.skill).toContain("SQL");

});
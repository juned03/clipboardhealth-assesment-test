# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. First step to create the database (prefrence will be the Relational DB like mysql instead of Non-Relational DB like mongodb) because data is more structured and to create relation between the tables.

2. Second step will be to create backend api or a lambda function to serve the `getShiftsByFacility` will accept the Facility'id or quarter and then query the data from database, then will return the matched data.

3. Third step will be to create backend api or a lambda function to serve the `generateReport` will accept specific or range shifts time and then it will return all the shifts detail (to make more dynamic else we could have pre-generated the pdf and could serve the pdf on cdn and returns the `pdf cdn url`).

4. And at last in frontend will generate the pdf with the returned data (`JSON/XML`)

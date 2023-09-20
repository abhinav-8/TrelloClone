# Trello Clone

## Setup:

- Clone the repository from `git@github.com:abhinav-8/ZuddlAssignment.git`
- Execute command to install the necessary packages `npm install`
- For running the app in dev mode,execute command `npm start` in root directory

## Questions
- 1.If a user can create and edit stages for a particular board. For example instead of Open > In Progress > Done if they want the stages of their task board to be Read > Working > Reviewing > Completed
- 2.If users can comment on tasks
- 3.How will you do error handling?

## Answers
- 1.Yes this is possible , I haven't hardcoded this part,it can be handled gracefully by just sending these data from the backend having these titles.
We can make a endpoint on backend ,we can hit a request everytime a new type of stage is added ,which will make that data added.
- 2.Currently,I have only title in the tasks but later we can have more details about task ,in which we can just add a section for comments,deadlines etc.
- 3.Will make separate error files for client errors.A sample would look like this,though it's for backend.
This one was for handling all the validation errors.We can do these things and handle errors gracefully.
```const { StatusCodes } = require("http-status-codes");
class ValidationError extends Error {
    constructor(error) {
        super();
        let explanation = [];
        error.errors.forEach((err) => {
            explanation.push(err.message);
        });
        this.name = 'ValidationError';
        this.message = 'Not able to validate the data sent in the request';
        this.explanation = explanation;
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

module.exports = ValidationError;```


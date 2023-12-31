# Trello Clone

## Setup:

- Clone the repository from `git@github.com:abhinav-8/TrelloClone.git`
- Execute command to install the necessary packages `npm install`
- For running the app in dev mode,execute command `npm start` in root directory

## Demo:

https://github.com/abhinav-8/ZuddlAssignment/assets/72845356/2e295033-33fb-4b90-a6cc-9efeb6e5f091


## Questions
- 1.If a user can create and edit stages for a particular board. For example instead of Open > In Progress > Done if they want the stages of their task board to be Read > Working > Reviewing > Completed
- 2.If users can comment on tasks
- 3.How will you do error handling?

## Answers

1.  - Yes this is possible , I haven't hardcoded this part,so if the format of the response is same,there is not any need to alter anything.
    - There would be a table for lists or stages.The primary key of Lists or Stages table would act as a foreign key for Tasks table and will have a one to many relationship.So,this works same for different boards,there would be a board table too and would be related with Stages and Tasks table in similar way.
    - We can make an endpoint for adding more stages and editing stage name which will be a POST and PATCH request.
2.  - Currently,I have only title in the tasks but later we can have more details about task in which we can just add a section for comments,deadlines etc.
    - For this there would be task table having foreign key=P.K of Stages table.The table would have columns as Comments(type array) and would be allowed to be null.There would be various other columns like title,deadline,createdAt and updatedAt etc.
    - Yes from frontend perspective we have to just make an Input Component for comments and hit the PATCH or POST request depending upon the usecase.
    - We can also have separate table for task comments where the columns would have userId, taskId etc if we want the comments from different users too.
3.  - We can make separate error files for client errors.A sample would look like this,though it's for backend.
This one was for handling all the validation errors.We can do these things and handle errors gracefully.
We can catch these errors by adding try catch blocks.
```
const { StatusCodes } = require("http-status-codes");
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

module.exports = ValidationError;

```


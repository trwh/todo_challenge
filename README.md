# Questions for code review
* I assume Karma runs Jasmine? Why can I use `.toNotContain()` in my feature tests (Protractor) but not my unit tests (Karma)?
* How would you handle passing secrets to Travis when you can't add them to Git?
* Is there a way of reading the content of a text box using Selenium? At the moment I can only check the `ng-model` it's bound to, which isn't quite the same thing.
* I don't understand why we used a factory in the Github tool. I didn't need one here I don't think. Can you help?
* How would you integrate this with a database - by using Rails? I can't picture how that would look, do you have an example in your Github account?

# Things still to do
The challenge is complete for the MVP but without being able to mark tasks done. This seems like a huge omission but I'm proud of the 100% test coverage with both unit and feature tests, and working CI (no mean feat as it was not set up for us!).

Also, given that you can delete tasks it would be easy to use the same technique (finding the relevant task by its `$index` in the `ng-repeat` loop) to mark one as complete, with a strikethrough for example.

# Todo Challenge

* Deadline: submit completed pull request by 9am on Monday
* You may use whatever level of JavaScript you feel comfortable with - pure JS, jQuery, Angular, or whatever weird and wonderful framework you want to try. Extra points for DogeScript

Steps
-------

1. Fill out your learning plan self review for the week: https://github.com/makersacademy/learning_plan
2. Fork this repo, and clone to your local machine
3. Complete the following challenge:

## Challenge

![Todo mockup](https://makersacademy.mybalsamiq.com/mockups/2914603.png?key=afabb09aef2901a2732515ae4349c1ec0458294b)

Build a Todo list as a mini front-end application. You don't have to use a database, the front-end is more important - you can use an appropriate data structure stored somewhere in your JavaScript (this time only!)

Here are the core user stories:

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice
```

Here are some other user stories you may choose to implement:

```
As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks

As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```

As you may imagine, implementing a To-do list is very much a solved problem. However, we are mainly interested in seeing how you approach testing and design. We are looking for:

* well written, well structured acceptance and unit tests
* clear and expressive JavaScript
* good HTML5 markup

Don't worry about deployment, and make sure you read the CONTRIBUTING.md when submitting a pull request.

## Extensions

* Deploy the app
* Create a persistance layer (e.g. MongoDB), or use LocalStorage or the filesystem through Node
* Make it look purdy (CSS) - try a framework like Bootstrap or Foundation

## CI

Read the `.travis.yml` if any of the steps below don't make sense!

* Make sure you have set up `npm test` in your `package.json` so that it runs your Karma tests
* Make sure you have your Protractor config file at `e2e/conf.js`
* Make sure `npm start` spins up whatever serves up your app - `http-server`, Sinatra or Node

Good luck!

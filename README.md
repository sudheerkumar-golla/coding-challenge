Chainyard Coding Challenge
=============

This coding challenge is optional if you already have some code that you're proud of and can share with us.

When completing this coding challenge, please organize your code as if it were going into production, then send us a link to the hosted repository (e.g. Github, Bitbucket...).

### Functional Spec
----------------------------

Create a service that allows a user to **browse block & transaction data** on the Blockchain.org **blockchain**. The user should be able to:

- View a single block
- View a single transaction on a block
- View the latest block

#### UI/UX Design
------------------------

The UI/UX is completely up to you. Be as creative as you want while considering the user's experience when using the service. You may add additional features if you think the users will find it useful!

### Technical Spec
---------------------------

The architecture for this service will feature only the web front-end. We'll provide you with information on how to access the Blockchain.org REST API for obtaining data about blocks and transactions on the blockchain.


#### Front-end

The front-end should ideally be a single page app with a single index.html linking to JS/CSS/etc. Take this opportunity to demonstrate your HTML and CSS knowledge. Although we're leaving the choice of technology up to you, we use JavaScript frameworks such as Angular and ReactJS at Chainyard.


#### Back-end

The Blockchain.org REST API is open to developers and accessible without registering for an account. You can read the API documentation here: https://blockchain.info/api/blockchain_api.

For example: Retrieving data on the latest block can be achieved by hitting the following endpoint: ```https://blockchain.info/latestblock```
This will return a result similar to the example below:

```
{
    "hash":"0000000000000538200a48202ca6340e983646ca088c7618ae82d68e0c76ef5a",
    "time":1325794737,
    "block_index":841841,
    "height":160778,
    "txIndexes":[13950369,13950510,13951472]
 }
```

#### Hosting

When you’re done, host it somewhere (e.g. on Amazon EC2, Heroku, Google AppEngine, etc.).


### How We Review
-------------------------

We value quality over feature-completeness. It is fine to leave things aside provided you explain your reasoning. You should consider this code ready for final review with your colleague, i.e. this would be the last step before deploying to production.

The aspects of your code we will assess include:

- **Architecture**: how clean is the separation between the front-end and the back-end?
- **Correctness**: does the application do what was asked?
- **Code quality**: is the code simple, easy to understand, and maintainable? Are there any code smells or other red flags? Is the coding style consistent with the language's guidelines? Is it consistent throughout the codebase?
- **UX**: is the web interface understandable and pleasing to use?



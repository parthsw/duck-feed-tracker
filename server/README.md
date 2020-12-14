# Backend
REST APIs built using Node.js and Expree.js to handle three different resources country, food, and duck feed. The source code is containerized using Docker and hosted on Amazon Elastic Beanstalk.

## Structure
The application follows an MVC framework, where on receiving any new requests from a client, the appropriate route asks controller to handle the request. The controller then delegates the request to an appropriate service layer class to perform actual business operation. The service layer class is reponsible for performing the business operation, communicating with database layer, and performing data transformation.

## Built With

* [NodeJS](https://nodejs.org/en/) - The JavaScript Runtime Environment
* [Express](https://expressjs.com/) - Node.js Web Application Framework
* [Docker](https://www.docker.com/) - Empowering App Development for Developers
* [AWS Elastic Beanstalk](https://docs.aws.amazon.com/elastic-beanstalk/index.html)

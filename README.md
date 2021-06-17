# Angular Flask Web App Framework

### Project Description

* Application is a RESTful API Framework.
* Performs the HTTP GET Request to get data from the Flask-Python backend and outputs data to the Angular front end.
* Program developed using Angular 12.0.4 and Flask.
* Node 14.17.0 was used as it was the LTS version at the time of development.
  
### Run the Program Using Docker Compose

Follow the steps to build and run the application from the Linux terminal.

1. Inside the Angular-Flask-Framework folder run the following commands.
2. Build the containers using Docker Compose.
    ```
    docker-compose build
    ```
3. Run the Docker containers. The -d flag means the containers will run in a detached state.
    ```
    docker-compose up -d
    ```
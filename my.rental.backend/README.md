# Getting Started

### Dockerization
 ```
    mvn clean package
    docker build . -t my-rental-backend
    docker run -dp 8080:80 my-rental-backend
 ```

### Start as development environement
```
    docker run --name rental_database -e POSTGRES_USER=rental -e POSTGRES_PASSWORD=rental -p 5432:5432 -d postgres
```

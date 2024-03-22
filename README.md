# Clean Architecture Node.js Express API

This project demonstrates how to implement clean architecture in a Node.js Express API, focusing on simplicity and clarity. The project structure is designed to provide a clear understanding of how to implement clean architecture for a simple API, such as a TodoAPI.

## Overview

The API revolves around managing tasks with the following attributes: `id`, `name`, `dueDate`, and `priority`. It allows for basic CRUD (Create, Read, Update, Delete) operations on tasks.

## Clean Architecture

Clean Architecture is a software design philosophy introduced by Robert C. Martin, emphasizing separation of concerns and independence of frameworks. The architecture is divided into concentric circles or layers, each representing a different level of abstraction. These layers include:

- **Entities**: Represent core business objects with business logic. In this project, `Task` entity represents a task with attributes like `id`, `name`, `dueDate`, and `priority`.
- **Use Cases**: Implement application-specific business rules and logic. These use cases orchestrate the flow of data and operations within the system.
- **Interface Adapters**: Convert data from the use cases into a format suitable for external interfaces, such as APIs or databases.
- **Frameworks & Drivers**: Contain frameworks and tools such as Express.js, database connectors, and external libraries.

### Implementation in this Project

- **Entities**: The `Task` class encapsulates the core attributes and behavior of a task.
- **Use Cases**: Use case classes such as `CreateTask`, `GetTask`, `UpdateTask`, and `DeleteTask` handle the business logic for respective operations.
- **Interface Adapters**: Express routes (`tasksRoutes.js`) act as the interface adapter, translating HTTP requests into use case invocations and vice versa.
- **Frameworks & Drivers**: Express.js is used as the web framework, and database interactions are handled through a simple in-memory repository.

## Pros and Cons of Clean Architecture

### Pros:

- **Separation of Concerns**: Clean Architecture ensures clear separation between business logic and external concerns, making the codebase easier to understand and maintain.
- **Testability**: With clearly defined boundaries between layers, it becomes easier to write isolated unit tests for different components of the system.
- **Flexibility**: The architecture allows for easy substitution of components, making it adaptable to changing requirements or technology stacks.

### Cons:

- **Complexity**: Implementing Clean Architecture may introduce additional complexity, especially for smaller projects or simple applications.
- **Overhead**: The additional layers and abstractions can lead to increased development time and effort, especially in the initial setup phase.
- **Learning Curve**: Developers unfamiliar with Clean Architecture may require time to understand and adapt to its principles and patterns.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/merebeabiguime/todo-app.git`
2. Navigate to the project directory: `cd todo-app`
3. Install dependencies: `npm install`
4. Start the server: `npm start`
5. Access the API endpoints using tools like Postman or curl.

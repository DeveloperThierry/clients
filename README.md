# Full Stack CRUD Application

![Screenshot](/images/file.png)

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/yourusername/repo) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.md)

### Description
A full-stack client management application built with React, Node.js, and PostgreSQL, enabling seamless creation, retrieval, updating, and deletion of records.

### Features
* **Client Management**: Full CRUD (Create, Read, Update, Delete) functionality for client records.
* **Real-time Searching**: Efficient search by name, email, or job description.
* **Responsive Design**: Modern, mobile-friendly UI built with Tailwind CSS and DaisyUI.
* **Scalable Architecture**: Organized MVC pattern separating routes, controllers, and services.

### Installation
Ensure you have [Node.js](https://nodejs.org/) installed before proceeding.

1. Clone the repository:
   bash
   git clone https://github.com/andreikennethmoreno/-simple-crud.git
   
2. Navigate to the frontend directory and install dependencies:
   bash
   cd crud-frontend-v1
   npm install
   
3. Navigate to the backend directory and install dependencies:
   bash
   cd ../backend
   npm install
   
4. Configure your `.env` file with your PostgreSQL database credentials.

### Usage
1. Start the backend server:
   bash
   nodemon src/index.js
   
2. In a separate terminal, start the frontend development server:
   bash
   npm run dev
   
3. Access the application at `http://localhost:5173`.

### Contributing
We welcome contributions! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) to learn about our development process and how to submit pull requests.

### License
This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

### Support
For questions or help, please reach out to the project maintainer via the email provided in the repository.
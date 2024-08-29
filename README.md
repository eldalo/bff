# BFF

This project is an API developed with NestJS and Graphql that connects to a external API's.

## Prerequisites

- [Node.js](https://nodejs.org/en/)

## Project Setup

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/eldalo/bff
cd bff
```

## 2. Project setup

```bash
$ npm install
```

## 3. Set Up Environment Variables

| Variable Name            | Default Value           | Required |
| ------------------------ | ----------------------- | -------- |
| `APEX_CLIENT_API_URL`    | `http://localhost:3000` | Yes      |
| `APEX_PORTFOLIO_API_URL` | `http://localhost:3002` | Yes      |

## 4. Compile typings

```bash
$ npm run generate:typings
```

## 5. Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

The API will be available at http://localhost:3001/graphql.

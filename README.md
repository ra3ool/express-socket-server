# Express WebSocket Application

This project is an Express application with WebSocket support, built using TypeScript. It provides a simple setup for creating real-time applications.

## Project Structure

```
express-websocket-app
├── src
│   ├── app.ts                # Main application file
│   ├── server.ts             # Server setup and WebSocket handling
│   ├── websocket
│   │   └── index.ts          # WebSocket connection handling
│   ├── routes
│   │   └── index.ts          # API routes setup
│   ├── config
│   │   └── env.ts            # Environment variable configuration
│   └── types
│       └── index.ts          # Custom TypeScript types
├── .env                       # Environment variables
├── package.json               # Project dependencies and scripts
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd express-websocket-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```
   PORT=3000
   ```

## Scripts

- **Start the application**: 
  ```
  npm start
  ```
  This command runs the application using `ts-node`.

- **Build the application**: 
  ```
  npm run build
  ```
  This command compiles the TypeScript files into JavaScript.

- **Run in development mode**: 
  ```
  npm run dev
  ```
  This command runs the application with `ts-node-dev`, which automatically restarts the server on file changes.

## Usage

Once the server is running, you can connect to the WebSocket server using a WebSocket client. The server listens for connections and can handle messages in real-time.

## License

This project is licensed under the MIT License.
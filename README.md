# CRUD Service

A simple Express.js-based CRUD service for managing patient records.

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository (if you haven't already)
2. Navigate to the crud-service directory:
   ```bash
   cd /path/to/crud-service
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Service

Start the service using npm:
```bash
npm start
```

Or directly with Node.js:
```bash
node app.js
```

The service will start and be available at:
```
http://localhost:4002
```

## API Endpoints

The following endpoints are available:

- `GET /patients` - Get all patients
- `POST /patients` - Create a new patient
- `GET /patients/:id` - Get a specific patient
- `PUT /patients/:id` - Update a patient
- `DELETE /patients/:id` - Delete a patient

## Dependencies

- Express.js - Web framework
- Body Parser - Parse incoming request bodies
- CORS - Enable Cross-Origin Resource Sharing
- Helmet - Secure HTTP headers
- Morgan - HTTP request logger
- JSON Web Token - For authentication

## Configuration

The service runs on port 4002 by default. To change the port, modify the `PORT` constant in `app.js`.

## Testing

No tests are currently configured. You can add tests using a testing framework like Jest or Mocha.

## License

ISC
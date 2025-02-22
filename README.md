# Queer Archive Explorer

A full-stack web application that provides easy access to queer resources from the Internet Archive.

## Features

- Browse queer-related content from the Internet Archive
- Paginated results with 10 items per page
- Responsive and modern UI
- Cached responses for better performance

## Tech Stack

- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **API Calls**: Axios
- **Styling**: Tailwind CSS

## Getting Started

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm run dev
   ```

The server will run on port 3001.

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will run on port 5173.

## API Endpoints

### GET /api/resources

Query queer-related resources from the Internet Archive.

Parameters:
- `page` (optional): Page number (default: 1, max: 50)

Response format:
```json
{
  "totalFound": number,
  "page": number,
  "results": [
    {
      "identifier": string,
      "title": string,
      "creator": string,
      "description": string,
      "mediatype": string,
      "url": string
    }
  ]
}
```

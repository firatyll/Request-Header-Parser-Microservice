# API Whoami Endpoint
## Description
This project provides a simple API endpoint at `/api/whoami` that returns information about the requester.
## API Specification
- **Method:** GET
- **Endpoint:** `/api/whoami`
### Response
The response is a JSON object with:
- **ipaddress:** IP address of the requester.
- **language:** Preferred language of the requester.
- **software:** Software information of the requester.
#### Example Response
```json
{"ipaddress": "192.168.1.1", "language": "en-US", "software": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"}
```
## Installation
1. Download the project files to your computer.
2. Navigate to the project directory in the terminal or command prompt.
3. Install the necessary dependencies using the `npm install` command.
4. Start the application with the `npm start` command.
5. Use the API by visiting `http://localhost:3000` in your browser.
## Dependencies
- [Express.js](https://expressjs.com/): A lightweight web framework used for building web applications and APIs.



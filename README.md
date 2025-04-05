# Google Chat MCP Server

A Model Context Protocol (MCP) server implementation for interacting with the Google Chat API via webhooks. This server provides a simple tool for posting text messages to Google Chat spaces.

## Features

- Post text messages to Google Chat spaces using webhooks
- Simple and secure webhook-based integration
- No OAuth setup required
- Easy to use with MCP-compatible tools

## Installation

### Using Smithery (Recommended)

Install the server using Smithery's CLI:

```bash
npx spinai-mcp install @KaranThink41/gchat_post_text_message --provider smithery
```

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/KaranThink41/google_chat_mcp_server.git
cd google_chat_mcp_server
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

4. Run the server:
```bash
node build/index.js
```

### Docker Setup

You can run the server using Docker. Here's how to set it up:

1. Build the Docker image:
```bash
docker build -t google-chat-mcp-server .
```

2. Run the Docker container with the necessary environment variables:
```bash
docker run -e GOOGLE_CHAT_SPACE_ID=your_space_id \
          -e GOOGLE_CHAT_API_KEY=your_api_key \
          -e GOOGLE_CHAT_TOKEN=your_token \
          google-chat-mcp-server
```

## Usage Example

To post a message to Google Chat, send the following JSON request:

```json
{
  "method": "tools/call",
  "params": {
    "name": "post_text_message",
    "arguments": {
      "space_id": "your_space_id",
      "key": "your_api_key",
      "token": "your_token",
      "text": "Hello, this is a test message!"
    }
  }
}
```

## Configuration

The server requires the following environment variables to function:

- `GOOGLE_CHAT_SPACE_ID`: The Space ID of your Google Chat space
- `GOOGLE_CHAT_API_KEY`: The API key for your Google Cloud project
- `GOOGLE_CHAT_TOKEN`: The authentication token for Google Chat

These variables can be set in your environment or via Docker (as shown in the Docker Setup section).

To run locally without Docker, create a `.env` file with the following content:

```
GOOGLE_CHAT_SPACE_ID=your_space_id
GOOGLE_CHAT_API_KEY=your_api_key
GOOGLE_CHAT_TOKEN=your_token
```

## Security

- Webhook URLs are passed directly in the request payload
- No sensitive credentials are stored in the code
- All requests are validated before execution

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

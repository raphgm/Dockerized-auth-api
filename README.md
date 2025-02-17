
# Auth API (Login/Registration)

A simple authentication API with login and registration endpoints, built using Node.js, Express, and tested with Jest. Includes Docker support and CI/CD via GitHub Actions.

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/raphgm/https://github.com/raphgm/Dockerized-auth-api.git/ci-cd.yml) 
![Docker Image Version](https://img.shields.io/docker/v/rdgmh/my-auth-api/latest)

---

## Features

- **Login/Registration**: REST API endpoints for user authentication.
- **Mock Database**: In-memory user storage (for demonstration purposes).
- **Automated Tests**: JEST + Supertest for endpoint validation.
- **Dockerized**: Ready for containerized deployment.
- **CI/CD Pipeline**: GitHub Actions automates testing and Docker image pushes.

---

## Quick Start

### Prerequisites
- Node.js 20+
- Docker (optional)
- Git

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
   cd YOUR_REPO
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Usage
1. Start the server:
   ```bash
   npm start
   ```
   Server runs at `http://localhost:3000`.

2. Run tests:
   ```bash
   npm test
   ```

---

## API Endpoints

| Endpoint         | Method | Description                 | Request Body Example                   |
|------------------|--------|-----------------------------|----------------------------------------|
| `/api/login`     | POST   | Authenticate a user         | `{ "email": "user@example.com", "password": "password123" }` |
| `/api/register`  | POST   | Register a new user         | `{ "email": "new@example.com", "password": "newpass" }` |

**Example Requests**:
```bash
# Login
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'

# Register
curl -X POST http://localhost:3000/api/register \
  -H "Content-Type: application/json" \
  -d '{"email":"new@example.com","password":"newpass"}'
```

---

## Docker Deployment

1. Build the image:
   ```bash
   docker build -t my-auth-api .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 my-auth-api
   ```

3. Access the API at `http://localhost:3000`.

---

## CI/CD Pipeline (GitHub Actions)

The workflow (`.github/workflows/ci-cd.yml`):
1. **Tests**: Runs on every push to `main`.
2. **Docker Build/Push**: Builds and pushes the image to Docker Hub if tests pass.

**Secrets Required**:
- `DOCKER_USERNAME`: Your Docker Hub username.
- `DOCKER_PASSWORD`: Docker Hub password or access token.

---

## Testing

Tests validate:
- Successful login with valid credentials
- Failed login with invalid credentials
- User registration
- Duplicate email registration rejection

Run tests locally:
```bash
npm test
```

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## License

MIT License. See [LICENSE](LICENSE).

---

**Author**: Raphael Gabriels
**Contact**: raphael@rdgmh.onmicrosoft.com
**GitHub**: [raphgm](https://github.com/raphgm)
```

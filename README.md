# Campus Compass — API Gateway

This repository contains the Campus Compass API Gateway: a TypeScript-based gateway project that centralizes routing, authentication, and cross-cutting concerns for the Campus Compass microservices.

Repository root (key files):
- Dockerfile
- gateway.config.yml
- package.json
- package-lock.json
- tsconfig.json
- src/ (TypeScript source)
- LICENSE
- README.md (project-level; this is the API Gateway README)

Languages used:
- TypeScript
- Dockerfile

Purpose
- Provide a single entry point for clients to access Campus Compass backend services.
- Centralize cross-cutting features such as authentication, authorization, rate-limiting, request validation, CORS, logging, and observability.

Contents of this README
- Quick start
- Configuration
- Running locally
- Docker usage
- Routes and configuration
- Security and operational notes
- Contributing and license

Quick start (local)
1. Install dependencies:
   npm install

2. Build:
   npm run build

3. Start (development):
   npm run start:dev
   (Or `npm run start` for production mode after build; see package.json scripts.)

Default ports and environment
- By convention the gateway listens on a single port (e.g., 3000). The exact port is controlled with an environment variable (e.g., PORT) in package.json / runtime.
- NODE_ENV influences behavior (development, production).

Configuration
- Core routing and behavior is controlled via gateway.config.yml at the repository root.
- Use environment variables for secrets (JWT_SECRET, OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET, etc.)
- See docs/API_GATEWAY_DOCS.md for details and examples of gateway.config.yml structure.

Docker
- A Dockerfile exists at the repository root to build an image for the gateway.
- Example build:
  docker build -t campus-compass-gateway .
- Example run:
  docker run --rm -p 3000:3000 \
    -e NODE_ENV=production \
    -e PORT=3000 \
    -e JWT_SECRET=your_jwt_secret \
    campus-compass-gateway

Health, metrics, and observability
- The gateway should expose at minimum:
  - /health or /healthz for readiness/liveness probes
  - /metrics (Prometheus) for operational metrics
- Ensure structured logs (JSON) and correlation IDs for request tracing.

Security recommendations
- Enforce HTTPS (TLS termination at ingress or proxy)
- Use JWT or OAuth2 for authentication and validate tokens on the gateway
- Protect admin/config endpoints
- Rate limit per client/IP to avoid abuse

Extending routes and middleware
- Add new proxy routes in gateway.config.yml (see docs)
- Implement custom middleware in src/, compiled via TypeScript build pipeline

Contributing
- Follow the repo's code style and tests
- Create feature branches and open PRs against main
- Add changelog entries for notable changes

License
- See LICENSE at repository root.

If you want, I can push this file into the repository and add a more detailed docs folder containing examples and templates for gateway.config.yml, example environment files, and a troubleshooting checklist.

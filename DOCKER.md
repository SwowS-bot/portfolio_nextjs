# Docker Setup for Portfolio

This project includes Docker configuration for both development and production environments.

## Prerequisites

- Docker installed on your machine
- Docker Compose installed

## Production Build

### Using Docker Compose (Recommended)

```bash
# Build and start the production container
docker-compose up -d

# View logs
docker-compose logs -f portfolio

# Stop the container
docker-compose down
```

The application will be available at `http://localhost:3000`

### Using Docker directly

```bash
# Build the image
docker build -t portfolio-app .

# Run the container
docker run -p 3000:3000 portfolio-app
```

## Development Mode

For development with hot-reload:

```bash
# Start the development container
docker-compose --profile dev up portfolio-dev

# Or run it in detached mode
docker-compose --profile dev up -d portfolio-dev

# View logs
docker-compose logs -f portfolio-dev

# Stop the container
docker-compose --profile dev down
```

The development server will be available at `http://localhost:3001`

## Useful Commands

```bash
# Rebuild the image
docker-compose build

# Remove all containers and volumes
docker-compose down -v

# Access container shell
docker exec -it portfolio-app sh

# View container logs
docker logs portfolio-app

# Remove dangling images
docker image prune
```

## Environment Variables

Create a `.env.local` file in the project root for environment-specific variables. These will be automatically loaded by Next.js.

Example:
```env
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Docker Configuration Files

- `Dockerfile` - Multi-stage production build
- `.dockerignore` - Files to exclude from Docker context
- `docker-compose.yml` - Orchestration for both dev and prod environments
- `next.config.ts` - Updated with `output: 'standalone'` for optimal Docker builds

## Notes

- The production build uses a multi-stage Dockerfile to minimize image size
- The application runs as a non-root user for security
- Node modules are cached in separate layers for faster builds
- Development mode uses volume mounting for live code updates

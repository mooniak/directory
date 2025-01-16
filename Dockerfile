FROM node:20-alpine AS development-dependencies-env

# Install pnpm with specific version
RUN corepack enable && corepack prepare pnpm@8.15.1 --activate

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

RUN pnpm run build

EXPOSE 3000


CMD ["pnpm", "run", "start"]
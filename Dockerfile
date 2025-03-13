FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

COPY . .
RUN npm run build

# Production Image
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/.output .output

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]

FROM node:18-alpine AS builder
WORKDIR /app

# Evitar que husky falle
ENV HUSKY=0

COPY package*.json ./

# Instalamos todas las dependencias (producción + dev)
RUN npm install

COPY . .

# Build de Next.js
RUN npm run build

FROM node:18-alpine
WORKDIR /app

# Copiar solo lo necesario para producción
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/src ./src

EXPOSE 3000
CMD ["npm", "start"]


FROM node:16.13.0-alpine as builder
WORKDIR /usr/src/build
COPY . /usr/src/build
RUN apk upgrade --no-cache && npm install --no-audit  && npm run build

FROM node:16.13.0-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY --from=builder /usr/src/build/dist/ .
CMD ["node", "--max-old-space-size=2048","server.js"]
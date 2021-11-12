FROM node:14.17.3-alpine as builder
WORKDIR /usr/src/build
COPY . /usr/src/build
RUN apk upgrade --no-cache && npm install npm@latest && npm install --no-audit  && npm run build

FROM node:14.17.3-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY --from=builder /usr/src/build/dist/ .
CMD ["node", "--max-old-space-size=2048","server.js"]
## Cliente Gateway
El gateway es el punto de comunicacion entre nuestros clilentes y nuestros servicios. Es el encargado de recibir as peticiones, enviadas a los servicios correspondientes y devolver la respuesta al cliente.

## Dev
1. Clonar el repositorio
2. Instalar dependencias
3. Crear un archivo `.env` basado en el `env.template`
4. Levantar el servidor de NATS
```
docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats
```
5. Tener levantados los microservicios que se va consumir
6. Levantar proyecto con `npm run start:dev`

## Nats
  docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats

## PROD
Ejecuta

docker build -f dockerfile.prod -t client-gateway .
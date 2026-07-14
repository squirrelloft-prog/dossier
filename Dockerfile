FROM cr.yandex/mirror/nginx:alpine

LABEL traefik.enable="true"
LABEL traefik.http.routers.dossier.rule="Host(`dossier.zive26.ru`)"
LABEL traefik.http.routers.dossier.tls="true"
LABEL traefik.http.routers.dossier.entrypoints="web,websecure"
LABEL traefik.http.routers.dossier.tls.certresolver="mytlschallenge"
LABEL traefik.http.services.dossier.loadbalancer.server.port="80"

WORKDIR /usr/share/nginx/html/
COPY . .

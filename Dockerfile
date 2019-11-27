FROM cryptotechspace/cryptotechspace-nginx:0.0.2

ARG BUILD_DATE
ARG VERSION
ARG VCS_URL
ARG VCS_REF

LABEL org.label-schema.build-date=$BUILD_DATE \
    org.label-schema.vcs-url=$VCS_URL \
    org.label-schema.vcs-ref=$VCS_REF \
    org.label-schema.version=$VERSION \
    org.label-schema.name='cryptotechspace.com' \
    org.label-schema.description='Ufficial cryptotechspace.com docker image' \
    org.label-schema.usage='https://www.cryptotechspace.com/docker' \
    org.label-schema.url='https://www.cryptotechspace.com/' \
    org.label-schema.vendor='cryptotechspace' \
    org.label-schema.schema-version='1.0' \
    org.label-schema.docker.cmd='docker run -dit cryptotechspace/cryptotechspace.com' \
    org.label-schema.docker.cmd.devel='docker run --rm -ti cryptotechspace/cryptotechspace.com' \
    org.label-schema.docker.debug='docker logs $CONTAINER' \
    io.github.offensive-security.docker.dockerfile="Dockerfile" \
    io.github.offensive-security.license="GPLv3" \
    MAINTAINER="Cryptotechspace <info@cryptotechspace.com>"

WORKDIR /root

RUN set -x \
    && git clone https://github.com/cryptotechspace/cryptotechspace.com.git \
    && cd cryptotechspace.com \
    && npm install --yes && npm run build \
    && cp -R ./dist/cryptotech-web/* /usr/share/nginx/html 

COPY default.conf /etc/nginx/conf.d/

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]

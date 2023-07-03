FROM registry.access.redhat.com/ubi8/nodejs-16-minimal:1-14.1645811213

WORKDIR /app

ADD . /app

USER root
RUN npm run build

LABEL name="ibm/sample-temperature-converter-app" \
      vendor="IBM" \
      version="1" \
      release="1.0" \
      summary="This is a container image of the sample-temperature-converter-app" \
      description="This container image will deploy a NodeJs Express App"

ENV HOST=0.0.0.0 PORT=3000

EXPOSE 3000/tcp

CMD ["npm", "start"]

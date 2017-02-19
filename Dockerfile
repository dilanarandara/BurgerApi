FROM node:boron

ENV INSTALL_DIR /ebs/dilan/app-server
ENV LOG_DIR /home/BurgerStoreLogs

RUN mkdir -p ${INSTALL_DIR}
WORKDIR ${INSTALL_DIR}
RUN mkdir -p ${LOG_DIR}

RUN apt-get -qq update && \
    apt-get -qq install vim

# Bundle app source
COPY . ${INSTALL_DIR}
RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]

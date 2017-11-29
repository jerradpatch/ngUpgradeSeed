

# Set the base image
FROM selenium/standalone-chrome-debug

ENV nodeVersion=8.9.1
ENV PATH=$PATH
ENV user=udocker

# Dockerfile author / maintainer
LABEL authors=MetroStarSystems

USER root

# install curl, add volume dir, set its permissions
RUN apt-get update && apt-get install -y curl && mkdir /code && chmod 777 /code && cd /code

# add unprivileged user else npm wont run correctly (as root)
RUN adduser --disabled-password --gecos '' udocker
USER udocker

# install node and npm via nvm  &&
# download node and use node version
#
#
#
#
# install compiler & test env
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash &&\
 export NVM_DIR="$HOME/.nvm" &&\
 [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" &&\
 [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" &&\
 nvm install ${nodeVersion} &&\
 nvm use ${nodeVersion} &&\
 npm install -g @angular/cli &&\
 export NODE_BIN=$NVM_DIR/versions/node/v$nodeVersion/bin &&\
 echo "export PATH=$PATH: $NODE_BIN" >> $(echo $HOME)/.bashrc

USER root

RUN  ln -s /home/udocker/.nvm/versions/node/v8.9.1/bin/node /usr/bin/node &&\
 ln -s /home/udocker/.nvm/versions/node/v8.9.1/bin/npm /usr/bin/npm &&\
 ln -s /home/udocker/.nvm/versions/node/v8.9.1/bin/ng /usr/bin/ng

USER udocker

#open container side
EXPOSE 8080 4444

WORKDIR /code


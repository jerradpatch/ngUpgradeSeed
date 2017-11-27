

# Set the base image
FROM selenium/standalone-chrome-debug

# Dockerfile author / maintainer
LABEL authors=MetroStarSystems

#RUN export old_user=$USER
USER root

# install curl
RUN apt-get update && apt-get install -y curl

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
 nvm install 8.9.1 &&\
 nvm use 8.9.1 &&\
 npm install -g @angular/cli

#open private ports, container side
EXPOSE 80 4444


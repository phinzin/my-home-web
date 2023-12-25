FROM mcr.microsoft.com/devcontainers/javascript-node:0-18
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install git \
    && npm install -g @angular/cli@14.2.0

    # Clean up
RUN apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*
EXPOSE 4200

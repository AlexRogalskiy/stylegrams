#!/bin/echo docker build . -f
# -*- coding: utf-8 -*-

FROM gitpod/workspace-full:latest

ARG BUILD_DATE="$(git rev-parse --short HEAD)"
ARG VCS_REF="$(date -u +\"%Y-%m-%dT%H:%M:%SZ\")"
ARG VERSION="1.0.0"

LABEL maintainer="Alexander Rogalskiy <hi@nullables.io>"
LABEL organization="nullables.io"
LABEL io.nullables.api.playground.image.build-date=$BUILD_DATE
LABEL io.nullables.api.playground.image.name="StyleGrams"
LABEL io.nullables.api.playground.image.description="Styled infographics"
LABEL io.nullables.api.playground.image.url="https://nullables.io/"
LABEL io.nullables.api.playground.image.vcs-ref=$VCS_REF
LABEL io.nullables.api.playground.image.vcs-url="https://github.com/AlexRogalskiy/stylegrams"
LABEL io.nullables.api.playground.image.vendor="Nullables.io"
LABEL io.nullables.api.playground.image.version=$VERSION

ENV LC_ALL en_US.UTF-8
ENV LANG ${LC_ALL}
ENV HOME /home/gitpod

# Define a constant with the working directory
ARG USER_HOME_DIR="/root"

RUN apt-get update && \
  apt-get -y install \
    libgtkextra-dev \
    libgconf2-dev \
    libnss3 \
    libasound2 \
    libxtst-dev \
    libxss1 \
    libxss-dev \
    software-properties-common \
    build-essential \
    xvfb \
    curl \
    libgtk-3-0 \
    unzip

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -

RUN apt-get update && apt-get -y install yarn nodejs

USER gitpod

WORKDIR $HOME

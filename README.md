# README

## Tested environment

- NodeJS 5.1.1
- OSX 10.11.4

## Setup

Install npm dependencies.

    npm i

Also download chromedriver in your repo root if you want to run the tests locally.

<https://sites.google.com/a/chromium.org/chromedriver/downloads>

## Run

Run local tunnel server.

    CBT_USERNAME=your-username CBT_AUTHKEY=your-authkey make cb-server

Then run the tests.

    CBT_USERNAME=your-username CBT_AUTHKEY=your-authkey make cb-test


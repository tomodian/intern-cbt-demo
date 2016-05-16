
.PHONY: build-js server test

build-js:
	@echo 'Initializing build directory..'
	@rm -Rf ./build/test
	@mkdir -p build/test/src/javascripts build/test/amd/javascripts
	@echo 'Syncing source codes..'
	@rsync -Rv `find src/javascripts -type f -name '*.js'` build/test
	@echo 'Compiling source code into es2015..'
	@./node_modules/.bin/babel build/test/src/javascripts --out-dir build/test/src/javascripts
	@echo 'Converting source code from CommonJS style to AMD..'
	@./node_modules/.bin/r.js -convert build/test/src/javascripts/ build/test/amd/javascripts/

server:
	./chromedriver --port=4443 --url-base=wd/hub

test: build-js
	./node_modules/.bin/intern-runner config=intern.config

cb-server:
	./node_modules/.bin/cbt_tunnels --username $(CBT_USERNAME) --authkey $(CBT_AUTHKEY) --port 9000

cb-test: build-js
	@echo "Running tests in CrossBrowserTesting.."
	@./node_modules/.bin/intern-runner config=intern.crossbrowser

test:
	./node_modules/mocha/bin/mocha --recursive -R spec

	# Placeholder for code coverage check
	#./node_modules/mocha/bin/mocha --recursive --require blanket -R travis-cov

all: test
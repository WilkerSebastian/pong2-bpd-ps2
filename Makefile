all:
	esbuild main.js --bundle --minify --format=esm --outfile=dist/main.js

	cp -r assets/ dist/

	cp pong_2_bolado.elf dist/

	zip -r pong_2_bolado.zip dist
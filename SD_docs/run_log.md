node --version
it worked (there is a version of node here)

npm install
it worked.

 npm test
 it worked

 npm run typecheck
 it worked

 npm run dev
it didnt work 
i tried to do it in order to solve the problem:
in the file package.json: in scripts
    i change it:     "dev": "tsx watch src/server.ts",
    to be it: "dev": "ts-node src/server.ts",
    i run this command in the terminal: npm install ts-node --save-dev
    but it still not work!




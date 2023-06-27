# calculator_html_js
a simple calculator done in html/js and compiled with docker-compose

❗ Requirements:
- docker (/compose)
- web browser (firefox/chrome/bing/opera)
- sudo permissions (to use docker)
- cypress (for the test not mandatory)

📋 Usage:
- sudo docker-compose up --build
- open a browser
- go to http://localhost (you might change it so beware 😄)
- try it as you want (division by zero is handled and won't break everything 😎)
- do npx cypress open (to start cypress)
- click on e2e testing
- select chrome
- and you can click on any spec to see the tests

✔️ once you're finished 
simply use [sudo docker-compose down; sudo docker-compose kill] to stop the process.
this is a simple calculator made with html/js and docker-compose to compile.

ps: [sudo docker images] to list the images you have (you might want to [sudo docker rmi IMAGE_ID] the images you don't need anymore 🆒.

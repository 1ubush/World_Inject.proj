baglay = ["Баглай Андрій Олександрович", "Головний інженер",
         "worldinject@ukr.net", "+38044 2079758", "+38067 5589412"];

two = ["English, Deutsch", "Project Managerin", "wasserprojekt@radoy.com.ua",
       "+38095 4049033", "+38067 5589410"];
       
kolesnichenko = ["Колесниченко Альона Вікторівна", "Проект-менеджер",
                 "wasserprojekt@radoy.com.ua", "+38095 4049033", "+38067 5589410"];

for (let i = 1; i < 6; i++) {
   document.write(`
   <div class="info_block">
      <div class="content_block">
         ${baglay[-1 + i] + "<br>"} <br>
         ${two[-1 + i] + "<br>"} <br>
         ${kolesnichenko[-1 + i]}
      </div>
   </div>
   `);
}
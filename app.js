window.addEventListener('load', init);


var dugme;
var input_task;

function init(){
    console.log("radi");
    dugme = document.getElementById('dugme');
    dugme.addEventListener('click',dodajTask);
}



function dodajTask(){
    event.preventDefault();
    
    input_task = document.getElementById('task').value;
    taskovi = document.querySelector('.input-taskovi');
    if(input_task.trim() !== "" && input_task.length > 3){

        var ulElement = document.createElement('ul');
        var liElement = document.createElement('li');

        ulElement.classList.add('lista');
        liElement.classList.add('item');
        liElement.textContent = input_task;
        var dugme_za_brisanje = document.createElement('button');
        dugme_za_brisanje.textContent = 'Obrisi';
        dugme_za_brisanje.classList.add('obrisi');
        dugme_za_brisanje.addEventListener('click', function (){
            
                ulElement.removeChild(liElement);

        })

        var dugme_za_izmenu = document.createElement('button');
        dugme_za_izmenu.textContent = 'Izmeni';
        dugme_za_izmenu.classList.add('obrisi');
        dugme_za_izmenu.addEventListener('click',function(){
            var izmenjen_task = prompt("Unesite novi naziv taska:");
            if(izmenjen_task.trim() !== ""){
                liElement.textContent = izmenjen_task;
                liElement.appendChild(dugme_za_brisanje);
                liElement.appendChild(dugme_za_izmenu);
                liElement.appendChild(zavrsi_task);
            }
        })

        var zavrsi_task = document.createElement('button');
        zavrsi_task.classList.add('obrisi');
        zavrsi_task.textContent = 'Zavrseno';
        zavrsi_task.addEventListener('click', function(){
            liElement.style.textDecoration = 'line-through';
            liElement.removeChild(dugme_za_brisanje);
            liElement.removeChild(dugme_za_izmenu);
            liElement.removeChild(zavrsi_task);
        })

        liElement.appendChild(dugme_za_brisanje);
        liElement.appendChild(dugme_za_izmenu);
        liElement.appendChild(zavrsi_task);
        ulElement.appendChild(liElement);
        taskovi.appendChild(ulElement);
        document.getElementById('task').value = "";
        taskovi.scrollTop = taskovi.scrollHeight;
    }
    else{
        window.alert('Task mora da sadrzi vise od 3 karaktera!');
    }

}


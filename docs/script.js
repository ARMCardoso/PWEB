const $modal = document.getElementById('modal');
const $titulo = document.getElementById('titulo');
const $descricao = document.getElementById('descricao');
const $prazo = document.getElementById('prazo');
const $status = document.getElementById('status');
const $prioridade = document.getElementById('prioridade');
const $responsavel = document.getElementById('responsavel');
const $idInput = document.getElementById('idInput');

const $createTitle = document.getElementById('createTitle');
const $editTitle = document.getElementById('editTitle');
const $createButton = document.getElementById('createButton');
const $editButton = document.getElementById('editButton');
const $visualizarTask = document.getElementById('visualizarTask');



var tasks = localStorage.getItem("tasks");
var todoList = tasks ? JSON.parse(tasks) : [];
gerarCard();



function openModal(data_column){

    $status.value = data_column;



    $modal.style.display = "flex";

    $createTitle.style.display = "block";
    $editTitle.style.display = "none";
    $createButton.style.display = "block";
    $editButton.style.display = "none";
    $visualizarTask.style.display = "none";

}

function openModalEdit(id){
    $modal.style.display = "flex";

        $createTitle.style.display = "none";
        $editTitle.style.display = "block";
        $createButton.style.display = "none";
        $editButton.style.display = "block";
        $visualizarTask.style.display = "none";

        const index = todoList.findIndex(function(task){
            return task.id == id;
        });
        

        const task = todoList[index];

        $idInput.value = task.id;
        $titulo.value = task.titulo;
        $descricao.value = task.descricao;
        $prazo.value = task.prazo;
        $status.value = task.status;
        $prioridade.value = task.prioridade;
        $responsavel.value = task.responsavel;

}


function closeModal(){

    $modal.style.display = "none";

    resetModal();
    
}

function resetColuna(){    
    
    document.querySelector('[data-column ="1"] .body').innerHTML = '';  
    document.querySelector('[data-column ="2"] .body').innerHTML = '';  
    document.querySelector('[data-column ="3"] .body').innerHTML = '';  
    document.querySelector('[data-column ="4"] .body').innerHTML = '';

}




function gerarCard(){
    resetColuna();



    todoList.forEach(function(task){
    const prazo = moment(task.prazo).format('DD/MM/YYYY');

    const prazo1 = moment(task.prazo).startOf('day');
    const hoje = moment().startOf('day');
    const aviso = prazo1.diff(hoje, 'days');
        
    const status = task.status;
    

    let showNotificationIcon = false;
    let showNotificationIcon1 = false;
    let showNotificationIcon3 = false;

    if(aviso <= 3){
        showNotificationIcon = true;
    }else if(aviso <= 5){
        showNotificationIcon1 = true;
    }else{
        showNotificationIcon = false;
        showNotificationIcon1 = false;
    }
 
    if(status == 4){
        showNotificationIcon3 = true;
        showNotificationIcon = false;
        showNotificationIcon1 = false;
    }else{
        showNotificationIcon3 = false;
    }

    const bodyColuna = document.querySelector(`[data-column ="${task.status}"] .body`);   

    const card = `
            <div 
                id="${task.id}"
                class="task-card" 
                draggable="true"
                ondragstart="dragstartHandler(event)"
                >

                <div class="card-icons">
                    <span class="material-symbols-outlined" onclick="openModalEdit(${task.id})" id="editar" title="Editar Task">edit</span>
                    <span class="material-symbols-outlined" onclick="visualizarTask(${task.id})" id="visualizar" title="Visualizar Task">visibility</span>
                    <span class="material-symbols-outlined" onclick="deleteTask(${task.id})" id="excluir" title="Excluir Task">delete</span>
                    ${showNotificationIcon ? `<span class="material-symbols-outlined" id="alarm-icon" title="Faltam 3 dias ou menos para o vencimento">notification_important</span>` : ''}
                    ${showNotificationIcon1 ? `<span class="material-symbols-outlined" id="alarm-icon1" title="Faltam 5 dias ou menos para o vencimento">notification_important</span>` : ''}                     
                    ${showNotificationIcon3 ? `<span class="material-symbols-outlined" id="archive" title="Item Arquivado">inventory</span>` : ''}
                
                </div>

                <div class="info">
                    <b>Matéria: </b>
                    <span>${task.titulo}</span>
                </div>
                <div class="info">
                    <b>Prazo: </b>
                    <span>${prazo}</span>
                </div>
                <div class="info">
                    <b>Prioridade: </b>
                    <span>${task.prioridade}</span>
                </div>
                <div class="info">
                    <b>Responsável: </b>
                    <span>${task.responsavel}</span>
                </div>
            </div>
                     
        `;

        bodyColuna.innerHTML += card;
    })

    
}



function createTask(){
    const newTask = {
        id: Math.floor(Math.random() * 9999999),
        titulo: $titulo.value,
        descricao: $descricao.value,
        prazo: $prazo.value,
        status: $status.value,
        prioridade: $prioridade.value,
        responsavel: $responsavel.value,
    }

    todoList.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(todoList));


    closeModal();
    gerarCard();
    resetModal();
}



function editTask(){
    const task = {
        id: $idInput.value,
        titulo: $titulo.value,
        descricao: $descricao.value,
        prazo: $prazo.value,
        status: $status.value,
        prioridade: $prioridade.value,
        responsavel: $responsavel.value,
    }

    const index = todoList.findIndex(function(task){
        return task.id == $idInput.value;
    });

    todoList[index] = task;
    localStorage.setItem("tasks", JSON.stringify(todoList));

    
    closeModal();
    gerarCard();
    resetModal();

}

function visualizarTask(id) {

    $createTitle.style.display = "none";
    $editTitle.style.display = "none";
    $createButton.style.display = "none";
    $editButton.style.display = "none";

    const index = todoList.findIndex(function(task) {
        return task.id == id;
    });

    if (index !== -1) {
        const task = todoList[index];

       
        $idInput.value = task.id;
        $titulo.value = task.titulo;
        $descricao.value = task.descricao;
        $prazo.value = task.prazo;
        $status.value = task.status;
        $prioridade.value = task.prioridade;
        $responsavel.value = task.responsavel;


        $titulo.disabled = true;
        $prazo.disabled = true;
        $descricao.disabled = true;
        $prioridade.disabled = true;
        $status.disabled = true;
        $responsavel.disabled = true;


        $createTitle.style.display = 'none';
        $editTitle.style.display = 'none';


        $visualizarTask.style.display = 'block';


        $modal.style.display = 'flex'; 
    }
}

function mudarColuna(task_id, column_id){
    if (task_id && column_id) {
        todoList = todoList.map((task) => {
            if (task_id != task.id) return task;
            else {
                return {
                    ...task,
                    status: column_id,
                };
            }
        });
    }

    localStorage.setItem("tasks", JSON.stringify(todoList));
}

function deleteTask(id) {
    todoList = todoList.filter(task => task.id != id);

    localStorage.setItem("tasks", JSON.stringify(todoList));
    gerarCard();
    resetModal();
}


function dragstartHandler(ev) {
    ev.dataTransfer.setData("my_custom_data", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
  }

  function dragoverHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  }

  function dropHandler(ev) {
    ev.preventDefault();
    const task_id = ev.dataTransfer.getData("my_custom_data");
    const column_id = ev.target.dataset.column;

    mudarColuna(task_id, column_id);
    gerarCard();
  }

function resetModal() {
    
    document.getElementById('idInput').value = '';
    document.getElementById('titulo').value = '';
    document.getElementById('prazo').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('prioridade').value = 'Alta'; 
    document.getElementById('status').value = '1'; 
    document.getElementById('responsavel').value = ''; 

    
    document.getElementById('titulo').disabled = false;
    document.getElementById('prazo').disabled = false;
    document.getElementById('descricao').disabled = false;
    document.getElementById('prioridade').disabled = false;
    document.getElementById('status').disabled = false;
    document.getElementById('responsavel').disabled = false;

    
    document.getElementById('createTitle').style.display = 'none';
    document.getElementById('editTitle').style.display = 'none';
    document.getElementById('visualizarTask').style.display = 'none';

    
    document.getElementById('createTitle').style.display = 'block';
}



document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});



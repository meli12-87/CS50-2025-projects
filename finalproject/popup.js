const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const taskCounter = document.getElementById('taskCounter');
const clearBtn = document.getElementById('clearCompleted');
const filterBtns = document.querySelectorAll('.filter-btn');

let allTasks = [];
let filterType = 'all';

window.onload = function() {
    loadFromStorage();
    showTasks();
};

addBtn.onclick = function() {
    let text = taskInput.value.trim();
    
    if (text === '') {
        alert('Please Enter an input');
        return;
    }
    
    let newTask = {
        id: new Date().getTime(),
        text: text,
        done: false,
        time: new Date().toLocaleTimeString()
    };
    
    allTasks.push(newTask);
    taskInput.value = '';
    
    saveToStorage();
    showTasks();
};

taskInput.onkeydown = function(e) {
    if (e.key === 'Enter') {
        addBtn.onclick();
    }
};

function showTasks() {
    taskList.innerHTML = '';
    
    let tasksToShow = allTasks;
    if (filterType === 'active') {
        tasksToShow = allTasks.filter(t => !t.done);
    } else if (filterType === 'completed') {
        tasksToShow = allTasks.filter(t => t.done);
    }
    
    if (tasksToShow.length === 0) {
        let emptyMsg = document.createElement('li');
        emptyMsg.className = 'empty-state';
        emptyMsg.innerHTML = '<i class="fas fa-clipboard-list"></i><p>No task to do</p>';
        taskList.appendChild(emptyMsg);
    } else {
        tasksToShow.forEach(task => {
            let li = document.createElement('li');
            li.className = 'task-item';
            
            let tick = document.createElement('div');
            tick.className = 'task-checkbox';
            if (task.done) {
                tick.classList.add('checked');
                tick.innerHTML = '✓';
            }
            
            tick.onclick = function(e) {
                e.stopPropagation();
                task.done = !task.done;
                saveToStorage();
                showTasks();
            };
            
            let span = document.createElement('span');
            span.className = 'task-text';
            if (task.done) {
                span.classList.add('completed');
            }
            span.textContent = task.text;
            
            span.onclick = function() {
                task.done = !task.done;
                saveToStorage();
                showTasks();
            };
            
            let delBtn = document.createElement('button');
            delBtn.className = 'task-action-btn';
            delBtn.innerHTML = '<i class="fas fa-trash"></i>';
            delBtn.onclick = function(e) {
                e.stopPropagation();
                allTasks = allTasks.filter(t => t.id !== task.id);
                saveToStorage();
                showTasks();
            };
            
            let editBtn = document.createElement('button');
            editBtn.className = 'task-action-btn';
            editBtn.innerHTML = '<i class="fas eng-edit"></i>';
            editBtn.onclick = function(e) {
                e.stopPropagation();
                editTask(task.id, span);
            };
            
            let actions = document.createElement('div');
            actions.className = 'task-actions';
            actions.appendChild(editBtn);
            actions.appendChild(delBtn);
            
            li.appendChild(tick);
            li.appendChild(span);
            li.appendChild(actions);
            
            taskList.appendChild(li);
        });
    }
    
    updateCounter();
}

function editTask(taskId, spanElement) {
    let task = allTasks.find(t => t.id === taskId);
    if (!task) return;
    
    let oldText = task.text;
    
    let input = document.createElement('input');
    input.type = 'text';
    input.value = oldText;
    input.className = 'edit-box';
    
    spanElement.replaceWith(input);
    input.focus();
    input.select();
    
    function saveEdit() {
        let newText = input.value.trim();
        if (newText && newText !== oldText) {
            task.text = newText;
            saveToStorage();
        }
        showTasks();
    }
    
    input.onkeydown = function(e) {
        if (e.key === 'Enter') saveEdit();
        if (e.key === 'Escape') showTasks();
    };
    
    input.onblur = saveEdit;
}

function updateCounter() {
    let active = allTasks.filter(t => !t.done).length;
    let total = allTasks.length;
    
    if (total === 0) {
        taskCounter.textContent = 'No task!';
    } else if (active === 0) {
        taskCounter.textContent = 'ALL tasks are DONE!!!!';
    } else {
        taskCounter.textContent = `${active} task from ${total} is left! `;
    }
}

clearBtn.onclick = function() {
    allTasks = allTasks.filter(t => !t.done);
    saveToStorage();
    showTasks();
};

filterBtns.forEach(btn => {
    btn.onclick = function() {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        filterType = this.dataset.filter;
        showTasks();
    };
});

function saveToStorage() {
    try {
        chrome.storage.sync.set({myTasks: allTasks}, function() {
            console.log('Saved');
        });
    } catch (error) {
        localStorage.setItem('todoTasks', JSON.stringify(allTasks));
    }
}

function loadFromStorage() {
    try {
        chrome.storage.sync.get(['myTasks'], function(result) {
            if (result.myTasks) {
                allTasks = result.myTasks;
            } else {
                allTasks = [];
            }
            showTasks();
        });
    } catch (error) {
        let saved = localStorage.getItem('todoTasks');
        allTasks = saved ? JSON.parse(saved) : [];
        showTasks();
    }
}

let style = document.createElement('style');
style.textContent = `
    .edit-box {
        flex: 1;
        padding: 8px 12px;
        border: 2px solid #8B4513;
        border-radius: 8px;
        font-size: 14px;
        background: #FFF8F0;
        color: #5C4033;
        font-family: 'Georgia', serif;
    }
    
    .edit-box:focus {
        outline: none;
        box-shadow: 0 0 5px #8B4513;
    }
`;
document.head.appendChild(style);
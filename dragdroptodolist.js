 var btn = document.querySelector('.add');
var saveBtn = document.querySelector('.save');
var listContainer = document.querySelector('ul');
var dragSrcEl = null;

function dragStart(e) {
    this.style.opacity = '0.4';
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function dragEnter(e) {
    this.classList.add('over');
}

function dragLeave(e) {
    e.stopPropagation();
    this.classList.remove('over');
}

function dragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function dragDrop(e) {
    if (dragSrcEl != this) {
        var tempHTML = dragSrcEl.innerHTML;
        var tempClass = dragSrcEl.className;

        dragSrcEl.innerHTML = this.innerHTML;
        dragSrcEl.className = this.className;

        this.innerHTML = tempHTML;
        this.className = tempClass;

        saveList();
    }
    return false;
}

function dragEnd(e) {
    var listItems = document.querySelectorAll('.draggable');
    [].forEach.call(listItems, function(item) {
        item.classList.remove('over');
    });
    this.style.opacity = '1';
}

function addEventsDragAndDrop(el) {
    el.addEventListener('dragstart', dragStart, false);
    el.addEventListener('dragenter', dragEnter, false);
    el.addEventListener('dragover', dragOver, false);
    el.addEventListener('dragleave', dragLeave, false);
    el.addEventListener('drop', dragDrop, false);
    el.addEventListener('dragend', dragEnd, false);

    // Thêm sự kiện xóa
    var deleteBtn = el.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        el.remove();
        saveList();
    });
}

function addNewItem() {
    var newItem = document.querySelector('.input').value;
    var selectedColor = document.querySelector('input[name="color"]:checked').value;

    if (newItem != '') {
        document.querySelector('.input').value = '';
        var li = document.createElement('li');
        var attr = document.createAttribute('draggable');
        li.className = 'draggable ' + selectedColor;
        attr.value = 'true';
        li.setAttributeNode(attr);
        li.innerHTML = newItem + '<button class="delete-btn">x</button>';
        listContainer.appendChild(li);
        addEventsDragAndDrop(li);
        saveList();
    }
}

function saveList() {
    var listItems = listContainer.querySelectorAll('li');
    var listData = [];
    
    listItems.forEach(function(item) {
        listData.push({
            content: item.innerHTML,
            className: item.className
        });
    });
    
    var now = new Date();
    var expires = new Date(now.getTime() + 365*24*60*60*1000); // Thời gian hết hạn là 365 ngày
    document.cookie = "listData=" + JSON.stringify(listData) + ";expires=" + expires.toUTCString() + ";path=/";
}

function loadList() {
    var listData = getCookie("listData");
    if (listData) {
        listData = JSON.parse(listData);
        listData.forEach(function(item) {
            var li = document.createElement('li');
            li.className = item.className;
            li.setAttribute('draggable', 'true');
            li.innerHTML = item.content;
            listContainer.appendChild(li);
            addEventsDragAndDrop(li);
        });
    }
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Gọi hàm loadList khi trang được tải
loadList();

btn.addEventListener('click', addNewItem);
saveBtn.addEventListener('click', saveList);

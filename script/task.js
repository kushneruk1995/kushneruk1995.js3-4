var page = {
  title: "Тест по программированию",
  titleListItem: "Вопрос №",
  titleListCheckbox: "Вариант ответа №",

  /*Створюємо заголовок*/

  titlePage : function titleGeneration() {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.innerHTML = this.title;
    var parentElem = document.querySelector('body');
    parentElem.appendChild(paragraph); 
  },

  /*Створюємо список*/

  list : function createList() {
    var list = document.createElement('ol');
	list.classList.add('list');
	var parentElem = document.querySelector('body');
	parentElem.appendChild(list);
  },

  /*Створюємо питання з варіантами відповідей*/

  listItem : function createListItem() {
    listItem = []; 
    listItemParagraph = [];
    listBox = [];
    listCheckbox = [];
    listLabel = [];

  	for (var i = 1; i < 4; i++) {
  	  listItem[i] = document.createElement('li');
  	  listItemParagraph[i] = document.createElement('p');
  	  listItem[i].classList.add('listItem');
  	  listItemParagraph[i].classList.add('listItemParagraph');
  	  listItemParagraph[i].innerHTML = this.titleListItem +i;
  	  var list = document.querySelector('.list');
  	  list.appendChild(listItem[i]); 	
  	  listItem[i].appendChild(listItemParagraph[i]); 	
      for (var j = 1; j < 4; j++) {
      	listBox[j] = document.createElement('div');
  	    listBox[j].classList.add('box'+j, 'box');
  	    listItem[i].appendChild(listBox[j]);
  	    listCheckbox[j] = document.createElement('input');
  	    listCheckbox[j].setAttribute('type', 'checkbox');
  	    listCheckbox[j].setAttribute('name', 'listCheckbox'+i);
  	    listCheckbox[j].setAttribute('id', 'listCheckbox'+i+j);
  	    listCheckbox[j].classList.add('listCheckbox'+j, 'сheckbox');
  	    listBox[j].appendChild(listCheckbox[j]);
  	    listLabel[j] = document.createElement('label');
  	    listLabel[j].setAttribute('for', 'listCheckbox'+i+j);
  	    listLabel[j].classList.add('label');
  	    listLabel[j].innerHTML = this.titleListCheckbox+j;
  	    listBox[j].appendChild(listLabel[j]);
      }
    }
  },
 
  /*Створюємо кнопку для відправки результатів*/

  button: function buttonGeneration() {
  	var button = document.createElement('input');
  	button.setAttribute('type', 'submit');
  	button.setAttribute('value', 'Проверить мои результаты');
  	button.classList.add('button');
  	var parentElem = document.querySelector('body');
    parentElem.appendChild(button);
  }
};

page.titlePage();
page.list();
page.listItem();
page.button();

let taskinput = document.querySelector(".task-input"); // input text
let listunderpushtext = document.querySelector(".list"); // container
let addbutton = document.querySelector(".add"); // button
let arrayvalue = [];
let arrayid = localStorage.getItem('id');
arrayid = arrayid ? Number(arrayid) : 0;

let value = localStorage.getItem('data');
if(value)
{
    arrayvalue = JSON.parse(value);
    for(const task of arrayvalue){
        console.log(task.Id);
        
        
        let para = document.createElement("p");
        para.classList.add('taskvalue');
        para.innerText = task.para;

       


        let deleteicon = document.createElement("button"); 
        deleteicon.innerHTML = "&times;";
        deleteicon.classList.add("cross_box");

        let divbox = document.createElement('div');
        divbox.classList.add('divboxes');
        // divbox.appendChild(checkbox);
        divbox.appendChild(para);
        divbox.appendChild(deleteicon);

        let clear = (id)=>{
            divbox.remove();
            arrayvalue = arrayvalue.filter(value=>{
                if(value.Id!==id){
                    return true;
                }
                return false;
            });
            localStorage.setItem('data', JSON.stringify(arrayvalue));
            
        }
        deleteicon.addEventListener('click',() => {clear(task.Id)});
        listunderpushtext.appendChild(divbox);
            

        
    }
}


let taskstore = (id)=>{
    if(taskinput.value == '')
        {
            alert("Please write something");
        }
        
        else{

    
       
    // paragraph
        let para = document.createElement("p");
        para.classList.add('taskvalue');
        para.innerText = taskinput.value;
        
        // delete button(cross)        
        let deleteicon = document.createElement("button"); 
        deleteicon.innerHTML = "&times;";
        deleteicon.classList.add("cross_box");
        
        let divbox = document.createElement('div');
        divbox.classList.add('divboxes');
        // divbox.appendChild(checkbox);
        divbox.appendChild(para);
        divbox.appendChild(deleteicon);
        
        listunderpushtext.appendChild(divbox);
        
       
        arrayvalue.push({/*checked: checkbox.checked,*/Id:id,para: para.innerText});
        arrayid++;
        // alert(checkbox.checked);
        localStorage.setItem('data',JSON.stringify(arrayvalue));
        localStorage.setItem('id', arrayid);
    
        
        let clear = ()=>{
            divbox.remove();
            arrayvalue = arrayvalue.filter(value=>{
                if(value.Id!==id){
                    return true;
                }
                return false;
            });
            localStorage.setItem('data', JSON.stringify(arrayvalue));
        }
        
        deleteicon.addEventListener('click',clear);
    }
    
    taskinput.value = '';
}

addbutton.addEventListener('click',() => {taskstore(arrayid)});

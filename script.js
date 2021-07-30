/**
 * Final Project
 * Student Name
 * Student Number
 */



function sort() {
    var list, i, switching, b, shouldSwitch;
    var btn=event.target
    var dv=btn.parentNode.children[3]
    if(typeof(dv)=='undefined'){
      dv=btn.parentNode
    }
    var list=dv.childNodes[3]
    if(typeof(list)=='undefined'){
      list=dv.parentNode.children[1]
    }
    switching = true;
    while (switching) {
      switching = false;
      b = list.getElementsByTagName("LI");

      for (i = 0; i < (b.length - 1); i++) {

        shouldSwitch = false;

        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {

        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
  }
  test()
  }

  function del(){
    var papa = event.target.parentNode.children[3]
    var ul= papa.children[1]
    if(typeof(ul)=='undefined'){
      ul=papa.parentNode.children[1]

    }
    lis= ul.querySelectorAll("li")
    lis.forEach(element => {
      if(element.classList.value == 'strikethrough'){
        element.remove()
      }
    });
  }

  function li_action(){
    var li = document.querySelectorAll("li")
li.forEach(element => {
   element.addEventListener('click',()=>{
       element.classList.toggle('strikethrough')
   })
})}
li_action()

function st(){
  event.target.classList.toggle('strikethrough')
}

// added name programatically
//add your name, rollno here\
var sname=''
var roll=''
var student_roll=(roll?roll:"123")
var p=document.createElement("p")
var student_name=(sname?sname:"Himanshu")
p.innerHTML=student_name
h=document.getElementsByTagName("h1")
srt=document.createElement("button")
srt.innerHTML="sort"
srt.addEventListener('click',()=>{sort()})
rem= document.createElement("button")
rem.innerHTML="remove"
rem.addEventListener('click',()=>{
  del()
})
var body=document.body
body.insertBefore(p, body.children[2])
body.insertBefore(srt,body.children[5])
body.appendChild(rem)
console.log(student_roll)



// function to add li
function add_li(){
  var papa=event.target.parentNode
  var ul = papa.children[1]
  var li=document.createElement("li")
  var name = papa.children[2].value
  li.innerHTML=(name?name:"none")
  li.addEventListener('click',()=>{st()})
  ul.appendChild(li)
  papa.children[2].value=''
}
adds=document.querySelectorAll('.list-button')
console.log(adds)
adds.forEach(element => {
  element.addEventListener('click',()=>{
    add_li()
  })  
});


// function for create section
function create_section(){
    var dv =  document.createElement('div');
    var name = document.getElementById('new-section').value;
    dv.classList.add('section');
    dv.innerHTML=`
    <div class="section" id="section-shopping">
    <h3>${name?name:"no-name-given"}</h3>
    <ul>

    </ul>
    <input type="text" id="new-item" placeholder="Add new item" />
    <button onclick="add_li()" class="list-button">Add New Item</button>
    <button onclick="sort()">sort</button>
    <button onclick="del()">remove</button>
</div>
    `;

    document.getElementById('new-section').value='';
    document.body.appendChild(dv);
    li_action()
}

document.getElementById('add-user').addEventListener('click',()=>{create_section();});

//function for functionality withing the section






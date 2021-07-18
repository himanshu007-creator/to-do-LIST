
var item = document.querySelector("ul")
//initiates the variable that stores reference to all <ul> tag

item.addEventListener('click',(e)=>{
	var tag=e.target.tagName
	var tar=e.target

	// if <li> is clicked
	// performs strikethrough
	if(tag=='LI'){
		e.target.classList.add("completed")
	}

	// if "X" is clicked
	// performs deletion
	else if(tag=='SPAN'){
		var rem_node = tar.parentNode
		console.log(tar.parentNode.parentNode)
		tar.parentNode.parentNode.removeChild(rem_node)
	}
})

var plus = document.getElementById("add-item")
var input = document.getElementById('new-item-text')

// function to add a list element when "+" is pressed
function add_li(){
	var list = document.createElement("li")
	list.classList.add("todo-item")
	var text= input.value 
	var txt=document.createTextNode(text)
	var span=document.createElement("span")
    span.classList.add("remove")
	list.appendChild(span)
	list.appendChild(txt)
	document.querySelector("ul").appendChild(list)
	input.value=''
}




// event on click
plus.addEventListener('click',()=>{
	add_li()
})

// event on enetr (keyCode==13)
input.addEventListener('keydown',(e)=>{
	if(e.keyCode==13){
		add_li()
	}
})

const btn = document.getElementById("btn");
function getAndupdate(){
    let tit = document.querySelector("#title").value
    let desc = document.querySelector("#Description").value
    if(localStorage.getItem("itemsJson") == null){
        itemJsonarry = []
        itemJsonarry.push([tit,desc])
        localStorage.setItem("itemsJson",JSON.stringify(itemJsonarry))
    }
    else{
        itemJsonarrystr = localStorage.getItem("itemsJson")
        itemJsonarry = JSON.parse(itemJsonarrystr)
        itemJsonarry.push([tit,desc])
        localStorage.setItem("itemsJson",JSON.stringify(itemJsonarry))
    }
    update()
}
 
function update(){
    let tit = document.querySelector("#title").value
    let desc = document.querySelector("#Description").value
    if(localStorage.getItem("itemsJson") == null){
        itemJsonarry = []
        localStorage.setItem("itemsJson",JSON.stringify(itemJsonarry))
    }
    else{
        itemJsonarrystr = localStorage.getItem("itemsJson")
        itemJsonarry = JSON.parse(itemJsonarrystr) 
    }
    //poplate the table
    let table = document.querySelector("#tablebody")
    let str = ""
    itemJsonarry.forEach((element,index)=> {
        str +=` 
        <tr>
        <th scope="row">${index +1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-primary"onclick ="deleted(${index})" >Delete</button></td>
      </tr>`
    });
   table.innerHTML = str;
}

btn.addEventListener('click',getAndupdate)
update()
function deleted(itemindex){
    itemJsonarrystr = localStorage.getItem("itemsJson")
    itemJsonarry = JSON.parse(itemJsonarrystr)
    itemJsonarry.splice(itemindex,1)
    localStorage.setItem("itemsJson",JSON.stringify(itemJsonarry))
    update()
}
function clearStorage(){
  if(confirm("Do You Wont to Clear Your All List ?")){
    localStorage.clear()
    update()
  }
}

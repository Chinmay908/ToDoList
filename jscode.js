var item;
var qty =0;
var qty1;
function add(){
item=document.getElementById("item").value;
if(item == "")
{
document.getElementById("response").innerHTML="Please add an item!!";
document.getElementById("response").style.color="red";
document.getElementById("response").style.visibility = "visible";
setTimeout("document.getElementById('response').style.visibility = 'hidden' ",1000);    
}
if(item != "")
{
document.getElementById("item").value="";
document.getElementById("response").innerHTML="Successfully added your item!!";
document.getElementById("response").style.color="rgb(5, 131, 5)";
document.getElementById("response").style.visibility = "visible";
setTimeout("document.getElementById('response').style.visibility = 'hidden' ",2000); //make it hidden after 2 sec

//adding checkboxes
var main = document.getElementById("checkboxContainner");
var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = item;
checkbox.class = "contents";
checkbox.id = "options";

var label = document.createElement('label');
label.id= item;
label.htmlFor = "";
label.appendChild(document.createTextNode(item));

main.appendChild(checkbox);
main.appendChild(label);
qty = qty+1;
qty1=qty;
document.getElementById("message").innerHTML="No of items: "+qty;
document.getElementById("message").style.color="black";
}
}

function onHover(){
    document.getElementById("add").style.color="white";
    document.getElementById("add").style.backgroundColor="black";
    document.getElementById("delete").style.color="white";
    document.getElementById("delete").style.backgroundColor="black";
}

function onHoverOut(){
    document.getElementById("add").style.color="black";
    document.getElementById("add").style.backgroundColor="white";
    document.getElementById("delete").style.color="black";
    document.getElementById("delete").style.backgroundColor="white";
}

function editCheckbox(){
document.getElementById("options").style.display ="visible";
}

function deleteCheckbox(){
    if(qty == 0)
    {
        document.getElementById("response").innerHTML="No items to delete!!";
        document.getElementById("response").style.color="red";
        document.getElementById("response").style.visibility = "visible";
        setTimeout("document.getElementById('response').style.visibility = 'hidden' ",1000);       
    }
    else
    {
    var selected = new Array();
    var chkboxContainner =document.getElementById("checkboxContainner");
    var chks =chkboxContainner.getElementsByTagName("input");
    for (var i = 0; i < chks.length; i++) {
            if (chks[i].checked) {
            selected.push(chks[i].value);
            var parent = document.getElementById("checkboxContainner");
        var delchk = document.getElementById(chks[i].id);
        parent.removeChild(delchk);
            }
        }
    for(var i=0;i< selected.length;i++){
        var parent = document.getElementById("checkboxContainner");
        var delchk = document.getElementById(selected[i]);
        parent.removeChild(delchk);
    }
    qty1=qty1-1;
    if(qty1 == 0)
    {
    qty=0;
    document.getElementById("message").style.color="grey";
    document.getElementById("message").innerHTML="Your cart is Empty!! ";
    }
    else
    document.getElementById("message").innerHTML="No of items: "+qty1;
   }
}



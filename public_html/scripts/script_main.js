/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var c = 0;
var data = [4][5];

function addLocation() {
    // Limit the maximum forms (4 max)
    if (c < 4) {
        c++;

        //Create form
        var myForm = document.createElement("FORM");
        myForm.id = "form" + c;
        document.body.appendChild(document.createTextNode("Unit " + c));

        //Create remove form button
        var button = document.createElement("INPUT");
        button.type = "button";
        button.id = "removeButton" + c;
        button.setAttribute("class", "remove");
        var lastChar = button.id.substr(button.id.length - 1);  //get last number id of the button
        button.value = "X";
        button.onclick = function() {
            var elmnt = document.getElementById("form" + lastChar);
            elmnt.remove();
            c--;
        }
        myForm.appendChild(button);

        //Create Address field
        var text = document.createTextNode("Address:");
        myForm.appendChild(text);
        myForm.appendChild(document.createElement("BR")); //Add newline
        var address = document.createElement("INPUT");
        address.setAttribute("type", "text");
        address.setAttribute("name", "Address");
        myForm.appendChild(address);


        //Create Price field
        myForm.appendChild(document.createElement("BR")); //Add newline
        text = document.createTextNode("Price:");
        myForm.appendChild(text);
        myForm.appendChild(document.createElement("BR")); //Add newline
        var price = document.createElement("INPUT");
        price.type = "number";
        price.name = "Price";
        myForm.appendChild(price);


        //Create Lease field
        myForm.appendChild(document.createElement("BR")); //Add newline
        text = document.createTextNode("Does the place include lease:");
        myForm.appendChild(text);
        myForm.appendChild(document.createElement("BR")); //Add newline
        //Create yes button
        var lease = document.createElement("INPUT");
        lease.type = "radio";
        lease.name = "Lease";
        lease.id = "Lease";
        lease.value = "yes";
        myForm.appendChild(lease);
        var label = document.createElement("LABEL");
        text = document.createTextNode("Yes");
        label.appendChild(text);
        myForm.appendChild(label);
        //Create no button
        var lease = document.createElement("INPUT");
        lease.type = "radio";
        lease.name = "Lease";
        lease.id = "Lease";
        lease.value = "no";
        myForm.appendChild(lease);
        var label = document.createElement("LABEL");
        text = document.createTextNode("No");
        label.appendChild(text);
        myForm.appendChild(label);


        //Create Amenities field
        myForm.appendChild(document.createElement("BR")); //Add newline
        text = document.createTextNode("Does the rent paid include electricity, internet:");
        myForm.appendChild(text);
        myForm.appendChild(document.createElement("BR")); //Add newline
        //Create yes button
        var lease = document.createElement("INPUT");
        lease.type = "radio";
        lease.name = "Amenities";
        lease.id = "Amenities";
        lease.value = "yes";
        myForm.appendChild(lease);
        var label = document.createElement("LABEL");
        text = document.createTextNode("Yes");
        label.appendChild(text);
        myForm.appendChild(label);
        //Create no button
        var lease = document.createElement("INPUT");
        lease.type = "radio";
        lease.name = "Amenities";
        lease.id = "Amenities";
        lease.value = "no";
        myForm.appendChild(lease);
        var label = document.createElement("LABEL");
        text = document.createTextNode("No");
        label.appendChild(text);
        myForm.appendChild(label);


        //Create Share with Landlord field
        myForm.appendChild(document.createElement("BR")); //Add newline
        text = document.createTextNode("Share with landlord:");
        myForm.appendChild(text);
        myForm.appendChild(document.createElement("BR")); //Add newline
        //Create yes button
        var lease = document.createElement("INPUT");
        lease.type = "radio";
        lease.name = "Landlord";
        lease.id = "Landlord";
        lease.value = "yes";
        myForm.appendChild(lease);
        var label = document.createElement("LABEL");
        text = document.createTextNode("Yes");
        label.appendChild(text);
        myForm.appendChild(label);
        //Create no button
        var lease = document.createElement("INPUT");
        lease.type = "radio";
        lease.name = "Landlord";
        lease.id = "Landlord";
        lease.value = "no";
        myForm.appendChild(lease);
        var label = document.createElement("LABEL");
        text = document.createTextNode("No");
        label.appendChild(text);
        myForm.appendChild(label);

        document.body.appendChild(myForm);
        
        if (c=4){
            c=0;
        }
    }
}

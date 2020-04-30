/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function check() {
//    document.getElementById('mySelect1').disabled = !elem.selectedIndex;
    var landlord = document.getElementById('landlord1').value;
    var foodInclusion = document.getElementById('foodInclusion');
    if (landlord == "yes") {
//        document.getElementById("foodInclusion").innerHTML = "Paragraph changed!";

        var text = document.createTextNode("Does the landlord feed you: ");
        foodInclusion.appendChild(text);
        foodInclusion.appendChild(document.createElement("BR")); //Add newline
        //Create options
        var foodInclusionOpts = document.createElement("SELECT");
        foodInclusionOpts.id = "foodInclusion" + c
        foodInclusionOpts.name = "foodInclusion"
        var foodInclusionOptsNo = document.createElement("OPTION");
        var t = document.createTextNode("No");
        foodInclusionOptsNo.appendChild(t);
        foodInclusionOptsNo.value = "no"
        var foodInclusionOptsYes = document.createElement("OPTION");
        t = document.createTextNode("Yes");
        foodInclusionOptsYes.appendChild(t);
        foodInclusionOptsYes.value = "yes"
        foodInclusionOpts.appendChild(foodInclusionOptsNo)
        foodInclusionOpts.appendChild(foodInclusionOptsYes)
        foodInclusion.appendChild(foodInclusionOpts)
    }
    else
        document.getElementById("foodInclusion").innerHTML = "";
}

var c = 0;
function addLocation() {
    // Limit the maximum forms (4 max)
    if (c < 4) {
        c++;

        //Create form
        var myForm = document.createElement("FORM");
        myForm.id = "form" + c;
        myForm.name = "form";
        var unitTitle = document.createElement("P"); //Title for each form
        unitTitle.id = "unitText" + c;
        document.body.appendChild(unitTitle);
        unitTitle.innerHTML = "Unit " + c;


        //Create remove form button
        var button = document.createElement("INPUT");
        button.type = "button";
        button.id = "removeButton" + c;
        button.setAttribute("class", "remove");
        button.value = "X";
        button.onclick = function() {
            var lastChar = button.id.substr(button.id.length - 1);  //get last number id of the button
            var deleteForm = document.getElementById("form" + lastChar);
            alert("last char: " + lastChar)
            deleteForm.remove(); //Delete the form
            unitTitle.remove();  //Delete form title
            if (lastChar < c) {
                var gap = c - lastChar;
                for (var i = 1; i <= gap; i++) {
                    var replaceFormPosition = parseInt(lastChar) + parseInt(i);
                    var replaceForm = document.getElementById("form" + replaceFormPosition);
                    var newUnitText = document.getElementById("unitText" + replaceFormPosition);
                    var newButton = document.getElementById("removeButton" + replaceFormPosition);
                    alert(newButton.id);


                    var newLastChar = replaceForm.id.substr(replaceForm.id.length - 1);
                    replaceFormPosition = parseInt(newLastChar) - 1;
                    replaceForm.id = "form" + replaceFormPosition;// 
                    newUnitText.id = "unitText" + replaceFormPosition;// 
//                    newUnitText.innerHTML = "Unit " + replaceFormPosition;
                    newUnitText.innerHTML += replaceFormPosition;
                    newButton.id = "removeButton" + replaceFormPosition;// 
                }
            }
            c--;
        }
        myForm.appendChild(button);

        //Create Address field
        var text = document.createTextNode("Address:" + c);
        myForm.appendChild(text);
        myForm.appendChild(document.createElement("BR")); //Add newline
        var address = document.createElement("INPUT");
        address.setAttribute("type", "text");
        address.setAttribute("name", "address");
        myForm.appendChild(address);


        //Create Price field
        myForm.appendChild(document.createElement("BR")); //Add newline
        text = document.createTextNode("Price:");
        myForm.appendChild(text);
        myForm.appendChild(document.createElement("BR")); //Add newline
        var price = document.createElement("INPUT");
        price.type = "number";
        price.name = "price";
        myForm.appendChild(price);


        //Create Lease field
        myForm.appendChild(document.createElement("BR")); //Add newline
        text = document.createTextNode("Does the place include lease:");
        myForm.appendChild(text);
        myForm.appendChild(document.createElement("BR")); //Add newline
        //Create options
        var lease = document.createElement("SELECT");
        lease.id = "lease" + c
        lease.name = "lease"
        var leaseNo = document.createElement("OPTION");
        var t = document.createTextNode("No");
        leaseNo.appendChild(t);
        leaseNo.value = "no"
        var leaseYes = document.createElement("OPTION");
        t = document.createTextNode("Yes");
        leaseYes.appendChild(t);
        leaseYes.value = "yes"
        lease.appendChild(leaseNo)
        lease.appendChild(leaseYes)
        myForm.appendChild(lease)


        //Create Amenities field
        myForm.appendChild(document.createElement("BR")); //Add newline
        text = document.createTextNode("Does the rent paid include electricity, internet:");
        myForm.appendChild(text);
        myForm.appendChild(document.createElement("BR")); //Add newline
        //Create options
        var lease = document.createElement("SELECT");
        lease.id = "amenities" + c
        lease.name = "amenities"
        var leaseNo = document.createElement("OPTION");
        var t = document.createTextNode("No");
        leaseNo.appendChild(t);
        leaseNo.value = "no"
        var leaseYes = document.createElement("OPTION");
        t = document.createTextNode("Yes");
        leaseYes.appendChild(t);
        leaseYes.value = "yes"
        lease.appendChild(leaseNo)
        lease.appendChild(leaseYes)
        myForm.appendChild(lease)


        //Create Share with Landlord field
        myForm.appendChild(document.createElement("BR")); //Add newline
        text = document.createTextNode("Share with landlord:");
        myForm.appendChild(text);
        myForm.appendChild(document.createElement("BR")); //Add newline
        //Create options
        var lease = document.createElement("SELECT");
        lease.id = "landlord" + c
        lease.name = "landlord"
        lease.onchange = function() {
            check()
        } //;"if (this.selectedIndex) check()";
        var leaseNo = document.createElement("OPTION");
        var t = document.createTextNode("No");
        leaseNo.appendChild(t);
        leaseNo.value = "no"
        var leaseYes = document.createElement("OPTION");
        t = document.createTextNode("Yes");
        leaseYes.appendChild(t);
        leaseYes.value = "yes"
        lease.appendChild(leaseNo)
        lease.appendChild(leaseYes)
        myForm.appendChild(lease)

        var div = document.createElement("DIV");
        div.id = "foodInclusion";
        myForm.appendChild(div)

        document.body.appendChild(myForm);
    }
}

function calculate() {
//    var data = [4][5];
//    alert("open")
    var grades = [4];
    for (var i = 0; i < c; i++) {
        var form = document.getElementById("form" + parseInt(i + 1));
        var address = document.getElementsByName("address")[i].value;
        var price = document.getElementsByName("price")[i].value;
        var lease = document.getElementsByName("lease")[i].value;
//        var lease = document.getElementById("lease" + parseInt(i + 1)).value;
        var amenities = document.getElementsByName("amenities")[i].value;
        var landlord = document.getElementsByName("landlord")[i].value;
        if (landlord == "yes") {
            var foodInclusion = document.getElementsByName("foodInclusion")[i].value;
        }
        
        grades[i] = 0
        grades[i] += 6

        if (lease == "yes") {
            grades[i] += 1
        }
        if (amenities == "yes") {
            grades[i] += 2
        }
        if (landlord == "no") {
            grades[i] += 0.5
            if (foodInclusion == "yes")
                grades[i] += 0.5
        }
        else {
            if (foodInclusion == "yes") {
                grades[i] += 0.5
            }
        }


        var text = "Unit " + form.id + ": " + grades[i]
        var priceList = document.getElementsByName("price");
        text += "\n Lease: " + lease
        text += "\nAmen: " + amenities
        text += "\nLord: " + landlord
        var printGrades = document.createTextNode(text);
        document.body.appendChild(printGrades)
        document.body.appendChild(document.createElement("BR")); //Add newline
    }
//    alert("close")

}

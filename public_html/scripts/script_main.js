/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function check(landlordId) {
//    document.getElementById('mySelect1').disabled = !elem.selectedIndex;
    var landlord = document.getElementById(landlordId).value;
    var lastChar = landlordId.substr(landlordId.length - 1);  //get last number id of the button
    var foodInclusion = document.getElementById('foodInclusionContainer' + lastChar);
    if (landlord == "yes") {
        var text = document.createTextNode("Does the landlord feed you: ");
        foodInclusion.appendChild(text);
        foodInclusion.appendChild(document.createElement("BR")); //Add newline
        //Create options
        var foodInclusionOpts = document.createElement("SELECT");
        foodInclusionOpts.id = "foodInclusion" + lastChar
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
        document.getElementById(foodInclusion.id).innerHTML = "";
}

var c = 0;
function addLocation() {
    var formSection = document.getElementById("formSection");
    // Limit the maximum forms (4 max)
    if (c < 4) {
        c++;

        //Create form
        var myForm = document.createElement("FORM");
        myForm.id = "form" + c;
        myForm.name = "form";
        var unitTitle = document.createElement("P"); //Title for each form

        var fieldset = document.createElement("FIELDSET");
//        fieldset.style = "padding-bottom: 50px"
        var legend = document.createElement("LEGEND");
        legend.id = "unitText" + c;
        legend.innerHTML = "Unit " + c;
        fieldset.appendChild(legend)
        myForm.appendChild(fieldset)




        //Create remove form button
        var button = document.createElement("INPUT");
        button.type = "button";
        button.id = "removeButton" + c;
        button.setAttribute("class", "remove");
        button.value = "X";
        button.onclick = function() {
            var lastChar = button.id.substr(button.id.length - 1);  //get last number id of the button
            var deleteForm = document.getElementById("form" + lastChar);
//            alert("last char: " + lastChar)
            deleteForm.remove(); //Delete the form
            unitTitle.remove();  //Delete form title
            if (lastChar < c) {
                var gap = c - lastChar;
                for (var i = 1; i <= gap; i++) {
                    var replaceFormPosition = parseInt(lastChar) + parseInt(i);
                    var replaceForm = document.getElementById("form" + replaceFormPosition);
                    var newUnitText = document.getElementById("unitText" + replaceFormPosition);
                    var newButton = document.getElementById("removeButton" + replaceFormPosition);
//                    alert(newButton.id);

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
        fieldset.appendChild(button);

        //Create Address field
        var text = document.createTextNode("Address:" + c);
        fieldset.appendChild(text);
        fieldset.appendChild(document.createElement("BR")); //Add newline
        var address = document.createElement("INPUT");
        address.setAttribute("type", "text");
        address.setAttribute("name", "address");
        fieldset.appendChild(address);


        //Create Price field
        fieldset.appendChild(document.createElement("BR")); //Add newline
        text = document.createTextNode("Price:");
        fieldset.appendChild(text);
        fieldset.appendChild(document.createElement("BR")); //Add newline
        var price = document.createElement("INPUT");
        price.type = "number";
        price.name = "price";
        fieldset.appendChild(price);


        //Create Lease field
        fieldset.appendChild(document.createElement("BR")); //Add newline
        text = document.createTextNode("Does the place include lease:");
        fieldset.appendChild(text);
        fieldset.appendChild(document.createElement("BR")); //Add newline
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
        fieldset.appendChild(lease)


        //Create Amenities field
        fieldset.appendChild(document.createElement("BR")); //Add newline
        text = document.createTextNode("Does the rent paid include electricity, internet:");
        fieldset.appendChild(text);
        fieldset.appendChild(document.createElement("BR")); //Add newline
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
        fieldset.appendChild(lease)


        //Create Share with Landlord field
        fieldset.appendChild(document.createElement("BR")); //Add newline
        text = document.createTextNode("Share with landlord:");
        fieldset.appendChild(text);
        fieldset.appendChild(document.createElement("BR")); //Add newline
        //Create options
        var lease = document.createElement("SELECT");
        lease.id = "landlord" + c
        lease.name = "landlord"
        lease.onchange = function() {
            check(lease.id)
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
        fieldset.appendChild(lease)
        

        var div = document.createElement("DIV");
//        div.type="hidden"
        div.id = "foodInclusionContainer" + c;
        fieldset.appendChild(div)

        formSection.appendChild(myForm);
    }
}

function calculate() {
    var result = document.getElementById("result");
    var grades = [4];
    for (var i = 0; i < c; i++) {
        grades[i] = 0
        var form = document.getElementById("form" + parseInt(i + 1));
        var address = document.getElementsByName("address")[i].value;
        var price = document.getElementsByName("price")[i].value;
        var lease = document.getElementsByName("lease")[i].value;
        var amenities = document.getElementsByName("amenities")[i].value;
        var landlord = document.getElementsByName("landlord")[i].value;
        if (landlord == "yes") {
            var foodInclusion = document.getElementById("foodInclusion" + parseInt(i + 1)).value;
            if (foodInclusion == "yes") {
                grades[i] += 0.5
                alert(document.getElementById("foodInclusion" + parseInt(i + 1)).id)
            }
        }

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
        
        if (price<450) {
            grades[i] += 3
        }
        else if (price>=450 & price <=650) {
            grades[i] += 2
        }
        else if (price>650 & price<1000) {
            grades[i] += 1
        }
        else if (price>=1000) {
            grades[i] += 0
        }
        grades[i] += 3// address

        //Print results
        var text = "Unit " + form.id + ": " + grades[i]
        var priceList = document.getElementsByName("price");
        text += "\n Lease: " + lease
        text += "\nAmen: " + amenities
        text += "\nLord: " + landlord
        var printGrades = document.createTextNode(text);
        result.appendChild(printGrades)
        result.appendChild(document.createElement("BR")); //Add newline
    }
}


//To-do:
//- fix landlord feed you error (unit3: 6.5, unit: 7)
//- Turn results into forms
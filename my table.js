


function validateForm() {
    let A = document.forms["form"]["sno", "name", "dob", "age", "address", "emailid", "qualifications"].value;
    if (A == "") {
        alert("fill all fields");
    }
    else {
        return false;
    }


}


function AddPersonDetails() {
    var table = document.getElementById("tableedit")
    var newrow = table.insertRow(table.length)
    // console.log(newrow);
    cell1 = newrow.insertCell(0)
    cell2 = newrow.insertCell(1)
    cell3 = newrow.insertCell(2)
    cell4 = newrow.insertCell(3)
    cell5 = newrow.insertCell(4)
    cell6 = newrow.insertCell(5)
    cell7 = newrow.insertCell(6)
    cell8 = newrow.insertCell(7)

    sno = document.getElementById("sno").value;
    names = document.getElementById("name").value
    console.log("This is a Raw Data")
    console.log(document.getElementById("dob").value)
    let date = document.getElementById("dob").value.split('-');
    console.log(date);
    dob = date[2] + '/' + date[1] + '/' + date[0];
    console.log("This is the changed data")
    console.log(dob);
    dob1 = dob;
    dob = document.getElementById("dob").value
    age = document.getElementById("age").value
    address = document.getElementById("address").value
    emailid = document.getElementById("emailid").value
    qualifications = document.getElementById("qualifications").value
    holidays = document.getElementById("holidays").value


    cell1.innerHTML = sno;
    cell2.innerHTML = names;
    cell3.innerHTML = dob1;
    cell4.innerHTML = age;
    cell5.innerHTML = address;
    cell6.innerHTML = emailid;
    cell7.innerHTML = qualifications;
    cell8.innerHTML = holidays;

    document.getElementById("sno").value = " ";
    document.getElementById("name").value = " ";
    document.getElementById("dob").value = " ";
    document.getElementById("age").value = " ";
    document.getElementById("address").value = " ";
    document.getElementById("emailid").value = " ";
    document.getElementById("qualifications").value = " ";
    document.getElementById("holidays").value = " ";




    selectedRowToInput();
    editHtmlTbleSelectedRow();
    searchBlog()




}




function selectedRowToInput() {
    console.log(document)
    let table = document.getElementById("tableedit");
    console.log(table);
    for (let i = 0; i <= table.rows.length; i = i + 1) {

        console.log(table.rows[i]);
        table.rows[i].onclick = function () {
            rIndex = this.rowIndex;
            console.log("index", rIndex);

            document.getElementById("sno").value = this.cells[0].innerHTML;
            document.getElementById("name").value = this.cells[1].innerHTML;
            let date_array = this.cells[2].innerHTML.split('/');
            console.log(date_array);
            let day = date_array[0]
            let month = date_array[1]
            let year = date_array[2]
            let date_str = year + "-" + month + "-" + day
            document.getElementById("dob").value = date_str
            document.getElementById("age").value = this.cells[3].innerHTML;
            document.getElementById("address").value = this.cells[4].innerHTML;
            document.getElementById("emailid").value = this.cells[5].innerHTML;
            document.getElementById("qualifications").value = this.cells[6].innerHTML;
            document.getElementById("holidays").value = this.cells[7].innerHTML;
        };
    }
}





function editHtmlTbleSelectedRow() {

    table = document.getElementById("tableedit");

    console.log(rIndex);

    table.rows[rIndex].cells[0].innerHTML = document.getElementById("sno").value;
    table.rows[rIndex].cells[1].innerHTML = document.getElementById("name").value;
    let date = document.getElementById("dob").value.split('-');
    console.log(date);
    dob = date[2] + '/' + date[1] + '/' + date[0];
    table.rows[rIndex].cells[2].innerHTML = dob;
    table.rows[rIndex].cells[3].innerHTML = document.getElementById("age").value;
    table.rows[rIndex].cells[4].innerHTML = document.getElementById("address").value;
    table.rows[rIndex].cells[5].innerHTML = document.getElementById("emailid").value;
    table.rows[rIndex].cells[6].innerHTML = document.getElementById("qualifications").value
    table.rows[rIndex].cells[7].innerHTML = document.getElementById("holidays").value


    document.getElementById("sno").value = " ";
    document.getElementById("name").value = " ";
    document.getElementById("dob").value = " ";
    document.getElementById("age").value = " ";
    document.getElementById("address").value = " ";
    document.getElementById("emailid").value = " ";
    document.getElementById("qualifications").value = " ";
    document.getElementById("holidays").value = " ";



}




function searchBlog() {
    let filter = document.getElementById("search").value.toUpperCase();

    let table = document.getElementById("tableedit");

    let tr = table.getElementsByTagName("tr");


    for (var i = 0; i < tr.length; i = i + 1) {
        let td = tr[i].getElementsByTagName("td")[1];

        if (td) {
            let textvalue = td.textContent || td.innerHTML;

            if (textvalue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }

    }
}









document.addEventListener('DOMContentLoaded', function () {
    
    
    
    selectedRowToInput();


    editHtmlTbleSelectedRow();


    searchBlog()


   




}, false);



var arr = new Array();
var selectedRow = null;
var formData;

function userDetails() {
  var name = document.getElementById('name').value;
  // var elements = document.getElementsByName('radioButton');
  //     var gender;
  //     console.log(elements);
  //     elements.forEach(e => {
  //         if (e.checked) {
  //             //if radio button is checked, set sort style
  //             gender = e.value;
  //         }
  //     });
  var age = document.getElementById('age').value;
  var vaccineType = document.getElementById('vaccineType').value;
  var date = document.getElementById('date').value;
  var phone = document.getElementById('phone').value;

  const userDetails = {
    name: name,
    // gender: gender,
    age: age,
    vaccineType: vaccineType,
    date: date,
    phone: phone,
  }


  // window.localStorage.setItem("bookform",JSON.stringify(bookservices));


}


function addData() {
  userDetails();
  retrieveData();

  arr.push({

    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    vaccineType: document.getElementById("vaccineType").value,
    date: document.getElementById("date").value,
    phone: document.getElementById("phone").value
  });

  window.localStorage.setItem("userDetails", JSON.stringify(arr));

  //myfunction();
  resetForm();
  alert("Data is submitted");

  displayTable();

}

function readData() {
    const formData = {
        
        NewName :   document.getElementById("name").value,
        NewAge:document.getElementById("age").value,
        NewvaccineType: document.getElementById("vaccineType").value,
        NewDate: document.getElementById("date").value,
        NewPhone: document.getElementById("phone").value
    }
    window.localStorage.setItem("UpdatedRow",JSON.stringify(formData));
}

function retrieveData() {
  var retrievedBook = window.localStorage.getItem("userDetails");

    if (retrievedBook != null) {
      arr = JSON.parse(retrievedBook);
    }

  }

  function displayTable() {
    retrieveData();
    var tb1 = document.getElementById("mytable");
    var len = tb1.rows.length;
    while (--len) {
      tb1.deleteRow(len);
    }
    for (i = 0; i < arr.length; i++) {
      var row = tb1.insertRow();
      var cell1 = row.insertCell();
      var cell2 = row.insertCell();
      var cell3 = row.insertCell();
      var cell4 = row.insertCell();
      var cell5 = row.insertCell();
      var cell6 = row.insertCell();
     // var cell7 = row.insertCell();


     
      cell1.innerHTML = arr[i].name;
      // cell2.innerHTML = arr[i].gender;
      cell2.innerHTML = arr[i].age;
      cell3.innerHTML = arr[i].vaccineType;
      cell4.innerHTML = arr[i].date;
      cell5.innerHTML = arr[i].phone;
      cell6.innerHTML = `<button onclick="deleterow(this)">DELETE</button>
                                        <button onclick="editrow(this)">EDIT</button>`;

    }

  }

  function resetForm() {

    document.getElementById("name").value = "";

    document.getElementById("age").value = "";
    document.getElementById("vaccineType").value = "";
    document.getElementById("date").value = "";
    document.getElementById("phone").value = "";
  }

    // function deleterow(td) {
    //   console.log(td);
    //   var deleteRowData = td.parentElement.parentElement.rowIndex;
    //    document.getElementById("mytable").deleteRow(deleteRowData);
    //   arr.splice(4,1);
       
    //    console.log(deleteRowData);
    //   // document.getElementById("myTable").deleteRow(deleteRowData);
    //   localStorage.setItem("userDetails", JSON.stringify(arr));

    // //   resetForm();
    // }
    

    // function deleterow(td) {
    //   var i = td.parentNode.parentNode.rowIndex;
    //   document.getElementById("mytable").deleteRow(i);
    //   localStorage.setItem("userDetails", JSON.stringify(arr));


//    // }
// function deleterow(td){
//   var tmp = JSON.parse(localStorage.getItem("userDetails"));
//   console.log(tmp);
//   var i = td.parentNode.parentElement.rowIndex;
//   document.getElementById("mytable").deleteRow(i);
  
//   console.log(i);
//    //var i = td.parentNode.rowIndex;

//  // arr.splice(i, 1);
//   localStorage.setItem("userDetails",JSON.stringify(arr));
// }
function deleterow(td) {
  retrieveData();
  var deleterowdata = td.parentElement.parentElement.rowIndex;
  var actualindex = deleterowdata-1;
  // console.log(actualindex);
  document.getElementById("mytable").deleteRow(deleterowdata);
  arr.splice(actualindex,1);
  console.log(arr);
  window.localStorage.setItem("userDetails",JSON.stringify(arr));
  // data.splice(deleterowdata,1);
  // console.log(data);
}
var isRowIndex = null;
var selectedRow = null;
  function editrow(td) {
          selectedRow = td.parentElement.parentElement;
          selectRow = selectedRow.rowIndex;
          isRowIndex = selectRow - 1;
          // console.log(selectRow);
          // deleterow(td);
          // document.getElementById("selectedserv").value = selectedRow.cells[0].innerHTML;
          document.getElementById("name").value = selectedRow.cells[0].innerHTML;
          document.getElementById("age").value = selectedRow.cells[1].innerHTML;
          document.getElementById("vaccineType").value = selectedRow.cells[2].innerHTML;
          document.getElementById("date").value = selectedRow.cells[3].innerHTML;
          document.getElementById("phone").value = selectedRow.cells[4].innerHTML;
       
      }


      function updateRow(td) {
        var table = document.getElementById("mytable");
        // console.log(table);
        selectedRow = td.parentElement.parentElement;
            selectrow = selectedRow.rowIndex;

        table.rows[selectRow].cells[0].innerHTML = document.getElementById("name").value;
        table.rows[selectRow].cells[1].innerHTML =  document.getElementById("age").value;
        table.rows[selectRow].cells[2].innerHTML =  document.getElementById("vaccineType").value;
        table.rows[selectRow].cells[3].innerHTML =  document.getElementById("date").value;
        table.rows[selectRow].cells[4].innerHTML =  document.getElementById("phone").value;
        

        retrieveData();
        arr[isRowIndex] = ({
            name: table.rows[selectRow].cells[0].innerHTML,
            age :  table.rows[selectRow].cells[1].innerHTML,
            vaccineType:  table.rows[selectRow].cells[2].innerHTML,
            date:  table.rows[selectRow].cells[3].innerHTML,
            phone:  table.rows[selectRow].cells[4].innerHTML,
            
        });

        localStorage.setItem("userDetails",JSON.stringify(arr));
        resetForm();
        alert("Data is updated!")
        


    }




var myVar = setInterval(displayTable(), 6000);


// filter part
function filter(){
    retrieveData();
  var ageeval = document.getElementById("age").value;
  const filteredAge = arr.filter(obj => obj.age>45);
  const filteredAge2 = arr.filter(obj => obj.age>18 && obj.age<45);
  console.log(filteredAge);
  console.log(filteredAge2);

  var tb1 = document.getElementById("mytable");
  var count = (tb1.rows.length)-1;
  var count1 = filteredAge.length;
  var count2 = filteredAge2.length;
   document.getElementById("count").innerHTML = count;
   document.getElementById("count1").innerHTML = count1;
   document.getElementById("count2").innerHTML = count2;
}
function filter2(){
  retrieveData();
   var typeEval = document.getElementById("vaccineType").value;
   const filteredType = arr.filter(obj => obj.vaccineType == "Covisheild");
   const filteredType2 = arr.filter(obj => obj.vaccineType== "Covaxin");
   console.log(filteredType);
   console.log(filteredType2);
   
   var count1 = filteredType.length;
   var count2 = filteredType2.length;
    document.getElementById("countType").innerHTML = count1;
    document.getElementById("countType2").innerHTML = count2;
  

}

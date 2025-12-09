function Hello(){
    alert("Hello Welcome to Node Js")
    console.log("Your JS file Is working")
}



     function set_data(name,roll,branch,address)
     {
        document.getElementById('stuname').value= name;
        document.getElementById('sturoll').value= roll;
        document.getElementById('stubranch').value= branch;
        document.getElementById('stuaddress').value= address;
        // $('#stuname').val(name);
        // $('#sturoll').val(roll);
        // $('#stubranch').val(branch);
        // $('#stuaddress').val(address);
     }

         $('#studentrecord').DataTable({
    layout: {
        topStart: {
            buttons: [
                {
                extend:'copyHtml5',
                exportOptions:{
                    columns:[0,1,2,3]
                }
                }, 
                {
                extend:'excelHtml5',
                exportOptions:{
                    columns:[0,1,2,3]
                }
                }, 
                {
                extend:'csvHtml5',
                exportOptions:{
                    columns:[0,1,2,3]
                }
                }, 
                {
                extend:'pdfHtml5',
                exportOptions:{
                    columns:[0,1,2,3]
                },
                customize:function(doc){
                    doc.content[1].table.widths=['25%','20%','25%','30%'];
                }
                }
            ]
        }
    }
    });

   


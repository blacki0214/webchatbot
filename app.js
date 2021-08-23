function validateForm(){
    var x =document.forms["myform"]["full_name"].value;
    var y =document.forms["myform"]["email"].value;
    
    if(x==null || x==""){
        alert("ten buoc phai ghi vao");
        return false;
    }
    
    if(y==null || y==""){
        alert("email buoc phai ghi vao");
        return false;
    }
}
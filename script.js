
document.getElementById("output").style.display = "none";
document.getElementById("print").style.display = "none";

function generate() {
    // persoal info and address section
    document.getElementById("name_t").innerHTML=document.getElementById("fname").value; 
    document.getElementById("jobrole_t").innerHTML=document.getElementById("fjob_role").value; 
    document.getElementById("email_t").innerHTML=document.getElementById("femail").value; 
    document.getElementById("phone_t").innerHTML=document.getElementById("fphone").value; 
    document.getElementById("address_t").innerHTML=document.getElementById("faddress").value;
    document.getElementById("linkedin_t").innerHTML=document.getElementById("flinkedin").value; 
    
    // Soft skills  section 
    document.getElementById("ss1").innerHTML=document.getElementById("ss1_f").value; 
    document.getElementById("ss2").innerHTML=document.getElementById("ss2_f").value; 
    document.getElementById("ss3").innerHTML=document.getElementById("ss3_f").value; 
    document.getElementById("ss4").innerHTML=document.getElementById("ss4_f").value;
    document.getElementById("ss5").innerHTML=document.getElementById("ss5_f").value;
    

    // technical skills  section 
    document.getElementById("os1").innerHTML=document.getElementById("os1_f").value; 
    document.getElementById("os2").innerHTML=document.getElementById("os2_f").value; 
    document.getElementById("os3").innerHTML=document.getElementById("os3_f").value; 
    document.getElementById("os4").innerHTML=document.getElementById("os4_f").value;
    document.getElementById("os5").innerHTML=document.getElementById("os5_f").value;


    // language  section 
    document.getElementById("l1").innerHTML=document.getElementById("l1_f").value; 
    document.getElementById("l2").innerHTML=document.getElementById("l2_f").value; 
    document.getElementById("l3").innerHTML=document.getElementById("l3_f").value; 
    document.getElementById("l4").innerHTML=document.getElementById("l4_f").value;
    document.getElementById("l5").innerHTML=document.getElementById("l5_f").value;

    // package  section 
    document.getElementById("dm1").innerHTML=document.getElementById("dm1_f").value; 
    document.getElementById("dm2").innerHTML=document.getElementById("dm2_f").value; 
    document.getElementById("dm3").innerHTML=document.getElementById("dm3_f").value; 
    document.getElementById("dm4").innerHTML=document.getElementById("dm4_f").value;
    document.getElementById("dm5").innerHTML=document.getElementById("dm5_f").value;

    // web technology  section 
    document.getElementById("wt1").innerHTML=document.getElementById("wt1_f").value; 
    document.getElementById("wt2").innerHTML=document.getElementById("wt2_f").value; 
    document.getElementById("wt3").innerHTML=document.getElementById("wt3_f").value; 
    document.getElementById("wt4").innerHTML=document.getElementById("wt4_f").value;
    document.getElementById("wt5").innerHTML=document.getElementById("wt5_f").value;
     
    
    // Certificate and achievements
    document.getElementById("tcertificate_1").innerHTML=document.getElementById("fcertificate_1").value;
    document.getElementById("tcertificate_2").innerHTML=document.getElementById("fcertificate_2").value;
    document.getElementById("tcertificate_3").innerHTML=document.getElementById("fcertificate_3").value;
    document.getElementById("tcertificate_4").innerHTML=document.getElementById("fcertificate_4").value;
    document.getElementById("tcertificate_5").innerHTML=document.getElementById("fcertificate_5").value;

    // Education college
    document.getElementById("course_name3").innerHTML=document.getElementById("course_name3_f").value; 
    document.getElementById("org_name3").innerHTML=document.getElementById("org_name3_f").value; 
    document.getElementById("year3").innerHTML=document.getElementById("year3_f").value; 

    // Education 12th
    document.getElementById("course_name2").innerHTML=document.getElementById("course_name2_f").value; 
    document.getElementById("org_name2").innerHTML=document.getElementById("org_name2_f").value; 
    document.getElementById("year2").innerHTML=document.getElementById("year2_f").value; 


    // Education 10th
    document.getElementById("course_name1").innerHTML=document.getElementById("course_name1_f").value; 
    document.getElementById("org_name1").innerHTML=document.getElementById("org_name1_f").value; 
    document.getElementById("year1").innerHTML=document.getElementById("year1_f").value; 




    // final output section
    document.getElementById("output").style.display = "block";
    document.getElementById("print").style.display = "block";
    document.getElementById("form_box").style.display = "none";
    document.getElementById("form_box2").style.display = "none";
    document.getElementById("form_box3").style.display = "none";
    document.getElementById("form_box4").style.display = "none";
    document.getElementById("form_box5").style.display = "none";
    document.getElementById("done").style.display = "none";
    document.getElementById("output").style.marginTop = "5px";
    document.getElementById("done_btn").style.display = "none";
    document.getElementById("header").style.display = "none";
}




//   print function
function printcv() {
    window.print()
}
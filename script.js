const form = document.getElementById("reportForm");
const report = document.getElementById("report");
const count = document.getElementById("count");
const success = document.getElementById("success");

if(report){
    report.addEventListener("input",()=>{
        count.textContent = report.value.length;
    });
}

form.addEventListener("submit", async(e)=>{

    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch(form.action,{
        method:"POST",
        body:formData
    });

    const result = await response.json();

    console.log(result);

    if(result.success){

        success.style.display="block";
        form.reset();
        count.textContent="0";

    }else{

        alert(result.message);

    }

});

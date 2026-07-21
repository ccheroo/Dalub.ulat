// Character Counter
const report = document.getElementById("report");
const count = document.getElementById("count");

if (report && count) {
    report.addEventListener("input", () => {
        count.textContent = report.value.length;
    });
}

// Form Submission
const form = document.getElementById("reportForm");
const success = document.getElementById("success");

if (form) {

    form.addEventListener("submit", async function(e) {

        e.preventDefault();

        const button = form.querySelector("button");

        const originalText = button.innerHTML;

        button.disabled = true;
        button.innerHTML = "⏳ Ipinapadala...";

        const data = new FormData(form);

        try{

            const response = await fetch(form.action,{
                method:"POST",
                body:data
            });

            if(response.ok){

                form.reset();

                count.textContent="0";

                success.style.display="block";

                success.scrollIntoView({
                    behavior:"smooth"
                });

            }else{

                alert("Hindi naipadala ang ulat. Pakisubukang muli.");

            }

        }catch(error){

            alert("May problem sa koneksyon. Pakisubukang muli.");

        }

        button.disabled=false;
        button.innerHTML=originalText;

    });

}

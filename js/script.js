let btn = document.getElementById("btn");

btn.addEventListener("click", getMarks);

function getMarks(){

    let name = document.getElementById("sname").value;
    let regno = document.getElementById("sregno").value;
    let subject = document.getElementById("sbname").value;

    let marks1 = Number(document.getElementById("s1marks").value);
    let marks2 = Number(document.getElementById("s2marks").value);

    let total = marks1 + marks2;

    localStorage.setItem("sname", name);
    localStorage.setItem("sregno", regno);
    localStorage.setItem("sbname", subject);
    localStorage.setItem("stmarks", total);

    document.getElementById("result").innerHTML =
    `Congratulations ${name}!<br>
     Register No: ${regno}<br>
     Subject: ${subject}<br>
     Total Marks: ${total}`;
}
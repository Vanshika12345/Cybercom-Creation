var data = JSON.parse(sessionStorage.getItem('arrData'));

document.write("<table border='1'>");
document.write('<tr><th>Name</th><th>Email</th><th>DOB</th></tr>')
for(const x of data)
{
    document.write(`<tr><td>${x.name}</td><td>${x.email}</td><td>${x.dob}</td></tr>`);
}
document.write("</table>");

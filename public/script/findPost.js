let table = document.querySelector('.table');
async function findPost() {
    let text = document.getElementById('findpost').value;
    let req = await fetch('/findPost', {
        method: 'POST',
        body: JSON.stringify({ name: text }),
        headers: { 'Content-Type': 'application/json' }
    })
    let res = await req.json();
    if (res.posts) {
        renderTable(res.posts);
    }
}
function renderTable(data) {
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    console.log(data);
    for (let ele of data) {
        let tr = document.createElement('tr');
        let html = `
        <td>
        ${ele.user._id}
    </td>
    <td>
    ${ele.user.username}
    </td>
    <td>
       ${ele.title}
    </td>
    <td>
       <div class="image_display">
           <img src="${ele.images[0].url}" alt="">
       </div>
    </td>
        `
        tr.innerHTML = html;
        table.appendChild(tr);
    }
}
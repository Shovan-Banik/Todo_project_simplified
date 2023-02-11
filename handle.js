let count=0;
document.getElementById('input-btn').addEventListener('click',function(){
    count+=1;
    const myInputValue=document.getElementById('input-value').value;
    const parent=document.getElementById('content-container');
    const tr=document.createElement('tr');
    tr.innerHTML=`
    <td>${count}</td>
    <td>${myInputValue}</td>
    <td>
    <button class="dlt">Delete</button>
    </td>
      `;
    parent.appendChild(tr);
    document.getElementById('input-value').value='';

    const dltProperty=document.getElementsByClassName('dlt');
        for(const property of dltProperty){
            property.addEventListener('click',function(event){
            event.target.parentNode.parentNode.style.display='none';
            });
        }
})

const clearAll=document.getElementById('clear-all');
clearAll.addEventListener('click',function(event){
    event.target.parentNode.style.display='none';
})


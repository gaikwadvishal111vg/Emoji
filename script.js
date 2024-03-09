const emoji_container = document.getElementById("emojee_Container");

let search_field = document.getElementById("searchInput");
const displayEmojees=(query="")=>{
  
    let filterData = emojiList.filter(ele=>{
        if(ele.description.indexOf(query )!= -1){
            return true
        }
        if(ele.aliases.find(ele=>ele===query)){
            return true;
        }
        if(ele.tags.find(ele=>ele===query)){
            return true;
        }
    })

    emoji_container.innerHTML=''
    filterData.forEach(ele => {
        
let new_row = document.createElement("tr");

let new_emojee = document.createElement("td");
new_emojee.style.padding='1rem'
new_emojee.style.fontSize='3rem';

let new_aliases = document.createElement("td");
new_aliases.style.paddingLeft='3rem';

let new_discription= document.createElement("td");

new_emojee.innerText = ele.emoji;

new_aliases.innerText = ele.aliases;

new_discription.innerText = ele.description;
new_aliases.innerText=new_aliases.innerText.replaceAll('_',"");
new_row.appendChild(new_emojee);

new_row.appendChild(new_aliases);

new_row.appendChild(new_discription);
emoji_container.appendChild(new_row);
})                
}
const searchData=(ele)=>{
    let value =ele.target.value;
    // console.log(value);
    displayEmojees(value);
    // displayEmojees.sort();
}
window.addEventListener('load',displayEmojees);
search_field.addEventListener('keyup',searchData)
window.onload = () => displayEmojees();

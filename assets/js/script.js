const form=document.getElementById('form')
const modal = document.querySelector(".modal")
const filmImg = document.getElementById('filmImg')
const filmName = document.getElementById('filmName')
const filmImdb = document.getElementById('filmImdb')
const filmCategory = document.getElementById('filmCategory')
const filmRejisor = document.getElementById('filmRejisor')
const addBtn = document.getElementById('submitBtn')
const saveBtn = document.getElementById('saveBtn')
const editBtn = document.getElementById('editBtn')
const search = document.querySelector('.search-inp')
const tBody =document.getElementById('tBody')
let memoElement;

let data = []



addBtn.addEventListener('click',e=>{
    e.preventDefault()
    modal.classList.toggle("active")
})

saveBtn.addEventListener("click",(e)=>{
    e.preventDefault()

    const filmImgValue = filmImg.value
    const filmNameValue = filmName.value
    const filmImdbValue = filmImdb.value
    const filmCategoryValue = filmCategory.value
    const filmRejisorValue = filmRejisor.value

    if (filmImgValue==='' || filmNameValue==='' || filmImdbValue==='' || filmCategoryValue ==='' || filmRejisorValue==='') {
        return;
    }

    //CREATE ELEMENT
    const tr=document.createElement("tr")
    const tdfilmImg=document.createElement("td")
    const img=document.createElement("img")
    const tdfilmName=document.createElement("td")
    const tdfilmImdb=document.createElement("td")
    const tdfilmCategory=document.createElement("td")
    const tdfilmRejisory=document.createElement("td")
    const tdfilmSettings=document.createElement("td")
    const editIcon=document.createElement('span')
    const deleteBtn=document.createElement('span')


    //CONTENT
    img.src=filmImgValue    
    tdfilmName.textContent= filmNameValue
    tdfilmImdb.textContent= filmImdbValue
    tdfilmCategory.textContent= filmCategoryValue
    tdfilmRejisory.textContent= filmRejisorValue
    editIcon.innerHTML='<i class="fa-solid fa-pen-to-square"></i>'
    deleteBtn.innerHTML='<i class="fa-solid fa-trash"></i>'


    //CLASSLIST
    img.classList.add('imgClass')
    editIcon.classList.add('icon')
    deleteBtn.classList.add('icon')


    //delete
    deleteBtn.addEventListener('click',e=>{
        deleteBtn.parentElement.parentElement.remove()
    })


    //edit
    editIcon.addEventListener("click",e=>{
        memoElement=tr
        filmImg.value =img.src
        filmName.value=tdfilmName.textContent
        filmImdb.value=tdfilmImdb.textContent
        filmCategory.value=tdfilmCategory.textContent
        filmRejisor.value=tdfilmRejisory.textContent
    })



    //APPEND
    tBody.appendChild(tr)
    tdfilmImg.appendChild(img)
    tdfilmSettings.append(editIcon,deleteBtn)
    tr.append(tdfilmImg,tdfilmName,tdfilmImdb,tdfilmCategory,tdfilmRejisory,tdfilmSettings)


    //search
    data.push(filmName.value)
    console.log(data);
    
    


    //reset form
    form.reset()
    

})


 //edit
editBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    memoElement.children[0].children[0].src = filmImg.value
    memoElement.children[1].textContent=filmName.value
    memoElement.children[2].textContent=filmImdb.value
    memoElement.children[3].textContent=filmCategory.value
    memoElement.children[4].textContent=filmRejisor.value

    
    //reset form
    form.reset()
})


   


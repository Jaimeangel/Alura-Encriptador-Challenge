const write_area=document.querySelector('.--write')
const copy_area=document.querySelector('.--copy_text')
const btn_encrypt=document.querySelector('.--encrip')
const btn_decrypt=document.querySelector('.--descrip')
const btn_copy=document.querySelector('.--copy')

function no_content_copy_area(){
    if(copy_area.textContent){
        document.querySelector('.no_content').classList.add('hide')
        document.querySelector('.copy_area').classList.add('show')
    }
}

function alertWrite(){
    write_area.value='!Solo letras minúsculas y sin acentos¡'
    write_area.classList.add('alertWrite')
    setTimeout(() => {
        write_area.classList.remove('alertWrite')
        write_area.value=''
    }, 2000);
}

function encrypt(){
    const msg=write_area.value;
    if (/[^a-zñ ]/.test(msg)) {
        alertWrite()
    }else{
        let new_word=msg.replace(/e/gm,'enter')
        new_word=new_word.replace(/o/gm,'ober')
        new_word=new_word.replace(/i/gm,'imes')
        new_word=new_word.replace(/a/gm,'ai')
        new_word=new_word.replace(/u/gm,'ufat')
        copy_area.textContent=`${new_word}`
    }
    no_content_copy_area()
}

function decrypt(){
    const msg=write_area.value;
    let new_word=msg.replace(/enter/gm,'e')
    new_word=new_word.replace(/ober/gm,'o')
    new_word=new_word.replace(/imes/gm,'i')
    new_word=new_word.replace(/ai/gm,'a')
    new_word=new_word.replace(/ufat/gm,'u')
    copy_area.textContent=`${new_word}`
    no_content_copy_area()
}

function copy_text(){
    const msg=copy_area.textContent;
    navigator.clipboard.writeText(`${msg}`)
    btn_copy.classList.add('greenCheck')
    setTimeout(() => {
        btn_copy.classList.remove('greenCheck')
    }, 800);
}

function clean_write_area(){
    write_area.value=''
}

btn_encrypt.addEventListener('click',encrypt)
btn_decrypt.addEventListener('click',decrypt)
btn_copy.addEventListener('click',copy_text)
write_area.addEventListener('click',clean_write_area)
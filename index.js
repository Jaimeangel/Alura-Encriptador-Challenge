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

function encrypt(){
    const msg=write_area.value;
    const encode_msg=btoa(msg)
    console.log(encode_msg)
    console.log(typeof(encode_msg))
    copy_area.textContent=`${encode_msg}`
    no_content_copy_area()
}

function decrypt(){
    const msg=write_area.value;
    const encode_msg=atob(msg)
    console.log(encode_msg)
    console.log(typeof(encode_msg))
    copy_area.textContent=`${encode_msg}`
    no_content_copy_area()
}

function copy_text(){
    const msg=copy_area.textContent;
    navigator.clipboard.writeText(`${msg}`)
}

btn_encrypt.addEventListener('click',encrypt)
btn_decrypt.addEventListener('click',decrypt)
btn_copy.addEventListener('click',copy_text)
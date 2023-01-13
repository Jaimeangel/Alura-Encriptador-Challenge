const write_area=document.querySelector('.--write')
const copy_area=document.querySelector('.--copy_text')
const btn_encrypt=document.querySelector('.--encrip')
const btn_decrypt=document.querySelector('.--descrip')
const btn_copy=document.querySelector('.--copy')


function encrypt(){
    const msg=write_area.value;
    const encode_msg=btoa(msg)
    console.log(encode_msg)
    copy_area.textContent=`${encode_msg}`
}

function decrypt(){
    const msg=write_area.value;
    const encode_msg=atob(msg)
    console.log(encode_msg)
    copy_area.textContent=`${encode_msg}`
}

function copy_text(){
    const msg=copy_area.textContent;
    navigator.clipboard.writeText(`${msg}`)
}

btn_encrypt.addEventListener('click',encrypt)
btn_decrypt.addEventListener('click',decrypt)
btn_copy.addEventListener('click',copy_text)
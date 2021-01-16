<script language=’javascript’>

// url shortener by shoaiyb sysa

//<![CDATA[
var key = window.location.href.split(“?go/”)[1].replace(“/”,””)
var urls={
‘fb’:’https://www.facebook.com/realshoaiyb’,
‘ig’:’https://www.instagram.com/sysa_shoaiyb’,
‘gh’:”https://github.com/shoaiyb”,
‘cp’:”https://codepen.io/shoaiyb”,
}
if(key){
if(urls[key]){
window.location.href=urls[key]
}else{
document.write(“‘”+key+”‘ not found :(“);
}
}
//]]>
</script>

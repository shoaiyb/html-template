var key = window.location.href.split(“feed/”)[1].replace(“/”,””)
var urls={
‘rss’:’https://templass.ga/sitemap.xml’,
‘’:’https://templass.ga/sitemap.xml’,
// ‘’:”https://templass.ga/sitemap.xml”,
// ‘’:”https://templass.ga/sitemap.xml”,
}
if(key){
if(urls[key]){
window.location.href=urls[key]
}else{
document.write(“‘”+key+”‘ not found :(“);
}
}

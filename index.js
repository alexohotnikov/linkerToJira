const str = ``


function test(str) {
 const out = str.replace(/href=\"(.+?)\"\>([0-9А-Я]*): ([0-9А-Я()A-zа-я.: ё]+)/ig, '[$2 => $3|https://cms.uchi.ru/$1]').replace(/\<p\>\<a |\<\/a\>\<\/p\>/ig, '')
 console.log(out)
 return out;
}

test(str)

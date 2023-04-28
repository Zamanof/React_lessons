// document.cookie = "registered=User; expires=Sat, 21 Jan 2023 19:21:00 GMT; path=/"
// document.cookie = "registered=User; expires=Sat, 01/21/2023 19:21:00 GMT; path=/"
// document.cookie = "registered=User; expires=Sat, 2023-01-21 19:21:00 GMT; path=/"

// document.cookie = "registered=User; expires=Sat, 2023-01-21 19:21:00 GMT; path=/; domain=itstep.org; secure"


document.cookie = "registered=User; expires=Fri, 20 Jan 2023 15:40:00 GMT; path=/"
document.cookie = "organization=Step; expires=Fri, 20 Jan 2023 15:40:00 GMT; path=/"
window.out.innerHTML = document.cookie

document.cookie = "register=User; expires=Fri, 21 Jan 2023 18:55:00 GMT; path=/"
    document.cookie = "organization=Step; expires=Fri, 21 Jan 2023 18:55:00 GMT; path=/"
    var coo = document.cookie
    var spl = coo.split('; ')

    var cooObj = {};
    var c;
    for (var i = 0; i < spl.length; i++) {

        c = spl[i].split('=');
        cooObj[c[0]] = c[1];

    }
    for (var co in cooObj) {
        window.out.innerHTML += co + " = " + cooObj[co] + "<br>"
    }
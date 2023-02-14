//your code here
fetch("https://randomuser.me/api/").then((resp)=> resp.json()).then((data)=>{
            let pic = document.querySelector("img")
            let dis = document.querySelector("h2");

            console.log(data.results)
            pic.src = data.results[0].picture.large
            dis.innerHTML = `${data.results[0].name.first} ${data.results[0].name.last}`

            let realInfo = document.querySelector('p');

            let btn = document.querySelectorAll('[data-attr');

            btn[0].addEventListener('click', ()=>{
                realInfo.innerHTML = `${data.results[0].dob.age}`
            })

            btn[1].addEventListener('click', ()=>{
                realInfo.innerHTML = `${data.results[0].email}`
            })

            btn[2].addEventListener('click', ()=>{
                realInfo.innerHTML = `${data.results[0].phone}`
            })

        })
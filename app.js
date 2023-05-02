let item = document.querySelectorAll(".footer-icon");

console.log(item)

item.forEach(element => {
    element.addEventListener("mouseover",() =>{
        element.setAttribute("fill","#fff")
    })
})

item.forEach(element => {
    element.addEventListener("mouseout",() =>{
        element.setAttribute("fill","#2C7566")
    })
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)

        if (entry.isIntersecting)
        {
            entry.target.classList.add('show');
        }
        else
        {
            entry.target.classList.remove('show');
        }

    });
});


const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((elt) => observer.observe(elt));




const wrapper1 = document.querySelector(".wrapper1");
header1 = wrapper1.querySelector("header");

function onDrag1({movementX, movementY})
{
    let getStyle = window.getComputedStyle(wrapper1);

    let left = parseInt(getStyle.left); 
    let top = parseInt(getStyle.top);

    wrapper1.style.left = `${left + movementX}px` ;
    wrapper1.style.top = `${top + movementY}px` ;
    wrapper1.style.zIndex = "2";
}

header1.addEventListener("mousedown", () => {
    header1.addEventListener("mousemove", onDrag1);
});

header1.addEventListener("mouseup", () => {
    header1.removeEventListener("mousemove", onDrag1);
    window.getComputedStyle(wrapper1).style.zIndex = "1";
});

header1.addEventListener("mouseleave", () => {
    header1.removeEventListener("mousemove", onDrag1);
    window.getComputedStyle(wrapper1).style.zIndex = "1";
});



const wrapper2 = document.querySelector(".wrapper2");
header2 = wrapper2.querySelector("header");

function onDrag2({movementX, movementY})
{
    let getStyle = window.getComputedStyle(wrapper2);
    
    let left = parseInt(getStyle.left); 
    let top = parseInt(getStyle.top);
    
    wrapper2.style.left = `${left + movementX}px` ;
    wrapper2.style.top = `${top + movementY}px`;
    wrapper2.style.zIndex = "2";
}

header2.addEventListener("mousedown", () => {
    header2.addEventListener("mousemove", onDrag2);
});

header2.addEventListener("mouseup", () => {
    header2.removeEventListener("mousemove", onDrag2);
    window.getComputedStyle(wrapper2).style.zIndex = "1";
});

header2.addEventListener("mouseleave", () => {
    header2.removeEventListener("mousemove", onDrag2);
    window.getComputedStyle(wrapper2).style.zIndex = "1";
});


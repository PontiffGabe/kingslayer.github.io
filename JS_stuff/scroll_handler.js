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




const wrapper = document.querySelector(".wrapper");
header = wrapper.querySelector("header");

function onDrag({movementX, movementY})
{
    let getStyle = window.getComputedStyle(wrapper);

    let left = parseInt(getStyle.left); 
    let top = parseInt(getStyle.top);

    wrapper.style.left = `${left + movementX}px` 
    wrapper.style.top = `${top + movementY}px`
}

header.addEventListener("mousedown", () => {
    header.addEventListener("mousemove", onDrag);
});

header.addEventListener("mouseup", () => {
    header.removeEventListener("mousemove", onDrag);
});

header.addEventListener("mouseleave", () => {
    header.removeEventListener("mousemove", onDrag);
});
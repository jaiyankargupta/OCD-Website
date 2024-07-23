const new_button=document.querySelector(".new-button");
const new_blog_window=document.querySelector('.new-blog-window');
const close_window_button=document.querySelector(".close-window-button");

const heading=document.querySelector(".blog-data #heading");
const desc=document.querySelector(".blog-data #para");
const link=document.querySelector(".blog-data #link");
const img_link=document.querySelector(".blog-data #img-link");

const submit=document.querySelector(".blog-data button");
const form=document.querySelector('.blog-data form');
const blogs_container=document.querySelector(".blogs-container");

// open new-blog-window 
new_button.addEventListener('click',function(e){
    e.preventDefault();

    //scroll to top
    window.scrollTo({
        top: '0,0',
        behavior: 'smooth'
    });

    //open window
    new_blog_window.setAttribute("style","display:block");
    new_button.setAttribute("style","display:none");
});
//close new-blog-window
close_window_button.addEventListener('click',function(e){
    new_blog_window.setAttribute("style","display:none");
    new_button.setAttribute("style","display:block");
});

// add new blog
form.addEventListener('submit',function(e){
    e.preventDefault();
    //fetch data
    const headingText=heading.value;
    const descText=desc.value;
    const linkText=link.value;
    const imgLinkText=img_link.value;

    //create new blog-container
    const new_blog_container=document.createElement('div');
    new_blog_container.className="blog-container";
    new_blog_container.setAttribute("style","padding-top:15px");
    new_blog_container.innerHTML=`
    <div class="image">
        <img src="${imgLinkText}" alt="ocdlogo" id="blog-img" width="100%" height="100%">
    </div>
    <div id="blog-des">
        <h2>${headingText}</h2>
        <p>${descText}..</p>
    </div>
    <div class="learn-more" title="GO TO WEBSITE">
        <a href="${linkText}" target="_blank"><button>Learn More ></button></a>
    </div>
    `;

    // add this to page 
    blogs_container.appendChild(new_blog_container);

    //free the form
    heading.value='';
    desc.value='';
    link.value='';
    img_link.value='';

    //show alert
    alert("ADDED NEW BLOG>>>");
});

//REMOVE BLOG
const remove_blog=document.querySelectorAll(".remove-blog img");
remove_blog.forEach(function(ele){
    ele.addEventListener('click',function(e){
        // e.stopPropagation();
        let removeIt=e.target.parentNode.parentNode;
        console.log(removeIt)
        if(removeIt.className=="blog-container"){
            removeIt.remove();
        }
    })
})
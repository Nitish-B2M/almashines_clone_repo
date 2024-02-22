function validateEmail(event){
    event.preventDefault();

    var email = document.getElementById("email").value;    

    var showMessage = document.querySelector(".show-message");

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email == "" || email == null) {
        showMessage.classList.add("message-error");
        showMessage.innerHTML = "Email must be filled out";
        return false;
    } else if (email.match(validRegex) == null) {
        showMessage.classList.add("message-error");
        showMessage.innerHTML = "Please enter a valid email address";
        return false;
    } else {
        showMessage.classList.remove("message-error");
        showMessage.innerHTML = "";
        return true;
    }
}

// normal condition fro hamburger menu
const navbarmenu = document.querySelector(".navbar-menu");
const menuBtn = document.querySelector(".hamburger-menu");
const hamburger = document.querySelector(".hamburger-icon");
const togglehamburger = document.querySelector(".toggle-hamburger-icon");
const navicon = document.querySelector(".nav-btn");
window.addEventListener('resize', ()=>{
    if(window.screen.availWidth>1100){
        console.log(navbarmenu.classList.contains("toggle-menu"));
        navbarmenu.classList.remove("toggle-menu");
        navbarmenu.classList.add("navbar-menu");
    }
    // else if(hamburger.classList.contains('toggle-hamburger-icon')){
    // hamburger.classList.remove('toggle-hamburger-icon');
    // hamburger.classList.add('hamburger-icon');
    // }
})
// humburger menu
function toggleNavbar() {
    if (navbarmenu.classList.contains("toggle-menu")) {
        navbarmenu.classList.remove("toggle-menu");
        navbarmenu.classList.add("navbar-menu");
        hamburger.classList.remove("toggle-hamburger-icon");
        navicon.classList.add("hamburger-icon");
    } else {
        navbarmenu.classList.add("n-flex");
        navbarmenu.classList.add("toggle-menu");
        navbarmenu.classList.remove("navbar-menu");
        hamburger.classList.add("toggle-hamburger-icon");
        navicon.classList.remove("hamburger-icon");
    }
}

data = [
    [
        {
            "id": "Data Driven Insights",
            "subHeader": "Insights That Help You Develop Efficient Strategies",
            "brief": "Advanced algorithms of AlmaShines crunch thousand of data points every day to bring you not only the powerful analytics on alumni activities & behaviours but also gives you directions and recommendations to plan your alumni engagement ahead",
            "img": "../static/photo/Manage_1.png"
        },
        {
            "id": "Intelligent Automation",
            "subHeader": "Automation Leads To Better Engagement",
            "brief": "AlmaShines brings personalised engagement for all your alumni segments with intelligent targeting and automated triggers which makes it a complete 'Engagement Machine'",
            "img": "../static/photo/Automaiton.png"
        },
        {
            "id": "Mobile First Experience",
            "subHeader": "Because Your Alumni Are Always Active On Mobile Phones",
            "brief": "Engage your alumni real time, send instant notifications, receive instant actions in less than a minute and be aligned with the busy lives of your alumni to foster a stronger community and increase engagement levels",
            "img": "../static/photo/Mobile-app-showcase.png"
        },
        {
            "id": "Tailor-Made Platform",
            "subHeader": "Automation Leads To Better Engagement",
            "brief": "AlmaShines brings personalised engagement for all your alumni segments with intelligent targeting and automated triggers which makes it a complete 'Engagement Machine'",
            "img": "../static/photo/Automaiton.png"
        }
    ]    
];

function changeJssContent(props){
    var id = props;
    var subHeader = "";
    var brief = "";
    var img = "";
    for(var i=0; i<data.length; i++){
        for(var j=0; j<data[i].length; j++){
            if(data[i][j].id == id){
                subHeader = data[i][j].subHeader;
                brief = data[i][j].brief;
                img = data[i][j].img;
            }
        }
    }
    document.getElementById("jss-sub-header").innerHTML = subHeader;
    document.getElementById("jss-brief").innerHTML = brief;
    document.getElementById("jss-img").src = img;
    document.getElementById("jss-img").alt = id;

    const activateButton = document.querySelector(".jss-btn-active");
    activateButton.classList.remove("jss-btn-active");
    const button = document.getElementById(id);
    button.classList.add("jss-btn-active");

}

function readBlog(event) {
    event.preventDefault();
    if(document.querySelector("#read-more-btn").innerHTML==="Read more"){
        document.querySelector(".blog-desc").innerHTML = "Lorem You can use the importFile() and exportFile() Java™ APIs to import or export JSON data from a DB2® database. You can use the com.ibm.nosql.json.api.DBCollection#importFile(String) method to import files with the *.js extension. A second integer parameter of this method indicates the commit frequency. The following snippet from a Java program demonstrates how to import JSON data: Lorem You can use the importFile() and exportFile() Java™ APIs to import or export JSON data from a DB2® database. You can use the com.ibm.nosql.json.api.DBCollection#importFile(String) method to import files with the *.js extension. A second integer parameter of this method indicates the commit frequency. The following snippet from a Java program demonstrates how to import JSON data:";
        document.querySelector("#read-more-btn").innerHTML = "Less more";
    }else{
        document.querySelector(".blog-desc").innerHTML = "";
        document.querySelector("#read-more-btn").innerHTML = "Read more";
    }
}
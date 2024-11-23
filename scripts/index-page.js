import BandSiteApi from "./band-site-api.js";

const bandApi = new BandSiteApi("2886777c-3308-49eb-af29-c97d7b690a3e");  
console.log(bandApi); 

async function renderComments() {
    const comments = await bandApi.getComments(); 
    comments.reverse()
    const commentSection = document.getElementById("dynamicContent");
    commentSection.innerHTML = ""; 

    comments.forEach(comment => {
        const commentList = document.createElement("li");
        commentList.classList.add("comment-section");

        const wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");

        const avatarClass = document.createElement("article");
        avatarClass.classList.add("wrapper__avatar");

        const name = document.createElement("p");
        name.classList.add("wrapper__name");
        name.textContent = comment.name;

        const dateTime = document.createElement("p");
        dateTime.classList.add("wrapper__dateTime");
        dateTime.textContent = new Date(comment.timestamp).toLocaleDateString(); 

        const commentWrapper = document.createElement("article");
        commentWrapper.classList.add("comment-wrapper");

        const commentPart = document.createElement("p");
        commentPart.classList.add("comment-wrapper__comment");
        commentPart.textContent = comment.comment;

        commentList.appendChild(wrapper);
        wrapper.appendChild(avatarClass);
        wrapper.appendChild(name);
        wrapper.appendChild(dateTime);
        commentList.appendChild(commentPart);
        commentWrapper.appendChild(commentPart);
        commentList.appendChild(commentWrapper);

        commentSection.prepend(commentList); 
    });
}

renderComments();  

const formEl = document.querySelector("#itemForm");

const handleSubmit = async (event) => {
    event.preventDefault();

    const name = document.getElementById("itemInput").value;
    const commentPart = document.getElementById("itemComment").value;

    if (name && commentPart) {
        const newComment = {
            name: name,
            comment: commentPart,
        };
	
        try {
            const createdComment = await bandApi.postComment(newComment); 
            console.log("Comment posted successfully:", createdComment);

            document.getElementById("itemInput").value = "";
            document.getElementById("itemComment").value = "";

            renderComments();
        } catch (error) {
            alert("Failed to post comment. Please try again.");
        }
    } else {
        alert("Please fill in both fields.");
    }
};

formEl.addEventListener("submit", handleSubmit);



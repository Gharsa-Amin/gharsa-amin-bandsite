
const commentSection = [

	{
		Name: "Isaac Tadesse",
		DateTime: "10/20/2023",
		Comment:
		"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
	},
	{
		Name: "Christina Cabrera",
		DateTime: "10/28/2023",
		Comment:
		"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
	},
	{
		Name: "Victor Pinto",
		DateTime: "11/02/2023",
		Comment:
		"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
	},
];


function renderComment(comment) {
	const li = document.createElement("li");
	li.classList.add("comment-section");

	const wrapper = document.createElement("div");
	wrapper.classList.add("wrapper");

	const avatarClass = document.createElement("article");
	avatarClass.classList.add("wrapper__avatar");

	const name = document.createElement("p");
	name.classList.add("wrapper__name");
	name.textContent = comment.Name;

	const dateTime = document.createElement("p");
	dateTime.classList.add("wrapper__dateTime");
	dateTime.textContent = comment.DateTime;

	const commentWrapper = document.createElement("article"); 
	commentWrapper.classList.add("comment-wrapper"); 

	const commentPart = document.createElement("p");
	commentPart.classList.add("comment-wrapper__comment");
	commentPart.textContent = comment.Comment;


	li.appendChild(wrapper);
	wrapper.appendChild(avatarClass);
	wrapper.appendChild(name);
	wrapper.appendChild(dateTime);
	li.appendChild(commentPart);
	commentWrapper.appendChild(commentPart); 
	li.appendChild(commentWrapper); 

	const dynamicContent = document.getElementById("dynamicContent");
	dynamicContent.prepend(li);
}

function renderAllComments() {
	const dynamicContent = document.getElementById("dynamicContent");

	commentSection.forEach((comment) => renderComment(comment));
}

const formEl = document.querySelector("#itemForm");
const handleSubmit = (event) => {
	event.preventDefault();

	const name = document.getElementById("itemInput").value;
	const commentPart = document.getElementById("itemComment").value;

	function sortComments(comments) {
		return comments.sort((a, b) => new Date(b.DateTime) - new Date(a.DateTime));
	}

	if (name && commentPart) {
		const newComment = {
			Name: name,
			DateTime: new Date().toLocaleDateString(),
			Comment: commentPart,
		};

		commentSection.unshift(newComment); // It would be useful to add an external API to make sure that the comments are in meaningful langauge rather than just Gibberish langauge, but it wasnt part of the assignement requirment so I didnt add it.

		document.getElementById("itemInput").value = "";
		document.getElementById("itemComment").value = "";


	renderComment(newComment);
	} else {
		alert("Please fill in your name and comment.");
	}
};

formEl.addEventListener("submit", handleSubmit);

renderAllComments();




// document.addEventListener('DOMContentLoaded', () => {
//     const nameInput = document.getElementById("itemInput");
//     const formEl = document.querySelector("#itemForm");

//     // Change border color to black when the input is focused
//     nameInput.addEventListener('focus', () => {
//         nameInput.classList.add('active');
//     });

//     // Change border color back to default when the input loses focus
//     nameInput.addEventListener('blur', () => {
//         if (nameInput.value() === '') {
//             nameInput.classList.remove('active'); // Remove active class if empty
//         } else {
//             nameInput.classList.remove('error'); // Remove error class if not empty
//         }
//     });

//     // Validate the input on form submission
//     formEl.addEventListener('submit', (event) => {
//         if (nameInput.value() === '') {
//             event.preventDefault(); // Prevent form submission
//             nameInput.classList.add('error'); // Add error class to change border color to red
//         } else {
//             nameInput.classList.remove('error'); // Remove error class if input is valid
//         }
//     });
// });







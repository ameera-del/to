// function addparagraphTag() {
//     const divTag = document.querySelector("#root")
//     const header = document.createElement("h1")
//     header.textContent = "Hello World"
//     divTag.appendChild(header)
// }
// addparagraphTag()

// this funtion adds a task to our to do list
function AddToDo() {
    // this finds where our task is working
    const divTag = document.getElementById("todo-section")
    // this finds where a user types a tag
    const inputTag = document.getElementById("input-tag")
    // this creates a new ul element
    const ParentList = document.createElement("ul")
    // this creates a new li element
    const ListContent = document.createElement("li")
    const ChildDiv = document.createElement("div")
    // this puts ChildDiv inside ParentList
    ParentList.appendChild(ChildDiv)
    // this puts the list inside childidv
    ChildDiv.appendChild(ListContent)

    ListContent.textContent = inputTag.value
    divTag.appendChild(ParentList)
    ChildDiv.classList.add("listcolor")
    // checks if the input field is not empty
    if(inputTag !==""){
        // clars the input field
        inputTag.value = ""
    }
}
// Javascript Objects

const aCourse = {
    // curly braces hold an object
    name : "Dynamic Web Fundamentals",
    code : "WDD131",
    credits : 2,
    sections : [
        // brackets hold an array
        // this is an array of objects
        {
            sectionNum: 1,
            roomNum: "STC 353",
            enrolled: 26,
            days: "TTh",
            instructor: "Bro T"
        },

        {
            sectionNum: 2,
            roomNum: "STC 353",
            enrolled: 9,
            days: "MWF",
            instructor: "Brother Warner"
        }
    ],
    enrolled : function(sectionNumber) {
        console.log(this.name);
    }
}

console.log(aCourse.name);

aCourse.enrolled(1);

// event  listener when button is pressed
document.querySelector("#enrollStudent").addEventListener("click", (e) => {

    // when pressed find the section number they entered
    let sectionNumber = document.querySelector("#sectionNumber").value.trim();

    // increment the enrollment of that section by 1
    aCourse.sections.forEach(section => {
        // find the section they want to update
        if (section.sectionNum == sectionNumber) {
            section.enrolled += 1;
        }

        console.log(section.sectionNum);
        console.log(section.enrolled);
    });

    // re-render the table with updated data
    renderSections(aCourse.sections);
});

function sectionTemplate(section) {
    return `
        <tr>
            <td>${section.sectionNum}</td>
            <td>${section.roomNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.days}</td>
            <td>${section.instructor}</td>
        </tr>`
};

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
};

renderSections(aCourse.sections);
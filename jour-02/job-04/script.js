{/* <label for="student-mail">Email</label> */}
        {/* <input type="email" name="student-mail" id="student-mail" placeholder="Email ..."> */}
{/*  */}
        {/* <label for="student-fullname">Full name</label> */}
        {/* <input type="text" name="student-fullname" id="student-fullname" placeholder="Full name ..."> */}
{/*  */}
        {/* <label for="student-gender">Gender</label> */}
        {/* <select name="student-gender" id="student-gender"> */}
            {/* <option value="">--Please choose an option--</option> */}
            {/* <option value="male">Male</option> */}
            {/* <option value="female">Female</option> */}
        {/* </select> */}
{/*  */}
        {/* <label for="student-birthdate">Birthdate</label> */}
        {/* <input type="date" name="student-birthdate" id="student-birthdate" placeholder="Birthdate ..."> */}
{/*  */}
        {/* <label for="student-grade_id">Grade id</label> */}
        {/* <input type="number" name="student-grade_id" id="student-grade_id" placeholder="Grade id ..."> */}
{/*  */}
        {/* <input type="submit" name="submit-btn" id="submit-btn" value="Envoyer"></input> */}


// variables

const formRegister = document.forms['form-register'];
const displayer = document.getElementById('displayer');

const email = document.forms['form-register']['student-mail'];
const fullname = document.forms['form-register']['student-fullname'];
const gender = document.forms['form-register']['student-gender'];
const birthdate = document.forms['form-register']['student-birthdate'];
const grade_id = document.forms['form-register']['student-grade_id'];

async function myRegisterStudent(form){

    let formdata = new FormData(form);

    let res = await fetch('./request.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
        },
        body: formdata
    });

    let response = await res.json();

    return response;
}

formRegister.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    let response = await myRegisterStudent(formRegister);

    displayer.innerText = response;
    console.log(response);


})

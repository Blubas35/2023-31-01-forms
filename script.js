// let form = document.querySelector('form')

// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     console.log(event.target)

//     // let firstName = form.querySelector('#name').value
//     // let lastName = form.querySelector('[name=last-name]').value
//     // let age = form.querySelectorAll('[name=age]')[0]
//     // let color = document.getElementsByName('color')[0].value
//     // let date = document.getElementById('user-date')

// // lengviau selectinti
//     let firstName = event.target.['user-first-name'].value 
//     let lastName = event.target.['last-name'].value
//     let age = event.target.age.value


//     console.dir(firstName)
//     console.dir(lastName)
//     console.dir(age)
//     console.dir(color)
// })

// ANTRA DALIS:
// 1. Sukurti div elementą, kuris turės id „students-list".
// 2. Kiekvieną kartą pridavus formą (submit), turi būti sukurtas naujas div elementas su klase „student-item" ir pridedamas į „students-list" elemento pradžią.
// 3. Duomenys apie studentą turi būti įdėti į „student-item" elementą.

// 4. Formoje pridėti „checkbox" tipo input'ą, kuriame pateikta galimybę rinktis iš dominančių programavimo kalbų.

// 5. Dominančias programavimo kalbas atvaizduoti „student-item" elemente.

// 6. Sukūrus studentą, turi iššokti <span> elementas, kuris informuoja apie studento sukūrimą: „Sukurtas studentas (Vardas Pavardė)". Šis span elementas dingsta po 5 sekundžių.
// 7. Range reikšmės atvaizdavimas naujame elemente.

// TREČIA DALIS:
// 1. Vietoje el. pašto rodyti tik žvaigždutes „****".
// 2. Kiekviename „student-item" elemente sukurti mygtuką „Rodyti asmens duomenis".
// 3. Paspaudus šį mygtuką:
//     3.1. Parodyti to studento el. paštą.
//     3.2. Pakeist mygtuko tekstą į „Slėpti asmens duomenis".
// 4. Jeigu asmens duomenys yra rodomi, tai paspaudus mygtuką:
//     4.1. Paslėpti asmens el. paštą.
//     4.2. Mygtuko tekstą pakeisti į „Rodyti asmens duomenis".

// KETVIRTA DALIS (studento ištrynimas):
// 1. Prie kiekvieno sukurti studento elemento pridėti mygtuką „Ištrinti studentą".
// 2. Paspaudus šį mygtuką, studento elementas yra ištrinamas.
// 3. Ištrynus studentą, turi iššokti <span> elementas, kuris informuoja apie studento ištrynimą: „Studentas (Vardas Pavardė) sėkmingai ištrintas.". Šis span elementas dingsta po 5 sekundžių.

// PENKTA UŽDUOTIS (formos validacija naudojant JavaScript):
// 1. Priduodant formą (submit) patikrinti ar privalomi laukeliai nėra tušti.
// 2. Jeigu bent vienas privalomas formos laukelis yra tuščias:
//     2.1. Formos alert žinutėje reikia parašyti, jog ne visi laukeliai yra užpildyti. Šis tekstas turi būti raudonos spalvos.
//     2.2. Kiekvienas privalomas input laukelis, kuris nėra užpildytas:
//         2.2.1. Turi būti apvestas raudonu rėmeliu.
//         2.2.2. Šalia laukelio turi būti parašytas raudonas tekstas: „Šis laukelis yra privalomas".

// PAPILDOMA UŽDUOTIS (formos validacija naudojant JavaScript):
// Papildyti formos validaciją. Jeigu:
// 1. Vardas yra trumpesnis nei 3 simboliai, parašyti: „Vardas privalo būti bent 3 simbolių ilgumo".
// 2. Pavardė yra trumpesnė nei 3 simboliai, parašyti: „Pavardė privalo būti bent 3 simbolių ilgumo".
// 3. Amžius yra neigamas, parašyti: „Amžius privalo būti teigiamas skaičius".
// 4. Amžius yra daugiau nei 120 metų, parašyti: „Įvestas amžius yra per didelis".
// 5. Telefono numeris yra mažiau nei 9 arba daugiau nei 12 simbolių, parašyti: „Įvestas telefono numeris yra neteisingas".
// 6. Elektroninis paštas yra trumpesnis nei 8 simboliai ir jame nėra panaudotas @ ir . simboliai, parašyti: „Įvestas elektroninis paštas yra neteisingas".

// ŠEŠTA UŽDUOTIS:
// 1. Sukurti pradinius duomenų masyvą, kuriame būtų bent 5 studentų duomenys (objektų formatu).
// 2. Sukurti funkciją, kuri priima šiuos duomenis ir užkrovus puslapį į ekraną iškart išveda duomenis iš šio masyvo.

// SEPTINTA UŽDUOTIS:
// 1. Prie kiekvieno studento pridėti mygtuką, kurį paspaudus leistų redaguoti studento duomenis.
// 2. Redaguojant studentą, submit mygtuko tekstas turėtų pasikeisti į „Save Changes".
// 3. Pakeitus studento duomenis, turi iššokti <span> elementas, kuris informuoja apie studento duomenų redagavimą: „Studento (Vardas Pavardė) duomenys sėkmingai pakeisti". Šis span elementas dingsta po 5 sekundžių. 1. Sukurti Edit mygtuką.
// 2. Prie mygtuko pridėti event listener'į.
// 3. Surinkti studento duomenis ir jais užpildyti formos laukelius.
// 4. Pakeisti formos submit mygtuko tekstą.
// 5. Išsaugoti studento HTML elementą kintamąjame.
// 6. Submit event'o metu patikrinti ar kuriame naują studentą, ar redaguojame jau sukurtą.
// 7. Jeigu studentas redaguojamas, šį naują (redaguotą) HTML elementą panaudoti perrašant seną studento HTML elementą (kuris išsaugotas 5 žingsnyje). 8. Pakeisti formos submit mygtuko tekstą į pradinį ir pakeisti iššokančio pranešimo tekstą.

const inialData = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 25,
        phoneNumber: 370666666,
        email: 'john.doe@email.com',
        itKnowledge: 7,
        group: 'feu4',
        favouriteITLanguage: ['Pyhton', 'JavaScript', 'PHP'],
    },
];

function renderInitialData(students, form) {
    students.forEach(student => {
      renderSingleStudent(student, form);
    });
  }

// Romano versija per savatigali
function renderSingleStudent (student, form) {
    const studentName = student.firstName
    const studentSurname = student.lastName
    const studentAge = student.age
    const studentPhone = student.phoneNumber
    const studentEmail = student.email
    const studentItKnowledge = student.itKnowledge
    const studentGroup = student.group
    const studentInterests = student.favouriteITLanguage

    const studentItem = document.createElement('div')
    studentItem.classList.add('student-item')
    
    const studentNameElement = document.createElement('p')
    studentNameElement.innerHTML = `First name: ${studentName}`

    const studentSurnameElement = document.createElement('p')
    studentSurnameElement.innerHTML = `Last name: ${studentSurname}`

    const ageElement = document.createElement('p')
    ageElement.innerHTML = `Age: ${studentAge}`

    const phoneElement = document.createElement('p')
    phoneElement.innerHTML = `Phone number: ${studentPhone}`

    const emailElement = document.createElement('p')
    emailElement.innerHTML = `Email address: ${studentEmail}`

    const ItKnowledgeElement = document.createElement('p')
    ItKnowledgeElement.innerHTML = `Student knowledge rating: ${studentItKnowledge}`

    const radioElement = document.createElement('p')
    radioElement.innerHTML = `Student group: ${studentGroup}`

    const interestWrapper = document.createElement('div')
    interestWrapper.innerHTML = `Student group: ${studentInterests}`

    const interestTitle = document.createElement('p')
    interestTitle.className = 'interest-title'
    interestTitle.textContent = 'No interests :('

    interestWrapper.append(interestTitle)
    
    if (studentInterests.length > 0) {
        interestTitle.textContent = 'Student interests: '
        const favouriteITUl = document.createElement('ul')

        studentInterests.forEach(interest => {
            const favouriteITLi = document.createElement('li')
            favouriteITLi.textContent = interest.value

            favouriteITUl.append(interest)
        })

        interestWrapper.append(favouriteITUl)
    }

    const showCensored = document.createElement('button')
    showCensored.textContent = 'Show censored'

    let privateInfoHidden = true

    showCensored.addEventListener('click', () => {
        if (privateInfoHidden) {
            showCensored.textContent = 'Hide information'
            studentEmail.textContent = `Email address: ${email}`
            studentPhone.textContent = `Phone: ${phone}`
        } else {
            showCensored.textContent = 'Show censored'
            studentEmail.textContent = `Email address: ****`
            studentPhone.textContent = `Phone: ****`
        }
    })

    privateInfoHidden = !privateInfoHidden

    const deleteStudent = document.createElement('button')
    deleteStudent.textContent = 'Delete student'

    deleteStudent.addEventListener('click', () => {
        studentItem.remove()

        const deletedStudentMessage = `Student (${firstName} ${lastName}) successfully deleted`
        alert(form, deletedStudentMessage)
    })

    studentItem.append(studentNameElement, studentSurnameElement, ageElement, phoneElement, emailElement, ItKnowledgeElement, radioElement, interestWrapper, showCensored, deleteStudent)
    form.append(studentItem)
}



// function studentsData (inialData, place) {
//     let studentDataPlace = document.createElement('div')
//     place.append(studentDataPlace)

//     inialData.map(data => {
//         let placeHolderFirst = document.createElement('p')
//         placeHolderFirst.textContent = `First name: ${data.firstName}` 

//         let placeHolderLast = document.createElement('p')
//         placeHolderLast.textContent = `Last name: ${data.lastName}` 

//         let placeHolderAge = document.createElement('p')
//         placeHolderAge.textContent = `Age: ${data.age}` 

//         let placeHolderPhone = document.createElement('p')
//         placeHolderPhone.textContent = `Phone number: ${data.phoneNumber}` 

//         let placeHolderEmail = document.createElement('p')
//         placeHolderEmail.textContent = `Email address: ${data.email}` 

//         let placeHolderItKnowledge = document.createElement('p')
//         placeHolderItKnowledge.textContent = `Student knowledge: ${data.itKnowledge}` 

//         let placeHolderGroup = document.createElement('p')
//         placeHolderGroup.textContent = `Student group: ${data.group}` 

//         // let placeHolderfavItLanguage = document.createElement('p')
//         // placeHolderfavItLanguage.textContent = `Favourite IT language: ${data.favouriteITLanguage}` 

//         studentDataPlace.append(placeHolderFirst, placeHolderLast, placeHolderAge, placeHolderPhone, placeHolderEmail, placeHolderItKnowledge, placeHolderGroup)
//     })
// }


const form = document.querySelector('form')
let studentsList = document.querySelector('#students-list')

const itKnowledgeInput = document.querySelector('#it-knowledge')
const itKnowledgeOutput = document.querySelector('#it-knowledge-output')

itKnowledgeInput.addEventListener('input', (event) => {
    console.log(event.target.value)
    itKnowledgeOutput.textContent = event.target.value
})

// studentsData(inialData, studentsList)
renderInitialData(inialData, form);


form.addEventListener('submit', (event) => {
    event.preventDefault()

    const studentsList = document.querySelector('#students-list')

    const nameInput = event.target.firstName

    const firstName = nameInput.value
    const lastName = document.querySelector('#lastName').value
    const age = document.querySelector('#age').value
    const phone = document.querySelector('#phone').value
    const email = document.querySelector('#email').value
    const studentKnowledge = event.target['it-knowledge'].value
    
    const studentGroup = document.querySelector('input[type="radio"]:checked').value

    const favouriteIT = document.querySelectorAll('[name="interest"]:checked')

    const studentItem = document.createElement('div')
    studentItem.classList.add('student-item')
    
    const studentNameElement = document.createElement('h4')
    studentNameElement.className = 'full-name'

    const ageElement = document.createElement('h5')
    ageElement.className = 'age'

    const phoneElement = document.createElement('h5')
    phoneElement.className = 'phone'

    const emailElement = document.createElement('h5')
    emailElement.className = 'email'

    const skillsElement = document.createElement('h5')
    skillsElement.className = 'skills'

    const radioElement = document.createElement('h5')
    radioElement.className = 'radio'

    const checkboxElement = document.createElement('div')
    checkboxElement.className = 'checkbox'

    const interestTitle = document.createElement('h5')
    interestTitle.className = 'interest-title'
    interestTitle.textContent = 'No interests :('

    // const hidePersonalInfo = document.createElement('button')
    // hidePersonalInfo.textContent = 'Hide personal information'

    // function hidePersonalFunction () {
    //     hidePersonalInfo.addEventListener('click', () => {
    //         emailElement.textContent = 'Email address: ****'
    //         phoneElement.textContent = 'Phone: ****'
    //         hidePersonalInfo.remove()
    //         showPersonalFunction()
    //     })
    // }

    // function showPersonalFunction () {
    //     let showPersonalInfo = document.createElement('button')
    //     showPersonalInfo.textContent = 'Show personal information'
    //     studentItem.append(showPersonalInfo)
    //     showPersonalInfo.addEventListener('click', () => {
    //         phoneElement.textContent = `Phone:${phone}`
    //         emailElement.textContent = `Email address: ${email}`
    //         showPersonalInfo.remove()
    //         studentItem.append(hidePersonalInfo)
    //     })
    // }
    // hidePersonalFunction()

    let isInformationHidden = true

    const showCensored = document.createElement('button')
    showCensored.textContent = 'Show censored'
    showCensored.addEventListener('click', () => {
        if (isInformationHidden) {
            emailElement.textContent = `Email address: ${email}`
            phoneElement.textContent = `Phone: ${phone}`
            showCensored.textContent = 'Hide information'
            isInformationHidden = false
        } else {
            emailElement.textContent = `Email address: ****`
            phoneElement.textContent = `Phone: ****`
            showCensored.textContent = 'Show censored'
            isInformationHidden = true
        }
    })
    
    const deleteStudent = document.createElement('button')
    deleteStudent.textContent = 'Delete student'

    deleteStudent.addEventListener('click', () => {
        studentItem.remove()

        const deletedStudentMessage = `Student (${firstName} ${lastName}) successfully deleted`
        alert(event.target, deletedStudentMessage)
    })


    function alert (element, message, color = 'black') {
        const previousMessageElement = document.querySelector('.popup-info-message')
        if (previousMessageElement) {
            previousMessageElement.remove()
        }

        const successSubmit = document.createElement('span')
        successSubmit.textContent = message
        successSubmit.style.color = color
        successSubmit.classList.add('popup-info-message')
        element.append(successSubmit)

        setTimeout(function(){
            successSubmit.remove()
        }, 5000)
    }

    let createdStudentMessage = `Student (${firstName} ${lastName}) submitted successfully`
    alert(event.target, createdStudentMessage)

    let formIsValid = true



    const inputErrorMessage = event.target.querySelectorAll('.input-error-message')
    inputErrorMessage.forEach(errorMessage => errorMessage.remove())
    
    const requiredInputs = event.target.querySelectorAll('input:required')

    requiredInputs.forEach(requiredInput => {
        
        requiredInput.classList.remove('input-error')

        let error = false

        if (!requiredInput.value) {
            message = 'field required'
            requiredInput.classList.add('input-error')
            alert(event.target, 'Ne visi laukeliai yra uzpildyti.', 'red')
            formIsValid = false
            error = true
        } 

        if (requiredInput.name === 'first-name') {
            if (requiredInput.value.length > 0 && requiredInput.value.length < 3) {
                message = 'First name must contain at least 3 characters'
                error = true
            }
        }
        if (requiredInput.name === 'last-name') {
            if (requiredInput.value.length > 0 && requiredInput.value.length < 3) {

                message = 'Last name must contain at least 3 characters'
                error = true
            }
        }
        if (requiredInput.name === 'age') {
            if (requiredInput.valueAsNumber < 0) {
                message = 'Amžius privalo būti teigiamas skaičius'
                error = true
            } else if (requiredInput.valueAsNumber > 120) {
                message = 'Įvestas amžius yra per didelis'
                error = true
            }
        }
        if (requiredInput.name === 'phone') {
            let phoneLength = requiredInput.value.replaceAll(' ', '').length
            if (phoneLength > 0 && phoneLength < 9 || phoneLength > 12) {
                message = 'Įvestas telefono numeris yra neteisingas'
                error = true
            }
        }
        if (requiredInput.name === 'email') {
            if (requiredInput.value.length > 0 && requiredInput.value.length < 8) {
                message = 'Įvestas elektroninis paštas yra neteisingas'
                error = true
            } else if (requiredInput.value.length > 0 && (!requiredInput.value.includes('@') || !requiredInput.value.includes('.'))) {
                message = 'Įvestas elektroninis paštas yra neteisingas'
                error = true
            }
        }
        if (error) {
            const inputErrorMessage = document.createElement('span')
            inputErrorMessage.classList.add('input-error-message')
            inputErrorMessage.textContent = message
            requiredInput.after(inputErrorMessage)
            formIsValid = false
        }

    })

    if(!formIsValid) {
        return
    }
    
    function itLanguages () {
        if (favouriteIT.length > 0) {
            interestTitle.textContent = 'Student interests: '
            const favouriteITUl = document.createElement('ul')
    
            favouriteIT.forEach(interest => {
                const favouriteITLi = document.createElement('li')
                favouriteITLi.textContent = interest.value
    
                favouriteITUl.append(favouriteITLi)
            })
    
            checkboxElement.append(interestTitle, favouriteITUl)
        } else {
            checkboxElement.append(interestTitle)
        }
    }
    itLanguages()

    studentItem.append(studentNameElement, ageElement, phoneElement, emailElement, skillsElement, radioElement, checkboxElement, showCensored, deleteStudent)

    studentsList.prepend(studentItem)

    studentNameElement.textContent = `Student name: ${firstName} ${lastName}`
    ageElement.textContent = `Age: ${age}`
    phoneElement.textContent = `Phone: ****`
    emailElement.textContent = `Email address: ****`
    skillsElement.textContent = `Skills level: ${studentKnowledge}`
    radioElement.textContent = `Selected group: ${studentGroup}`

    event.target.reset()
})



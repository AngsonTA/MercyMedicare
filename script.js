const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('toggle-menu'),
    closeMenu = document.getElementById('close-menu')



    toggleMenu.addEventListener('click',()=>{
        navMenu.classList.toggle('show_menu')
    })


    closeMenu.addEventListener('click',()=>{
        navMenu.classList.remove('show_menu')
    })



// query for side emergency text starts here

var timeout;

$(document).ready(function() {
  $(window).scroll(function() {
    clearTimeout(timeout);
    
    $('.right-items').css('right', '-100px'); // Hide items
    
    timeout = setTimeout(function() {
      $('.right-items').css('right', '0'); // Show items
    }, 500); // Set the delay before showing the items
  });
});


// query for side emergency text ends Here




const doctorsByDepartment = {
  cardiology: [
    { name: 'Dr. Smith', id: 'dr-smith-cardiology' },
    { name: 'Dr. Johnson', id: 'dr-johnson-cardiology' },
    // Add more cardiology doctors
  ],
  dermatology: [
    { name: 'Dr. White', id: 'dr-white-dermatology' },
    { name: 'Dr. Brown', id: 'dr-brown-dermatology' },
    // Add more dermatology doctors
  ],
  orthopedics: [
    { name: 'Dr. Miller', id: 'dr-miller-orthopedics' },
    { name: 'Dr. Davis', id: 'dr-davis-orthopedics' },
    // Add more orthopedics doctors
  ],
  internalmedicine: [
    { name: 'Dr. Martinez', id: 'dr-martinez-internalmedicine' },
    { name: 'Dr. Wilson', id: 'dr-wilson-internalmedicine' },
    // Add more internal medicine doctors
  ],
  pediatrics: [
    { name: 'Dr. Johnson', id: 'dr-johnson-pediatrics' },
    { name: 'Dr. Anderson', id: 'dr-anderson-pediatrics' },
    // Add more pediatrics doctors
  ],
  neurology: [
    { name: 'Dr. Brown', id: 'dr-brown-neurology' },
    { name: 'Dr. Lewis', id: 'dr-lewis-neurology' },
    // Add more neurology doctors
  ]
};

function updateDoctors() {
  const departmentSelect = document.getElementById('department');
  const doctorSelect = document.getElementById('doctor');
  const selectedDepartment = departmentSelect.value;

  doctorSelect.innerHTML = '<option value="" disabled selected>Select Doctor</option>';

  if (selectedDepartment && doctorsByDepartment[selectedDepartment]) {
    doctorsByDepartment[selectedDepartment].forEach(doctor => {
      const option = document.createElement('option');
      option.value = doctor.id;
      option.textContent = doctor.name;
      doctorSelect.appendChild(option);
    });
  }
}
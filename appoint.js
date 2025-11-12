document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('appointmentForm');
    const bookingCard = document.getElementById('bookingForm');
    const confirmationCard = document.getElementById('confirmationCard');
    const appointmentDetails = document.getElementById('appointmentDetails');
    const bookAnother = document.getElementById('bookAnother');
    const dateInput = document.getElementById('date');
    const timeSlotSelect = document.getElementById('timeSlot');

    // Set min date to today and max date to 2 months from now
    const today = new Date();
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 2);
    dateInput.min = today.toISOString().split('T')[0];
    dateInput.max = maxDate.toISOString().split('T')[0];

    // Populate time slots
    const timeSlots = [
        '09:00 AM', '10:00 AM', '11:00 AM',
        '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
        '07:00 PM', '08:00 PM', '09:00 PM'
    ];
    timeSlots.forEach(slot => {
        const option = document.createElement('option');
        option.value = slot;
        option.textContent = slot;
        timeSlotSelect.appendChild(option);
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const appointmentType = document.getElementById('appointmentType').value;
        const date = document.getElementById('date').value;
        const timeSlot = document.getElementById('timeSlot').value;

        if (name.length < 2 || !email.includes('@') || phone.length < 10 || !appointmentType || !date || !timeSlot) {
            alert('Please fill out all fields correctly.');
            return;
        }

        // Display confirmation
        bookingCard.style.display = 'none';
        confirmationCard.style.display = 'block';
        appointmentDetails.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Specailist:</strong> ${appointmentType}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${timeSlot}</p>
        `;
    });

    bookAnother.addEventListener('click', function() {
        form.reset();
        confirmationCard.style.display = 'none';
        bookingCard.style.display = 'block';
    });
});
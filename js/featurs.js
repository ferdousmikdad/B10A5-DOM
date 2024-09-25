// Toggle button for Donation Section
document.getElementById('btnShowDonation')
    .addEventListener('click', function () {
        showSectionById('donationSection', 'btnShowDonation', 'btnShowHistory'); 
    });

// Toggle button for History Section
document.getElementById('btnShowHistory')
    .addEventListener('click', function () {
        showSectionById('historySection', 'btnShowHistory', 'btnShowDonation');  
    });

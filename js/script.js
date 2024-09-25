
// Close modal functionality
document.getElementById('closeModal').addEventListener('click', function() {
    closeModal('donationModal');
});

// Implemented validation for Noakhali donation process
document.getElementById('btn-noakhali-donation').addEventListener('click', function(event) {
    event.preventDefault();

    const donationAmount = getInputFieldValueById('input-field-noakhali');
    const accountBalance = getBalanceTextById('account-balance');
    const donationBalance = getBalanceTextById('noakhali-balance');

    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert("Please enter a valid donation amount greater than 0.");
        return;
    }

    if (donationAmount > accountBalance) {
        alert("Donation amount exceeds account balance.");
        return;
    }

    // Update balances
    setNewBalanceById('noakhali-balance', donationAmount, donationBalance);
    decreaseAccountBalanceById('account-balance', donationAmount);

    addHistory('historySection', donationAmount, " to the Noakhali Flood Relief initiative.");

    showModal('donationModal', 'Congrats!', 'You have Donated for Noakhali Successfully');
});


// Implemented validation for Feni donation process
document.getElementById('btn-feni-donation').addEventListener('click', function(event) {
    event.preventDefault();

    const donationAmount = getInputFieldValueById('input-field-feni');
    const accountBalance = getBalanceTextById('account-balance');
    const donationBalance = getBalanceTextById('feni-balance');

    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert("Please enter a valid donation amount greater than 0.");
        return;
    }

    if (donationAmount > accountBalance) {
        alert("Donation amount exceeds account balance.");
        return;
    }

    // Update balances
    setNewBalanceById('feni-balance', donationAmount, donationBalance);
    decreaseAccountBalanceById('account-balance', donationAmount);

    addHistory('historySection', donationAmount, " to the Feni Flood Relief initiative.");

    showModal('donationModal', 'Congrats!', 'You have Donated for Feni Successfully');
});


// Implemented validation for Quota Movement
document.getElementById('btn-quota-donation').addEventListener('click', function(event) {
    event.preventDefault();

    const donationAmount = getInputFieldValueById('input-field-quota');
    const accountBalance = getBalanceTextById('account-balance');
    const donationBalance = getBalanceTextById('quota-balance');

    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert("Please enter a valid donation amount greater than 0.");
        return;
    }

    if (donationAmount > accountBalance) {
        alert("Donation amount exceeds account balance.");
        return;
    }

    // Update balances
    setNewBalanceById('quota-balance', donationAmount, donationBalance);
    decreaseAccountBalanceById('account-balance', donationAmount);

    addHistory('historySection', donationAmount, "for the injured in the Quota Movement.");

    showModal('donationModal', 'Congrats!', 'Donation for Quota Movement injured successful');
});
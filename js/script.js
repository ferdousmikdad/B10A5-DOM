
// Close modal functionality
document.getElementById('closeModal').addEventListener('click', function() {
    closeModal('donationModal');
});

// Donation for Noakhali
document.getElementById('btn-noakhali-donation').addEventListener('click', function(event) {
    event.preventDefault();

    const donationAmount = getInputFieldValueById('input-field-noakhali');
    const accountBalance = getBalanceTextById('account-balance'); // Corrected to get the balance, not decrease it.
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
    decreaseAccountBalanceById('account-balance', donationAmount); // Corrected to pass donationAmount

    // Add donation to history
    addHistory('historySection', donationAmount, "Noakhali Flood Relief initiative.");

    // Show the modal instead of alert
    showModal('donationModal', 'Congrats!', 'You have Donated for Noakhali Successfully');
});

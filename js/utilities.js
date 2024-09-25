// Navigation Buttons for Home and Blog Pages -----------
function navigateToPage(page) {
    window.location.href = page;
}

// Toggle Button -----------
function showSectionById(sectionId, activeBtnId, inactiveBtnId) {
    // Hide both sections first
    document.getElementById('donationSection').classList.add('hidden');
    document.getElementById('historySection').classList.add('hidden');

    // Show the selected section
    document.getElementById(sectionId).classList.remove('hidden');

    // Activate the selected button
    document.getElementById(activeBtnId).classList.add('bg-primary');
    document.getElementById(activeBtnId).classList.remove('bg-inherit');

    // Deactivate the other button
    document.getElementById(inactiveBtnId).classList.add('bg-inherit');
    document.getElementById(inactiveBtnId).classList.remove('bg-primary', 'text-white');
}

// Donation Function ---------
// Get Input Value
function getInputFieldValueById(id) {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    const inputNumber = parseFloat(inputFieldValue);
    inputField.value = '';

    return inputNumber;
}

// Get Balance Value
function getBalanceTextById(id) {
    const amountText = document.getElementById(id);
    const amountTextValue = amountText.innerText;
    const amountNumber = parseFloat(amountTextValue);

    return amountNumber;
}

// Set New Balance
function setNewBalanceById(id, donationAmount, donationBalance) {
    const donationField = document.getElementById(id);
    const newBalance = donationAmount + donationBalance;
    donationField.innerText = newBalance;
}

// Decrease Account Balance
function decreaseAccountBalanceById(id, donationAmount) {
    const accountBalance = document.getElementById(id);
    const accountBalanceValue = accountBalance.innerText;
    const accountBalanceNumber = parseFloat(accountBalanceValue);

    const newBalance = accountBalanceNumber - donationAmount;
    accountBalance.innerText = newBalance;
}


// Add History -----------
function addHistory(id, donationAmount, donationTitle) {
    const historySectoin = document.getElementById(id);
    const div = document.createElement('div');
    div.className = "p-4 border border-gray-300 hover:border-primary rounded-lg mb-2";

    const h3 = document.createElement('h3');
    h3.innerText = `${donationAmount} BDT is donated to the ${donationTitle}`;
    h3.className = "mb-2 text-xl font-bold";
    div.appendChild(h3);

    const p = document.createElement('p');
    p.innerText = new Date();
    div.appendChild(p);

    historySectoin.prepend(div);
}

// Show the modal by its ID with dynamic content
function showModal(modalId, heading, message) {
    const modal = document.getElementById(modalId);
    
    // Update the modal content
    modal.querySelector('#modal-heading').innerText = heading;
    modal.querySelector('p').innerText = message;
    
    modal.classList.remove('hidden'); 
    modal.showModal(); 
}

// Close modal functionality
document.getElementById('closeModal').addEventListener('click', function() {
    const modal = document.getElementById('donationModal');
    modal.close(); 
});

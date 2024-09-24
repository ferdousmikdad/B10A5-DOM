// Navigation Button
function navigateToPage (page) {
    window.location.href = page;
}


// Toggle button
function showSectionById(sectionId, activeBtnId, inactiveBtnId) {
    document.getElementById('donationSection').classList.add('hidden');
    document.getElementById('historySection').classList.add('hidden');

    document.getElementById(sectionId).classList.remove('hidden');

    document.getElementById(activeBtnId).classList.add('bg-primary');
    document.getElementById(activeBtnId).classList.remove('bg-inherit');

    document.getElementById(inactiveBtnId).classList.add('bg-inherit' );
    document.getElementById(inactiveBtnId).classList.remove('bg-primary', 'text-white');
}


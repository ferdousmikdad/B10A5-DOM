document.getElementById('btn-noakhali-donation')
    .addEventListener('click', function(event){
        event.preventDefault();

    const inputValueNoakhali = getInputFieldValueById('input-field-noakhali');
    const noakhaliBalance = getBalanceTextById('noakhali-balance');
    const noakhaliNewBalance = noakhaliBalance + inputValueNoakhali;

    document.getElementById('noakhali-balance').innerText = noakhaliNewBalance;

})
const saveButton = document.getElementsByClassName('add-button');
    saveButton.addEventListener('click', () => {
        saveCheckboxStates();
        alert('課題を登録しました');
    });
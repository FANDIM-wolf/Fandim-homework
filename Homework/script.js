const selectMenu = document.querySelector('.select_menu');

selectMenu.addEventListener('change', function() {
    const selectedOption = this.options[this.selectedIndex];
    const selectedValue = selectedOption.value;
    const selectedText = selectedOption.text;
    
    // Действия при выборе опции
    console.log('Выбрано значение: ' + selectedValue);
    console.log('Выбран текст: ' + selectedText);
});
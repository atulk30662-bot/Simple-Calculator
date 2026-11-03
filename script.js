const display = document.getElementById('display');

function appendValue(value) {
    if (display.value === '0' || display.value === 'Error') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '0';
}

function deleteLast() {
    if (display.value.length > 0 && display.value !== '0' && display.value !== 'Error') {
        display.value = display.value.slice(0, -1);
        if (display.value === '') {
            display.value = '0';
        }
    }
}

function calculate() {
    try {
        if (display.value !== '' && display.value !== '0') {
            // eval() गुणा और भाग को सही से कैलकुलेट करेगा
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = 'Error';
    }
}
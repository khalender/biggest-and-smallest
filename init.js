window.onload = () => {
    // render initial state
    document.getElementById('input').value = numbers.current;
    document.getElementById('biggest').innerHTML = numbers.biggest;
    document.getElementById('smallest').innerHTML = numbers.smallest;

    // log initial state
    const copyOfState = JSON.parse(JSON.stringify(numbers));
    log.push({
        initialNumbers: copyOfState
    });
}
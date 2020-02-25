function resetHandler() {
    // reset state to initial values
    numbers.current = numbers.all[0].current;
    numbers.biggest = numbers.all[0].biggest;
    numbers.smallest = numbers.all[0].smallest;

    numbers.all = [];
    // re-render UI with values saved in state
    document.getElementById("input").value = numbers.current;
    document.getElementById("biggest").innerHTML = numbers.biggest;
    document.getElementById("smallest").innerHTML = numbers.smallest;
    // log interaction: handler name, new state
    log.push({
        handler: 'reset',
        numbers: JSON.parse(JSON.stringify(numbers))
    })

}
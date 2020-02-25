function saveNumberHandler() {
    // read new number from user input
    let newInput = Number(document.getElementById("input").value);
    // read from state the data you will need for the next step
    prev = {...numbers };
    // find the new biggest and smallest values
    // update state: new biggest, new smallest, new current & save the last current
    numbers.current = newInput;
    numbers.biggest = prev.biggest < newInput ? newInput : prev.biggest;
    numbers.smallest = prev.smallest > newInput ? newInput : prev.smallest;
    numbers.all.push({ current: prev.current, biggest: prev.biggest, smallest: prev.smallest });

    // re-render the user interface with values stored in state
    document.getElementById("biggest").innerHTML = numbers.biggest;
    document.getElementById("smallest").innerHTML = numbers.smallest;

    // log user interaction: handler name, user input, new state

    log.push({
        handler: 'save number',
        newInput,
        numbers: JSON.parse(JSON.stringify(numbers))
    })

    document.getElementById("log").innerHTML = numbers.all.map(x => `<div class='sublog'><span> ${x.current}</span> <span> ${x.biggest}</span><span> ${x.smallest}</span></div> `).join('');


}
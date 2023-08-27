// File: M2-01.js

"use strict";

function main()
{
    const rose = 8;
    const lily = 10;
    const tulip = 2;
    let total = 0;
    let msg = "";
    let l = lines();
    
    msg = "Rose. unit price: " + rose + ", quantity: 70, value: " + (rose * 50);
    emit(msg, l[0]);
    cl(msg);

    msg = "Lily. unit price: " + lily + ", quantity: 50, value: " + (lily * 20);
    emit(msg, l[1]);
    cl(msg);

    msg = "Tulip. unit price: " + tulip + ", quantity: 120, value: " + (tulip * 120);
    emit(msg, l[2]);
    cl(msg);

    total = (rose * 50) + (lily * 20) + (tulip * 120);
    msg = "Total: " + total;
    emit(msg, l[3]);
    cl(msg);

    return;
}

function lines() {
    let lines = ['l0','l1','l2','l3','l4','l5','l6','l7','l8','l9'];
    return lines;
}

function emit(message, line) {
    document.getElementById(line).innerHTML = message;
    return;
}

function cl(param) {
    console.log(param);
    return;
}

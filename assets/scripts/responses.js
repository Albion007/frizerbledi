function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "Pershendetje") {
        return "Përshëndetje! Si mund të ju ndihmojë?";

    } else if (input == "Hi") {
        return "Përshëndetje! Si mund të ju ndihmojë?!";

    } else if (input == "Hello") {
        return "Përshëndetje! Si mund të ju ndihmojë?!";

    } else if (input == "pershendetje") {
        return "Përshëndetje! Si mund të ju ndihmojë?!";
    
    } else if (input == "Qysh je?") {
        return "Mirë faleminderit, ju si jeni?";

    } else if (input == "qysh je") {
        return "Mirë faleminderit! Ju si jeni?";

    } else if (input == "Si je?") {
        return "Mirë faleminderit, ju si jeni?";

    } else if (input == "Mire") {
        return "Gëzohem që jeni mirë!";

    } else if (input == "mire") {
        return "Gëzohem që jeni mirë!";

    } else if (input == "Si po kaloni?") {
        return "Mirë, po ju?";

    } else if (input == "si po kaloni") {
        return "Mirë, po ju?";
    
    } else if (input == "Pune te mbare") {
        return "SHIHEMI! Faleminderit që na kontaktuat. Ju mirëpresim!";

    } else if (input == "Sa kushton nje qethje?") {
        return "Faleminderit që na kontaktuat. Prerje dhe formim floku 2 euro, Stylist Shaving vetëm 1 euro, Ngjyrë flokëve & Larje 3 euro dhe të gjitha çmimet tjera mund t'i gjeni tek menyja <b>çmimet</b> Ju mirëpresim!";
    
    } else if (input == "sa kushton nje qethje?") {
        return "Faleminderit që na kontaktuat. Prerje dhe formim floku 2 euro, Stylist Shaving vetëm 1 euro, Ngjyrë flokëve & Larje 3 euro dhe të gjitha çmimet tjera mund t'i gjeni tek menyja <b>çmimet</b> Ju mirëpresim!";
    
    } else if (input == "A mundesh me mi tregu cmimet?") {
        return "Faleminderit që na kontaktuat. Prerje dhe formim floku 2 euro, Stylist Shaving vetëm 1 euro, Ngjyrë flokëve & Larje 3 euro dhe të gjitha çmimet tjera mund t'i gjeni tek menyja <b>çmimet</b> Ju mirëpresim!";

    } else if (input == "pune te mbare") {
        return "SHIHEMI! Faleminderit që na kontaktuat";

    } else if (input == "Kaloni mire") {
        return "Gjithashtu! SHIHEMI! Faleminderit që na kontaktuat";

    } else if (input == "A ka zbritje") {
        return "Jo, zbritje nuk ka, por shërbim cilësor kemi! Faleminderit!";

    } else if (input == "a ka zbritje") {
        return "Jo, zbritje nuk ka, por shërbim cilësor kemi! Faleminderit!";
    
    } else {
        return "Ju mund të më pyesni gjithçka rreth shërbimeve tona!";
    }
}
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
    
    } else if (input == "Pune te mbare") {
        return "SHIHEMI! Faleminderit që na kontaktuat. Ju mirëpresim!";
    
    } else if (input == "Pune te mbare") {
        return "SHIHEMI! Faleminderit që na kontaktuat";

    } else if (input == "pune te mbare") {
        return "SHIHEMI! Faleminderit që na kontaktuat";
    
    } else {
        return "Ju mund të më pyesni gjithçka rreth shërbimeve tona!";
    }
}
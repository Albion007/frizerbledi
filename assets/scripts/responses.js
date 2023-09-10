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
    
    } else if (input == "Pune te mbare") {
        return "SHIHEMI! Faleminderit që na kontaktuat. Ju mirëpresim!";
    
    } else if (input == "Pune te mbare") {
        return "SHIHEMI! Faleminderit që na kontaktuat";
    
    } else {
        return "Më pyet rreth shërbimeve tona!";
    }
}
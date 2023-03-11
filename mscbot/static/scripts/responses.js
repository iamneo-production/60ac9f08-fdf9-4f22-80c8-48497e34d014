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
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } 
    else if (input == "What is the meaning of STEM courses?") {
        return "STEM stands for science, technology, engineering, mathematics";
    } 
    else if (input == "Is the mentor available now?") {
        return "YES!";
    } 
    else if (input == "WIll the scholarships be provided?") {
        return "Yes";
    } 
    else if (input == "What is the fee for a course?") {
        return "It depends on the course choosen!";
    } 
    else if (input == "How to reset password?") {
        return "Mail your queries to abc123@gmail.com";
    } 
    else if (input == "goodbye") {
        return "Talk to you later!";
    } 
    else if (input == "bye") {
        return "Talk to you later!";
    } 
    else if (input == "What is the significance of STEM courses?") {
        return "STEM education is important to develop skills and concepts among the students. It focuses on skill-based learning unlike the traditional methods of learning which were focused on memorization techniques. It makes the students employable in the companies and organizations.";
    } 
    else if (input == "Why should i take up STEM courses?") {
        return "STEM offers students the ability to work with the latest technologies and find innovative solutions for real-world problems. You might find new cures for mysterious diseases. Learn from people who are passionate about what they do.";
    } 
    else if (input == "Thank you!") {
        return "Welcome!";
    } 
    else {
        return "Try asking something else!";
    }
}
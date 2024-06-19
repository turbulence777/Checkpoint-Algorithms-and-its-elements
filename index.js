function analyzeSentence(sentence) {
    // Initialize counters
    let charCount = 0;
    let wordCount = 0;
    let vowelCount = 0;

    // Iterate through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        // Increment character count
        charCount++;

        // Check if current character is a vowel
        if (isVowel(sentence[i])) {
            vowelCount++;
        }

        // Check if current character is a space (indicating word boundary)
        if (sentence[i] === ' ') {
            wordCount++;
        }
    }

    // Increment word count for the last word (since it doesn't have a space after it)
    wordCount++;

    // Output results
    console.log("Length of the sentence:", charCount);
    console.log("Number of words in the sentence:", wordCount);
    console.log("Number of vowels in the sentence:", vowelCount);
}

// Function to check if a character is a vowel
function isVowel(char) {
    return 'aeiouAEIOU'.indexOf(char) !== -1;
}

// Example usage
analyzeSentence("This is a sample sentence."); // You can replace this sentence with any other sentence for testing
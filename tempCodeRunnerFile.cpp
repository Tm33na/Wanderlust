// Header Files
#include<iostream>
#include<string>
#include<vector>
#include<cstring> // Added this line
using namespace std;

// Function to find the lost character
char lostCharNW(string stringSent, string stringRec) {
    // Convert strings to character arrays
    char sentArr[stringSent.length()];
    char recArr[stringRec.length()];

    // Copy strings to character arrays
    strcpy(sentArr, stringSent.c_str());
    strcpy(recArr, stringRec.c_str());

    // Initialize an empty hash table to store character counts
    int charCount[256] = {0}; // Assuming ASCII characters

    // Count characters in sentArr
    for (int i = 0; i < stringSent.length(); i++) {
        charCount[sentArr[i]]++;
    }

    // Decrement counts in recArr
    for (int i = 0; i < stringRec.length(); i++) {
        charCount[recArr[i]]--;
    }

    // Find missing character
    for (int i = 0; i < 256; i++) {
        if (charCount[i] == 1) {
            return (char)i;
        }
    }

    // If no missing character is found, return NULL
    return '\0';
}

int main() {
    // Input for stringSent
    string stringSent;
    cout << "Enter the sent string: ";
    getline(cin, stringSent);

    // Input for stringRec
    string stringRec;
    cout << "Enter the received string: ";
    getline(cin, stringRec);

    // Find the lost character
    char result = lostCharNW(stringSent, stringRec);

    // Print the result
    if (result != '\0') {
        cout << "The lost character is: " << result << endl;
    } else {
        cout << "No lost character found." << endl;
    }

    return 0;
}

const express = require('express');
const natural = require('natural');
const path = require('path');

const app = express();
const port = 3000;

// Create a tokenizer and classifier
const tokenizer = new natural.WordTokenizer();
const classifier = new natural.BayesClassifier();

// Add training data
classifier.addDocument('Get cheap meds now', 'spam');
classifier.addDocument('Congratulations! You won a lottery', 'spam');
classifier.addDocument('Hello, I hope you are doing well', 'not spam');
classifier.addDocument('Meeting rescheduled to tomorrow', 'not spam');
classifier.addDocument('Less noise. More signal. That’s why we created Advanced Source Controls. You can now'+

'Filter web results: choose specific websites you want to search'+
'Block unwanted domains: remove irrelevant websites'+
'Customize search depth:'+
'Quick: perfect for initial research'+
'Deep: comprehensive analysis and in-depth research'+
'Dynamic: for a balanced approach'+
'Turn off web results: ideal for creative writing'+
'Combine source controls with all our top LLMs – including the upgraded Claude 3.5 Sonnet, already available on You.com. To access web controls, just select the "+" sign in the query bar and select "Web Access".', 'spam');
classifier.addDocument('Hello Vorsv'+
'In the coming weeks, Google Play will launch new personalization options that give you more seamless control of your personalization preferences and allow you to better manage your data in Play'+
'Personalization provides a richer experience in the Play store, helping you discover exciting games, useful apps, relevant offers and much more, all of which is tailored to you. Learn more about personalizing your Google Play Store experience'+
'Once available, these new features - alongside existing Play personalization controls - will be easily accessible by visiting Personalization in Play from the Google Play Store menu. This new destination will be a one-stop-shop for tailoring your personalization preferences in Play, giving you a more powerful way to:'+

'•	Manage all of your personalization options on Google Play and easily view activity and access personalization controls'+
'•	Choose which apps, books or other library items are used to personalize your Google Play experience. With one click you will be able to exclude use of Play data associated with that app for personalization in Play. Some examples of data that would be excluded for that app would include when you install or uninstall it, purchases that you make in it and your app activity. Learn more about new personalization options'+
'With these enhanced controls you can ensure that you have a better Play experience that is personalized to you and continues to respect your privacy preferences.'+
'Should you have any questions please visit our Help Center or get in touch.'+
'Thank you for using Google Play!', 'spam');
classifier.addDocument('Ask-AI allows you to access the collective knowledge of all of humanity and apply it to your study questions. Mindblowing, right? Try asking for help with: Practice Questions"Explain how the Industrial Revolution transformed society", Simplifying a Topic“Explain photosynthesis as if I was 5 years old”, Kickstarting Creativity"Write a short story based on the life of a lamp post", Essay Structuring“Create the structure for an essay on...” We use OpenAI\'s ChatGPT and constantly optimise the output based on feedback from other students, ensuring you get the right blend of artificial and human intelligence. It\'s kind of like your personal tutor who doesn\'t sleep. You\'ll also be able to read all of the questions that your classmates are asking, so yall can all grow smarter together!', 'spam');
classifier.addDocument('Studocu is where 70M+ students love to: Access 20M+ of the world\'s best study documents, Create Studylists to better prepare for exams, Ask AI for help on your study problems, Get unlimited access to & downloads of the best study materials with Studocu Premium. So what are you\' waiting for?', 'spam');
classifier.addDocument('Congratulations! You won a lottery', 'spam');
classifier.addDocument('Hi, A new face or fingerprint model was added on IQOO I2127 and a purchase was recently made through Google Play using the device. As a reminder, if you have chosen biometrics as your verification method, all biometrics stored on your device can be used to verify purchases made on Google Play. You can remove any face or fingerprint models stored on your device anytime. If you use biometrics for purchase verification, use caution in storing biometrics of children or others on your device, as those could be used for purchase verification. You can change your purchase verification settings anytime in Google Play.', 'spam');
classifier.addDocument('Dear Shareholder, Greetings from GAIL (India) Limited. The Board of Directors of the Company in its meeting held on 5th November, 2024 inter-alia approved the Unaudited Financial Results (Standalone & Consolidated) of the Company for the quarter and half year ended 30th September 2024. You may click on the link below to access the results', 'not spam');
classifier.addDocument('Dear Customer, Thank you for choosing Amazon Pay! To improve your experience, complete a short survey (2 minutes): https://amazonexteu.qualtrics.com/jfe/form/SV_72Odl4QzykU4DNc?CID=PayShop44_619096 (copy & paste if unclickable). Need help? Visit our 24/7 Help department: http://www.amazon.in/help. Thanks, Amazon Pay Team', 'spam');
classifier.addDocument('Dear Vijay Rajan Manraj, Pantech E-Bytes - FREE Workshop Series from Pantech E-Learning is back with a BANG! We announce the schedule of the Free Workshop Series - PANTECH E-Bytes. Technologies chosen to Leverage & hone your skills. Trending & sought-after technologies: Topic: NVIDIA\'s Jetson in IoT | Date: 9th November 2024 | Time: 04:00 PM - 05:00 PM Reg Link - https://forms.gle/DwRABEjLaiBbVRNk7 Join the whatsapp group - https://chat.whatsapp.com/DNTdAKpvKF802SmQI5NePX Medium: YOUTUBE LIVE (PANTECH E LEARNING CHANNEL). Subscribe for workshop notifications. Attendance Links will be posted on Channel. LIVE SESSION. Free E-certificates for College/Institution & Pantech E-Learning. HAPPY LEARNING! Event Co-Ordinator | 8925533488 Pantech E Learning!', 'spam');
classifier.addDocument('Recovery phone was changed vorsv24@gmail.com The recovery phone for your account was changed. If you didn\'t change it, you should check what happened.', 'not spam');
classifier.addDocument('Hey, M! Start your Jupiter experience on a rewarding note with your Edge CSB Bank RuPay Credit Card. You can scan any QR and make UPI payments with this credit card. Earn assured cashback on every spend! Apply now and get up to ₹7,00,000 credit limit in just 2 minutes.', 'not spam');
classifier.addDocument('Hi Vorsv, let\'s get you started with online coding. We always strive to provide the best user experience. Therefore, HackerEarth provides you with a quick onboarding process to help you get started with our online coding platform. Start coding. Happy Coding! Regards, Team HackerEarth', 'not spam');
classifier.addDocument('Hello, We’ve found the best prices available for 1-week trips in February, from Chennai to New Delhi.','not spam')
classifier.addDocument('Meeting rescheduled to tomorrow', 'not spam');
classifier.addDocument('Less noise. More signal. That’s why we created Advanced Source Controls. You can now'+

'Filter web results: choose specific websites you want to search'+
'Block unwanted domains: remove irrelevant websites'+
'Customize search depth:'+
'Quick: perfect for initial research'+
'Deep: comprehensive analysis and in-depth research'+
'Dynamic: for a balanced approach'+
'Turn off web results: ideal for creative writing'+
'Combine source controls with all our top LLMs – including the upgraded Claude 3.5 Sonnet, already available on You.com. To access web controls, just select the "+" sign in the query bar and select "Web Access".', 'spam');
classifier.addDocument('Hello Vorsv'+
'In the coming weeks, Google Play will launch new personalization options that give you more seamless control of your personalization preferences and allow you to better manage your data in Play'+
'Personalization provides a richer experience in the Play store, helping you discover exciting games, useful apps, relevant offers and much more, all of which is tailored to you. Learn more about personalizing your Google Play Store experience'+
'Once available, these new features - alongside existing Play personalization controls - will be easily accessible by visiting Personalization in Play from the Google Play Store menu. This new destination will be a one-stop-shop for tailoring your personalization preferences in Play, giving you a more powerful way to:'+

'•	Manage all of your personalization options on Google Play and easily view activity and access personalization controls'+
'•	Choose which apps, books or other library items are used to personalize your Google Play experience. With one click you will be able to exclude use of Play data associated with that app for personalization in Play. Some examples of data that would be excluded for that app would include when you install or uninstall it, purchases that you make in it and your app activity. Learn more about new personalization options'+
'With these enhanced controls you can ensure that you have a better Play experience that is personalized to you and continues to respect your privacy preferences.'+
'Should you have any questions please visit our Help Center or get in touch.'+
'Thank you for using Google Play!', 'spam');
classifier.addDocument('Ask-AI allows you to access the collective knowledge of all of humanity and apply it to your study questions. Mindblowing, right? Try asking for help with: Practice Questions"Explain how the Industrial Revolution transformed society", Simplifying a Topic“Explain photosynthesis as if I was 5 years old”, Kickstarting Creativity"Write a short story based on the life of a lamp post", Essay Structuring“Create the structure for an essay on...” We use OpenAI\'s ChatGPT and constantly optimise the output based on feedback from other students, ensuring you get the right blend of artificial and human intelligence. It\'s kind of like your personal tutor who doesn\'t sleep. You\'ll also be able to read all of the questions that your classmates are asking, so yall can all grow smarter together!', 'spam');
classifier.addDocument('Studocu is where 70M+ students love to: Access 20M+ of the world\'s best study documents, Create Studylists to better prepare for exams, Ask AI for help on your study problems, Get unlimited access to & downloads of the best study materials with Studocu Premium. So what are you\' waiting for?', 'spam');
classifier.addDocument('Congratulations! You won a lottery', 'spam');
classifier.addDocument('Hi, A new face or fingerprint model was added on IQOO I2127 and a purchase was recently made through Google Play using the device. As a reminder, if you have chosen biometrics as your verification method, all biometrics stored on your device can be used to verify purchases made on Google Play. You can remove any face or fingerprint models stored on your device anytime. If you use biometrics for purchase verification, use caution in storing biometrics of children or others on your device, as those could be used for purchase verification. You can change your purchase verification settings anytime in Google Play.', 'spam');
classifier.addDocument('Dear Shareholder, Greetings from GAIL (India) Limited. The Board of Directors of the Company in its meeting held on 5th November, 2024 inter-alia approved the Unaudited Financial Results (Standalone & Consolidated) of the Company for the quarter and half year ended 30th September 2024. You may click on the link below to access the results', 'not spam');
classifier.addDocument('Dear Customer, Thank you for choosing Amazon Pay! To improve your experience, complete a short survey (2 minutes): https://amazonexteu.qualtrics.com/jfe/form/SV_72Odl4QzykU4DNc?CID=PayShop44_619096 (copy & paste if unclickable). Need help? Visit our 24/7 Help department: http://www.amazon.in/help. Thanks, Amazon Pay Team', 'spam');
classifier.addDocument('Dear Vijay Rajan Manraj, Pantech E-Bytes - FREE Workshop Series from Pantech E-Learning is back with a BANG! We announce the schedule of the Free Workshop Series - PANTECH E-Bytes. Technologies chosen to Leverage & hone your skills. Trending & sought-after technologies: Topic: NVIDIA\'s Jetson in IoT | Date: 9th November 2024 | Time: 04:00 PM - 05:00 PM Reg Link - https://forms.gle/DwRABEjLaiBbVRNk7 Join the whatsapp group - https://chat.whatsapp.com/DNTdAKpvKF802SmQI5NePX Medium: YOUTUBE LIVE (PANTECH E LEARNING CHANNEL). Subscribe for workshop notifications. Attendance Links will be posted on Channel. LIVE SESSION. Free E-certificates for College/Institution & Pantech E-Learning. HAPPY LEARNING! Event Co-Ordinator | 8925533488 Pantech E Learning!', 'spam');
classifier.addDocument('Recovery phone was changed vorsv24@gmail.com The recovery phone for your account was changed. If you didn\'t change it, you should check what happened.', 'not spam');
classifier.addDocument('Hey, M! Start your Jupiter experience on a rewarding note with your Edge CSB Bank RuPay Credit Card. You can scan any QR and make UPI payments with this credit card. Earn assured cashback on every spend! Apply now and get up to ₹7,00,000 credit limit in just 2 minutes.', 'not spam');
classifier.addDocument('Hi Vorsv, let\'s get you started with online coding. We always strive to provide the best user experience. Therefore, HackerEarth provides you with a quick onboarding process to help you get started with our online coding platform. Start coding. Happy Coding! Regards, Team HackerEarth', 'not spam');
classifier.addDocument('Hello, We’ve found the best prices available for 1-week trips in February, from Chennai to New Delhi.','not spam');

// Train the classifier
classifier.train();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Endpoint to classify email
app.get('/classify', (req, res) => {
    const email = req.query.email || '';
    const emailTokens = tokenizer.tokenize(email);
    const classification = classifier.classify(emailTokens.join(' '));
    res.send(`The email is classified as: ${classification}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

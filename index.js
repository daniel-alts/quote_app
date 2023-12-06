const Quotes = require('inspirational-quotes');
const schedule = require('node-schedule');


console.log('Starting the inspirational quote generator');

// every day at midnight
schedule.scheduleJob('0 0 * * *', function(){
    
    const subscription = {
        card: '123456789',
        email: '',
        exp_date: '2020-12-31',
        retry_count: 0
    }

    // Subscription service
    // get all accounts with exp_date = today
    // for each account
    // charge the card and send an email with the quote
    // when charge is successful, update the exp_date to next month
    // when charge is not successful, update the exp_date to tomorrow, update the retry count
    // if retry count is 3, send an email to the user that the card is not working 

});

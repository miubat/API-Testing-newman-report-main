# DMoney REST API Testing Project

## Overview

This project aims to comprehensively test the DMoney REST API, ensuring the correctness and reliability of its functionalities. The testing scenarios cover various features, including user authentication, financial transactions, and user interactions within the application.

## Features Tested

1. **Admin Creates Agent and 2 Customers:**
   - Positive and negative test cases for admin actions, such as creating an agent and customers.

2. **SYSTEM Deposits to Agent:**
   - Ensures SYSTEM can successfully log in and deposit a valid amount to an agent.

3. **Agent Deposits to Customer:**
   - Validates agent login and the ability to deposit funds to a customer.

4. **Check Agent Balance:**
   - Confirms that an agent can successfully log in and check their account balance.

5. **Customer Withdraws from Agent:**
   - Tests customer login, withdrawal from an agent, and the impact on agent balance.

6. **Customer Checks Balance:**
   - Validates customer login and the ability to check their account balance.

7. **Customer Sends Money to Another Customer:**
   - Ensures successful transactions between customers.

8. **Customer Payment to Merchant:**
   - Validates customer login and the ability to make payments to a merchant.

9. **Second Customer Checks Both Balance and Statement:**
   - Tests the ability of a customer to check their balance and transaction statement.

10. **Merchant Checks Balance:**
    - Ensures merchant login and the ability to check their account balance.

## How to Run the Tests

1. Clone this repository to your local machine.
2. Set up the DMoney REST API environment.
3. Give following command
   ```npm i```
   ```npm test```

## Output
![screencapture-127-0-0-1-5500-Reports-report-html-2024-02-04-16_15_18](https://github.com/iamsafridi/dmoney-newman-report/assets/82276738/70809ab6-2517-4ce6-ad6d-e97ee6b8dc37)

## API Documentaion
https://documenter.getpostman.com/view/19337807/2s9YyvCM87

## Test Cases
https://docs.google.com/spreadsheets/d/1adgYWmQI8QCArCsLQvW3w0PZ6i6ELyaYS_BgvmUd00I/edit#gid=0

## Bug Report
https://docs.google.com/spreadsheets/d/1OnN2JrBfFECxqnWdOnZxLo-QdMd7n5LXqRLLnt5xzr0/edit#gid=0

## Contributing

Feel free to contribute to this testing project by adding more test cases, improving existing ones, or reporting any issues. Pull requests are welcome!

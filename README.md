### Exploratory Testing by Hanna Nasi

### Functionality testing
#### High priority flows

#### Charter 1: Adding, Removing & Editing Income

**Objective:** Test income flows from dashboard.

**Findings:**  Works in general but  ⚠️ Bugs found:

1. There is no confirmation modal when user clicks on delete icon for the income. Would be nice to have it and notify user what this action will do  (Medium priority)
2.  Minor issue allowing operators (+, -, /, *) typed in amount field and not clear that they were typed at all, and in general not sure do we need to have them in this input? (low priority).

**Priority:** High — essential app flow.

**Risks:** Broken income flow blocks core app functionality.




#### Charter 2: Adding, Editing & Removing Expense via '-' Button

**Objective:** Test expense flows using balance button.

**Findings:**  Works in general but , ⚠️ Bugs found:

1. There is no confirmation modal when user clicks on delete icon for the income. Would be nice to have it and notify user what this action will do  (Medium priority)
2. Minor issue with operator input (low priority) the same as in charter 1.

**Priority:** High — core functionality.

**Risks:** Same as income flow.



#### Charter 3: Dashboard shows correct percentages for expenses

**Objective:** Verify that dashboard shows correct percentages for added expenses for the selected period of time.

**Findings:** ⚠️ Question/Bug possible: Currently we show percentages per expense (so we calculate as (thisExpense/allExpensesAmount)/100), I would double check it with Product team, because another option might be to show (100*thisExpense/wholeIncomeInThisPeriod). Based on my experience I would like to have better ration between incomes & expenses on this chart

**Priority:** High — essential app flow.

**Risks:** Broken percentages flow blocks user from analysing their expenses, which is the core functionality.



#### Charter 4: Dashboard shows correct income and expense for the selected timeframe

**Objective:** Verify that dashboard shows correct income and expense selected period of time, and adjusts immediately if you added a new expense or income

**Findings:** ⚠️ Question/Improvement: Inconsistent behavior for different timeframes. If user selected the timeframe.length>=2 days and tries to add income/expense -> income/expense will be added by default (you can change this date, but still user can skip it) with current date
BUT if you try with specific date (like 10th of June) and add income/expense -> it will be added by default to the date you stay on. Is this difference expected or we want to have consistent behaviour?

**Priority:** High — essential app flow.

**Risks:** Broken numbers of expenses/incomes in the dashboard will block users from analysing their expenses/incomes, which is the core functionality.



#### Charter 5: User can transfer money from different types of accounts

**Objective:** User can transfer money from different types of accounts (Cash -> Payment card, Payment card -> Cash and others added) and balance for both of them correctly adjusted. F.e I transfer 50$ from Cash to Payment card, THEN balance for Cash will be currentBalance-50$ AND balance for Card will be currentBalance+50$

**Findings:**  ✅ Works smoothly. No issues found.

**Priority:** High — essential app's flow.

**Risks:**  Transfer flow is one of core functionality of the app, 



#### Charter 6: User can view detailed transactions list in balance page

**Objective:** User can view detailed transactions list (income, expenses, transfers) for the selected timerange after clicking on one of the burger button, close to balance. Transactions will be grouped by categories (f.e income -> salary), and each group can be extended, and you will see all transactions with details

**Findings:**  ✅ Works smoothly. No issues found.

**Priority:** High — essential app's flow.

**Risks:**  Transfer flow is one of core functionality of the app.



#### Charter 7: User can subscribe to paid version and new features will be available

**Objective:** User should be able to get subscription, and then he should have access fr paid features, like a new category creation, dark mode, passcode and others

**Findings:**  Didn't check it fully just to avoid subscription

**Priority:** High

**Risks:** One of the main feature for our app, because it will bring money to us


#### Charter 8: Balance calculation works properly

**Objective:** User sees correctly calculated balance, where balance = sum of income - sum of expenses for the selected period time. If balance is negative we will show '-' and adjust the color to red, IF balance is positive then the balance's element color will be green

**Findings:**  ✅ Works smoothly. No issues found.

**Priority:** High — essential app's flow.

**Risks:**  Broken balance is definitely core functionality of the app.



### Medium priority flows

#### Charter 9: Onboarding Screens Flow

**Objective:** Verify user can skip onboarding screens and land on dashboard.

**Findings:** ✅ Works correctly. No bugs found.

**Priority:** Medium — core entry flow.

**Risks:** Broken navigation could block users from accessing the app.



#### Charter 10: New account can be created

**Objective:** In right menu user can create a new account successfully. The new account will be visible also in the left menu and user can switch and view balance and transactions from new account, also new account can be used for transfers

**Findings:**  ✅ Works smoothly. No issues found.

**Priority:** Medium — less frequent usage for this feature.

**Risks:**  Broken balance is definitely core functionality of the app.


#### Charter 11: Adding Expense via Dashboard Category Shortcut

**Objective:** Test adding expense directly via category icons.

**Findings:** ✅ Works smoothly. No issues found.

**Priority:** Medium — frequently used but alternative entry flow.

**Risks:** Can affect user trust in fast expense entry.


#### Charter 12: Dashboard Time Range Filter

**Objective:** Verify dashboard data filters and updates correctly.

**Findings:** ⚠️ Bug found: flickering background when switching dates with negative balance. (low priority)

**Priority:** Medium — data correct overall but user trust impact.

**Risks:** Potential confusion or distrust in app data integrity.


#### Charter 13: User's transactions can be exported to the file

**Objective:** User can export their historical transactions & balances to CSV file or DB file

**Findings:**  ✅ Works smoothly. ⚠️ Bug found: There is no visual indicator in the app that download was done. Would be nice to show a toast message or snackbar about that (medium priority)

**Priority:** Medium, due to less frequent usage.



#### Charter 14: Sync with Dropbox, Google Drive works

**Objective:** User can sync their data with Dropbox, Google Drive successfully 

**Findings:**  Didn't check it fully just to avoid subscription

**Priority:** Medium, due to less frequent usage.



#### Charter 15: User Data Deletion

**Objective:** User's data will be deleted completedly after he will confirm this action in modal

**Findings:**  ✅ Works smoothly.

**Priority:** Medium — higher due to legal compliance.

**Risks:** Incomplete deletion may breach data regulations.



#### Charter 16: Transaction Search

**Objective:** In header user can search by category, account or note in transactions. Found transaction is clickable and can be opened and edited

**Findings:**  ✅ Works smoothly.

**Priority:** Medium — enhances usability.




### Mobile related tests
#### Charter 17: Offline Functionality

**Objective:** User still can use basics without internet connection, for example add expenses, incomes, transfers, and it will be saved then accordingly

**Findings:**  ✅ Works smoothly.

**Priority:** Medium — enhances reliability.


#### Charter 18: Landscape Mode

**Objective:** App can't be used in landscape mode, so no issues with it

**Findings:**  ✅ Works smoothly.

**Priority:** Low





### Security tests
There is no any login functionality or 2FA, but for subscribed users passcode protection will be available (based on fright menu)
- Passcode setup and enforcement
- Passcode bypass attempts (brute force)
- App's data encryption and storage security for sensitive user data
- 

### Charter Prioritization
**High:** Adding/Editing/Removing Income & Expense (Charters 2 & 3) — critical flows, user would be blocked if broken.

**Medium:** Onboarding, Dashboard Filter, Adding Expense via Shortcut (Charters 1, 4, 5) — important but user not fully blocked.

###  Risks to Mitigate
**Functional Risks:** Broken income/expense flows will block the core usage of the app. These should be covered by Unit, API, and E2E tests with highest priority.

**Data Integrity Risks:** Incorrect dashboard reporting or balance calculation can lead to user confusion or loss of trust. Additional validation is needed, particularly around date filtering and real-time balance updates.

**UI/UX Risks:** UI should be intuitive, and lack of confirmations for deletions may result in user frustration. Visual glitches (e.g., flickering) can affect perception of quality.

**Security Risks:** Even though the app lacks authentication, future implementation (e.g., passcode) should be hardened against bypass or brute force.

**Offline Risks:** Since basic functionality works offline, syncing logic and data consistency must be ensured when reconnected.

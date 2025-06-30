### Exploratory Testing by Hanna Nasi

### Functionality testing
#### Charter 1: Onboarding Screens Flow

**Objective:** Verify user can skip onboarding screens and land on dashboard.

**Findings:** ✅ Works correctly. No bugs found.

**Priority:** Medium — core entry flow.

**Risks:** Broken navigation could block users from accessing the app.

#### Charter 2: Adding, Removing & Editing Income

**Objective:** Test income flows from dashboard.

**Findings:**  Works in general but  ⚠️ Bugs found:1. There is no confirmation modal when user clicks on delete icon for the income. Would be nice to have it and notify user what this action will do 2.  Minor issue allowing operators (+, -, /, *) typed in amount field and not clear that they were typed at all (low priority).

**Priority:** High — essential app flow.

**Risks:** Broken income flow blocks core app functionality.

#### Charter 3: Adding, Editing & Removing Expense via '-' Button

**Objective:** Test expense flows using balance button.

**Findings:**  Works in general but , ⚠️ Bugs found:1. There is no confirmation modal when user clicks on delete icon for the income. Would be nice to have it and notify user what this action will do 2.  Minor issue with operator input (low priority) the same as in charter 2.

**Priority:** High — core functionality.

**Risks:** Same as income flow.

#### Charter 4: Adding Expense via Dashboard Category Shortcut

**Objective:** Test adding expense directly via category icons.

**Findings:** ✅ Works smoothly. No issues found.

**Priority:** Medium — frequently used but alternative entry flow.

**Risks:** Can affect user trust in fast expense entry.

#### Charter 5: Dashboard Time Range Filter

**Objective:** Verify dashboard data filters and updates correctly.

**Findings:** ⚠️ Bugs found: incorrect balance when selecting date before app installation of the app; flickering background when switching dates with negative balance.

**Priority:** Medium — data correct overall but user trust impact.

**Risks:** Potential confusion or distrust in app data integrity.

#### Charter 6: Dashboard shows correct percentages for expenses

**Objective:** Verify that dashboard shows correct percentages for added expenses for the selected period of time.

**Findings:** ⚠️ Question: Currently we show percentages per expense (so we calculate as (thisExpense/allExpensesAmount)/100), I would double check it with Product team, because another option might be to show (100*thisExpense/wholeIncomeInThisPeriod)

**Priority:** High — essential app flow.

**Risks:** Broken percentages flow blocks user from analysing their expenses, which is the core functionality.

#### Charter 7: Dashboard shows correct income and expense for the selected timeframe

**Objective:** Verify that dashboard shows correct income and expense selected period of time, and adjusts immediately if you added a new expense or income

**Findings:** ⚠️ Bug/Improvement: Inconsistent behavior for different timeframes. If user selected the timeframe.length>=2 days and tries to add income/expense -> income/expense will be added by default (you can change this date, but still user can skip it) with current date
BUT if you try with specific date (like 10th of June) and add income/expense -> it will be added by default to the date you stay on.

**Priority:** High — essential app flow.

**Risks:** Broken numbers of expenses/incomes in the dashboard will block users from analysing their expenses/incomes, which is the core functionality.

#### Charter 8: User can transfer money from different types of accounts

**Objective:** User can transfer money from different types of accounts (Cash -> Payment card, Payment card -> Cash and others added) and balance for both of them correctly adjusted. F.e I transfer 50$ from Cash to Payment card, THEN balance for Cash will be currentBalance-50$ AND balance for Card will be currentBalance+50$

**Findings:**  ✅ Works smoothly. No issues found.

**Priority:** High — essential app's flow.

**Risks:**  Transfer flow is one of core functionality of the app, 

#### Charter 9: User can view detailed transactions list in balance page

**Objective:** User can view detailed transactions list (income, expenses, transfers) for the selected timerange after clicking on one of the burger button, close to balance. Transactions will be grouped by categories (f.e income -> salary), and each group can be extended, and you will see all transactions with details

**Findings:**  ✅ Works smoothly. No issues found.

**Priority:** High — essential app's flow.

**Risks:**  Transfer flow is one of core functionality of the app.


#### Charter 10: Balance calculation works properly

**Objective:** User sees correctly calculated balance, where balance = sum of income - sum of expenses for the selected period time. If balance is negative we will show '-' and adjust the color to red, IF balance is positive then the balance's element color will be green

**Findings:**  ✅ Works smoothly. No issues found.

**Priority:** High — essential app's flow.

**Risks:**  Broken balance is definitely core functionality of the app.

#### Charter 11: New account can be created

**Objective:** In right menu user can create a new account successfully. The new account will be visible also in the left menu and user can switch and view balance and transactions from new account, also new account can be used for transfers

**Findings:**  ✅ Works smoothly. No issues found.

**Priority:** Medium/High — essential app's flow.

**Risks:**  Broken balance is definitely core functionality of the app.


#### Charter 12: User's transactions can be exported to the file

**Objective:** User can export their historical transactions & balances to CSV file or DB file

**Findings:**  ✅ Works smoothly. ⚠️ Bug found: There is no visual indicator in the app that download was done. Would be nice to show a toast message or snackbar about that

**Priority:** Medium/High — essential app's flow.

**Risks:**  Broken balance is definitely core functionality of the app.


#### Charter 13: User's data can be deleted completely

**Objective:** User's data will be deleted completedly after he will confirm this action in modal

**Findings:**  ✅ Works smoothly.

**Priority:** Medium but might be higher due to some legal laws (that user should be able to delete it)

**Risks:**  

#### Charter 14: User can search by category, account or note in transactions

**Objective:** In header user can search by category, account or note in transactions. Found transaction is clickable and can be opened and edited

**Findings:**  ✅ Works smoothly.

**Priority:** Medium

**Risks:**

### Mobile related tests
#### Charter 15: User still can use basics without internet connection (adding expenses, incomes, transfers)

**Objective:** User still can use basics without internet connection, for example add expenses, incomes, transfers, and it will be saved then accordingly

**Findings:**  ✅ Works smoothly.

**Priority:** Medium 

**Risks:**

#### Charter 16: There is no any issues when user tries to use application in landscape mode

**Objective:** App can't be used in landscape mode, so no issues with it

**Findings:**  ✅ Works smoothly.

**Priority:** Low

**Risks:**


### Security tests
There is no any login functionality of 2FA, but for subscribed users passcode protection will be available
- Passcode setup and enforcement
- Passcode bypass attempts (brute force)
- App's data encryption and storage security for sensitive user data

#### Charter Prioritization
**High:** Adding/Editing/Removing Income & Expense (Charters 2 & 3) — critical flows, user would be blocked if broken.
**Medium:** Onboarding, Dashboard Filter, Adding Expense via Shortcut (Charters 1, 4, 5) — important but user not fully blocked.

≈
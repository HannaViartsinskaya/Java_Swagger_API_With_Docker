### Exploratory Testing by Hanna Nasi

### Functionality testing
#### High priority flows

#### Charter 1: Adding, Removing & Editing Income

**Objective:** Test income flows from dashboard.

**Findings:**  Works in general but  ⚠️ Bugs found:

1. There is no confirmation modal when user clicks on delete icon for the income. Would be nice to have it and notify user what this action will do  (Medium priority)
2.  Minor issue allowing operators (+, -, /, *) typed in amount field and not clear that they were typed at all, and in general not sure do we need to have them in this input? (low priority).

**Priority:** High — essential app flow. Broken income flow blocks core app functionality.




#### Charter 2: Adding, Editing & Removing Expense via '-' Button

**Objective:** Test expense flows using balance button.

**Findings:**  Works in general but , ⚠️ Bugs found:

1. There is no confirmation modal when user clicks on delete icon for the income. Would be nice to have it and notify user what this action will do  (Medium priority)
2. Minor issue with operator input (low priority) the same as in charter 1.

**Priority:** High — core and essential functionality of the app.



#### Charter 3: Dashboard shows correct percentages for expenses

**Objective:** Verify that dashboard shows correct percentages for added expenses for the selected period of time.

**Findings:** ⚠️ Question/Bug possible: Currently we show percentages per expense (so we calculate as (thisExpense/allExpensesAmount)/100), I would double check it with Product team, because another option might be to show (100*thisExpense/wholeIncomeInThisPeriod). Based on my experience I would like to have better ration between incomes & expenses on this chart

**Priority:** High — essential app flow. Broken percentages flow blocks user from analysing their expenses, which is the core functionality.



#### Charter 4: Dashboard shows correct income and expense for the selected timeframe

**Objective:** Verify that dashboard shows correct income and expense selected period of time, and adjusts immediately if you added a new expense or income

**Findings:** ⚠️ Question/Improvement: Inconsistent behavior for different timeframes. If user selected the timeframe.length>=2 days and tries to add income/expense -> income/expense will be added by default (you can change this date, but still user can skip it) with current date
BUT if you try with specific date (like 10th of June) and add income/expense -> it will be added by default to the date you stay on. Is this difference expected or we want to have consistent behaviour?

**Priority:** High — essential app flow. Broken amount of expenses/incomes in the dashboard during N time range will block users from analysing their expenses/incomes, which is the core functionality.



#### Charter 5: User can transfer money from different types of accounts

**Objective:** User can transfer money from different types of accounts (Cash -> Payment card, Payment card -> Cash and others added) and balance for both of them correctly adjusted. F.e I transfer 50$ from Cash to Payment card, THEN balance for Cash will be currentBalance-50$ AND balance for Card will be currentBalance+50$

**Findings:**  ✅ Works smoothly. No issues found.

**Priority:** High — essential app's flow. Transfer flow is one of core functionality of the app, maybe not so common used as adding expenses or incomes, but still will be important



#### Charter 6: User can view detailed transactions list in balance page

**Objective:** User can view detailed transactions list (income, expenses, transfers) for the selected timerange after clicking on one of the burger button, close to balance. Transactions will be grouped by categories (f.e income -> salary), and each group can be extended, and you will see all transactions with details

**Findings:**  ✅ Works smoothly. No issues found.

**Priority:** High — essential app's flow. View list of transactions is one of the core functionality of the app, regardless of that user can analyze them on pie chart, still on the transactions list user can select expenses or incomes which he wanna edit.



#### Charter 7: User can subscribe to paid version and new features will be available

**Objective:** User should be able to get subscription, and then he should have access fr paid features, like a new category creation, dark mode, passcode and others

**Findings:**  Didn't check it fully just to avoid subscription

**Priority:** High. One of the main feature for our app, because it will bring money to us


#### Charter 8: Balance calculation works properly

**Objective:** User sees correctly calculated balance, where balance = sum of income - sum of expenses for the selected period time. If balance is negative we will show '-' and adjust the color to red, IF balance is positive then the balance's element color will be green

**Findings:**  ✅ Works smoothly. No issues found.

**Priority:** High — essential app's flow. Broken balance is definitely core functionality of the app.



### Medium priority flows

#### Charter 9: Onboarding Screens Flow

**Objective:** Verify user can skip onboarding screens and land on dashboard.

**Findings:** ✅ Works correctly. No bugs found.

**Priority:** Medium — core entry flow. Broken navigation could block users from accessing the app.



#### Charter 10: New account can be created

**Objective:** In right menu user can create a new account successfully. The new account will be visible also in the left menu and user can switch and view balance and transactions from new account, also new account can be used for transfers

**Findings:**  ✅ Works smoothly. No issues found.

**Priority:** Medium — less frequent usage for this feature. User creates new accounts maybe only til 10 times per lifecycle of the app, but adds expenses/incomes much often


#### Charter 11: Adding Expense via Dashboard Category Shortcut

**Objective:** Test adding expense directly via category icons.

**Findings:** ✅ Works smoothly. No issues found.

**Priority:** Medium — we have alternative flow for adding expenses. Can affect user trust in fast expense entry.


#### Charter 12: Dashboard Time Range Filter

**Objective:** Verify dashboard data filters and updates correctly.

**Findings:** ⚠️ Bug found: flickering background in balance button when switching dates with negative balance. (low priority)

**Priority:** Medium — data correct overall but user trust impact. Potential confusion or distrust in app data integrity.


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


#### Charter 17: Right menu: Balance modes – Budget, Carry Over, and Future Recurring Modes

**Objective**: Ensure the user can activate/deactivate Budget Mode, Carry Over, and Future Recurring Records modes  on the right side menu, and that the dashboard updates accordingly.

**Findings**: ✅ Overall works smoothly.
⚠️ Bug/UX Issue: After activating Budget Mode, it becomes unclear what the pie chart numbers represent. The chart appears to show income (same location, just different color), which is confusing. Suggest adding a visible label or indicator near the chart or header to clearly show that Budget Mode is active (Low).

**Priority**: Low/Medium — improves usability and clarity.


### Mobile related tests
#### Charter 18: Offline Functionality

**Objective:** User still can use basics without internet connection, for example add expenses, incomes, transfers, and it will be saved then accordingly

**Findings:**  ✅ Works smoothly.

**Priority:** Medium — enhances reliability.


#### Charter 19: Landscape Mode

**Objective:** App can't be used in landscape mode, so no issues with it

**Findings:**  ✅ Works smoothly.

**Priority:** Low


#### Charter 20: App Behavior on Backgrounding & Resuming

**Objective:** Verify the app maintains its state when sent to background and reopened, we keep data which user provided and user can continue working on it

**Findings:**  ✅ Works good

**Priority:** Medium

**Risks:** Losing unsaved data or incorrect UI on resume may frustrate users.


### Security tests
There is no any login functionality or 2FA, but for subscribed users passcode protection will be available (based on fright menu)
- Passcode setup and enforcement
- Passcode bypass attempts (brute force)
- App's data encryption and storage security for sensitive user data



###  Risks to Mitigate
**Functional Risks:** Broken income/expense flows will block the core usage of the app. These should be covered by Unit, API, and E2E tests with highest priority.

**Data Integrity Risks:** Incorrect dashboard reporting or balance calculation can lead to user confusion or loss of trust. Additional validation is needed, particularly around date filtering and real-time balance updates.

**UI/UX Risks:** UI should be intuitive, and lack of confirmations for deletions may result in user frustration. Visual glitches (e.g., flickering) can affect perception of quality.

**Security Risks:** Even though the app lacks authentication, future implementation (e.g., passcode) should be hardened against bypass or brute force.

**Offline Risks:** Since basic functionality works offline, syncing logic and data consistency must be ensured when reconnected.




### Summary of found issues

1. There is no confirmation modal when user clicks on delete icon for the income or expense. Would be nice to have it and notify user what this action will do  (Medium priority)

2. Minor issue allowing operators (+, -, /, *) typed in amount field and not clear that they were typed at all, and in general not sure do we need to have them in this input? (low priority).
<img width="394" alt="Screenshot 2025-07-01 at 07 20 09" src="https://github.com/user-attachments/assets/762dcf6d-7db8-49a6-8565-aec4147fc5d7" />

3. Flickering background in balance button when switching dates with negative balance. During switching for some miliseconds you will see green backround for balance button even if the balance is negative (low priority)

4. There is no visual indicator in the app that download was done. Would be nice to show a toast message or snackbar about that (medium priority)

5. After activating Budget Mode, it becomes unclear what the pie chart numbers represent. The chart appears to show income (same location, just different color), which is confusing. Suggest adding a visible label or indicator near the chart or header to clearly show that Budget Mode is active (Low).

The videos can be found via link https://drive.google.com/drive/folders/1-2lFkaDmAxTL4AVN4XSoEyOZzOqn2npz?usp=sharing


**Questions to be clarified before the bug ticket creation (and possible issues):**

1. On th pie chart currently we show percentages per expense (so we calculate as (thisExpense/allExpensesAmount)/100), I would double check it with Product team, because another option might be to show (100*thisExpense/wholeIncomeInThisPeriod). Based on my experience I would like to have better ration between expense & incomes on this chart
   
2. Inconsistent behavior for different timeframes. If user selected the timeframe.length>=2 days and tries to add income/expense -> income/expense will be added by default (you can change this date, but still user can skip it) with current date. But if you try with specific date (like 10th of June) and add income/expense -> it will be added by default to the date you stay on. Is this difference expected or we want to have consistent behaviour? Video for this point also in [link](https://drive.google.com/drive/folders/1-2lFkaDmAxTL4AVN4XSoEyOZzOqn2npz?usp=sharing)


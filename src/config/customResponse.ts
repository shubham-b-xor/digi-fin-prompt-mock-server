export const customResponse = {
    // 'default': { message: "Unknown toggle value.", status: "unknown" },
    'unstructured-failed': `Thank you for submitting your document. After reviewing the contents, we have identified several issues that prevent the document from meeting the required compliance criteria.
Summary of Issues Identified:
1. Missing Mandatory Disclosures:
    The document does not include legally required disclosures under [Regulation Name], such as [e.g., data usage statements, risk warnings, or terms and conditions].
2. Inadequate Data Privacy Language:
    The language used around personal data collection and processing does not align with [e.g., GDPR/CCPA] standards.
3. Non-compliant Formatting:
    Required legal disclaimers are either missing or not prominently displayed as per [Regulation/Policy Name] guidelines.
4. Incorrect or Outdated Clauses:
    Several clauses reference outdated laws or policies (e.g., referring to superseded legislation).`,
    'csv-failed': `Thank you for uploading your financial CSV file. Upon review, the file does not meet the required schema for processing due to missing critical columns.
Summary of Issues Identified:
Missing Required Columns:
The following columns are mandatory but were not found in the uploaded file:
- Transaction_ID
- Date
- Account_Number
- Amount
- Currency
- Transaction_Type
Additional Observations:
- Column headers appear to be misaligned or misspelled (e.g., "TransactonDate" instead of "Date").
- No header row detected — please ensure the first row of your CSV contains column names.`,
    'unstructured-success': `Document Review Successful – Insights Generated

Thank you for submitting your financial document. The file meets all structural and compliance requirements and has been successfully processed.

Document Summary:

Document Type: Quarterly Financial Report

Entity: XYZ Holdings Ltd.

Period Covered: Q2 2025 (April 1 – June 30)

Currency: USD

Key Insights Extracted:

📈 Financial Performance Overview

Total Revenue: $18.4M
↑ Up 12.5% compared to Q1 2025

Net Profit: $2.7M
↑ Profit margin improved by 1.8% quarter-over-quarter

Operating Expenses: $4.1M
↓ Down 6.2% from previous quarter
💰 Cash Flow Analysis
Operating Cash Flow: $3.2M (positive trend)
Investing Cash Flow: -$1.5M (due to asset purchases)
Financing Cash Flow: -$500K (debt repayment noted)
🧾 Balance Sheet Highlights
Total Assets: $46.2M
Total Liabilities: $21.9M
Equity: $24.3M
Debt-to-Equity Ratio: 0.90 (stable)
⚠️ Observations & Risks
Revenue growth is healthy, but:
Inventory turnover decreased slightly, potentially indicating slower sales movement.
Receivables aging report shows a 14% increase in >60-day overdue invoices.`,
}
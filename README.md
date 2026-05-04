<div align="center">

  <h1>Customer Shopping Behaviour Analysis</h1>

  <p><strong>An end-to-end retail analytics project — 15,000+ transactions analysed in Python and SQL, surfaced through an interactive Power BI dashboard, with concrete recommendations on subscription growth, discount strategy, and seasonal planning.</strong></p>

  <p>
    <img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white" alt="Python"/>
    <img src="https://img.shields.io/badge/SQL-4479A1?logo=postgresql&logoColor=white" alt="SQL"/>
    <img src="https://img.shields.io/badge/Power%20BI-F2C811?logo=powerbi&logoColor=black" alt="Power BI"/>
    <img src="https://img.shields.io/badge/Transactions-15K%2B-success" alt="Transactions"/>
  </p>

</div>

---

## Why This Project

A retail business is sitting on transaction data and asking the question every retail business asks: *what actually drives our customers to spend?* Instinct says discounts. Or seasons. Or subscriptions. Or reviews. The honest answer is some mix of all of them — and that mix is what this project quantifies.

The pipeline is deliberately tool-appropriate: Python for cleaning and exploratory work, SQL for the analytical questions a business analyst would actually be asked, Power BI for the layer stakeholders interact with. Each tool earns its place; nothing is bolted on.

> **Guiding question:** *How can the company leverage consumer shopping data to identify trends, improve customer engagement, and optimise marketing and product strategies?*

---

## Dashboard

![Dashboard](./screenshots/dashboard.png)

The Power BI dashboard surfaces revenue and sales breakdowns, category and seasonal performance, customer profile trends, subscription impact, and the relationships between discounts, shipping type, and review ratings — all filterable through slicers.

---

## Headline Findings

| # | Finding | What it implies |
|---|---------|-----------------|
| 1 | **Subscribers spend more and buy more often** | Subscription is the highest-leverage retention play — incentivising adoption pays back twice |
| 2 | **Winter is the peak spending season** | Inventory and marketing should lean into Q4/seasonal demand, not be evenly distributed |
| 3 | **Clothing dominates revenue** | But other categories show heavier discount dependency — they're propped up by promotions, not preference |
| 4 | **Express shipping correlates with higher review ratings** | Shipping speed is a customer satisfaction lever, not just a cost line |
| 5 | **Location revenue contribution is uneven** | Targeted regional marketing has more upside than blanket campaigns |

**Snapshot:** 15,000 customers · $56.97 average purchase · 3.74 average review rating · Clothing leads by revenue · Winter is the most active season.

---

## Methodology

### 1. Python — EDA & Transformation

- Loaded and inspected the raw transaction file (`raw_data.csv`)
- Imputed missing review ratings using category-wise medians (avoids the bias of a global mean)
- Engineered age groups and purchase-frequency buckets for segmentation
- Standardised categorical fields (case, whitespace, inconsistent labels)
- Exported a clean dataset feeding both the SQL layer and Power BI

### 2. SQL — Business Analysis

Wrote queries to answer the questions a stakeholder would actually ask:

- Revenue by gender, age group, season, and location
- Top products by sales and rating
- Subscriber vs non-subscriber spending behaviour
- Discount dependency by category
- Loyal vs returning vs new customer segments

Heavy use of CTEs, window functions, and CASE-based segmentation logic.

### 3. Power BI — Dashboard

Built an interactive dashboard for stakeholders to explore the data without writing a query:

- Revenue and sales breakdowns
- Category and seasonal performance
- Customer profile trends
- Subscription impact
- Discount, shipping, and review-rating distributions

---

## Recommendations

The findings above translate into five concrete actions:

1. **Boost subscription adoption** with onboarding incentives and personalised benefits — subscribers are already the most valuable cohort
2. **Refine discount strategy** in categories that lean heavily on promotions for revenue; protect margin where loyalty is genuine
3. **Plan inventory and marketing seasonally**, with Q4 / Winter as the priority window
4. **Build targeted offers for high-value cohorts** (loyal and frequent buyers) instead of treating the base as one segment
5. **Improve shipping and product experience** in low-rated categories and regions — the satisfaction signal is already in the data

---

## Skills Demonstrated

| Tool | Skills |
|------|--------|
| **SQL** | CTEs · Window functions · CASE statements · Ranking · Aggregations · Segmentation logic |
| **Python** | pandas · NumPy · Matplotlib / Seaborn · Feature engineering · Data cleaning |
| **Power BI** | DAX · Data modelling · Interactive visuals · KPI design · Slicers & filters |

---

## Repository Structure

```
customer-behavior-analysis/
├── raw_data.csv                          # Source transaction data
├── python_eda.ipynb                      # Cleaning + exploratory analysis
├── sql_analysis.sql                      # Business-question queries
├── customer_behaviour_dashboard.pbix     # Power BI dashboard
├── Customer_Behaviour_Analysis.pdf       # Static report export
├── screenshots/
│   └── dashboard.png
├── requirements.txt
└── README.md
```

---

## Next Steps

If extended, the natural progressions are:

- **Predictive layer** — CLV, churn probability, product recommendations
- **A/B testing framework** — for validating discount and subscription-messaging strategies
- **Cohort analysis** — month-by-month retention curves for deeper loyalty insight
- **Time-series forecasting** — extend the dashboard to project Q-on-Q demand

---

## Acknowledgment

This project was initially inspired by a tutorial from [Amlan Mohanty](https://www.youtube.com/@amlanmohanty1) on YouTube. I extended the SQL and Python logic, redesigned the Power BI dashboard, and added the recommendation framing to make the analysis stakeholder-ready.

Original tutorial: [youtube.com/watch?v=5PrZvPeUw60](https://www.youtube.com/watch?v=5PrZvPeUw60)

---

## Author

[LinkedIn](#) · [Portfolio](#) · [Email](#)

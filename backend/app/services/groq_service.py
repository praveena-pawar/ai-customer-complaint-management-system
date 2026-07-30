from groq import Groq
from app.config.settings import GROQ_API_KEY

client = Groq(api_key=GROQ_API_KEY)


def analyze_complaint(text: str):

    response = client.chat.completions.create(
        model="openai/gpt-oss-120b",
        messages=[
            {
                "role": "system",
                "content": """
                You are an AI Complaint Copilot for a pharmaceutical company.

                Your job is to read a customer complaint and extract structured information.

                Extract the following fields if they are explicitly mentioned:

                - complaint_source
                - customer_name
                - product_name
                - product_strength
                - batch_number
                - manufacturing_date
                - expiry_date
                - affected_quantity
                - complaint_category
                - complaint_description
                - severity
                - suggested_next_action
                - risk_assessment
                - summary

                Rules:
                1. Return ONLY valid JSON.
                2. Do NOT return markdown.
                3. Do NOT explain anything.
                4. Do NOT invent information.
                5. If a field is not mentioned, return an empty string "".
                6. Extract values exactly as written whenever possible.
                7. Severity must be one of: Low, Medium, High.

                Field-specific instructions:

                - complaint_source:
                Identify the source type only.
                Examples:
                - Customer
                - Pharmacy
                - Hospital
                - Distributor
                - Clinic
                - Retailer

                - customer_name:
                Extract the actual organization or person's name.
                Example:
                "Apollo Pharmacy"

                - product_name:
                Extract only the medicine or product name.
                Example:
                "Amoxicillin Capsules"

                - product_strength:
                Extract the dosage or strength.
                Example:
                "500 mg"

                - batch_number:
                Extract the batch or lot number exactly as written.

                - manufacturing_date:
                Extract the manufacturing date exactly as written.

                - expiry_date:
                Extract the expiry date exactly as written.

                - affected_quantity:
                Extract the affected quantity exactly as written.

                - complaint_category:
                Choose ONLY one of these:
                - Product Quality
                - Product Defect
                - Packaging Issue
                - Delivery Issue
                - Customer Service
                - Billing Issue
                - Adverse Event
                - Other

                - complaint_description:
                Give a short one-sentence description of the complaint.

                - severity:
                Choose ONLY:
                - Low
                - Medium
                - High

                - suggested_next_action:
                Recommend the next business action.

                - risk_assessment:
                Explain the possible business or patient risk.

                - summary:
                Write a concise summary in one sentence.

                Return EXACTLY this JSON:

                {
                "complaint_source": "",
                "customer_name": "",
                "product_name": "",
                "product_strength": "",
                "batch_number": "",
                "manufacturing_date": "",
                "expiry_date": "",
                "affected_quantity": "",
                "complaint_category": "",
                "complaint_description": "",
                "severity": "",
                "suggested_next_action": "",
                "risk_assessment": "",
                "summary": ""
                }
                """
            },
            {
                "role": "user",
                "content": text
            }
        ],
        temperature=0,
    )

    return response.choices[0].message.content
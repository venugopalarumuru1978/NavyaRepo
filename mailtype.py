import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score, classification_report

# Step 1: Load Dataset
data = pd.read_csv("emails.csv")

print("Dataset:")
print(data.head())

# Step 2: Separate Input and Output
X = data["Message"]
y = data["Category"]

# Step 3: Split Dataset
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42, stratify=y
)

# Step 4: Convert Text into Numerical Data
vectorizer = CountVectorizer()

X_train_vector = vectorizer.fit_transform(X_train)
X_test_vector = vectorizer.transform(X_test)

# Step 5: Create Machine Learning Model
model = MultinomialNB()

# Step 6: Train the Model
model.fit(X_train_vector, y_train)

# Step 7: Test the Model
y_pred = model.predict(X_test_vector)

# Step 8: Check Model Accuracy
accuracy = accuracy_score(y_test, y_pred)

print("\nModel Accuracy:", accuracy * 100, "%")

print("\nClassification Report:")
print(classification_report(y_test, y_pred, zero_division=0))

# Step 9: Predict New Emails
emails = [
    "Congratulations! You won a free gift",
    "Hi, please attend the meeting tomorrow",
    "Claim your cash prize now",
    "Can we meet for lunch today?"
]

email_vector = vectorizer.transform(emails)

predictions = model.predict(email_vector)

# Step 10: Display Results
print("\nEmail Spam Detection Results")

for email, prediction in zip(emails, predictions):
    print("\nEmail:", email)
    print("Prediction:", prediction)

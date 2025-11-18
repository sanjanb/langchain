# mobile or web app
import requests
import streamlit as st

def get_openai_response(input_text):
    response = requests.post("http://localhost:8000/brief/invoke",
    json={"input": {"topic": input_text}})

    return response.json()['output']['context']

def get_ollama_response(input_text):
    response = requests.post("http://localhost:8000/concise/invoke",
    json={"input": {"topic": input_text}})

    return response.json()['output']

# Streamlit app
st.title("Chatbot API Client with LangChain and FastAPI")
input_text1 = st.text_input("Enter a topic to get a brief about it: ")
input_text2 = st.text_input("Enter a query to get a concise response: ")

if input_text1:
    st.write("OpenAI Response:")
    st.write(get_openai_response(input_text1))

if input_text2:
    st.write("Ollama Response:")
    st.write(get_ollama_response(input_text2))